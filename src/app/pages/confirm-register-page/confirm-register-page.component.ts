import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-confirm-register-page',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
  ],
  templateUrl: './confirm-register-page.component.html',
  styleUrl: './confirm-register-page.component.scss'
})
export class ConfirmRegisterPageComponent {

}
