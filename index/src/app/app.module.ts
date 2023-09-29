import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/main/map/map.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SettingStepperComponent } from './components/setting-stepper/setting-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddressAutocompleteComponent } from './components/main/address-autocomplete/address-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, NgFor } from '@angular/common';
import { SearchResultComponent } from './components/main/search-result/search-result.component';
import { MatCardModule } from '@angular/material/card';
import { GeocodeAddedItemComponent } from './components/main/geocode-added-item/geocode-added-item.component';
import { InputSheetTableComponent } from './components/setting-stepper/components/input-sheet-table/input-sheet-table.component';
import { MatTableModule } from '@angular/material/table';
import { SheetItemEditComponent } from './components/setting-stepper/components/sheet-item-edit/sheet-item-edit.component';
import { MatListModule } from '@angular/material/list';
import { OrderByPipe } from './pipes/sort.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { GeoAddedItemListComponent } from './components/main/geo-added-item-list/geo-added-item-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageViewerComponent } from './components/share/image-viewer/image-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ImageUploaderComponent } from './components/share/image-uploader/image-uploader.component';
import { MainComponent } from './components/main/main.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { GeoAddedHomeComponent } from './components/main/geo-added-home-list/geo-added-home/geo-added-home.component';
import { GeoAddedHomeListComponent } from './components/main/geo-added-home-list/geo-added-home-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginDialogComponent } from './components/main/login-dialog/login-dialog.component';
import { NewItemComponent } from './components/setting-stepper/components/new-item/new-item.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { PostingFromAccountLinkComponent } from './components/setting-stepper/components/posting-from-account-link/posting-from-account-link.component';
import { CircleToolComponent } from './components/main/circle-tool/circle-tool.component';
import { MesureToolComponent } from './components/main/mesure-tool/mesure-tool.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { IndexComponent } from './components/index/index/index.component';
import { FrontpageTrialComponent } from './components/index/frontpage-trial/frontpage-trial.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environment';

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
    GeoAddedItemListComponent,
    ImageViewerComponent,
    ImageUploaderComponent,
    MainComponent,
    GeoAddedHomeComponent,
    GeoAddedHomeListComponent,
    SafeHtmlPipe,
    LoginDialogComponent,
    NewItemComponent,
    PostingFromAccountLinkComponent,
    CircleToolComponent,
    MesureToolComponent,
    IndexComponent,
    FrontpageTrialComponent
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
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
