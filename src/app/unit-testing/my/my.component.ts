import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    // Build your form here
  }

}
