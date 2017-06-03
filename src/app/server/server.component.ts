import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit {
    serverName = '';
    serverList = [];
    serverCreatedStatus = false;
    constructor() { }

    onGetInput(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    onAddServer() {
        this.serverList.push(this.serverName);
        this.serverCreatedStatus = true;
    }

    ngOnInit() { }
}