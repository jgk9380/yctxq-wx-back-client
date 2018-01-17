import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperQueryComponent } from './paper-query.component';

describe('PaperQueryComponent', () => {
  let component: PaperQueryComponent;
  let fixture: ComponentFixture<PaperQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
