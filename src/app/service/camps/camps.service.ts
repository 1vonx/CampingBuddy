import { Injectable } from '@angular/core';
import { CAMPS } from 'src/app/data/camps';
import { Camp } from 'src/app/models/camp';

@Injectable({
  providedIn: 'root'
})
export class CampsService {

camps : Camp[] = CAMPS;
randomNums: number[];

  constructor() { 
    this.randomNums = [Math.floor(Math.random()*8), Math.floor(Math.random()*8), Math.floor(Math.random()*8)];
  }

  getAllCamps(): Camp[] {
    return this.camps;
  }

  getCampById(id: string) {
    return this.camps.find(c => c.id === Number(id));
  }

  getMostPopularCamps(){
    console.log(this.randomNums);
    return this.camps.filter(c => this.randomNums.includes(c.id));
  }

}
