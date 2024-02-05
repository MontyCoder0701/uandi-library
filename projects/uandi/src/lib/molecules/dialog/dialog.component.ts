import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'uai-dialog',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  @Input() title = '';
  @Input() text = '';
  @Input() hasOnlyConfirm = false;
  @Output() confirmClickEventEmitter = new EventEmitter();
  @Output() cancelClickEventEmitter = new EventEmitter();

  handleConfirmClick(): void {
    this.confirmClickEventEmitter.emit();
  }

  handleCancelClick(): void {
    this.cancelClickEventEmitter.emit();
  }
}
