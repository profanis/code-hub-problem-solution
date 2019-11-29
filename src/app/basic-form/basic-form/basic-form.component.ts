import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  form: FormGroup

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl()
    })
  }

}
