import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedOrderComponent } from './checked-order.component';

describe('CheckedOrderComponent', () => {
  let component: CheckedOrderComponent;
  let fixture: ComponentFixture<CheckedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
