import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './modules/dashboard/pages/dashboard/dashboard.page';
import { RepositoryPage } from './modules/repository/pages/repository.page';
import { UserPage } from './modules/user/pages/user/user.page';



const routes: Routes = [
  {
    path: 'users/:login',
    component: UserPage
  },
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'repos/:login/:repos',
    component: RepositoryPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
