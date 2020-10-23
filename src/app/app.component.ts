import { Component, OnInit } from '@angular/core';
import { Client, ClientService } from './client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-hub-problem-solution';
  clients: Client[];

  constructor(private service: ClientService) {
  }

  ngOnInit() {
    this.service.getClient().subscribe(result => {
      this.clients = result;
    });
  }
}
