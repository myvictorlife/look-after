import 'rxjs/add/operator/catch';
import {catchError} from 'rxjs/operators/catchError'; 

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { _throw } from 'rxjs/observable/throw';

import { SharedService } from './shared.service';

@Injectable()
export class BaseService {
  constructor(@Inject(HttpClient) public http: HttpClient) {
    this.http = http;
  }

  // Http Post Method with parameter, authorization header details
  basePost<T>(url: string, parameter: T): any {
    
    return this.http
      .post(url, parameter)
      .catch(this.globalhandleError);
  }

  // Http Post Method with parameter,header details
  basePostwithFormHeader<T>(url: string, parameter: T): any {

    return this.http
      .post(url, parameter)
      .catch(this.globalhandleError);
  }

  // Http Post Method with two parameter
  basePostWithParameters<T>(url: string, parameter: T, parameter1: T): any {
    return this.http
      .post(url, parameter, parameter1)
      .catch(this.globalhandleError);
  }

  // Http Delete  Method with  parameter
  baseDelete<T>(url: string, parameter: T): any {
   
    return this.http.delete(url).catch(this.globalhandleError);
  }

  baseGet<T>(url: string, parameter: T) {

    return this.http.get(url).catch(this.globalhandleError);
  }

  // Http Put Method with  parameter
  basePutWithParameter<T>(url: string, parameter: T): any {
    return this.http.put(url, null, (parameter != null ? this.getParameters<T>(parameter) : null)).pipe(catchError(this.globalhandleError));
 }

  // Http Put Method with parameter, authorization header details
  basePutWithAuthorizationHeader<T>(url: string, parameter: T): any {
 
    return this.http
      .put(url, parameter)
      .catch(this.globalhandleError);
  }

    // Http Get Method with RequestoptionsArgs as parameter
    // public get(url: string, params): Observable<any> {
    //   let options = new HttpParams({
    //     fromString: params
    //   });
    //   //options.append = params;
    //   return this.http.get(url);
    // }
    // Get the parameters details
    getParameters<T>(parameter: T) {
        let params = new URLSearchParams();
        Object.getOwnPropertyNames(parameter).forEach(
            function (val, idx, array) {
                params.set(val, parameter[val])
            }
        );
        let options = new Object({
            fromString: params,
            headers: SharedService.getAuthorizationHeader()
        });

        return options;
    }

  globalhandleError(err) {
    
    let errMessage: string;
    let message: string;
    
    if (err instanceof HttpResponse) {
      try {
        let body = err.body.json() || '';
        let error = body.message;
        message =
          Object.keys(body['modelState']) != undefined
            ? body.modelState[Object.keys(body['modelState'])[0]]
            : 'error';
        errMessage = error;
      } catch (errorx) {
        let body = err['_body'] || '';
        let error = body;
        // Getting the error message alone from the error response
        let msg = error.split('#');
        if (msg.length > 1) {
          message = msg[2]; 
        } else {
          message = body;
        }

        errMessage = error;
      }
    } else {
      errMessage = err.error && err.error.error ? err.error.error : err.toString();
      message = errMessage;
    }
    debugger
    return _throw({
      error: err.toString(),
      message: message
    });
  }

  // Handdle the error in all the Http calls
  handleError(err) {
    let errMessage: string;

    if (err instanceof HttpResponse) {
      let body = err.body.json() || '';
      let error = body.error || JSON.stringify(body);

      errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return _throw(errMessage);
  }
}
