import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ims05Component } from './ims05.component';
import { LayoutComponent } from './../../layout/layout.component';
import { DepartmentComponent } from './department/department.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: Ims05Component
      },
      {
        path: 'department/:name',
        component: DepartmentComponent
      },
      {
        path: 'department/:name/category/:nameagain',
        component: CategoryComponent
      },

      // {
      //   path: 'process-flow-charts',
      //   component: ProcessFlowChartsComponent
      // },
      // {
      //   path: 'process-flow-charts/details/:id',
      //   component: ViewProcessFlowChartsComponent
      // },

      // {
      //   path: 'needs-and-expectations',
      //   component: NeedsExpectationsComponent
      // },
      // {
      //   path: 'needs-and-expectations/details/:id',
      //   component: ViewNeedsExpectationsComponent
      // },

      // {
      //   path: 'complaints-register',
      //   component: ComplaintsRegisterComponent
      // },
      // {
      //   path: 'complaints-register/details/:id',
      //   component: ViewComplaintsRegisterComponent
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ims05RoutingModule { }
