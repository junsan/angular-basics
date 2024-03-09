import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverStatus = "No Server created.";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
  }

  createServer() {
    this.serverStatus = "Server has been created.";
  }

}
