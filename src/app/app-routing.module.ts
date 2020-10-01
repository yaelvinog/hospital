import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { OpinionComponent } from './opinion/opinion.component';
import { LoginGuardService } from './login-guard.service';
import { FooterComponent } from './footer/footer.component';
import { DepartmentDetailsCardComponent } from './department-details-card/department-details-card.component';




const routes: Routes = [
{
  path:"home",
   component:HomeComponent
},
{ path: '', pathMatch: 'full', redirectTo: '/home' },
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
},
{
  path:'footer/:id',
  component:FooterComponent
},
{
  path:'department/:id',
  component:DepartmentDetailsCardComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
