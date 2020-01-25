import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CountryModel } from './country.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryResolver implements Resolve<CountryModel[]> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryModel[]> {
    return of(null);
  }

}
