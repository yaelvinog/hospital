import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from './department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
  getDepartmentbyId(departmentId:number):Observable<Department>{
      return this.http.get<Department>(`http://localhost:60876/api/Department/getDepartmentbyId/${departmentId}`);
  }
}
