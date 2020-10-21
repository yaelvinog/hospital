import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { OpinionService } from '../opinion.service';
import { Opinion } from '../opinion';

@Component({
  selector: 'app-department-details-card',
  templateUrl: './department-details-card.component.html',
  styleUrls: ['./department-details-card.component.css']
})
export class DepartmentDetailsCardComponent implements OnInit {
  open:boolean=false;
  openId:number=null;
  starColor:string="primary";
  starCount:number=5;
  rating:number=1;
  departmentObj:Department=new Department();
  opinionArr:Opinion[]=[];
  constructor(private DepartmentService:DepartmentService,private ActivatedRoute:ActivatedRoute,private OpinionService:OpinionService) { 
  }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(res=>{
      if(Number(res.get("id"))){
          this.DepartmentService.getDepartmentbyId(Number(res.get("id"))).subscribe(response=>{
          this.departmentObj=<Department>response;
        });
        this.OpinionService.getAllOpinionByDepartmentId(Number(res.get("id"))).subscribe(res=>{
          this.opinionArr=res;
        })
      }
});
  }
  text(id:number):string{
    return (this.openId ==null || this.openId!=id)?"קרא עוד":"הסתר";
    }
    openFunc(id:number){
      if(this.openId==null||this.openId!=id)
        this.openId=id;
      else
        this.openId=null;
    }
}
