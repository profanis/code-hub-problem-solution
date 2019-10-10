import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../rxjs.service';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.scss']
})
export class RxjsExampleComponent implements OnInit {

  items: number[];
  constructor(private rxjsService: RxjsService) { }

  ngOnInit() {

  }

}
