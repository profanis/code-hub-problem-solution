import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BasicFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BasicFormComponent
  ]
})
export class BasicFormModule { }
