import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClient(): Observable<Client[]> {
    const clients: Client[] = [
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
    ];
    return of(clients);
  }
}

export interface Client {
  name: string;
  surname: string;
  isActive: boolean;
}
