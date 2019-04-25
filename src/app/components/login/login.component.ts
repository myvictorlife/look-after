import { Component, OnInit, Output, EventEmitter } from  '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    emailControl: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  @Output() submitEM = new EventEmitter();

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  login(){
    if (this.loginForm.valid) {
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
