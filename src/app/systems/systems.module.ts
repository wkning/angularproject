import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemsComponent } from './systems.component';

import {RouterModule} from '@angular/router';
import {systemsRoutes} from './systems.routes';
import { ChartsModule } from 'ng2-charts';
import { EchartOptionDirective } from './echart-option.directive';


@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(systemsRoutes),ChartsModule
  ],
  declarations: [SystemsComponent, EchartOptionDirective]
})
export class SystemsModule { }
