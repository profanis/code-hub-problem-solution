import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumeParamsRoutingModule } from './consume-params-routing.module';
import { ConsumeParamsComponent } from './consume-params/consume-params.component';


@NgModule({
  declarations: [ConsumeParamsComponent],
  imports: [
    CommonModule,
    ConsumeParamsRoutingModule
  ]
})
export class ConsumeParamsModule { }
