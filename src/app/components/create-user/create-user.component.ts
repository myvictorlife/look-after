import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from "@ngx-translate/core";

const minLengthName : number = 3;
const minLengthPhone : number = 9;
const maxLengthPhone : number = 9;

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  regexStr = '^[0-9]*$';
  createUserForm: FormGroup = new FormGroup({
    nameCtrl: new FormControl('', [Validators.required, Validators.minLength(minLengthName)]),
    emailCtrl: new FormControl('', [Validators.required, Validators.email]),
    phoneCtrl: new FormControl('', [Validators.required, Validators.minLength(minLengthPhone), Validators.minLength(maxLengthPhone)]),
    passwordCtrl: new FormControl('', [Validators.required])
  });

  @Output() submitEM = new EventEmitter();
  @Output() closeCreateUserEM = new EventEmitter();

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  close() {
    this.closeCreateUserEM.emit();
  }

  singUp() {
    if (this.createUserForm.valid) {
      this.submitEM.emit(this.createUserForm.value);
    }
  }

  getNameErrorMessage() {
    return this.createUserForm.get('nameCtrl').hasError('required') ? this.translate.instant('CreateUser.MustBeValue'):
        this.createUserForm.get('nameCtrl').hasError('minlength') ? this.translate.instant('CreateUser.MessageMinLengthName', {characters : minLengthName}):
            '';
  }

  getPhoneErrorMessage() {
    return this.createUserForm.get('phoneCtrl').hasError('required') ? this.translate.instant('CreateUser.MustBeValue'):
        this.createUserForm.get('phoneCtrl').hasError('minlength') ? this.translate.instant('CreateUser.MessageMinAndMaxLengthPhone', {min : minLengthPhone, max: maxLengthPhone}):
            '';
  }
  
  getEmailErrorMessage() {
    return this.createUserForm.get('emailCtrl').hasError('required') ? this.translate.instant('Login.MustBeValue'):
        this.createUserForm.get('emailCtrl').hasError('email') ? this.translate.instant('Login.InvalidEmail'):
            '';
  }

  getPasswordErrorMessage() {
    return this.createUserForm.get('passwordCtrl').hasError('required') ? this.translate.instant('Login.MustBeValue') : '';
  }

}
