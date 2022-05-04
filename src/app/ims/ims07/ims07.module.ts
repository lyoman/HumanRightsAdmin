import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ims07RoutingModule } from './ims07-routing.module';
import { Ims07Component } from './ims07.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ims07CategoryComponent } from './ims07-category/ims07-category.component';


@NgModule({
  declarations: [Ims07Component, Ims07CategoryComponent],
  imports: [
    CommonModule,
    Ims07RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
  ]
})
export class Ims07Module { }
