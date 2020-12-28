import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyComponent } from './my.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(waitForAsync(() => {
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

    expect(component.form.valid).toBeTruthy();
  });
});
