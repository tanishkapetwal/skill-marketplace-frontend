import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRequestsList } from './order-requests-list';

describe('OrderRequestsList', () => {
  let component: OrderRequestsList;
  let fixture: ComponentFixture<OrderRequestsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderRequestsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderRequestsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
