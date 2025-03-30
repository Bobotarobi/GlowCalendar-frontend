import { Component } from '@angular/core';
import {MatError, MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-login-page',
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
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
    loginForm: FormGroup = new FormGroup({});
    hidePassword: boolean = false;

    passwordClickEvent(event: MouseEvent): void {
      this.hidePassword = !this.hidePassword;
      event.stopPropagation();
    }
}
