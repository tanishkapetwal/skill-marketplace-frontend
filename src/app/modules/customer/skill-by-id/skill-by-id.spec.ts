import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillById } from './skill-by-id';

describe('SkillById', () => {
  let component: SkillById;
  let fixture: ComponentFixture<SkillById>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillById]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillById);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
