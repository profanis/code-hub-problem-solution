import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryModel } from './country.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  /**
   * GET data from https://restcountries.eu/rest/v2/
   * Return {
   *    name,
   *    capital,
   *    region,
   *    code2: alpha2Code,
   *    code3: alpha3Code
   * }
   *
   */
  get(): Observable<CountryModel[]> {
    return of(null);
  }
}
