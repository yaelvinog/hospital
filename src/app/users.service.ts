import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http:HttpClient) {
    
  }
  getUsers(email:string,password:string):Observable<User>{
     return this.http.get<User>(`http://localhost:55939/api/Users/GetUser/${email}/${password}`);
  }
  // addUser():Observable<User>{
  //   return this.http.post<User>();
  // }
}
