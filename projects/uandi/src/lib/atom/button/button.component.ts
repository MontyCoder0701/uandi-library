import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

const eUandiButtonType = {
  PRIMARY: 'PRIMARY',
  DEFAULT: 'DEFAULT',
  TEXT: 'TEXT',
  LINK: 'LINK',
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
  @Input() type: UandiButtonType = eUandiButtonType.DEFAULT;
  @Input() prefixIcon: string = '';
  @Input() suffixIcon: string = '';
  @Input() disabled: boolean = false;
  @Output() clickEventEmitter = new EventEmitter();

  get compiledClass(): string {
    switch (this.type) {
      case 'PRIMARY':
        return 'bg-black text-white disabled:border-gray-200 hover:bg-gray-700 disabled:bg-gray-100 disabled:text-gray-400';
      case 'TEXT':
        return 'text-black hover:text-gray-500 disabled:text-gray-300';
      case 'LINK':
        return 'text-blue-500 hover:text-blue-600 disabled:text-gray-300';
      default:
        return 'border-gray-200 bg-white text-black hover:bg-gray-100 disabled:bg-gray-100 disabled:text-gray-400';
    }
  }

  handleClick(): void {
    this.clickEventEmitter.emit();
  }
}
