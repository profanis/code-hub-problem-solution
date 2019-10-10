import { Component, OnInit, OnDestroy } from '@angular/core';
import { RxjsService } from '../rxjs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.scss']
})
export class RxjsExampleComponent implements OnInit, OnDestroy {

  items: number[];
  subscription: Subscription;
  constructor(private rxjsService: RxjsService) { }

  ngOnInit() {
    this.subscription = this.rxjsService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
