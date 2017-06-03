import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge3',
  templateUrl: './challenge3.component.html',
  styleUrls: ['./challenge3.component.css']
})
export class Challenge3Component implements OnInit {
  toggle = false;
  buttonClicks = [];
  constructor() { }

  onButtonClick() {
    this.toggle = !this.toggle;
    this.buttonClicks.push(this.buttonClicks.length + 1);
  }

  ngOnInit() {
  }

}
