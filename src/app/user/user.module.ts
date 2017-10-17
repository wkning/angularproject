import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routes';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import {FormsModule} from '@angular/forms';

import {DataTableModule,SharedModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(userRoutes),FormsModule,DataTableModule,SharedModule
  ],
  declarations: [UserComponent, AddUserComponent, UserListComponent]
})
export class UserModule { }
