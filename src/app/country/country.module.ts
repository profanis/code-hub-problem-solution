import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryRoutingModule } from './country-routing.module';


@NgModule({
  declarations: [CountriesListComponent],
  imports: [
    CommonModule,
    CountryRoutingModule
  ],
  exports: [
    CountryRoutingModule
  ]
})
export class CountryModule { }
