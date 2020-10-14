import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';
import { Department } from '../department';

@Component({
  selector: 'app-department-details-card',
  templateUrl: './department-details-card.component.html',
  styleUrls: ['./department-details-card.component.css']
})
export class DepartmentDetailsCardComponent implements OnInit {
  open:boolean=false;
  departmentObj:Department=new Department();
  constructor(private DepartmentService:DepartmentService,private ActivatedRoute:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(res=>{
      if(Number(res.get("id"))){
        alert("dfd");
          this.DepartmentService.getDepartmentbyId(Number(res.get("id"))).subscribe(response=>{
          this.departmentObj=<Department>response;
        });
      }
});
  }
  text():string{
    return this.open?"הסתר":"קרא עוד";
  }

}
