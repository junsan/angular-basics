import { Component } from '@angular/core'; 

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: `
        .online {
            color: white;
        }
    `
})

export class ServerComponent {
    serverId: number = 20;
    serverStatus: string = 'Online';
    
    constructor() {
        const x = Math.random()
        console.log(x)
        this.serverStatus = x > 0.5 ? 'Online' : 'Offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }
} 