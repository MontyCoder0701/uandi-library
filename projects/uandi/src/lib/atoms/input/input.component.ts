import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'uai-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
})
export class InputComponent {
  @Input() formControlName: string = '';
  @Input() placeholder: string = '';
  @Input() isInvalid: boolean = false;
}
