import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryModel } from '../country.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  countries: CountryModel[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.countries = this.route.snapshot.data.countries;
  }

}
