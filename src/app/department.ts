import { Time } from '@angular/common';

export class Department {
    DepartmentId:number
    HospitalId:number;
    DepartmentTypeId:number;
    FullName:string;
    DepartmentUrl:string;
    DepartmentManagerName:string;
    IsConfirmed:boolean;
    IsDeleted:boolean;
    VisitTime:string;
    DepImage:string;
    Tel:string;
    Summary:string;
    constructor(
        DepartmentId?:number,
        HospitalId?:number,
        DepartmentTypeId?:number,
        FullName?:string,
        DepartmentUrl?:string,
        DepartmentManagerName?:string,
        IsConfirmed?:boolean,
        IsDeleted?:boolean,
        VisitTime?:string,
        DepImage?:string,
        Tel?:string,
        Summary?:string
    )
    {
        this.DepartmentId=DepartmentId;
        this.HospitalId=HospitalId;
        this.DepartmentTypeId=DepartmentTypeId;
        this.FullName=FullName;
        this.DepartmentUrl=DepartmentUrl,
        this.DepartmentManagerName=DepartmentManagerName,
        this.IsConfirmed=IsConfirmed;
        this.IsDeleted=IsDeleted;
        this.VisitTime=VisitTime;
        this.DepImage=DepImage;
        this.Tel=Tel;
        this.Summary=Summary;
    }
}
