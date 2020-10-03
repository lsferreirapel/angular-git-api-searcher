import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
