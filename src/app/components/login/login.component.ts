import { Component, OnInit, Input, Output, EventEmitter  } from  '@angular/core';
import { MatDialog } from  '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    emailControl: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private  dialog:  MatDialog, public translate: TranslateService) { }

  ngOnInit() {
  }

  login(){
    this.dialog.open(DialogComponent,{ data: { message:  "Error!!!" }});
  }

  getEmailErrorMessage() {
    return this.form.get('emailControl').hasError('required') ? this.translate.instant('Login.MustBeValue'):
        this.form.get('emailControl').hasError('email') ? this.translate.instant('Login.InvalidEmail'):
            '';
  }

  getPasswordErrorMessage() {
    return this.form.get('password').hasError('required') ? this.translate.instant('Login.MustBeValue') : '';
  }

}
