import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims09ManagementReviewMinutesComponent } from './ims09-management-review-minutes.component';

describe('Ims09ManagementReviewMinutesComponent', () => {
  let component: Ims09ManagementReviewMinutesComponent;
  let fixture: ComponentFixture<Ims09ManagementReviewMinutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims09ManagementReviewMinutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims09ManagementReviewMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
