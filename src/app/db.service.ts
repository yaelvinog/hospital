import { Injectable } from '@angular/core';
import { Hospital } from './hospital';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DBService {
arr:Hospital[];
  constructor(private http:HttpClient) {
  
   }
   getHospital():Observable<any>
   {
     return this.http.get<any>("http://localhost:55939/api/Hospital");
   }
}
