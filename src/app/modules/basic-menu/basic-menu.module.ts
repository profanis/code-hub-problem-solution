import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicMenuRoutingModule } from './basic-menu-routing.module';
import { ParentaComponent } from './parenta/parenta.component';
import { ParentbComponent } from './parentb/parentb.component';


@NgModule({
  declarations: [ParentaComponent, ParentbComponent],
  imports: [
    CommonModule,
    BasicMenuRoutingModule
  ]
})
export class BasicMenuModule { }
