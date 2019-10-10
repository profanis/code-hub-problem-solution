import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObserversModule } from './modules/observers/observers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ObserversModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
