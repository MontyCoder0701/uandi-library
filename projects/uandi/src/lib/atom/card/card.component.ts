import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'uai-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [NgIf],
})
export class CardComponent {
  @Input() title = '';
  @Input() text = '';
  @Input() hasRadio = false;
}
