import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { DBService } from '../db.service';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {
  headerOp:string;
  LocalArr:Hospital[];
  constructor(private HospitalService:DBService) {
    this.HospitalService.getHospital().subscribe(response=>{
      this.LocalArr=<Hospital[]>response;
    })
    
  }

  ngOnInit(): void {
  }

}
