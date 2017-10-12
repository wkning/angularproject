import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routes'

@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(userRoutes)
  ],
  declarations: [UserComponent]
})
export class UserModule { }
