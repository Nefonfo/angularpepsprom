import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CardSheetComponent } from './components/card-sheet/card-sheet.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
//my imports
import { AllActivitiesPageComponent } from './pages/all-activities-page/all-activities-page.component';
import { NewSheetDialogComponent } from './components/new-sheet-dialog/new-sheet-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InfoSheetPageComponent } from './pages/info-sheet-page/info-sheet-page.component';
const angularMaterial = [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
];
@NgModule({
  declarations: [
    AllActivitiesPageComponent,
    CardSheetComponent,
    NewSheetDialogComponent,
    InfoSheetPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    angularMaterial,
    CoreModule,
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [
    NewSheetDialogComponent,
  ]
})
export class HomeModule { }
