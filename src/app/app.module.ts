import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RxjsExampleModule } from './rxjs-example/rxjs-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RxjsExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
