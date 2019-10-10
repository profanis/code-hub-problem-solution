import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverOneComponent } from './observer-one/observer-one.component';
import { ObserverTwoComponent } from './observer-two/observer-two.component';
import { ObserverThreeComponent } from './observer-three/observer-three.component';



@NgModule({
  declarations: [ObserverOneComponent, ObserverTwoComponent, ObserverThreeComponent],
  imports: [
    CommonModule
  ],
  exports: [ObserverOneComponent, ObserverTwoComponent, ObserverThreeComponent]
})
export class ObserversModule { }
