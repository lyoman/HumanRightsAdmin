import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialSummaryRoutingModule } from './financial-summary-routing.module';
import { FinancialSummaryComponent } from './financial-summary.component';


@NgModule({
  declarations: [FinancialSummaryComponent],
  imports: [
    CommonModule,
    FinancialSummaryRoutingModule
  ]
})
export class FinancialSummaryModule { }
