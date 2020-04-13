import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonDataService {
  public c_codes: any = null;
  public covidData: any = null;
  public all_data: any = null;
  public recovered: number = 0;
  public deaths: number = 0;
  public total: number = 0;
  public chartData: any = null;
}
