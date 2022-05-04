import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ims10RoutingModule } from './ims10-routing.module';
import { Ims10Component } from './ims10.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ims10CategoryComponent } from './ims10-category/ims10-category.component';


@NgModule({
  declarations: [Ims10Component, Ims10CategoryComponent],
  imports: [
    CommonModule,
    Ims10RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
  ]
})
export class Ims10Module { }
