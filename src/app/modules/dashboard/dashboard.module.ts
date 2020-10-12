// Angular Import
import { CommonModule } from '@angular/common';
import { NgModule, OnInit } from '@angular/core';

// My imports
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user-list/components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.components';
import { DashboardPage } from './pages/dashboard/dashboard.page';

@NgModule({
  declarations: [
    SearchComponent,
    DashboardPage,
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule implements OnInit {

  constructor() {}

  ngOnInit() {

  }
}
