import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentaComponent } from './parenta.component';

describe('ParentaComponent', () => {
  let component: ParentaComponent;
  let fixture: ComponentFixture<ParentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
