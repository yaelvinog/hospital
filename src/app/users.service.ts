import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from "./user";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}
  getAllUsers(): Observable<any> {
    return this.http.get<any>("http://localhost:60876/api/Users/GetUsers");
  }
  getUser(email: string, password: string): Observable<User> {
    return this.http.get<User>(
      `http://localhost:60876/api/Users/GetUser/${email}/${password}`
    );
  }
  addUser(user: User): Observable<User> {
    return this.http.post<User>(
      "http://localhost:60876/api/Users/AddUser",
      user
    );
  }
  sendMail(mail: string, summery: string): Observable<boolean> {
    return this.http.get<boolean>(
      `http://localhost:60876/api/Users/SendMailUnapprovedUsers/${mail}/${summery}`
    );
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
