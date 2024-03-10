import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverStatus = "No Server created.";
  serverName = 'TestServer';
  username = '';
  showServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
  }

  createServer() {
    this.serverStatus = "Server has been created. Server name is " + this.serverName;
    this.showServer = true;
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername() {
    this.username = '';
  }

}
