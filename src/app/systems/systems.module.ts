import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemsComponent } from './systems.component';

import {RouterModule} from '@angular/router';
import {systemsRoutes} from './systems.routes';


@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(systemsRoutes)
  ],
  declarations: [SystemsComponent]
})
export class SystemsModule { }
