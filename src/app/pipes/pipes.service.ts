import { Injectable } from '@angular/core';
import { DateAmount } from './dateAmount';

@Injectable({
  providedIn: 'root'
})
export class PipesService {

  constructor() { }

  getDateAmount(): DateAmount {
    return {
      amount: 1.5,
      date: new Date()
    };
  }
}
