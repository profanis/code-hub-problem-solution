import { Component, OnInit } from '@angular/core';
import { CountriesCapitalService } from 'src/app/countries-capital.service';
import { Country } from './country.model';

@Component({
  selector: 'app-countries-capital',
  template: `
  {{data.name}} - {{data.capital}}
  `,
  styleUrls: ['./countries-capital.component.scss']
})
export class CountriesCapitalComponent implements OnInit {

  data: Country = {
    name: '',
    capital: ''
  };

  constructor(private service: CountriesCapitalService) { }

  ngOnInit() {
    this.service.getCountriesAndCapital().subscribe(result => this.data = result[0]);
  }

}
