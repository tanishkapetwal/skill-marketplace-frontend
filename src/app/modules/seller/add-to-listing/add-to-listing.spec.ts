import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToListing } from './add-to-listing';

describe('AddToListing', () => {
  let component: AddToListing;
  let fixture: ComponentFixture<AddToListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
