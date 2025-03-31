import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConfirmRegisterPageComponent} from "./pages/confirm-register-page/confirm-register-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {CodeInputComponent} from "./pages/confirm-register-page/code-input/code-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ConfirmRegisterPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'glowcalendar';
}
