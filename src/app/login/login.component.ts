import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm:FormGroup;
  IsExist=true;
  constructor(private fb:FormBuilder,private ServiceUser:UsersService) { }
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
    this.ServiceUser.getUsers(this.email.value,this.password.value).subscribe(result=>{
      if(!result)
        // this.IsExist=false;
        Swal.fire(
          "The username and password were not recognised"
        );
    else
        localStorage.setItem(this.email.value,JSON.stringify(this.password.value));
},(err=>{
  Swal.fire(
    'Oops...', 'Something went wrong!', 'error');
}));
}
}