import { Component, ViewChild, ElementRef } from '@angular/core';

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
  servers = ['Test 1', 'Test 2'];
  showDetails = false;
  numberClicks: number[] = [];
  incrementClicks = 0;
  getServers = [
    {name: 'Test 1', status: 'online', content: 'This is an online server.'},
    {name: 'Test 2', status: 'offline', content: 'This is an offline server.'},
  ];
  @ViewChild('localName') serverlocalName!: ElementRef;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
  }

  createServer() {
    this.serverStatus = "Server has been created. Server name is " + this.serverName;
    this.showServer = true;
    this.servers.push(this.serverName);
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername() {
    this.username = '';
  }

  displayDetails() {
    this.incrementClicks = this.incrementClicks + 1;
    this.showDetails = !this.showDetails;
    this.numberClicks.push(this.incrementClicks);
  }

  getBgColor(clickButton: number) {
    return clickButton >= 5 ? 'blue' : 'white';
  } 

  handlerServerCreated(serverData: {name: string, status: string, content: string}) {
    this.getServers.push({
      name: serverData.name,
      status: serverData.status,
      content: serverData.content
    });
  }

  outuputLR(localName: HTMLInputElement) {
    console.log(this.serverlocalName.nativeElement.value);
  }
}
