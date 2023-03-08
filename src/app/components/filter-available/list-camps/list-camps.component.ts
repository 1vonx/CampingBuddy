import { CAMPS } from './../../../data/camps';
import { CampsService } from './../../../service/camps/camps.service';
import { Camp } from './../../../models/camp';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-camps',
  templateUrl: './list-camps.component.html',
  styleUrls: ['./list-camps.component.css']
})
export class ListCampsComponent {

  // Camp[]
  camps: any = CAMPS;

  // get getFilteredMovies(): Movie[] {
  //   return this.movies.filter(movie => movie.title.toLocaleLowerCase()
  //   .includes(this.searchTerm.toLocaleLowerCase()));
  // }

}
