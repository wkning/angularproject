import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';

import {RouterModule} from '@angular/router';
import {mapRoutes} from './map.routes'
import {BaiduMapModule} from 'angular2-baidu-map';

@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(mapRoutes),BaiduMapModule
  ],
  declarations: [MapComponent]
})
export class MapModule { }
