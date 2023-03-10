import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent {
  @Input() place: string | undefined = '';
  @Input() startDate: string | undefined = '';
  @Input() endDate: string | undefined = '';
  email: string = '';
  phone: number = 0;

  constructor(private router: Router){
  }

  book(){
    this.router.navigate(["/reservation-details"]);
  }
}
