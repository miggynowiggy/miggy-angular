import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkPageComponent } from './view-work-page.component';

describe('ViewWorkPageComponent', () => {
  let component: ViewWorkPageComponent;
  let fixture: ComponentFixture<ViewWorkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWorkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
