import { Injectable } from '@angular/core';
import { ProdcutModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): ProdcutModel[] {
    return [...Array(50).keys()].map(it => ({id: it, name: `item ${it}`}));
  }
}
