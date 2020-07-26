export class Hospital {
    HospitalId:number;
    HospitalName:string;
    UrlAdress:string;
    AvgScore:number;
    IsConfirmed:boolean;
    Tel:string;
    HosImage:string;
    constructor(HospitalId?:number,HospitalName?:string,UrlAdress?:string,AvgScore?:number,IsConfirmed?:boolean,Tel?:string,HosImage?:string){
        this.HospitalId=HospitalId;
        this.HospitalName=HospitalName;
        this.UrlAdress=UrlAdress;
        this.AvgScore=AvgScore;
        this.IsConfirmed=IsConfirmed;
        this.Tel=Tel;
        this.HosImage=HosImage;
    }
}
