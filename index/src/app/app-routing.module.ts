import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { SettingStepperComponent } from './components/setting-stepper/setting-stepper.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: '', component: MapComponent },
  { path: 'map/:phone', component: MapComponent },
  { path: 'setting', component: SettingStepperComponent },
  { path: 'setting/:phone', component: SettingStepperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
