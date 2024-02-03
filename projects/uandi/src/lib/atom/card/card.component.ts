import { Component, Input } from '@angular/core';

@Component({
  selector: 'uai-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
})
export class CardComponent {
  @Input() title = '';
  @Input() text = '';
}
