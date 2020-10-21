import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor() { }

  getName(): Observable<Name> {
    return of({
      first: 'John',
      last: 'Doe'
    });
  }
}

export interface Name {
  first: string;
  last: string;
}
