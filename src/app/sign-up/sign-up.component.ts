import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UsersService } from '../users.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { CurrentUserService } from '../current-user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  SignForm: FormGroup;
  register = false;
  hide = true;
  cnt = 0;
  public images = [];
  public imagesFiles: File;
  public imageSrc = '';
  constructor(private formbuilder: FormBuilder, private userSrevice: UsersService, private router: Router, private currentUserService: CurrentUserService) { }

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
  get SignPasswd() {
    return this.SignForm.get("SignPasswd");
  }

  signform(): void {

    let user: User = new User(this.Signusername.value, this.Signemail.value, this.SignPasswd.value, " ", new Date(), "", false, false);
    this.userSrevice.addUser(user).subscribe(response => {
      if (response) {
         this.currentUserService.currentUser=user;
        Swal.fire({
          title: '',
          html: ' נרשמת בהצלחה!',
          icon: 'success',
          showCancelButton: true,
          confirmButtonText: 'להוספת חות דעת ',
          cancelButtonText: 'דף הבית'
        }).then((result) => {
          if (result.value) {
            this.router.navigateByUrl("opinion");
          }
          else
            this.router.navigateByUrl("home");
        });
      }
    }, (err => {
      Swal.fire('Oops... Something went worng', 'error');
    }))
  }
  // onSelectFile(event) {
  //   // called each time file input changes
  //   if (event.target.files && event.target.files[0]) {

  //     this.imagesFiles = event.target.files[0];

  //   }
  // }
  // upload() {
  //   this.userSrevice.uploadImage(this.imagesFiles, this.Signemail.value).subscribe(x => { });
  // }
}
