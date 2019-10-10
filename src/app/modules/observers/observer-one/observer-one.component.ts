import { Component, OnInit } from '@angular/core';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-observer-one',
  templateUrl: './observer-one.component.html',
  styleUrls: ['./observer-one.component.scss']
})
export class ObserverOneComponent implements OnInit {

  observerData: string;

  constructor(private observerService: ObserverService) { }


  ngOnInit() {
    this.observerService.ping.subscribe(data => {
      this.observerData = data;
    });
  }

  triggerObserver() {
    this.observerService.propagateData();
  }
}
