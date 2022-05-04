import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ims09RoutingModule } from './ims09-routing.module';
import { Ims09Component } from './ims09.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ims09ActionPlansComponent } from './ims09-action-plans/ims09-action-plans.component';
import { Ims09ManagementReviewMinutesComponent } from './ims09-management-review-minutes/ims09-management-review-minutes.component';
import { Ims09MonitoringMeasurementAnalysisComponent } from './ims09-monitoring-measurement-analysis/ims09-monitoring-measurement-analysis.component';


@NgModule({
  declarations: [Ims09Component, Ims09ActionPlansComponent, Ims09ManagementReviewMinutesComponent, Ims09MonitoringMeasurementAnalysisComponent],
  imports: [
    CommonModule,
    Ims09RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
  ]
})
export class Ims09Module { }
