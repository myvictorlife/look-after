import { Injectable } from '@angular/core';
import { BaseService } from '../common/base.service';

import { ConfigService } from '../../configuration/config.service';
import {HttpClient} from '@angular/common/http';
import { Observable ,  Subject } from 'rxjs';

@Injectable()
export class LoginService extends BaseService {

  requestPath = this.configService.getConfiguration();
  constructor(public http: HttpClient,
    private configService: ConfigService) {
      super(http);
  }
    
  loginPut(data: any) {
      return super.basePutWithParameter(this.requestPath.BaseUrl + this.requestPath.LoginUrl, data)
          .map(res => res);
  }

  private subject = new Subject<any>();

  isLoggedIn(message: boolean) {
      this.subject.next({ text: message });
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

}
