import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './components/main/map/map.component';
import { SettingStepperComponent } from './components/setting-stepper/setting-stepper.component';
import { MainComponent } from './components/main/main.component';
import { IndexComponent } from './components/index/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'main', component: MainComponent },
  { path: 'main/:stateId', component: MainComponent },
  { path: 'main/setting/:stateId', component: SettingStepperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
