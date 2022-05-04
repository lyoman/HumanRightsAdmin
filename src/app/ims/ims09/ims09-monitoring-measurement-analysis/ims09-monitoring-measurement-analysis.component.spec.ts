import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ims09MonitoringMeasurementAnalysisComponent } from './ims09-monitoring-measurement-analysis.component';

describe('Ims09MonitoringMeasurementAnalysisComponent', () => {
  let component: Ims09MonitoringMeasurementAnalysisComponent;
  let fixture: ComponentFixture<Ims09MonitoringMeasurementAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ims09MonitoringMeasurementAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ims09MonitoringMeasurementAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
