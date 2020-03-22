import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public data: any = null;

  public recovered: number = 0;
  public deaths: number = 0;
  public total: number = 0;

  public newChartData: any;
  ngOnInit(): void {
    this.newChartData = null;
    //this.http.get('https://corona.lmao.ninja/all').subscribe((data: any[])=>{ 
    this.http.get('./assets/all.json').subscribe((data: any[])=>{ 
      this.data = data;
      this.recovered = +data['recovered'];
      this.deaths = +data['deaths'];
      this.total = +data['cases'];
      this.newChartData = [(this.recovered/this.total*100).toFixed(2),(this.deaths/this.total*100).toFixed(2),((this.total-this.recovered-this.deaths)/this.total*100).toFixed(2)];
      console.log(data);
    },
    (err: any[])=>{
      this.data = null;
      console.log(err);
    });
  }

}
