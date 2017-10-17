import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { HeaderComponent } from './header/header.component';
import { LeftComponent } from './left/left.component';

import {RouterModule} from '@angular/router';
import {workspaceRoutes} from './workspace.routes';
import {AuthService} from './auth.service'


@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(workspaceRoutes)
  ],
  declarations: [WorkspaceComponent, HeaderComponent, LeftComponent],
  providers:[AuthService]
})
export class WorkspaceModule { }
