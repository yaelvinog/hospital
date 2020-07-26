import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor( private router:Router) { }
  public canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    let user=localStorage.getItem("yeuditm123@gmail.com");
    if(user==null){
      this.router.navigate(["/login"]);
      return false;
    }
    return true;
  }
}