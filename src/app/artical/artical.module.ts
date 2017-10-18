import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticalComponent } from './artical.component';
import {DataTableModule,SharedModule} from 'primeng/primeng';

import {RouterModule} from '@angular/router';
import {articalsRoutes} from './articals.routes';

@NgModule({
  imports: [
    CommonModule,RouterModule,RouterModule.forChild(articalsRoutes),DataTableModule,SharedModule
  ],
  declarations: [ArticalComponent]
})
export class ArticalModule { }
