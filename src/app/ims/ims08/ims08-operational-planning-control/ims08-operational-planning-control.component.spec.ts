import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims08OperationalPlanningControlComponent } from './ims08-operational-planning-control.component';

describe('Ims08OperationalPlanningControlComponent', () => {
  let component: Ims08OperationalPlanningControlComponent;
  let fixture: ComponentFixture<Ims08OperationalPlanningControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims08OperationalPlanningControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims08OperationalPlanningControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
