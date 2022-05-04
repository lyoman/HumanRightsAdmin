import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ims06RoutingModule } from './ims06-routing.module';
import { Ims06Component } from './ims06.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ims06CategoryComponent } from './ims06-category/ims06-category.component';


@NgModule({
  declarations: [Ims06Component, Ims06CategoryComponent],
  imports: [
    CommonModule,
    Ims06RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
  ]
})
export class Ims06Module { }
