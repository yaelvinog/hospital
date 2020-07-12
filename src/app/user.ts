export class User {
    UserId:number;
    UserName:string;
    Email:string;
    UserPassword:string;
    IdentityDetails:string;
    UserImage:string;
    CreateDate:Date;
    constructor(UserName:string,Email:string,UserPassword:string){
       this.UserName=UserName;
       this.Email=Email;
       this.UserPassword=UserPassword;
    }
}
//nvarchr(max)לשנות בדאטה בייס את המשתנה תמונה לסוג:
