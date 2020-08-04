import { Component, OnInit } from '@angular/core';
import { DBService } from '../db.service';
import { Hospital } from '../hospital';
import { Department } from '../department';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arr:Hospital[];
  arr2:Department[];
  starColor:string="primary";
  starCount:number=5;
  rating:number=1
  constructor(private HospitalService:DBService) { }

  ngOnInit(): void {
   this.getData();
  }
  onRatingChanged(stars:number){
    this.rating=stars
  }
  getData():void
  {
  this.HospitalService.GetAllData().subscribe(response=>{
    this.arr=<Hospital[]>response;
  })
}  
}
