import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ims09Component } from './ims09.component';
import { LayoutComponent } from './../../layout/layout.component';
import { Ims09MonitoringMeasurementAnalysisComponent } from './ims09-monitoring-measurement-analysis/ims09-monitoring-measurement-analysis.component';
import { Ims09ActionPlansComponent } from './ims09-action-plans/ims09-action-plans.component';
import { Ims09ManagementReviewMinutesComponent } from './ims09-management-review-minutes/ims09-management-review-minutes.component';

const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: Ims09Component
      },
      {
        path: 'category/monitoring-measurement-analysis',
        component: Ims09MonitoringMeasurementAnalysisComponent
      },
      {
        path: 'category/action-plans',
        component: Ims09ActionPlansComponent
      },
      {
        path: 'category/management-review-minutes',
        component: Ims09ManagementReviewMinutesComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ims09RoutingModule { }
