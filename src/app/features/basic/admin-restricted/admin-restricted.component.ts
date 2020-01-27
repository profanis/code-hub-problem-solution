import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../core/base-component';

@Component({
  selector: 'app-admin-restricted',
  templateUrl: './admin-restricted.component.html',
  styleUrls: ['./admin-restricted.component.scss']
})
export class AdminRestrictedComponent implements OnInit, BaseComponent {
  canDeactivate = () => false;

  constructor() { }

  ngOnInit() {
  }

}
