import { Injectable } from '@angular/core';
import { CAMPS } from 'src/app/data/camps';
import { Camp } from 'src/app/models/camp';

@Injectable({
  providedIn: 'root'
})
export class CampsService {

camps : Camp[] = CAMPS;
randomNums: Set<number>;

  constructor() { 
    this.randomNums = this.randomIds();
  }

  randomIds(){
    const set = new Set<number>()
    while(set.size < 3) {
      set.add(Math.floor(Math.random() * 8) + 1)
    }
    return set
  }


  getAllCamps(): Camp[] {
    return this.camps;
  }

  getCampById(id: string) {
    return this.camps.find(c => c.id === Number(id));
  }

  getMostPopularCamps(){
    // console.log(this.randomNums);
    return this.camps.filter(c => this.randomNums.has(c.id));
  }

  searchByName(searchTerm: string) {
    return this.camps.filter(camp => camp.name.toLocaleLowerCase()
    .includes(searchTerm.toLocaleLowerCase()));
  }

}
