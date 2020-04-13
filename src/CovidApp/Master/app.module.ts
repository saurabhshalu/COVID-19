import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { RouterModule } from '@angular/router';


import { MainRoutes } from '../routing/CovidApp.MainRouting';
import { AppComponent } from './CovidApp.MasterPageComponent';
import { HeaderComponent } from './header.component';
import { WelcomeComponent } from './welcome.component';
import { DoughnutComponent } from './doughnut.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    DoughnutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRoutes),
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
