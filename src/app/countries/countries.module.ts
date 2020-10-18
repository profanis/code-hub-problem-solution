import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesCapitalComponent } from './countries-capital/countries-capital.component';



@NgModule({
  declarations: [CountriesCapitalComponent],
  imports: [
    CommonModule
  ],
  exports: [CountriesCapitalComponent]
})
export class CountriesModule { }
