import { Component } from '@angular/core';
import { Client } from './client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'code-hub-problem-solution';
  clients: Client[];
}
