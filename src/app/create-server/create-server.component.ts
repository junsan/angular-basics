import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrl: './create-server.component.css'
})
export class CreateServerComponent {
  @Output() serverCreated = new EventEmitter<{name: string, status: string, content: string}>();
  serverName!: string;
  serverStatus!: string;
  serverContent!: string;

  createServer() {
    this.serverCreated.emit({name: this.serverName, status: this.serverStatus, content: this.serverContent});
  }
}
