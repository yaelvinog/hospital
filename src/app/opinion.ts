import { runInThisContext } from 'vm';

export class Opinion {
    OpinionId:number;
    UserId:number;
    DepartmentId:number;
    Title:string;
    Summary:string;
    Rating1GeneralSatisfaction:string;
    Rating2ListenAndRelate:string;
    Rating3GettingHelpEasily:string;
    Rating4SharingInformation:string;
    Rating5AnEfficientProcess:string;
    Rating6ConditionsOfHospitalization:string;
    Rating7PreventionOfMedicalErrors:string;
    IsConfirmed:boolean;
    constructor(OpinionId:number,UserId:number,DepartmentId:number,Title:string,Summary:string,
        Rating1GeneralSatisfaction:string,
        Rating2ListenAndRelate:string,
        Rating3GettingHelpEasily:string,
        Rating4SharingInformation:string,
        Rating5AnEfficientProcess:string,
        Rating6ConditionsOfHospitalization:string,
        Rating7PreventionOfMedicalErrors:string,
        IsConfirmed:boolean)
        {
            this.OpinionId=OpinionId;
            this.UserId=UserId;
            this.DepartmentId=DepartmentId;
            this.Title=Title;
            this.Summary=Summary;
            this.Rating1GeneralSatisfaction=Rating1GeneralSatisfaction;
            this.Rating2ListenAndRelate=Rating2ListenAndRelate;
            this.Rating3GettingHelpEasily=Rating3GettingHelpEasily;
            this.Rating4SharingInformation=Rating4SharingInformation;
            this.Rating5AnEfficientProcess=Rating5AnEfficientProcess;
            this.Rating6ConditionsOfHospitalization=Rating6ConditionsOfHospitalization;
            this.Rating7PreventionOfMedicalErrors=Rating7PreventionOfMedicalErrors;
            this.IsConfirmed=IsConfirmed;
        }
        
    
}
