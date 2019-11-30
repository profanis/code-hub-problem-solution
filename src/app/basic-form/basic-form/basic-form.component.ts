import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerModel } from '../customer.model';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent {
  programmingLanguages = ['TS', 'JS', 'C#'];

  model: Partial<CustomerModel> = {}

  capitalize($event: string) {
    this.model.firstName = $event.toUpperCase();
  }

  submitForm(form: NgForm) {
    console.log(form.value)
  }

}
