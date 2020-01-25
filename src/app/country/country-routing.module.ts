import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryResolver } from './country.resolver';


const routes: Routes = [
  {
    path: 'countries',
    component: CountriesListComponent,
    resolve: {
      countries: CountryResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
