import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  getItems() {
    return [...Array(10).keys()].map(it => ({id: it, name: `item ${it}`}));
  }

}
