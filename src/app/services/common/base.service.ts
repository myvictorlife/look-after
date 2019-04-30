import 'rxjs/add/operator/catch';
import {catchError} from 'rxjs/operators/catchError'; 

import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { _throw } from 'rxjs/observable/throw';

import { SharedService } from './shared.service';

@Injectable()
export class BaseService {
  constructor(@Inject(HttpClient) public http: HttpClient) {
    this.http = http;
  }

  // Http Get with parameters
  baseGet<T>(url: string, parameter: T) {

    return this.http.get(url, (parameter != null ?
        this.getParameters<T>(parameter) : {
             headers: SharedService.getAuthorizationHeader()
            })).catch(this.handleError);
  }

  // Http Get with parameters
  basePut<T>(url: string, parameter: T) {
    return this.http.put(url, parameter, (parameter != null ?
        this.getParameters<T>(parameter) : {
             headers: SharedService.getAuthorizationHeader()
            })).catch(this.handleError);
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
    
    // IMPLEMENTS
    return _throw("IMPLEMENTS");
  }

  // Handdle the error in all the Http calls
  handleError(err) {
    // IMPLEMENTS
    return _throw("IMPLEMENTS");
  }
}
