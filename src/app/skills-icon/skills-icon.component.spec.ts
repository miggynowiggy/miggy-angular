import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsIconComponent } from './skills-icon.component';

describe('SkillsIconComponent', () => {
  let component: SkillsIconComponent;
  let fixture: ComponentFixture<SkillsIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
