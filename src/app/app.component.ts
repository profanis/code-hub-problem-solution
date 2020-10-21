import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NameService } from './name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-hub-problem-solution';
  formGroup: FormGroup;

  constructor(private service: NameService) {
    this.formGroup = new FormGroup({
      fullName: new FormControl('Martha')
    });
  }
  ngOnInit(): void {
    this.service.getName().subscribe(result => {
      this.formGroup.get('fullName').setValue(result.first + ' - ' + result.last);
    });
  }
}
