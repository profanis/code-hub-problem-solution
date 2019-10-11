import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeParamsComponent } from './consume-params.component';

describe('ConsumeParamsComponent', () => {
  let component: ConsumeParamsComponent;
  let fixture: ComponentFixture<ConsumeParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
