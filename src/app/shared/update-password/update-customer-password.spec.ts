import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerPassword } from './update-customer-password';

describe('UpdateCustomerPassword', () => {
  let component: UpdateCustomerPassword;
  let fixture: ComponentFixture<UpdateCustomerPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCustomerPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCustomerPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
