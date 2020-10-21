import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-hub-problem-solution';
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      fullName: new FormControl('')
    });
  }
  ngOnInit(): void {
  }
}
