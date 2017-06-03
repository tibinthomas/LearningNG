import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() {
    setTimeout(() => {this.allowNewServer=true;},2000)
   }

  serverId: number = 174;
  serverStatus: string = 'offline';

  allowNewServer: boolean = false;



  getServerStatus() {
    return this.serverStatus;
  }
  ngOnInit() {
  }

}
