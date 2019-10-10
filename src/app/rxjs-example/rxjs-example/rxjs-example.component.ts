import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../rxjs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.scss']
})
export class RxjsExampleComponent implements OnInit {

  items$: Observable<number[]>;
  constructor(private rxjsService: RxjsService) { }

  ngOnInit() {
    this.items$ = this.rxjsService.getItems();
  }

}
