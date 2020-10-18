import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesCapitalService {

  constructor(private http: HttpClient) { }

  getCountriesAndCapital(): Observable<any> {
    return this.http.get<any>('https://restcountries.eu/rest/v2/region/europe?fields=name;capital;currencies');
  }
}
