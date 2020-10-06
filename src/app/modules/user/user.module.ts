import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RepositoryComponent } from './components/repository-list/components/repository/repository.component';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserPage } from './pages/user/user.page';

@NgModule({
  declarations: [
    UserInfoComponent,
    RepositoryListComponent,
    RepositoryComponent,
    UserPage
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule {
  constructor() { }
}
