import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganzieComponent } from './organzie.component';

import {RouterModule} from '@angular/router';
import {zhuzhiRoutes} from './zhuzhi.routes';

import {FormsModule} from '@angular/forms';
import {TreeModule,TreeNode} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(zhuzhiRoutes),TreeModule,FormsModule
  ],
  declarations: [OrganzieComponent]
})
export class OrganzieModule { }
