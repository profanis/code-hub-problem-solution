import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { OrderModel } from './orders/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  getOrders(): Observable<OrderModel[]> {
    const orders = [
      {
        user: 'User1',
        products: [
          {
            name: 'Shoe 1',
            desc: 'foo',
            price: 50
          },
          {
            name: 'Shoe 2',
            desc: 'foo',
            price: 70
          },
          {
            name: 'Shoe 3',
            desc: 'foo',
            price: 100
          }
        ]
      },
      {
        user: 'User2',
        products: [
          {
            name: 'Shoe 1',
            desc: 'foo',
            price: 50
          },
          {
            name: 'Shoe 2',
            desc: 'foo',
            price: 70
          },
          {
            name: 'Shoe 3',
            desc: 'foo',
            price: 100
          }
        ]
      }
    ]


    return of(orders);
  }
}
