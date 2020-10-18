import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifecycleComponent } from './lifecycle/lifecycle.component';



@NgModule({
  declarations: [LifecycleComponent],
  imports: [
    CommonModule
  ],
  exports: [LifecycleComponent]
})
export class LifecycleModule { }
