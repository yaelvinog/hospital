import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm:FormGroup;
  IsExist=true;
  hide=true;
  constructor(private fb:FormBuilder,private ServiceUser:UsersService, private router:Router) { }
  ngOnInit():void{
    this.LoginForm=this.fb.group({
      email:["",[Validators.email,Validators.required]],
      password:["",Validators.required]
    });
  }
  get email(){
    return this.LoginForm.get("email");
  }
  get password(){
    return this.LoginForm.get("password");
  }
  submitForm():void{
    this.ServiceUser.getUsers(this.email.value,this.password.value).subscribe(user=>{
      if(!user)
        Swal.fire(
          "שם המשתמש והסיסמה לא זוהו"
        );
    else
        localStorage.setItem('user',JSON.stringify(user));
        this.router.navigateByUrl("opinion");

},(err=>{
  Swal.fire(
'): !אופס..., משהו השתבש');
}));
}
forgotPasswd():void{
    
}
}