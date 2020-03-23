import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'COVID-19';
  c_codes: any = null;
  covidData: any = null;
  
  
  public all_data: any = null;
  public recovered: number = 0;
  public deaths: number = 0;
  public total: number = 0;
  public chartData: any = null;
}
