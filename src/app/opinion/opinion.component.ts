import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { DBService } from '../db.service';
import { Department } from '../department';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {
  headerOp:string;
  selectedHospital: string;
  selectedDepartment:string;
  LocalArr:Hospital[];
  LocalArrDep:Department[];
  starColor:string="primary";
  starCount:number=5;
rating:number=1
  constructor(private HospitalService:DBService) {
  //  this.getCurrentLocation();
    this.HospitalService.getHospital().subscribe(response=>{
      this.LocalArr=<Hospital[]>response;
    })
    
  }
  onRatingChanged(stars:number){
    this.rating=stars
  }
  // getCurrentLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(position => {
  //       const lat = position.coords.latitude;
  //       const lon = position.coords.longitude;
  //       alert(lat + ", "+lon);
  //      // this.appService.setCurrentLocation(lat + ',' + lon);
  //     });
  //   }
  // }
  ngOnInit(): void {
  }
  selectHospital()
  {
      this.HospitalService.getDeprtmentbyHospitalId(this.selectedHospital).subscribe(response=>{
          this.LocalArrDep=<Department[]>response;
      });
  }
  selectDepartment(){
  alert(this.selectedDepartment);
  }
}
