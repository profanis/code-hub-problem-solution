import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRestrictedComponent } from './admin-restricted/admin-restricted.component';
import { IsAdminGuard } from '../../core/is-admin.guard';
import { IsFormValidGuard } from '../../core/is-form-valid.guard';


const routes: Routes = [
  {
    path: 'adminRestricted',
    component: AdminRestrictedComponent,
    canActivate: [IsAdminGuard],
    canDeactivate: [IsFormValidGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
