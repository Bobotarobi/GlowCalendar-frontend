import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ConfirmRegisterPageComponent} from "./pages/confirm-register-page/confirm-register-page.component";
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
