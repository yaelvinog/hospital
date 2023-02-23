import Swal from "sweetalert2";
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { UsersService } from "../users.service";
import { CurrentUserService } from "../current-user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  IsExist = true;
  hide = true;
  IsSettings: boolean = false;
  constructor(
    private fb: FormBuilder,
    private ServiceUser: UsersService,
    private router: Router,
    private currentUserService: CurrentUserService,
    private socialAuthService: SocialAuthService
  ) {}
  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });

    this.LoginForm = this.fb.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required],
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  get email() {
    return this.LoginForm.get("email");
  }
  get password() {
    return this.LoginForm.get("password");
  }
  submitForm(): void {
    this.ServiceUser.getUser(this.email.value, this.password.value).subscribe(
      (user) => {
        debugger;
        if (!user) Swal.fire("Warning", "שם משתשמש והסיסמא לא זוהו", "warning");
        else {
          this.currentUserService.currentUser = user;
          sessionStorage.setItem("user", JSON.stringify(user));
          Swal.fire({
            title: "",
            html: "התחברת בהצלחה!",
            icon: "success",
            width: 400,
            customClass: {
              title: "title-class",
              icon: "icon-class",
              confirmButton: "confirm-button-class",
              cancelButton: "cancel-button-class",
            },
            showCancelButton: true,
            confirmButtonText: "להוספת חות דעת ",
            cancelButtonText: "דף הבית",
            cancelButtonColor: "#b73232",
            confirmButtonColor: "#b73232",
          }).then((result) => {
            if (result.value) {
              this.router.navigateByUrl("opinion");
            } else this.router.navigateByUrl("home");
          });
        }
      },
      (err) => {
        Swal.fire("Error", "): !אופס..., משהו השתבש", "error");
      }
    );
  }
  forgotPasswd(): void {}
}
