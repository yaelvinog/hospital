export class Hospital {
    HospitalId:number;
    HospitalName:string;
    UrlAdress:string;
    AvgScore:number;
    IsConfirmed:boolean;
    Tel:string;
    HosImage:string;
    HospitalAddress:string;
    Rating1GeneralSatisfactionAvg:number;
    Rating2ListenAndRelateAvg:number;
    Rating3GettingHelpEasilyAvg:number;
    Rating4SharingInformationAvg:number;
    Rating5AnEfficientProcessAvg:number;
    Rating6ConditionsOfHospitalizationAvg:number;
    Rating7PreventionOfMedicalErrorsAvg:number;
    TotalRatingAvg:number;
    Duration?:number;


    constructor(HospitalId?:number,HospitalName?:string,UrlAdress?:string,AvgScore?:number,IsConfirmed?:boolean,Tel?:string,HosImage?:string,HospitalAddress?:string,
        Rating1GeneralSatisfactionAvg?:number,Rating2ListenAndRelateAvg?:number,Rating3GettingHelpEasilyAvg?:number,Rating4SharingInformationAvg?:number,
        Rating5AnEfficientProcessAvg?:number,Rating6ConditionsOfHospitalizationAvg?:number, Rating7PreventionOfMedicalErrorsAvg?:number, TotalRatingAvg?:number){
        this.HospitalId=HospitalId;
        this.HospitalName=HospitalName;
        this.UrlAdress=UrlAdress;
        this.AvgScore=AvgScore;
        this.IsConfirmed=IsConfirmed;
        this.Tel=Tel;
        this.HosImage=HosImage;
        this.HospitalAddress=HospitalAddress;
        this.Rating1GeneralSatisfactionAvg=Rating1GeneralSatisfactionAvg;
        this.Rating2ListenAndRelateAvg=Rating2ListenAndRelateAvg;
        this.Rating3GettingHelpEasilyAvg=Rating3GettingHelpEasilyAvg;
        this.Rating4SharingInformationAvg=Rating4SharingInformationAvg;
        this.Rating5AnEfficientProcessAvg=Rating5AnEfficientProcessAvg;
        this.Rating6ConditionsOfHospitalizationAvg=Rating6ConditionsOfHospitalizationAvg;
        this.Rating7PreventionOfMedicalErrorsAvg=Rating7PreventionOfMedicalErrorsAvg;
         this.TotalRatingAvg=TotalRatingAvg;
    }
}
