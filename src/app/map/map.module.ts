import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';

import {RouterModule} from '@angular/router';
import {mapRoutes} from './map.routes'

@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(mapRoutes)
  ],
  declarations: [MapComponent]
})
export class MapModule { }
