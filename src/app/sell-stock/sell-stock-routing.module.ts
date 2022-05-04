import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellStockComponent } from './sell-stock.component';
import { ViewSoldComponent } from './view-sold/view-sold.component';
import { LayoutComponent } from './../layout/layout.component';
import { NewSoldStockComponent } from './new-sold-stock/new-sold-stock.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: SellStockComponent
      },
      {
        path: 'viewsold/:id',
        component: ViewSoldComponent
      },
      {
        path: 'new',
        component: NewSoldStockComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellStockRoutingModule { }
