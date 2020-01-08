import { Component, OnInit, Input } from '@angular/core';
import { ProdcutModel } from '../product.model';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.scss']
})
export class DumbComponent {

  @Input() product: ProdcutModel;

}
