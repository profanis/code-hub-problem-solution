import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicMenuRoutingModule } from './basic-menu-routing.module';
import { ParentaComponent } from './parenta/parenta.component';
import { ParentbComponent } from './parentb/parentb.component';
import { ChildaComponent } from './childa/childa.component';
import { ChildbComponent } from './childb/childb.component';


@NgModule({
  declarations: [ParentaComponent, ParentbComponent, ChildaComponent, ChildbComponent],
  imports: [
    CommonModule,
    BasicMenuRoutingModule
  ]
})
export class BasicMenuModule { }
