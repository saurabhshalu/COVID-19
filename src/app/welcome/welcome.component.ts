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

  ngOnInit(): void {
    console.log("initial...");
    //https://corona.lmao.ninja/all
    this.http.get('https://corona.lmao.ninja/all').subscribe((data: any[])=>{ 
      this.data = data;
      console.log(data);
    },
    (err: any[])=>{
      this.data = null;
      console.log(err);
    });
  }

}
