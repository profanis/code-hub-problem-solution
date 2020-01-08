import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProdcutModel } from '../product.model';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent implements OnInit {

  products: ProdcutModel[];
  selectedProduct: ProdcutModel;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  selectProduct(product: ProdcutModel) {
    this.selectedProduct = product;
  }

}
