import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminPassword } from './update-admin-password';

describe('UpdateAdminPassword', () => {
  let component: UpdateAdminPassword;
  let fixture: ComponentFixture<UpdateAdminPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAdminPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdminPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
