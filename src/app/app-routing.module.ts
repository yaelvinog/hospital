import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HEADERComponent } from './header/header.component';




const routes: Routes = [
{
  path:"",
   component:HEADERComponent
},
{
  path:'signUp',
  component:SignUpComponent
},
{
  path:'login',
  component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
