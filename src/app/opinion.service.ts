import { Injectable } from '@angular/core';
import { Opinion } from './opinion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospital } from './hospital';
import { Department } from './department';
@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  constructor(private http:HttpClient) { }
  AddNewOpinion(newOpinion:Opinion):Observable<Opinion>{
   return this.http.post<Opinion>("http://localhost:60876/api/Opinion/AddNewOpinion",newOpinion);
  }
  getAllOpinionByHospital(hospitalId:number):Observable<Opinion[]>{
    return this.http.get<Opinion[]>(`http://localhost:60876/api/Opinion/getOpinionAll/${hospitalId}`)
  }
  getAllOpinionByDepartmentId(departmentId:number):Observable<Opinion[]>
  {
    return this.http.get<Opinion[]>(`http://localhost:60876/api/Opinion/getAllOpinionByDepId/${departmentId}`)
  }
}
