import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProcessFlowChartsComponent } from './view-process-flow-charts.component';

describe('ViewProcessFlowChartsComponent', () => {
  let component: ViewProcessFlowChartsComponent;
  let fixture: ComponentFixture<ViewProcessFlowChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProcessFlowChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProcessFlowChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
