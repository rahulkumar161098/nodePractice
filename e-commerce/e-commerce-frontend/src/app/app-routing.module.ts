import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from './dashboard/auth/user-auth.guard';

const routes: Routes = [
  { path: 'dashboard', loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule ) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
