import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverOneComponent } from './observer-one.component';

describe('ObserverOneComponent', () => {
  let component: ObserverOneComponent;
  let fixture: ComponentFixture<ObserverOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
