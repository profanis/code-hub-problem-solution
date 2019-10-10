import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  getItems() {
    return of([1, 2, 3, 4, 5]);
  }
}
