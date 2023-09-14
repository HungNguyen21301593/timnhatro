import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingStepperComponent } from './components/setting-stepper/setting-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddressAutocompleteComponent } from './components/address-autocomplete/address-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, NgFor } from '@angular/common';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { MatCardModule } from '@angular/material/card';
import { GeocodeAddedItemComponent } from './components/geocode-added-item/geocode-added-item.component';
import { InputSheetTableComponent } from './components/setting-stepper/components/input-sheet-table/input-sheet-table.component';
import { MatTableModule } from '@angular/material/table';
import { SheetItemEditComponent } from './components/setting-stepper/components/sheet-item-edit/sheet-item-edit.component';
import { MatListModule } from '@angular/material/list';
import { OrderByPipe } from './pipes/sort.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RealstateSideViewComponent } from './components/realstate-side-view/realstate-side-view.component';
import { RestateViewContentComponent } from './components/restate-view-content/restate-view-content.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AgentProfileComponent } from './components/agent-profile/agent-profile.component';
import { GeoAddedItemListComponent } from './components/geo-added-item-list/geo-added-item-list.component';
import { DrawerControlsComponent } from './components/drawer-controls/drawer-controls.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { MainComponent } from './components/main/main.component';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { GeoAddedHomeComponent } from './components/geo-added-home/geo-added-home.component';
import { GeoAddedHomeListComponent } from './components/geo-added-home-list/geo-added-home-list.component';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SettingStepperComponent,
    AddressAutocompleteComponent,
    SearchResultComponent,
    GeocodeAddedItemComponent,
    InputSheetTableComponent,
    SheetItemEditComponent,
    OrderByPipe,
    RealstateSideViewComponent,
    RestateViewContentComponent,
    AgentProfileComponent,
    GeoAddedItemListComponent,
    DrawerControlsComponent,
    ImageViewerComponent,
    ImageUploaderComponent,
    MainComponent,
    GeoAddedHomeComponent,
    GeoAddedHomeListComponent,
    SafeHtmlPipe
    ],
  imports: [
    NgFor,
    AsyncPipe,
    FlexLayoutModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
