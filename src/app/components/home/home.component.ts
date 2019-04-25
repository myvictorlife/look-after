import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  languages = [
    { code: "pt", name: "Português" },
    { code: "en", name: "English" }
  ];
  selected: string;
  constructor(private translate: TranslateService) { 
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

}
