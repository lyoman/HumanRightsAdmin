import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessFlowChartsComponent } from './process-flow-charts.component';

describe('ProcessFlowChartsComponent', () => {
  let component: ProcessFlowChartsComponent;
  let fixture: ComponentFixture<ProcessFlowChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessFlowChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessFlowChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
