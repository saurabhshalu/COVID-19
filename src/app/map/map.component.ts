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
          scaleColors: ['#b6d6ff', '#005ace'],
        });

        $('#vmap').vectorMap('set', 'colors', { in: 'rgba(99,99,220,0.5)', be: '#b10', bg: '#b10'});
        
        (<any>document.getElementsByClassName('jqvmap-zoomin'))[0].style.height = "15" + "px";
        (<any>document.getElementsByClassName('jqvmap-zoomin'))[0].style.width = "15" + "px";
        (<any>document.getElementsByClassName('jqvmap-zoomout'))[0].style.height = "15" + "px";
        (<any>document.getElementsByClassName('jqvmap-zoomout'))[0].style.width = "15" + "px";
    }.bind(this));
  }

}
