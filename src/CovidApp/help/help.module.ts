import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';


import { HelpComponent } from './help.component';
import { CommonModule } from '@angular/common';
import { HelpRoutes } from '../routing/CovidApp.HelpRouting';

@NgModule({
  declarations: [
    HelpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HelpRoutes)
  ],
  providers: [],
  bootstrap: [HelpComponent]
})
export class HelpModule { }
