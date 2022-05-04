import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ims08RoutingModule } from './ims08-routing.module';
import { Ims08Component } from './ims08.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ims08CategoryComponent } from './ims08-category/ims08-category.component';
import { Ims08ManagementDocumentsComponent } from './ims08-management-documents/ims08-management-documents.component';
import { Ims08OperationalPlanningControlComponent } from './ims08-operational-planning-control/ims08-operational-planning-control.component';


@NgModule({
  declarations: [
  Ims08Component, 
  Ims08CategoryComponent, 
  Ims08ManagementDocumentsComponent, 
  Ims08OperationalPlanningControlComponent
  ],
  imports: [
    CommonModule,
    Ims08RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
  ]
})
export class Ims08Module { }
