import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsumeParamsComponent } from './consume-params/consume-params.component';


const routes: Routes = [
  {
    path: 'consume-params/:id',
    component: ConsumeParamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumeParamsRoutingModule { }
