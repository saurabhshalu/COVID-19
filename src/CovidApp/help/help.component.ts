import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (<HTMLInputElement>document.getElementById("overlay")).style.display = "none";
  }

}
