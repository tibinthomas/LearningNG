import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge2',
  templateUrl: './challenge2.component.html',
  styleUrls: ['./challenge2.component.css']
})
export class Challenge2Component implements OnInit {

  userName = '';
  luckeyOrNot: boolean;

  constructor() {
    this.luckeyOrNot = Math.random() > 0.5 ? true : false;
  }

  isLucky() {
    return this.luckeyOrNot === true ? 'green' : 'black';
  }

  ngOnInit() {
  }

}
