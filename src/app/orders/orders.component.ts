import { Component, OnInit } from '@angular/core';
import { OrderModel } from './order.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  foundOrder$: Observable<OrderModel>;

  constructor() { }
  
  ngOnInit() {
    // this.foundOrder$ =  ??
  }

}
