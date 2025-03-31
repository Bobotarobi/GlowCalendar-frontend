import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  styleUrls: ['./code-input.component.scss']
})
export class CodeInputComponent {
  codeForm: FormArray<FormControl<string | null>>;

  constructor(private fb: FormBuilder) {
    this.codeForm = new FormArray<FormControl<string | null>>(
      Array(6).fill(null).map(() => new FormControl<string | null>(null))
    );
  }

  onInput(index: number, event: any) {
    const input = event.target;
    const value = input.value;

    if (value && isNaN(Number(value)) && value != ' ') {
      input.value = '';
    }

    if (input.value && index < this.codeForm.length - 1) {
      (document.getElementById(`code-${index + 1}`) as HTMLInputElement)?.focus();
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && index > 0) {
      if (!input.value) {
        (document.getElementById(`code-${index - 1}`) as HTMLInputElement)?.focus();
      }
    }
  }

  getControl(index: number): FormControl<string | null> {
    return this.codeForm.at(index) as FormControl<string | null>;
  }
}
