import { Injectable } from '@angular/core';
import { BaseService } from '../common/base.service';

import { ConfigService } from '../../configuration/config.service';
import {HttpClient} from '@angular/common/http';
import { Observable ,  Subject } from 'rxjs';

import { CookieUtilities } from '../../utilities/cookie-utilities';

@Injectable()
export class LoginService extends BaseService {

  requestPath = this.configService.getConfiguration();
  private user : any;

  constructor(public http: HttpClient,
    private configService: ConfigService, 
    private cookieUtilities: CookieUtilities) {
      super(http);
      this.user = this.cookieUtilities.getCookie("user");
  }
    
  loginPut(data: any) {
      return super.basePut(this.requestPath.BaseUrl + this.requestPath.LoginUrl, data)
      .subscribe(result => {
        this.cookieUtilities.setCookie("user", result, 60);
        console.log(result);
      });
  }

  private subject = new Subject<any>();

  isLoggedIn(message: boolean) {
      this.subject.next({ text: message });
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

  getUser(){
      return this.user;
  }

}
