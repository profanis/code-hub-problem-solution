import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    console.log('Message from OnInit');
  }

  ngAfterViewInit(): void {
    console.log('Message from AfterViewInit');
  }
}
