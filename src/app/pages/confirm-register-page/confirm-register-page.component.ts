import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { CodeInputComponent } from "./code-input/code-input.component";
import { FormArray, FormControl } from "@angular/forms";

@Component({
  selector: 'app-confirm-register-page',
  standalone: true,
  imports: [
    MatButton,
    CodeInputComponent,
  ],
  templateUrl: './confirm-register-page.component.html',
  styleUrls: ['./confirm-register-page.component.scss']
})
export class ConfirmRegisterPageComponent implements AfterViewInit {
  @ViewChild(CodeInputComponent) codeInputComponent!: CodeInputComponent;
  codeForm!: FormArray<FormControl<string | null>>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.codeForm = this.codeInputComponent.codeForm;
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      const allFieldsFilled = this.codeForm.controls.every(control => control.value !== null);

      if (allFieldsFilled) {
        console.log('Code Form:', this.codeForm.value);
      }
    }
  }
}
