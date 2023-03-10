import { Component } from '@angular/core';
import { Camp } from 'src/app/models/camp';
import { CampsService } from 'src/app/service/camps/camps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    text = "Offering a wide selection of camping experiences in Macedonia that are sure to provide the perfect getaway for you and your family. Whether you're looking for a tranquil escape in the woods, an action-packed adventure in the mountains, or a relaxing stay by the beach, we have something for everyone.";
    mostPopular: Camp[];

    constructor(private campService: CampsService) {
      this.mostPopular = this.campService.getMostPopularCamps();
    }


}
