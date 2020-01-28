import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextTransformPipe } from './pipes/text-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TextTransformPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
