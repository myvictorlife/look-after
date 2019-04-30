import { Component, OnInit, Output, EventEmitter } from  '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from "@ngx-translate/core";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword:boolean = false;
  loginForm: FormGroup = new FormGroup({
    emailControl: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  @Output() submitEM = new EventEmitter();

  constructor(public translate: TranslateService, public loginService: LoginService) { }

  ngOnInit() {
  }

  login(){
    if (this.loginForm.valid) {
      this.loginService.loginPut(this.loginForm.value);

      // it's call function to close the dialog maybe need to change this logic later.
      this.submitEM.emit(this.loginForm.value);
    }
  }

  getEmailErrorMessage() {
    return this.loginForm.get('emailControl').hasError('required') ? this.translate.instant('Login.MustBeValue'):
        this.loginForm.get('emailControl').hasError('email') ? this.translate.instant('Login.InvalidEmail'):
            '';
  }

  getPasswordErrorMessage() {
    return this.loginForm.get('password').hasError('required') ? this.translate.instant('Login.MustBeValue') : '';
  }

}
