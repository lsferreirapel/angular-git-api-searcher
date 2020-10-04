import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepositoryComponent } from './modules/dashboard/components/repository-list/components/repository/repository.component';
import { SearchComponent } from './modules/dashboard/components/search/search.component';
import { UserComponent } from './modules/dashboard/components/user-list/components/user/user.component';
import { DashboardPage } from './modules/dashboard/pages/dashboard/dashboard.page';


const routes: Routes = [
  {
    path: 'repos',
    component: RepositoryComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'search',
    component: SearchComponent
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
