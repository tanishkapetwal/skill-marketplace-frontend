import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRejectOrder } from './accept-reject-order';

describe('AcceptRejectOrder', () => {
  let component: AcceptRejectOrder;
  let fixture: ComponentFixture<AcceptRejectOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptRejectOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptRejectOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
