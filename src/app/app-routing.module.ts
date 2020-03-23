import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MapComponent } from './map/map.component';
import { DetailsComponent } from './details/details.component';
import { HelpComponent } from './help/help.component';


const routes: Routes = [
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: '**',
    component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
