import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { CreateUserComponent } from '../components/create-user/create-user.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  { 
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'create-user',
    component: CreateUserComponent
  },{ 
    path: 'welcome',
    component: WelcomeComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
