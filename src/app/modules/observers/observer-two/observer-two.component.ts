import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObserverService } from '../observer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observer-two',
  templateUrl: './observer-two.component.html',
  styleUrls: ['./observer-two.component.scss']
})
export class ObserverTwoComponent implements OnInit, OnDestroy {


  observerData: string;
  subscription: Subscription;

  constructor(private observerService: ObserverService) { }


  ngOnInit() {
    this.subscription = this.observerService.ping.subscribe(data => {
      this.observerData = data;
    });
  }

  triggerObserver() {
    this.observerService.propagateData();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
