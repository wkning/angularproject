import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinlunComponent } from './pinlun.component';

import {RouterModule} from '@angular/router';
import {pinlunRoutes} from './pinlun.routes';

@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(pinlunRoutes)
  ],
  declarations: [PinlunComponent]
})
export class PinlunModule { }
