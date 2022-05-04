import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ims05RoutingModule } from './ims05-routing.module';
import { Ims05Component } from './ims05.component';
import { DepartmentComponent } from './department/department.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    Ims05Component, 
    DepartmentComponent, 
    CategoryComponent
  ],
  imports: [
    CommonModule,
    Ims05RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
  ]
})
export class Ims05Module { }
