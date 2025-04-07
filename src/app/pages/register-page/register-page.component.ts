import { Component } from '@angular/core';
import {MatError, MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RegisterService} from "../../services/register/register.service";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {merge} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    FormsModule,
    MatLabel,
    MatInputModule,
    MatFormFieldModule,
    MatIconButton,
    MatIcon,
    MatAnchor,
    MatButton,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
    registerForm: FormGroup = new FormGroup({
      code: new FormControl("",
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      email: new FormControl("",
        {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur'
        }
      ),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)]),
    });
    hidePassword: boolean = true;
    hideConfirmPassword: boolean = true;


    constructor(
      private RegisterService: RegisterService,
      private router: Router,
      private authentificateService: AuthenticationService
    ) {
      const Email = this.registerForm.controls["email"];
      const Password = this.registerForm.controls["password"];
      const Code = this.registerForm.controls["code"];
      const ConfirmPassword = this.registerForm.controls["confirmPassword"];
      if (Email && Password && Code && ConfirmPassword) {
        merge(Email.events).pipe(takeUntilDestroyed()).subscribe(() => {});
        merge(ConfirmPassword.events).pipe(takeUntilDestroyed()).subscribe(() => {});
        merge(Password.events).pipe(takeUntilDestroyed()).subscribe(() => {});
        merge(Code.events).pipe(takeUntilDestroyed()).subscribe(() => {});
      } else{
        throw new Error("Form controls are not valid");
      }
    }

    onSubmit() {
      if (this.registerForm.invalid){
        this.registerForm.markAsTouched();
        return;
      }
      const {email, password, confirmPassword, code} = this.registerForm.controls;
      this.RegisterService.registerCode({
        code: code,
        email: email,
        password: password,
      }).then(id => {
        if (id) {
          this.router.navigate(['/'])
        } else {

        }
      });
    }

    passwordClickEvent(event: MouseEvent, buttonType: string): void {
      if (buttonType == "password") {
        this.hidePassword = !this.hidePassword;
      } else {
        this.hideConfirmPassword = !this.hideConfirmPassword;
      }
      event.stopPropagation();
    }

  protected readonly onsubmit = onsubmit;
}

