import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ims04RoutingModule } from './ims04-routing.module';
import { Ims04Component } from './ims04.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrganogramsComponent } from './organograms/organograms.component';
import { ViewOrganogramsComponent } from './organograms/view-organograms/view-organograms.component';
import { ProcessFlowChartsComponent } from './process-flow-charts/process-flow-charts.component';
import { ViewProcessFlowChartsComponent } from './process-flow-charts/view-process-flow-charts/view-process-flow-charts.component';
import { NeedsExpectationsComponent } from './needs-expectations/needs-expectations.component';
import { ViewNeedsExpectationsComponent } from './needs-expectations/view-needs-expectations/view-needs-expectations.component';
import { ComplaintsRegisterComponent } from './complaints-register/complaints-register.component';
import { ViewComplaintsRegisterComponent } from './complaints-register/view-complaints-register/view-complaints-register.component';


@NgModule({
  declarations: [
    Ims04Component,
    OrganogramsComponent,
    ViewOrganogramsComponent,
    ProcessFlowChartsComponent,
    ViewProcessFlowChartsComponent,
    NeedsExpectationsComponent,
    ViewNeedsExpectationsComponent,
    ComplaintsRegisterComponent,
    ViewComplaintsRegisterComponent
  ],
  imports: [
    CommonModule,
    Ims04RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
  ]
})
export class Ims04Module { }
