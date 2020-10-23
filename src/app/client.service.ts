import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClient(): Observable<Client> {
    return from([
      {
        name: 'John',
        surname: 'Doe',
        isActive: true
      },
      {
        name: 'David',
        surname: 'Jones',
        isActive: false
      }
    ]);
  }
}

export interface Client {
  name: string;
  surname: string;
  isActive: boolean;
}
