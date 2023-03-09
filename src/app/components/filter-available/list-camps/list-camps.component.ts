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
  searchTerm: string = '';

  constructor(private router: Router, private service: CampsService) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      const navigation = this.router.getCurrentNavigation();
      const state = navigation?.extras.state as { startDate: string, endDate: string };
      this.startDate = state?.startDate
      this.endDate = state?.endDate
    } 
  }

  get searchByName(): Camp[] {
    return this.service.searchByName(this.searchTerm);
  }

}
