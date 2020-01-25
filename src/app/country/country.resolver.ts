import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CountryModel } from './country.model';
import { Observable } from 'rxjs';
import { CountriesService } from './countries.service';

@Injectable({
  providedIn: 'root'
})
export class CountryResolver implements Resolve<CountryModel[]> {

  constructor(private countriesService: CountriesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryModel[]> {
    return this.countriesService.get();
  }

}
