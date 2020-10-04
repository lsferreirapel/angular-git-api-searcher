import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesComponent } from './modules/repository/components/repositories/repositories.component';
import { UserComponent } from './modules/user/components/user/user.component';


const routes: Routes = [
  {
    path: 'repos',
    component: RepositoriesComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
