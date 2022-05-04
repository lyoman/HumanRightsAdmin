import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ims04Component } from './ims04.component';
import { OrganogramsComponent } from './organograms/organograms.component';
import { ViewOrganogramsComponent } from './organograms/view-organograms/view-organograms.component';
import { LayoutComponent } from './../../layout/layout.component';
import { ViewComplaintsRegisterComponent } from './complaints-register/view-complaints-register/view-complaints-register.component';
import { ComplaintsRegisterComponent } from './complaints-register/complaints-register.component';
import { ViewNeedsExpectationsComponent } from './needs-expectations/view-needs-expectations/view-needs-expectations.component';
import { NeedsExpectationsComponent } from './needs-expectations/needs-expectations.component';
import { ViewProcessFlowChartsComponent } from './process-flow-charts/view-process-flow-charts/view-process-flow-charts.component';
import { ProcessFlowChartsComponent } from './process-flow-charts/process-flow-charts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: Ims04Component
      },
      {
        path: 'organograms',
        component: OrganogramsComponent
      },
      {
        path: 'organograms/details/:id',
        component: ViewOrganogramsComponent
      },

      {
        path: 'process-flow-charts',
        component: ProcessFlowChartsComponent
      },
      {
        path: 'process-flow-charts/details/:id',
        component: ViewProcessFlowChartsComponent
      },

      {
        path: 'needs-and-expectations',
        component: NeedsExpectationsComponent
      },
      {
        path: 'needs-and-expectations/details/:id',
        component: ViewNeedsExpectationsComponent
      },

      {
        path: 'complaints-register',
        component: ComplaintsRegisterComponent
      },
      {
        path: 'complaints-register/details/:id',
        component: ViewComplaintsRegisterComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ims04RoutingModule { }
