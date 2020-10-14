import { Component, OnInit } from '@angular/core';
import { Hospital } from '../hospital';
import { DBService } from '../db.service';
import { Department } from '../department';
import { Opinion } from '../opinion';
import { User } from '../user';
import { OpinionService } from '../opinion.service';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { flatten } from '@angular/compiler';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {
  newOpinion:Opinion;
  title:string="arrow_back" ;
  prev:boolean=true;
  next:boolean=false;  
  selectedHospital: number;
  selectedDepartment:number;
  LocalArr:Hospital[]=[];
  LocalArrDep:Department[]=[];
  starColor:string="primary";
  starCount:number=5;
  checked:boolean;
  constructor(private HospitalService:DBService,private OpinionService:OpinionService,private router:Router) {
    this.HospitalService.getHospitals().subscribe(response=>{
      this.LocalArr=<Hospital[]>response;
      let user:any=localStorage.getItem('user');
      user=<User>JSON.parse(user);
      this.newOpinion=new Opinion();
      this.newOpinion.UserId=user.UserId;
       //get the user id from localstorage, department Id - QS
    });
  }
  sendOpinion(){
    if(this.checked==true){
      this.OpinionService.AddNewOpinion(this.newOpinion).subscribe(res=>{
          if(res!=null){
            Swal.fire('Success','חוות דעתך נקלטה בהצלחה!','success')
            .then(()=>{
              this.router.navigateByUrl("footer/"+this.selectedHospital);
            });
          }  
      },(err=>
        {Swal.fire('Error','): !אופס..., משהו השתבש','error')}));
    }
  //  this.router.navigateByUrl("home");
}
  ngOnInit(): void {
  }
  selectHospital()
  {
      this.HospitalService.getDeprtmentbyHospitalId(this.selectedHospital).subscribe(response=>{
          this.LocalArrDep=<Department[]>response;
      });
  }
  selectDepartment(){
      this.newOpinion.DepartmentId = this.selectedDepartment;
  }
}
