import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  colors: any = [
    "#EFD9CE",
    "#96E6B3",
    "#f4442e",
    "#52b2cf",
    "#FFADAD",
    "#FE8F8F",
    "#B1E693",
    "#FFC898",
    "#C6D57E",
    "#D5BFBF",
    "#79B4B7",
    "#FFF5DA",
    "#9DAD7F",
  ];

  index: number = 0;

  changeColor(): void {
    this.index += 1;
    document.getElementsByTagName("body")[0].style.backgroundColor =
      this.colors[this.index % this.colors.length];
  }

}
