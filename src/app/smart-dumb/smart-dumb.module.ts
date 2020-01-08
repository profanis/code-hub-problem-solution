import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartDumbRoutingModule } from './smart-dumb-routing.module';
import { SmartComponent } from './smart/smart.component';
import { DumbComponent } from './dumb/dumb.component';


@NgModule({
  declarations: [SmartComponent, DumbComponent],
  imports: [
    CommonModule,
    SmartDumbRoutingModule
  ]
})
export class SmartDumbModule { }
