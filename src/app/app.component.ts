import { Component, OnInit } from '@angular/core';
import { BugsService } from './bugs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private bugsService: BugsService) {

  }

  ngOnInit(): void {
    this.bugsService.get().subscribe();
    // this.bugsService.getWithError().subscribe();
  }


}
