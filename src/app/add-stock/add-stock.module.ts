import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStockRoutingModule } from './add-stock-routing.module';
import { AddStockComponent } from './add-stock.component';
import { ViewStockComponent } from './view-stock/view-stock.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewStockComponent } from './new-stock/new-stock.component';


@NgModule({
  declarations: [AddStockComponent, ViewStockComponent, NewStockComponent],
  imports: [
    CommonModule,
    AddStockRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,

  ]
})
export class AddStockModule { }
