import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionComponent } from './permission.component';

import {RouterModule} from '@angular/router';
import {permissionRoutes} from './permission.routes';


@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(permissionRoutes)
  ],
  declarations: [PermissionComponent]
})
export class PermissionModule { }
