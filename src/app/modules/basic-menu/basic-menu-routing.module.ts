import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentaComponent } from './parenta/parenta.component';
import { ParentbComponent } from './parentb/parentb.component';


// add the needed routing configuration
const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicMenuRoutingModule { }
