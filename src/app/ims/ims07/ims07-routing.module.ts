import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ims07Component } from './ims07.component';
import { LayoutComponent } from './../../layout/layout.component';
import { Ims07CategoryComponent } from './ims07-category/ims07-category.component';


const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: Ims07Component
      },
      {
        path: 'category/:namesvn',
        component: Ims07CategoryComponent
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ims07RoutingModule { }
