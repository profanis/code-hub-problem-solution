import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;
  programmingLanguages = ['TS', 'JS', 'C#'];

  constructor(private fb: FormBuilder, private formDataService: FormDataService) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, Validators.required],
      isExperienced: [null, Validators.required],
      angular: [null, Validators.required],
      favouriteLanguage: [null, Validators.required],
      jsversion: [null, Validators.required]
    });


    this.formDataService.getData().subscribe(data => this.form.patchValue(data))


    this.form.get('favouriteLanguage').valueChanges.subscribe(value => {

      const jsVersionFormControl = this.form.get('jsversion');

      if (value === 'JS') {
        jsVersionFormControl.setValidators(Validators.required);
      } else {
        jsVersionFormControl.clearValidators();
      }
      jsVersionFormControl.updateValueAndValidity();
    });

  }

}
