import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartComponent } from './part.component';
import { FormsModule } from '@angular/forms';

import {RouterModule} from '@angular/router';
import {partRoutes} from './part.routes';

@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule,RouterModule.forChild(partRoutes)
  ],
  declarations: [PartComponent]
})
export class PartModule { }
