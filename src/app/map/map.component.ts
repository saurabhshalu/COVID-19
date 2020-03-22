import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public mycolors: any = {
    in: 'red',
    pk: 'blue'
  };
  constructor(private http: HttpClient) { }

  public c_codes: any = null;
  public covidData: any = null;
  public colorlist: any = {}

  public calculateEverything() {
    console.log(this.c_codes['INDIA'])
    let maxcase = this.covidData[0]['cases']
    this.covidData.forEach(element => {
      let per: number = +(element['cases']/maxcase).toFixed(2);
      if (per <= 0.05) {
        per = 0.2;
      }
      else if (per>=0.7) {
        per = 0.7;
      }
      let t1 = element['country'].toUpperCase()
      let c = this.c_codes[t1]
      if (c!==undefined) {
        this.colorlist[c.toLowerCase()] = 'rgba(255,0,0,' + per + ')';
      }
    });
  }

  ngOnInit(): void {
    this.http.get('./assets/map_data/c_codes.json').subscribe((data: any) => {
        this.c_codes = data;
        //this.http.get('https://corona.lmao.ninja/countries').subscribe((data: any[]) => {
        this.http.get('./assets/local_corona.json').subscribe((data: any[]) => {
          this.covidData = data;
          $(document).ready(function() {
            $('#vmap').vectorMap({
              map: 'world_en',
              backgroundColor: 'rgb(208, 208, 211)',
              borderColor: 'black',
              borderOpacity: 0.7,
              borderWidth: 1,
              color: '#62d2a2',
              onLabelShow: function(event, label, code) {  
                //label[0].innerHTML = label[0].innerHTML + " : - cases";
                label[0].style.fontSize = '18px';
              }
            });
            this.calculateEverything();
            $('#vmap').vectorMap('set', 'colors', this.colorlist);
            (<any>document.getElementsByClassName('jqvmap-zoomin'))[0].style.height = "15" + "px";
            (<any>document.getElementsByClassName('jqvmap-zoomin'))[0].style.width = "15" + "px";
            (<any>document.getElementsByClassName('jqvmap-zoomout'))[0].style.height = "15" + "px";
            (<any>document.getElementsByClassName('jqvmap-zoomout'))[0].style.width = "15" + "px";
          }.bind(this));
        },
        (err: any[]) => {
            this.covidData = null;
            console.log(err);
        });
    },
    (err: any[]) => {
        this.c_codes = null;
        console.log(err);
    });
  }
  ngAfterViewInit(): void {
    // $(document).ready(function() {
    //   $('#vmap').vectorMap({
    //     map: 'world_en',
    //     backgroundColor: 'transparent',
    //     scaleColors: ['#b6d6ff', '#005ace'],
    //     colors: this.mycolors
    //   });

    //     // $('#vmap').vectorMap('set', 'colors', { in: 'rgba(99,99,220,0.5)', be: '#b10', bg: '#b10'});
        
    //   (<any>document.getElementsByClassName('jqvmap-zoomin'))[0].style.height = "15" + "px";
    //   (<any>document.getElementsByClassName('jqvmap-zoomin'))[0].style.width = "15" + "px";
    //   (<any>document.getElementsByClassName('jqvmap-zoomout'))[0].style.height = "15" + "px";
    //   (<any>document.getElementsByClassName('jqvmap-zoomout'))[0].style.width = "15" + "px";
    // }.bind(this));
  }
}
