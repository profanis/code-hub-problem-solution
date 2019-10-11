import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-consume-params',
  templateUrl: './consume-params.component.html',
  styleUrls: ['./consume-params.component.scss']
})
export class ConsumeParamsComponent implements OnInit, OnDestroy {

  param: string;
  routeSubscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe((p) => {
      this.param = p.id;
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}
