import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegisterPageComponent} from "./pages/register-page/register-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegisterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'glowcalendar';
}
