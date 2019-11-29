import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './basic-form/basic-form.component';


@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    BasicFormComponent
  ]
})
export class BasicFormModule { }
