import { Injectable } from '@angular/core';
import { Hospital } from './hospital';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DBService {
 
  arr:Hospital[];
  constructor(private http:HttpClient) {
  
   }
   getHospitals():Observable<any>
   {
     return this.http.get<any>("http://localhost:60876/api/Hospital/GetHospitals");
   }
   getDeprtmentbyHospitalId(selectedHospital:number):Observable<any>{
    return this.http.get<any>(`http://localhost:60876/api/Hospital/GetDepartmentByHospitalId/${selectedHospital}`)
   }
   GetAllData():Observable<any>{
     return this.http.get("http://localhost:60876/api/Hospital/GetAllData");
   }
   GetHospitalById(hospitalId:number):Observable<Hospital>{
     return this.http.get<Hospital>(`http://localhost:60876/api/Hospital/GetHospitalById/${hospitalId}`)
   }
  //  uploadMultiImages(imagesMultiFiles: File[], id: number) {
   
  //   let input = new FormData();
  // for (let index = 0; index < imagesMultiFiles.length; index++) {
  //   const file = imagesMultiFiles[index];
  
  // input.append('file'+index, file, file.name);
  // }
  //   // let headers = new HttpHeaders();
  //   // headers.append('Content-Type', 'multipart/form-data');
  //   // let options = { headers: headers };
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   let options = { headers: headers};
  //   return this.http.post(`http://localhost:60876/api/Hospital/uploadMulti/${id}`, input, options );

  // }
   public uploadImage(file: File, id: number): Observable<ArrayBuffer> {
 
    let input = new FormData();
    input.append('file', file, file.name);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    let options = { headers: headers };

    return this.http.post<ArrayBuffer>(`http://localhost:60876/api/Hospital/upload/${id}`, input, options);
  }

}
