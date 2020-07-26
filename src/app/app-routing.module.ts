import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { OpinionComponent } from './opinion/opinion.component';
import { LoginGuardService } from './login-guard.service';




const routes: Routes = [
{
  path:"",
   component:HomeComponent
},
{
  path:'signUp',
  component:SignUpComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'opinion',canActivate:[LoginGuardService],
  component:OpinionComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
