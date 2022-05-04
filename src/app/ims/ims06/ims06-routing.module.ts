import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ims06Component } from './ims06.component';
import { LayoutComponent } from './../../layout/layout.component';
import { Ims06CategoryComponent } from './ims06-category/ims06-category.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: Ims06Component
      },
      {
        path: 'category/:namec',
        component: Ims06CategoryComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ims06RoutingModule { }
