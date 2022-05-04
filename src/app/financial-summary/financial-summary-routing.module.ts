import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinancialSummaryComponent } from './financial-summary.component';
import { LayoutComponent } from './../layout/layout.component';

const routes: Routes = [
   {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: FinancialSummaryComponent
      },
      {
        path: 'full-details/:id',
        component: FinancialSummaryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialSummaryRoutingModule { }
