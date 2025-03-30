import { Component } from '@angular/core';
import {MatError, MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";


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
    hidePassword: boolean = true;
    hideConfirmPassword: boolean = true;

    passwordClickEvent(event: MouseEvent, buttonType: string): void {
      if (buttonType == "password") {
        this.hidePassword = !this.hidePassword;
      } else {
        this.hideConfirmPassword = !this.hideConfirmPassword;
      }
      event.stopPropagation();
    }
}
