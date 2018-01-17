import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevPaperComponent } from './dev-paper.component';

describe('DevPaperComponent', () => {
  let component: DevPaperComponent;
  let fixture: ComponentFixture<DevPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
