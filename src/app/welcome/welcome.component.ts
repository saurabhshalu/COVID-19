import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private http: HttpClient, public app:AppComponent) { }

  ngOnInit(): void {
    if(this.app.all_data==null) {    
      (<HTMLInputElement>document.getElementById("overlay")).style.display = "block";
      this.http.get('https://corona.lmao.ninja/all').subscribe((data: any[])=>{ 
      //this.http.get('./assets/all.json').subscribe((data: any[])=>{
        this.app.all_data = data;
        this.app.recovered = +data['recovered'];
        this.app.deaths = +data['deaths'];
        this.app.total = +data['cases'];
        this.app.chartData = [(this.app.recovered/this.app.total*100).toFixed(2),(this.app.deaths/this.app.total*100).toFixed(2),((this.app.total-this.app.recovered-this.app.deaths)/this.app.total*100).toFixed(2)];
        (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
      },
      (err: any[])=>{
        this.app.all_data = null;
        console.log(err);
        (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
      });
    }
  }
}
