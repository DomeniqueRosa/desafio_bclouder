import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  @Input() name!: string;
  @Input() population!: number;
  @Input() flag!: string;
  @Input() region!: string;
  @Input() capital!: string;
  @Input() link!: string;

}
