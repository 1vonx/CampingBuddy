import { CAMPS } from './../../data/camps';
import { Camp } from './../../models/camp';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampsService {

  constructor() { }

  // return Camp[]
  getAllCamps(): any {
    return CAMPS;
  }

}
