import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';

/**
 * #Modules for import and export
 */

const CurrentModulesMaterial = [
  MatSlideToggleModule,
  MatBadgeModule,
  MatPaginatorModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatCardModule,
  MatDialogModule,
  MatRippleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatToolbarModule,
  MatSidenavModule,
  MatGridListModule,
  MatButtonToggleModule

];

@NgModule({
  imports: [
    CommonModule,
    ...CurrentModulesMaterial
  ],
  exports: [
    ...CurrentModulesMaterial
  ]
})
export class MaterialModule { }
