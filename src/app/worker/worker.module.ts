import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerRoutingModule } from './worker-routing.module';
import { ManagementFilmsComponent } from './components/management-films/management-films.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ManagementFilmsComponent
  ],
  imports: [
    CommonModule,
    WorkerRoutingModule,
    
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WorkerModule { }
