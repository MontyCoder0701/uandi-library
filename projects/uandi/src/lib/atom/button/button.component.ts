import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'uai-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
})
export class ButtonComponent {
  @Input({ required: true }) text: string = 'text';
  @Input() prefixIcon: string = '';
  @Input() suffixIcon: string = '';
  @Input() disabled: boolean = false;
  @Output() clickEventEmitter = new EventEmitter();

  handleClick(): void {
    this.clickEventEmitter.emit();
  }
}
