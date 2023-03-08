import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CAMPS } from 'src/app/data/camps';
import { Camp } from 'src/app/models/camp';

@Component({
  selector: 'app-camp-detail',
  templateUrl: './camp-detail.component.html',
  styleUrls: ['./camp-detail.component.css']
})
export class CampDetailComponent {
  camps: Camp[] = CAMPS;
  camp?: Camp;
  categories?: any;
  
  startDate: string | undefined;
  endDate: string | undefined;
  text: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {

    const id = route.snapshot.paramMap.get('id');
    this.camp = this.camps.find(c => c.id === Number(id));
    this.categories = this.camp?.categories.split(',');

    if (this.router.getCurrentNavigation()?.extras.state) {
      const navigation = this.router.getCurrentNavigation();
      const state = navigation?.extras.state as { startDate: string, endDate: string };
      this.startDate = state?.startDate
      this.endDate = state?.endDate
      // this.startDate = new Date(this.startDate)
      // this.endDate = new Date(this.endDate)
      // let difference = date_2.getTime() - this.startDate.getTime()
      // let days = Math.abs(Math.ceil(difference / (1000 * 3600 * 24)));

      // this.cars.forEach(car => {
      //   car.totalPrice = days * car.priceForADay
      //   car.totalRating = (car.sumRating/car.numReviews).toPrecision(3)
      //  })
    } else {
      // todo
    }
  }
}
