import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }

  myItems(): string[] {
    return ['one', 'two', 'three'];
  }
}
