import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponent } from './my.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form is invalid', () => {
    expect(component.form.invalid).toBeTruthy();
  });

  it('Form is valid', () => {
    const firstNameControl = component.form.get('firstName');
    const lastNameControl = component.form.get('lastName');
    const emailControl = component.form.get('email');
    const passwordControl = component.form.get('password');

    firstNameControl.setValue('fanis');
    expect(firstNameControl.valid).toBeTruthy();

    lastNameControl.setValue('prodromou');
    expect(lastNameControl.valid).toBeTruthy();

    emailControl.setValue('prodromouf@gmail.com');
    expect(emailControl.valid).toBeTruthy();

    passwordControl.setValue('secretpass');
    expect(passwordControl.valid).toBeTruthy();

    expect(component.form.valid).toBeTruthy();
  });
});
