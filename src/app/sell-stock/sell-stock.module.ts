import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellStockRoutingModule } from './sell-stock-routing.module';
import { SellStockComponent } from './sell-stock.component';
import { ViewSoldComponent } from './view-sold/view-sold.component';
import { NewSoldStockComponent } from './new-sold-stock/new-sold-stock.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SellStockComponent, ViewSoldComponent, NewSoldStockComponent],
  imports: [
    CommonModule,
    SellStockRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
  ]
})
export class SellStockModule { }
