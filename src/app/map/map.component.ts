import { Component, OnInit } from '@angular/core';
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
  constructor() { }


  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    $(document).ready(function() {
      $('#vmap').vectorMap({
          map: 'world_en',
          backgroundColor: 'transparent',
          borderColor: '#818181',
          borderOpacity: 0.25,
          borderWidth: 1,
          color: '#f4f3f0',
          enableZoom: true,
          hoverColor: '#c9dfaf',
          hoverOpacity: null,
          normalizeFunction: 'linear',
          scaleColors: ['#b6d6ff', '#005ace'],
          selectedColor: '#c9dfaf',
          selectedRegions: null,
          showTooltip: true,
          pins: {
              "pk": "&#9679;",
              "in": "&#9679"
          },
          onRegionClick: function(element, code, region) {
              var message = 'You clicked "' +
                  region +
                  '" which has the code: ' +
                  code.toUpperCase();
  
              alert(message);
          },
          onLabelShow: function(event, label, code) {
              //states =["fl","ma","md","wa","mn","ny","wi","hi","vt","nv","ia","ca","or","nj"];
              /*if (states.indexOf(code) <= -1) {
                  event.preventDefault();
              } else if (label[0].innerHTML == "Florida") {
                  label[0].innerHTML = label[0].innerHTML + " \n- The state where I live!!";
              }*/
              label[0].innerHTML = label[0].innerHTML + " - The state where I live!!";
          },
          colors: this.mycolors
        });
        
        (<any>document.getElementsByClassName('jqvmap-zoomin'))[0].style.height = "15" + "px";
        (<any>document.getElementsByClassName('jqvmap-zoomin'))[0].style.width = "15" + "px";
        (<any>document.getElementsByClassName('jqvmap-zoomout'))[0].style.height = "15" + "px";
        (<any>document.getElementsByClassName('jqvmap-zoomout'))[0].style.width = "15" + "px";
    }.bind(this));
  }

}
