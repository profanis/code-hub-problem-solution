import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { AdminRestrictedComponent } from './admin-restricted/admin-restricted.component';


@NgModule({
  declarations: [AdminRestrictedComponent],
  imports: [
    CommonModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }
