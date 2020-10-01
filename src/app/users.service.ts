import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router}from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http:HttpClient) {
    
  }
  getUsers(email:string,password:string):Observable<User>{
     return this.http.get<User>(`http://localhost:60876/api/Users/GetUser/${email}/${password}`);
  }
  addUser(user:User):Observable<User>{
    return this.http.post<User>("http://localhost:60876/api/Users/AddUser",user);
  }
  // public uploadImage(file: File, email:string): Observable<ArrayBuffer> {
 
  //   let input = new FormData();
  //   input.append('file', file, file.name);
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   let options = { headers: headers };

  //   return this.http.post<ArrayBuffer>(`http://localhost:60876/api/User/upload/${email}`, input, options);
  // }
}