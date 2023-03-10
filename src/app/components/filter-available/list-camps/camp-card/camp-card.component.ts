import { Camp } from './../../../../models/camp';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-camp-card',
  templateUrl: './camp-card.component.html',
  styleUrls: ['./camp-card.component.css']
})
export class CampCardComponent {

  @Input() camp: Camp | undefined;
  @Input() startDate?: string | undefined;
  @Input() endDate?: string | undefined;
  navigationExtra: NavigationExtras | undefined;

  constructor(private router: Router) {
  }
  
  onClick() {
    this.navigationExtra = {
      state: {
        startDate: this.startDate,
        endDate: this.endDate,
      }
    }

    this.router.navigate(['/list-camps', this.camp?.id], this.navigationExtra);
  }
}
