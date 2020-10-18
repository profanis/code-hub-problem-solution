import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesCapitalComponent } from './countries-capital.component';

describe('CountriesCapitalComponent', () => {
  let component: CountriesCapitalComponent;
  let fixture: ComponentFixture<CountriesCapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesCapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
