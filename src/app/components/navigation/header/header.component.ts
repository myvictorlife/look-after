import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../login/login.component';
import { CreateUserComponent } from '../../create-user/create-user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages = [
    { code: "pt", name: "Português" },
    { code: "en", name: "English" }
  ];
  selected: string;
  constructor(private translate: TranslateService, public dialog: MatDialog, private router: Router) {
    translate.setDefaultLang("en");
    let browserLang = translate.getBrowserLang();
    this.selected = browserLang;
    translate.use(browserLang.match(/en|pt/) ? browserLang : "en");
   }

  ngOnInit() {
  }

  switchLanguage() {
    this.translate.use(this.selected);
  }

  openLoginModal() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px'
    });
    const sub = dialogRef.componentInstance.submitEM.subscribe(() => {
      dialogRef.close();
      this.router.navigate(["create-user"]);
    });
  }

  openCreateUserModal() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '400px',
      disableClose: true
    });
    const sub = dialogRef.componentInstance.closeCreateUserEM.subscribe(() => {
      dialogRef.close();
    });
  }

}
