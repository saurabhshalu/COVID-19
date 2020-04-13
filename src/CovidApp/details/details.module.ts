import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DetailsRoute } from '../routing/CovidApp.DetailsRouting';
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DetailsRoute)
  ],
  providers: [],
  bootstrap: [DetailsComponent]
})
export class DetailsModule { }
