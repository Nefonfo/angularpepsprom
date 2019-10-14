import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllActivitiesPageComponent } from './modules/home/pages/all-activities-page/all-activities-page.component';
import { InfoSheetPageComponent } from './modules/home/pages/info-sheet-page/info-sheet-page.component';


const routes: Routes = [
  {
    path: '', component: AllActivitiesPageComponent,
  },
  {
    path: 'info/:id', component: InfoSheetPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
