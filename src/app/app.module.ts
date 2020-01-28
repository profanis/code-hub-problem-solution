import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextTransformPipe } from './pipes/text-transform.pipe';
import { DateTransformPipe } from './pipes/date-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TextTransformPipe,
    DateTransformPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
