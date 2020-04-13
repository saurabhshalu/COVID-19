import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';


import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapRoutes } from '../routing/CovidApp.MapRouting';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MapRoutes)
  ],
  providers: [],
  bootstrap: [MapComponent]
})
export class MapModule { }
