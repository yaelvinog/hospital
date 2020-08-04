export class Hospital {
    HospitalId:number;
    HospitalName:string;
    UrlAdress:string;
    AvgScore:number;
    IsConfirmed:boolean;
    Tel:string;
    HosImage:string;
    HospitalAddress:string;
    Rating1GeneralSatisfaction:number;
    Rating2ListenAndRelate:number;
    Rating3GettingHelpEasily:number;
    Rating4SharingInformation:number;
    Rating5AnEfficientProcess:number;
    Rating6ConditionsOfHospitalization:number;
    Rating7PreventionOfMedicalErrors:number;

    constructor(HospitalId?:number,HospitalName?:string,UrlAdress?:string,AvgScore?:number,IsConfirmed?:boolean,Tel?:string,HosImage?:string,HospitalAddress?:string){
        this.HospitalId=HospitalId;
        this.HospitalName=HospitalName;
        this.UrlAdress=UrlAdress;
        this.AvgScore=AvgScore;
        this.IsConfirmed=IsConfirmed;
        this.Tel=Tel;
        this.HosImage=HosImage;
        this.HospitalAddress=HospitalAddress;
    }
}
