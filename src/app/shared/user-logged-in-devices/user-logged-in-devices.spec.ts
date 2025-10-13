import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoggedInDevices } from './user-logged-in-devices';

describe('UserLoggedInDevices', () => {
  let component: UserLoggedInDevices;
  let fixture: ComponentFixture<UserLoggedInDevices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLoggedInDevices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoggedInDevices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
