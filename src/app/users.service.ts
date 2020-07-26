import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router}from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http:HttpClient,private router:Router) {
    
  }
  getUsers(email:string,password:string):Observable<User>{
     return this.http.get<User>(`http://localhost:60876/api/Users/GetUser/${email}/${password}`);
  }
  addUser(user:User):Observable<User>{
    return this.http.post<User>("http://localhost:60876/api/Users/AddUser",user);
  }
}