import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private http: HttpClient,public app: AppComponent) { }

  ngOnInit(): void {
    if(this.app.covidData==null) {    
      (<HTMLInputElement>document.getElementById("overlay")).style.display = "block";
      this.http.get('https://corona.lmao.ninja/countries').subscribe((data: any[]) => {
      //this.http.get('./assets/local_corona.json').subscribe((data: any[]) => {
        this.app.covidData = data;
        (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
      },
      (err: any[])=>{
        this.app.covidData = null;
        console.log(err);     
        (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
      });
    } 
  }
}
