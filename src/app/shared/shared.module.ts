import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {LayoutModule as LayoutCdkModule} from '@angular/cdk/layout';
import { LayoutMainComponent } from './components/layout-main/layout-main.component';
import { SnackInfoComponent } from './components/snack-info/snack-info.component';
import { RouterModule } from '@angular/router';
import { DialogInfoComponent } from './components/dialog-info/dialog-info.component';
import { ViewItemsComponent } from './components/view-items/view-items.component';
import { ItemsComponent } from './components/items/items.component';



@NgModule({
  declarations: [
    LayoutMainComponent,
    SnackInfoComponent,
    DialogInfoComponent,
    ViewItemsComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    LayoutCdkModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    LayoutCdkModule,
    ViewItemsComponent,
    ItemsComponent
  ]
})
export class SharedModule { }
