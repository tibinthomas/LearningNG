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
  serverCreationStatus: string = "No server was created";
  serverName: string;

  allowNewServer: boolean = false;

  onServerAdd() {
    this.serverCreationStatus = "Server, " +  this.serverName + " created successfully";
  }

  onUpdateservername(event: Event) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }



  getServerStatus() {
    return this.serverStatus;
  }
  ngOnInit() {
  }

}
