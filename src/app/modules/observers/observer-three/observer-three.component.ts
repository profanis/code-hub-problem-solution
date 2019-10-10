import { Component, OnInit } from '@angular/core';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-observer-three',
  templateUrl: './observer-three.component.html',
  styleUrls: ['./observer-three.component.scss']
})
export class ObserverThreeComponent implements OnInit {


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
