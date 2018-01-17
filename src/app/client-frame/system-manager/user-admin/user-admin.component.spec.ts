import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserAdminComponent } from './user-admin.component';

describe('LoginUserAdminComponent', () => {
  let component: LoginUserAdminComponent;
  let fixture: ComponentFixture<LoginUserAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUserAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
