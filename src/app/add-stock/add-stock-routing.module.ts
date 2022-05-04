import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStockComponent } from './add-stock.component';
import { ViewStockComponent } from './view-stock/view-stock.component';
import { NewStockComponent } from './new-stock/new-stock.component';

import { LayoutComponent } from './../layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: AddStockComponent
      },
      {
        path: 'viewstock/:id',
        component: ViewStockComponent
      },
      {
        path: 'new',
        component: NewStockComponent
      }     

      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddStockRoutingModule { }
