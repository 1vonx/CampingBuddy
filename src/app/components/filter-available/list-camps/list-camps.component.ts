import { CAMPS } from './../../../data/camps';
import { CampsService } from './../../../service/camps/camps.service';
import { Camp } from './../../../models/camp';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-camps',
  templateUrl: './list-camps.component.html',
  styleUrls: ['./list-camps.component.css']
})
export class ListCampsComponent {

  camps: Camp[] = CAMPS;
  startDate: string | undefined;
  endDate: string | undefined;

  constructor(private router: Router) {
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
  // get getFilteredMovies(): Movie[] {
  //   return this.movies.filter(movie => movie.title.toLocaleLowerCase()
  //   .includes(this.searchTerm.toLocaleLowerCase()));
  // }

}
