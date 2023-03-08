import { Camp } from './../../../../models/camp';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-camp-card',
  templateUrl: './camp-card.component.html',
  styleUrls: ['./camp-card.component.css']
})
export class CampCardComponent {

  @Input() camp: Camp | undefined;
  @Output() deleteMovie = new EventEmitter<Camp>();
  isHovered = false;

  onMouseEnter(): void {
    this.isHovered = true;
  }

  onMouseLeave(): void {
    this.isHovered = false;
  }

}
