import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionComponent } from './permission.component';

import {RouterModule} from '@angular/router';
import {permissionRoutes} from './permission.routes';

import {DataTableModule,SharedModule} from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(permissionRoutes),DataTableModule,SharedModule
  ],
  declarations: [PermissionComponent]
})
export class PermissionModule { }
