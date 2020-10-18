import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './countries/countries-capital/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesCapitalService {

  constructor(private http: HttpClient) { }

  getCountriesAndCapital(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/region/europe?fields=name;capital;currencies');
  }
}
