import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverTwoComponent } from './observer-two.component';

describe('ObserverTwoComponent', () => {
  let component: ObserverTwoComponent;
  let fixture: ComponentFixture<ObserverTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
