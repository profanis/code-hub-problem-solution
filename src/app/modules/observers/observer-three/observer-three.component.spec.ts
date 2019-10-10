import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverThreeComponent } from './observer-three.component';

describe('ObserverThreeComponent', () => {
  let component: ObserverThreeComponent;
  let fixture: ComponentFixture<ObserverThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserverThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserverThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
