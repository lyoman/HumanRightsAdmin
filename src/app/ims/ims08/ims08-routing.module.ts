import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ims08Component } from './ims08.component';
import { LayoutComponent } from './../../layout/layout.component';
import { Ims08ManagementDocumentsComponent } from './ims08-management-documents/ims08-management-documents.component';
import { Ims08OperationalPlanningControlComponent } from './ims08-operational-planning-control/ims08-operational-planning-control.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: Ims08Component
      },
      {
        path: 'category/operational-planning-control',
        component: Ims08OperationalPlanningControlComponent
      },
      {
        path: 'category/management-documents',
        component: Ims08ManagementDocumentsComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ims08RoutingModule { }
