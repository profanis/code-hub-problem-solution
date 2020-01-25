import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryModule } from './country/country.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CountryModule,
    RouterModule.forRoot([{
      path: '', redirectTo: 'countries', pathMatch: 'full'
    }])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
