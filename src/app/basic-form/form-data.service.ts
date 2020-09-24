import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  getData() {
    return of(
      {
        firstName: 'Fanis',
        lastName: 'Prodromou',
        isExperienced: true,
        angular: '1',
        favouriteLanguage: 'JS',
        jsversion: 'ES6'
      }
    )
  }
}
