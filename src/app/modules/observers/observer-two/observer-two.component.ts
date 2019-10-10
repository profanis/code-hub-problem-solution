import { Component, OnInit } from '@angular/core';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-observer-two',
  templateUrl: './observer-two.component.html',
  styleUrls: ['./observer-two.component.scss']
})
export class ObserverTwoComponent implements OnInit {


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
