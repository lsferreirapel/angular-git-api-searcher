import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './modules/dashboard/components/search/search.component';
import { UserComponent } from './modules/dashboard/components/user-list/components/user/user.component';
import { DashboardPage } from './modules/dashboard/pages/dashboard/dashboard.page';
import { RepositoryComponent } from './modules/user/components/repository-list/components/repository/repository.component';
import { UserPage } from './modules/user/pages/user/user.page';


const routes: Routes = [
  {
    path: 'repos/:login',
    component: UserPage
  },
  {
    path: '**',
    component: DashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
