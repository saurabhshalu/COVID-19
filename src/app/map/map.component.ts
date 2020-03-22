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
        this.http.get('./assets/local_corona.json').subscribe((cdata: any[]) => {
          this.covidData = cdata;
          $(document).ready(function() {
            var caseslist = {};
            var deathslist = {};
            var recoveredlist = {};

            for(var i=0;i<cdata.length;i++) {
              var t1 = data[cdata[i]['country'].toUpperCase()]
              if(t1 !==undefined) {
                caseslist[t1] = cdata[i]['cases'];
                deathslist[t1] = cdata[i]['deaths'];
                recoveredlist[t1] = cdata[i]['recovered'];
              }
            }

            // function getIndex(name, data) {
            //   let x = 0;
            //   for(var i=0;i<data.length;i++) {
            //     if(data[i]['country'].toUpperCase()==name.toUpperCase()) {    
            //       return x;
            //     }
            //     x++;
            //   }
            //   return -1;
            // }
            

            $('#vmap').vectorMap({
              map: 'world_en',
              backgroundColor: 'rgb(208, 208, 211)',
              borderColor: 'black',
              borderOpacity: 0.7,
              borderWidth: 1,
              color: '#62d2a2',
              onLabelShow: function(event, label, code) {
                label[0].style.fontSize = '18px';
                var temp = caseslist[code.toUpperCase()];
                if(temp!=undefined)
                {   
                  document.getElementById('floating-data').style.display = 'block';
                  label[0].innerHTML = label[0].innerHTML + " : " + temp + " cases";
                  document.getElementById('totcase').innerHTML = caseslist[code.toUpperCase()];
                  document.getElementById('totrec').innerHTML = recoveredlist[code.toUpperCase()];
                  document.getElementById('totdeath').innerHTML = deathslist[code.toUpperCase()];  
                  var tx = label[0].innerHTML;
                  document.getElementById('country_name').innerHTML = tx.substr(0,tx.indexOf(':'));
                }
                else{
                  document.getElementById('floating-data').style.display = 'none';
                }
              },
              onRegionClick: function(element, code, region)
              {
                if(caseslist[code.toUpperCase()]!=undefined) {
                  document.getElementById('floating-data').style.display = 'block';
                  document.getElementById('totcase').innerHTML = caseslist[code.toUpperCase()];
                  document.getElementById('totrec').innerHTML = recoveredlist[code.toUpperCase()];
                  document.getElementById('totdeath').innerHTML = deathslist[code.toUpperCase()];
                  document.getElementById('country_name').innerHTML = region;
                }
                else {
                  document.getElementById('floating-data').style.display = 'none';
                }      
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

  }
}
