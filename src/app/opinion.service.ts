import { Injectable } from '@angular/core';
import { Opinion } from './opinion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  constructor(private http:HttpClient) { }
  AddNewOpinion(newOpinion:Opinion):Observable<Opinion>{
   return this.http.post<Opinion>("http://localhost:60876/api/Opinion/AddNewOpinion",newOpinion);
  }
}
