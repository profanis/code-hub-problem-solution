import { Component, OnInit } from '@angular/core';
import { DateAmount } from '../dateAmount';
import { PipesService } from '../pipes.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  dateAmount: DateAmount;
  constructor(private service: PipesService) { }

  ngOnInit() {
    this.dateAmount = this.service.getDateAmount();
  }

}
