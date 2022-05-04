import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNeedsExpectationsComponent } from './view-needs-expectations.component';

describe('ViewNeedsExpectationsComponent', () => {
  let component: ViewNeedsExpectationsComponent;
  let fixture: ComponentFixture<ViewNeedsExpectationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNeedsExpectationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNeedsExpectationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
