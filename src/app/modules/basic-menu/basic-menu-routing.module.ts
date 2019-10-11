import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentaComponent } from './parenta/parenta.component';
import { ParentbComponent } from './parentb/parentb.component';


const routes: Routes = [
  {
    path: 'parenta',
    component: ParentaComponent
  },
  {
    path: 'parentb',
    component: ParentbComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicMenuRoutingModule { }
