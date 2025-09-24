import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLandingPage } from './dashboard-landing-page';

describe('DashboardLandingPage', () => {
  let component: DashboardLandingPage;
  let fixture: ComponentFixture<DashboardLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLandingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
