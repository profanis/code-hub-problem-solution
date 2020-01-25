import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CountryModel } from './country.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  get(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>('https://restcountries.eu/rest/v2/').pipe(
      map((countries: any[]) => {
        return countries.map(country => ({
          name: country.name,
          capital: country.capital,
          region: country.region,
          code2: country.alpha2Code,
          code3: country.alpha3Code
        }));
      })
    );
  }
}
