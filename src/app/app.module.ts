import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnitTestingModule } from './unit-testing/unit-testing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UnitTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
