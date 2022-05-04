import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedsExpectationsComponent } from './needs-expectations.component';

describe('NeedsExpectationsComponent', () => {
  let component: NeedsExpectationsComponent;
  let fixture: ComponentFixture<NeedsExpectationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedsExpectationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedsExpectationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
