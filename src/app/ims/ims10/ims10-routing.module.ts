import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ims10Component } from './ims10.component';
import { LayoutComponent } from './../../layout/layout.component';
import { Ims10CategoryComponent } from './ims10-category/ims10-category.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: Ims10Component
      },
      {
        path: 'category/:namenon',
        component: Ims10CategoryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ims10RoutingModule { }
