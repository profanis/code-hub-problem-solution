import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRestrictedComponent } from './admin-restricted/admin-restricted.component';
import { IsAdminGuard } from '../../core/is-admin.guard';


const routes: Routes = [
  {
    path: 'adminRestricted',
    component: AdminRestrictedComponent,
    canActivate: [IsAdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
