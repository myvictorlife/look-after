
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing-module/app-routing.module';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";


// Modules
import { AppMaterialModule } from './app-material/app-material.module';
// COMPONENT
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

// SERVICES
import { ConfigService } from './configuration/config.service';
import { SharedService } from './service/common/shared.service';

// UTILITIES
import { GenericUtilities } from './utilities/generic-utilities';
import { HomeComponent } from './components/home/home.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { OnlyNumber } from './directives/only-number.directive';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { HeaderComponent } from './components/navigation/header/header.component';

export function ConfigLoader(configService: ConfigService) {
    return () => configService.load();
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DialogComponent,
    CreateUserComponent,
    OnlyNumber,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    ConfigService,
    SharedService,
    GenericUtilities,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [ConfigService],
      multi: true
    }
  ],
  entryComponents: [
    DialogComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }