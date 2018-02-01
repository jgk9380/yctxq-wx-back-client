import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveUserListComponent } from './active-user-list.component';

describe('ActiveUserListComponent', () => {
  let component: ActiveUserListComponent;
  let fixture: ComponentFixture<ActiveUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
