import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSkills } from './skills';

describe('Skills', () => {
  let component: SellerSkills;
  let fixture: ComponentFixture<SellerSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerSkills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
