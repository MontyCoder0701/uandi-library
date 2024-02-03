import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

const eUandiButtonType = {
  primary: 'primary',
  default: 'default',
  text: 'text',
  link: 'link',
} as const;

export type UandiButtonType =
  (typeof eUandiButtonType)[keyof typeof eUandiButtonType];

@Component({
  selector: 'uai-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [NgClass],
})
export class ButtonComponent {
  @Input({ required: true }) text: string = 'text';
  @Input() type: UandiButtonType = eUandiButtonType.default;
  @Input() prefixIcon: string = '';
  @Input() suffixIcon: string = '';
  @Input() disabled: boolean = false;
  @Output() clickEventEmitter = new EventEmitter();

  get compiledClass(): string {
    switch (this.type) {
      case 'primary':
        return 'bg-black text-white disabled:border-gray-300 hover:bg-gray-700 disabled:bg-gray-100 disabled:text-gray-400';
      case 'text':
        return 'text-black hover:text-gray-500 disabled:text-gray-300';
      case 'link':
        return 'text-blue-500 hover:text-blue-600 disabled:text-gray-300';
      default:
        return 'border-gray-300 bg-white text-black hover:bg-gray-100 disabled:bg-gray-100 disabled:text-gray-400';
    }
  }

  handleClick(): void {
    this.clickEventEmitter.emit();
  }
}
