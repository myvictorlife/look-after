import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserModel } from '../../models/user.model';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  user : UserModel;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    console.log(this.loginService.getUser());
    this.user = this.loginService.getUser();
  }

  redirectToHome() {
    this.router.navigate([""]);
  }

}
