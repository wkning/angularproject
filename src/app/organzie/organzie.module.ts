import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganzieComponent } from './organzie.component';

import {RouterModule} from '@angular/router';
import {zhuzhiRoutes} from './zhuzhi.routes';

@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(zhuzhiRoutes)
  ],
  declarations: [OrganzieComponent]
})
export class OrganzieModule { }
