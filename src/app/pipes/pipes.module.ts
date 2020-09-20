import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { ExamplePipe } from './pipes.pipe';



@NgModule({
  declarations: [PipesComponent, ExamplePipe],
  imports: [
    CommonModule
  ],
  exports: [PipesComponent]
})
export class PipesModule { }
