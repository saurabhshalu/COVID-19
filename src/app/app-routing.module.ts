import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintainanceComponent } from './maintainance/maintainance.component';


const routes: Routes = [
  {
    path: '**',
    component: MaintainanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
