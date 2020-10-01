import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor( private router:Router) { }
  public canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    let user:any=localStorage.getItem("user");
    // user=JSON.parse(user);
    if(user==null){
      this.router.navigate(["/login"]);
      return false;
    }
    return true;
  }
}