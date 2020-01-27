import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { OrderModel, ProductModel } from './order.model';
import { map, take, first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  foundOrder$: Observable<OrderModel>;

  constructor(private ordersService: OrdersService) { }
  
  ngOnInit() {

    const byUser = (user: string) => (order: OrderModel) => order.user === user;
    const byPrice = (price: number) => (product: ProductModel) => product.price >= price;
    
    this.foundOrder$ =  this.ordersService.getOrders().pipe(
      map((orders: OrderModel[]) =>  orders.find(byUser('User1'))),
      map((order: OrderModel) =>  {
        return {...order, products: order.products.filter(byPrice(70))};
      })
    );
  }

}
