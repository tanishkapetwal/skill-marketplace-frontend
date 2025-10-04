import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSellerPassword } from './update-seller-password';

describe('UpdateSellerPassword', () => {
  let component: UpdateSellerPassword;
  let fixture: ComponentFixture<UpdateSellerPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSellerPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSellerPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
