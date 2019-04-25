import { Component, OnInit, Input, Output, EventEmitter  } from  '@angular/core';
import { MatDialog } from  '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    emailControl: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private  dialog:  MatDialog) { }

  ngOnInit() {
  }

  login(){
    this.dialog.open(DialogComponent,{ data: { message:  "Error!!!" }});
  }

}
