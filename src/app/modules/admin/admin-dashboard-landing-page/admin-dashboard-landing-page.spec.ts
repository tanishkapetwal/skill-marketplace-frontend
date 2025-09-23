import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardLandingPage } from './admin-dashboard-landing-page';

describe('AdminDashboardLandingPage', () => {
  let component: AdminDashboardLandingPage;
  let fixture: ComponentFixture<AdminDashboardLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashboardLandingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboardLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
