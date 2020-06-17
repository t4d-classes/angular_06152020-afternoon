import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTableWrapperComponent } from './car-table-wrapper.component';

describe('CarTableWrapperComponent', () => {
  let component: CarTableWrapperComponent;
  let fixture: ComponentFixture<CarTableWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTableWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
