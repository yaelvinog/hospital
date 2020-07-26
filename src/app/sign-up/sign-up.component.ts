import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  SignForm: FormGroup;
  register = false;

  constructor(private formbuilder: FormBuilder, private userSrevice: UsersService) { }

  ngOnInit(): void {
    this.SignForm = this.formbuilder.group({
      Signusername: ["", [Validators.required]],
      Signemail: ["", [Validators.email, Validators.required]],
      SignPasswd: ["", Validators.required]
    });

  }
  get Signusername() {
    return this.SignForm.get("Signusername");
  }
  get Signemail() {
    return this.SignForm.get("Signemail");
  }
  get signPasswd() {
    return this.SignForm.get("SignPasswd");
  }
  signform(): void {
    let user: User = new User(this.Signusername.value, this.Signemail.value, this.signPasswd.value, " ", new Date(), "", false, false);
    this.userSrevice.addUser(user).subscribe(response => {
      if (response)
      Swal.fire(
        'Success',
        'The data has been saved successfully.',
        'success'
      );

    }, (err => { 
      Swal.fire('Oops...', 'Something went wrong!', 'error');

    }))
  }
}
