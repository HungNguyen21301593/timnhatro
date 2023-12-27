"use strict";
(self["webpackChunktimnhatro"] = self["webpackChunktimnhatro"] || []).push([["main"],{

/***/ 2899:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_setting_stepper_setting_stepper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/setting-stepper/setting-stepper.component */ 8425);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/main.component */ 7968);
/* harmony import */ var _components_index_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index/index.component */ 8114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






const routes = [{
  path: '',
  component: _components_index_index_index_component__WEBPACK_IMPORTED_MODULE_2__.IndexComponent
}, {
  path: 'main',
  component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent
}, {
  path: 'main/:stateId',
  component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent
}, {
  path: 'main/setting/:stateId',
  component: _components_setting_stepper_setting_stepper_component__WEBPACK_IMPORTED_MODULE_0__.SettingStepperComponent
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 8641:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_map_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/map-state.service */ 6778);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _components_index_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/header/header.component */ 4363);

var _class;





class AppComponent {
  constructor(mapStateService, router, dialog) {
    var _this = this;
    this.mapStateService = mapStateService;
    this.router = router;
    this.dialog = dialog;
    this.title = 'timnhatro';
    this.router.params.subscribe( /*#__PURE__*/function () {
      var _ref = (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (param) {
        if (!param['phone']) {
          return;
        }
        yield _this.mapStateService.reloadState(param['stateId']);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  ngOnInit() {
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  ngOnDestroy() {
    this.susciption.unsubscribe();
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_map_state_service__WEBPACK_IMPORTED_MODULE_1__.MapStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-header")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_index_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3574:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 2899);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 8641);
/* harmony import */ var _components_main_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/map/map.component */ 5026);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _components_setting_stepper_setting_stepper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/setting-stepper/setting-stepper.component */ 8425);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _components_main_address_autocomplete_address_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/address-autocomplete/address-autocomplete.component */ 3487);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_main_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/search-result/search-result.component */ 9823);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _components_main_geocode_added_item_geocode_added_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/geocode-added-item/geocode-added-item.component */ 1490);
/* harmony import */ var _components_setting_stepper_components_input_sheet_table_input_sheet_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/setting-stepper/components/input-sheet-table/input-sheet-table.component */ 5276);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _components_setting_stepper_components_sheet_item_edit_sheet_item_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/setting-stepper/components/sheet-item-edit/sheet-item-edit.component */ 4677);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/list */ 9288);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/sort.pipe */ 6655);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _components_main_geo_added_item_list_geo_added_item_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/geo-added-item-list/geo-added-item-list.component */ 3341);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout */ 5249);
/* harmony import */ var _components_share_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/share/image-viewer/image-viewer.component */ 1076);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _components_share_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/share/image-uploader/image-uploader.component */ 4317);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main/main.component */ 7968);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _components_main_geo_added_home_list_geo_added_home_geo_added_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/main/geo-added-home-list/geo-added-home/geo-added-home.component */ 3228);
/* harmony import */ var _components_main_geo_added_home_list_geo_added_home_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/main/geo-added-home-list/geo-added-home-list.component */ 3543);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/safe-html.pipe */ 3375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _components_main_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/main/login-dialog/login-dialog.component */ 6094);
/* harmony import */ var _components_setting_stepper_components_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/setting-stepper/components/new-item/new-item.component */ 6536);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _components_setting_stepper_components_posting_from_account_link_posting_from_account_link_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/setting-stepper/components/posting-from-account-link/posting-from-account-link.component */ 3275);
/* harmony import */ var _components_main_circle_tool_circle_tool_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/main/circle-tool/circle-tool.component */ 1214);
/* harmony import */ var _components_main_mesure_tool_mesure_tool_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/main/mesure-tool/mesure-tool.component */ 3366);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _components_index_index_index_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/index/index/index.component */ 8114);
/* harmony import */ var _components_index_frontpage_trial_frontpage_trial_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/index/frontpage-trial/frontpage-trial.component */ 6514);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/fire/compat */ 5281);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/fire/compat/database */ 3002);
/* harmony import */ var src_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/environment */ 2474);
/* harmony import */ var _components_index_header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/index/header/header.component */ 4363);
/* harmony import */ var _components_index_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/index/footer/footer.component */ 1469);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

























































class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({
  imports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__.FlexLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__.MatStepperModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__.MatFormFieldModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_35__.MatButtonToggleModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_36__.MatButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_37__.MatInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_38__.MatAutocompleteModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_40__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_41__.MatTableModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_42__.MatListModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__.MatSidenavModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__.MatProgressSpinnerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__.MatIconModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_45__.MatExpansionModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_47__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_48__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__.MatRadioModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_50__.MatProgressBarModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_51__.AngularFireModule.initializeApp(src_environment__WEBPACK_IMPORTED_MODULE_24__.environment.firebaseConfig), _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_52__.AngularFireDatabaseModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_53__.MatSlideToggleModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_main_map_map_component__WEBPACK_IMPORTED_MODULE_2__.MapComponent, _components_setting_stepper_setting_stepper_component__WEBPACK_IMPORTED_MODULE_3__.SettingStepperComponent, _components_main_address_autocomplete_address_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__.AddressAutocompleteComponent, _components_main_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_5__.SearchResultComponent, _components_main_geocode_added_item_geocode_added_item_component__WEBPACK_IMPORTED_MODULE_6__.GeocodeAddedItemComponent, _components_setting_stepper_components_input_sheet_table_input_sheet_table_component__WEBPACK_IMPORTED_MODULE_7__.InputSheetTableComponent, _components_setting_stepper_components_sheet_item_edit_sheet_item_edit_component__WEBPACK_IMPORTED_MODULE_8__.SheetItemEditComponent, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_9__.OrderByPipe, _components_main_geo_added_item_list_geo_added_item_list_component__WEBPACK_IMPORTED_MODULE_10__.GeoAddedItemListComponent, _components_share_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_11__.ImageViewerComponent, _components_share_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_12__.ImageUploaderComponent, _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__.MainComponent, _components_main_geo_added_home_list_geo_added_home_geo_added_home_component__WEBPACK_IMPORTED_MODULE_14__.GeoAddedHomeComponent, _components_main_geo_added_home_list_geo_added_home_list_component__WEBPACK_IMPORTED_MODULE_15__.GeoAddedHomeListComponent, _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_16__.SafeHtmlPipe, _components_main_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_17__.LoginDialogComponent, _components_setting_stepper_components_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_18__.NewItemComponent, _components_setting_stepper_components_posting_from_account_link_posting_from_account_link_component__WEBPACK_IMPORTED_MODULE_19__.PostingFromAccountLinkComponent, _components_main_circle_tool_circle_tool_component__WEBPACK_IMPORTED_MODULE_20__.CircleToolComponent, _components_main_mesure_tool_mesure_tool_component__WEBPACK_IMPORTED_MODULE_21__.MesureToolComponent, _components_index_index_index_component__WEBPACK_IMPORTED_MODULE_22__.IndexComponent, _components_index_frontpage_trial_frontpage_trial_component__WEBPACK_IMPORTED_MODULE_23__.FrontpageTrialComponent, _components_index_header_header_component__WEBPACK_IMPORTED_MODULE_25__.HeaderComponent, _components_index_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_54__.NgFor, _angular_common__WEBPACK_IMPORTED_MODULE_54__.AsyncPipe, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__.FlexLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__.MatStepperModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__.MatFormFieldModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_35__.MatButtonToggleModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_36__.MatButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_37__.MatInputModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_38__.MatAutocompleteModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_40__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_41__.MatTableModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_42__.MatListModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__.MatSidenavModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_44__.MatProgressSpinnerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_39__.MatIconModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_45__.MatExpansionModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_47__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_48__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__.MatRadioModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_50__.MatProgressBarModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_51__.AngularFireModule, _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_52__.AngularFireDatabaseModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_53__.MatSlideToggleModule]
  });
})();

/***/ }),

/***/ 1469:
/*!*************************************************************!*\
  !*** ./src/app/components/index/footer/footer.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class FooterComponent {
  constructor() {}
  ngOnInit() {}
}
_class = FooterComponent;
_class.ɵfac = function FooterComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-footer"]],
  decls: 0,
  vars: 0,
  template: function FooterComponent_Template(rf, ctx) {},
  styles: [".fixed-top[_ngcontent-%COMP%] {\n  z-index: 1000 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbmRleC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksd0JBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5maXhlZC10b3Bcclxue1xyXG4gICAgei1pbmRleDogMTAwMCAhaW1wb3J0YW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6514:
/*!*******************************************************************************!*\
  !*** ./src/app/components/index/frontpage-trial/frontpage-trial.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrontpageTrialComponent: () => (/* binding */ FrontpageTrialComponent)
/* harmony export */ });
/* harmony import */ var D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_interfaces_map_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/map-state */ 279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/map-state.service */ 6778);
/* harmony import */ var src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/web-api.service */ 1086);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _setting_stepper_components_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../setting-stepper/components/new-item/new-item.component */ 6536);

var _class;









function FrontpageTrialComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Map c\u1EE7a b\u1EA1n \u0111\u00E3 t\u1EA3i xong, vui l\u00F2ng nh\u1EA5p v\u00E0o \u0111\u01B0\u1EDDng link sau \u0111\u1EC3 xem k\u1EBFt qu\u1EA3: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "K\u1EBFt qu\u1EA3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx_r0.resultLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
class FrontpageTrialComponent {
  constructor(mapStateService, webApiService, sanitizer, router) {
    this.mapStateService = mapStateService;
    this.webApiService = webApiService;
    this.sanitizer = sanitizer;
    this.router = router;
    this.resultLink = null;
  }
  ngOnInit() {}
  itemposted(realstateData) {
    var _this = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (realstateData.length == 0) {
        return;
      }
      var newState = new src_app_interfaces_map_state__WEBPACK_IMPORTED_MODULE_1__.EmptyState();
      newState.geoItems = yield _this.mapStateService.mapToGeoItems(realstateData);
      _this.mapStateService.stateObservable.next(newState);
      var result = yield _this.webApiService.createNewUserState(newState);
      _this.resultLink = _this.sanitizer.bypassSecurityTrustUrl(`main/${result.id}`);
    })();
  }
}
_class = FrontpageTrialComponent;
_class.ɵfac = function FrontpageTrialComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_2__.MapStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_3__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-frontpage-trial"]],
  decls: 3,
  vars: 1,
  consts: [["fxLayout", "column", "fxLayoutAlign", "start start"], [1, "full-width", 3, "itemposted"], [4, "ngIf"], ["target", "_blank", 3, "href"]],
  template: function FrontpageTrialComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "app-new-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("itemposted", function FrontpageTrialComponent_Template_app_new_item_itemposted_1_listener($event) {
        return ctx.itemposted($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FrontpageTrialComponent_div_2_Template, 5, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.resultLink);
    }
  },
  dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _setting_stepper_components_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_4__.NewItemComponent],
  styles: [".youtube-iframe[_ngcontent-%COMP%]{\n    min-height: 70vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbmRleC9mcm9udHBhZ2UtdHJpYWwvZnJvbnRwYWdlLXRyaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIueW91dHViZS1pZnJhbWV7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4363:
/*!*************************************************************!*\
  !*** ./src/app/components/index/header/header.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class HeaderComponent {
  constructor() {}
  ngOnInit() {}
}
_class = HeaderComponent;
_class.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-header"]],
  decls: 12,
  vars: 0,
  consts: [[1, "navbar", "navbar-expand-md", "fixed-top", "bg-dark", "navbar-dark"], [1, "container"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar2SupportedContent", "aria-controls", "navbar2SupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right"], [1, "navbar-toggler-icon"], ["id", "navbar2SupportedContent", 1, "collapse", "navbar-collapse", "justify-content-center"], [1, "navbar-nav"], [1, "nav-item", "mx-2"], ["href", "#", 1, "nav-link"], ["href", "#contact", 1, "nav-link"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Trang ch\u1EE7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6)(10, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Li\u00EAn h\u1EC7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8114:
/*!***********************************************************!*\
  !*** ./src/app/components/index/index/index.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndexComponent: () => (/* binding */ IndexComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _frontpage_trial_frontpage_trial_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frontpage-trial/frontpage-trial.component */ 6514);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ 4363);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 1469);
var _class;





const _c0 = "@import url(https://fonts.googleapis.com/css?family=Roboto:200,300,400);\n\n\n\n\n\n\n\n\n\n\n\n\n[_ngcontent-%COMP%]:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #3f51b5;\n  --secondary: #5562ad;\n  --success: #28a745;\n  --info: #ccc;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f3f3f3;\n  --dark: #151515;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: border-box; }\n\nhtml[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\narticle[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], main[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: block; }\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto;\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.5;\n  color: #333;\n  text-align: left;\n  background-color: white; }\n\n[tabindex=\"-1\"][_ngcontent-%COMP%]:focus {\n  outline: 0 !important; }\n\nhr[_ngcontent-%COMP%] {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0.6rem; }\n\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title][_ngcontent-%COMP%], abbr[data-original-title][_ngcontent-%COMP%] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], dl[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 0; }\n\ndt[_ngcontent-%COMP%] {\n  font-weight: 700; }\n\ndd[_ngcontent-%COMP%] {\n  margin-bottom: .5rem;\n  margin-left: 0; }\n\nblockquote[_ngcontent-%COMP%] {\n  margin: 0 0 1rem; }\n\ndfn[_ngcontent-%COMP%] {\n  font-style: italic; }\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder; }\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%; }\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub[_ngcontent-%COMP%] {\n  bottom: -.25em; }\n\nsup[_ngcontent-%COMP%] {\n  top: -.5em; }\n\na[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n  a[_ngcontent-%COMP%]:hover {\n    color: #d9d9d9;\n    text-decoration: underline; }\n\na[_ngcontent-%COMP%]:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\n  a[_ngcontent-%COMP%]:not([href]):not([tabindex]):hover, a[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\n  a[_ngcontent-%COMP%]:not([href]):not([tabindex]):focus {\n    outline: 0; }\n\npre[_ngcontent-%COMP%], code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 1em; }\n\npre[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\n\nfigure[_ngcontent-%COMP%] {\n  margin: 0 0 1rem; }\n\nimg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg[_ngcontent-%COMP%] {\n  overflow: hidden;\n  vertical-align: middle; }\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse; }\n\ncaption[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth[_ngcontent-%COMP%] {\n  text-align: inherit; }\n\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.5rem; }\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0; }\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\n\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%], select[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  overflow: visible; }\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  text-transform: none; }\n\nbutton[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\n  -webkit-appearance: button; }\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type=\"radio\"][_ngcontent-%COMP%], input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"date\"][_ngcontent-%COMP%], input[type=\"time\"][_ngcontent-%COMP%], input[type=\"datetime-local\"][_ngcontent-%COMP%], input[type=\"month\"][_ngcontent-%COMP%] {\n  -webkit-appearance: listbox; }\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline; }\n\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto; }\n\n[type=\"search\"][_ngcontent-%COMP%] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-cancel-button, [type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput[_ngcontent-%COMP%] {\n  display: inline-block; }\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate[_ngcontent-%COMP%] {\n  display: none; }\n\n[hidden][_ngcontent-%COMP%] {\n  display: none !important; }\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem;\n  font-family: Roboto;\n  font-weight: 400;\n  line-height: 1.2;\n  color: inherit; }\n\nh1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem; }\n\nh2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%] {\n  font-size: 2rem; }\n\nh3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%] {\n  font-size: 1.75rem; }\n\nh4[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%] {\n  font-size: 1.5rem; }\n\nh5[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%] {\n  font-size: 1.25rem; }\n\nh6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%] {\n  font-size: 1rem; }\n\n.lead[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 300; }\n\n.display-1[_ngcontent-%COMP%] {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-2[_ngcontent-%COMP%] {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-3[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\n.display-4[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 1.2rem;\n  margin-bottom: 1.2rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\n\nsmall[_ngcontent-%COMP%], .small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400; }\n\nmark[_ngcontent-%COMP%], .mark[_ngcontent-%COMP%] {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\n.list-unstyled[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline-item[_ngcontent-%COMP%] {\n  display: inline-block; }\n  .list-inline-item[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0.5rem; }\n\n.initialism[_ngcontent-%COMP%] {\n  font-size: 90%;\n  text-transform: uppercase; }\n\n.blockquote[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n  font-size: 1.25rem; }\n\n.blockquote-footer[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 80%;\n  color: #6c757d; }\n  .blockquote-footer[_ngcontent-%COMP%]::before {\n    content: \"\\2014 \\00A0\"; }\n\n.img-fluid[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto; }\n\n.img-thumbnail[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  background-color: white;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);\n  max-width: 100%;\n  height: auto; }\n\n.figure[_ngcontent-%COMP%] {\n  display: inline-block; }\n\n.figure-img[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem;\n  line-height: 1; }\n\n.figure-caption[_ngcontent-%COMP%] {\n  font-size: 90%;\n  color: #6c757d; }\n\ncode[_ngcontent-%COMP%] {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word; }\n  a[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%] {\n    color: inherit; }\n\nkbd[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n  box-shadow: inset 0 -0.1rem 0 rgba(0, 0, 0, 0.25); }\n  kbd[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700;\n    box-shadow: none; }\n\npre[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 87.5%;\n  color: #212529; }\n  pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n    font-size: inherit;\n    color: inherit;\n    word-break: normal; }\n\n.pre-scrollable[_ngcontent-%COMP%] {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n  @media (min-width: 576px) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .container[_ngcontent-%COMP%] {\n      max-width: 1140px; } }\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.no-gutters[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 0; }\n  .no-gutters[_ngcontent-%COMP%]    > .col[_ngcontent-%COMP%], .no-gutters[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.col-1[_ngcontent-%COMP%], .col-2[_ngcontent-%COMP%], .col-3[_ngcontent-%COMP%], .col-4[_ngcontent-%COMP%], .col-5[_ngcontent-%COMP%], .col-6[_ngcontent-%COMP%], .col-7[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%], .col-9[_ngcontent-%COMP%], .col-10[_ngcontent-%COMP%], .col-11[_ngcontent-%COMP%], .col-12[_ngcontent-%COMP%], .col[_ngcontent-%COMP%], .col-auto[_ngcontent-%COMP%], .col-sm-1[_ngcontent-%COMP%], .col-sm-2[_ngcontent-%COMP%], .col-sm-3[_ngcontent-%COMP%], .col-sm-4[_ngcontent-%COMP%], .col-sm-5[_ngcontent-%COMP%], .col-sm-6[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-sm-8[_ngcontent-%COMP%], .col-sm-9[_ngcontent-%COMP%], .col-sm-10[_ngcontent-%COMP%], .col-sm-11[_ngcontent-%COMP%], .col-sm-12[_ngcontent-%COMP%], .col-sm[_ngcontent-%COMP%], .col-sm-auto[_ngcontent-%COMP%], .col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%], .col-md[_ngcontent-%COMP%], .col-md-auto[_ngcontent-%COMP%], .col-lg-1[_ngcontent-%COMP%], .col-lg-2[_ngcontent-%COMP%], .col-lg-3[_ngcontent-%COMP%], .col-lg-4[_ngcontent-%COMP%], .col-lg-5[_ngcontent-%COMP%], .col-lg-6[_ngcontent-%COMP%], .col-lg-7[_ngcontent-%COMP%], .col-lg-8[_ngcontent-%COMP%], .col-lg-9[_ngcontent-%COMP%], .col-lg-10[_ngcontent-%COMP%], .col-lg-11[_ngcontent-%COMP%], .col-lg-12[_ngcontent-%COMP%], .col-lg[_ngcontent-%COMP%], .col-lg-auto[_ngcontent-%COMP%], .col-xl-1[_ngcontent-%COMP%], .col-xl-2[_ngcontent-%COMP%], .col-xl-3[_ngcontent-%COMP%], .col-xl-4[_ngcontent-%COMP%], .col-xl-5[_ngcontent-%COMP%], .col-xl-6[_ngcontent-%COMP%], .col-xl-7[_ngcontent-%COMP%], .col-xl-8[_ngcontent-%COMP%], .col-xl-9[_ngcontent-%COMP%], .col-xl-10[_ngcontent-%COMP%], .col-xl-11[_ngcontent-%COMP%], .col-xl-12[_ngcontent-%COMP%], .col-xl[_ngcontent-%COMP%], .col-xl-auto[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%; }\n\n.col-auto[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n\n.col-1[_ngcontent-%COMP%] {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.col-2[_ngcontent-%COMP%] {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.col-3[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.col-4[_ngcontent-%COMP%] {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.col-5[_ngcontent-%COMP%] {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.col-6[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.col-7[_ngcontent-%COMP%] {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.col-8[_ngcontent-%COMP%] {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.col-9[_ngcontent-%COMP%] {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.col-10[_ngcontent-%COMP%] {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.col-11[_ngcontent-%COMP%] {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.col-12[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.order-first[_ngcontent-%COMP%] {\n  order: -1; }\n\n.order-last[_ngcontent-%COMP%] {\n  order: 13; }\n\n.order-0[_ngcontent-%COMP%] {\n  order: 0; }\n\n.order-1[_ngcontent-%COMP%] {\n  order: 1; }\n\n.order-2[_ngcontent-%COMP%] {\n  order: 2; }\n\n.order-3[_ngcontent-%COMP%] {\n  order: 3; }\n\n.order-4[_ngcontent-%COMP%] {\n  order: 4; }\n\n.order-5[_ngcontent-%COMP%] {\n  order: 5; }\n\n.order-6[_ngcontent-%COMP%] {\n  order: 6; }\n\n.order-7[_ngcontent-%COMP%] {\n  order: 7; }\n\n.order-8[_ngcontent-%COMP%] {\n  order: 8; }\n\n.order-9[_ngcontent-%COMP%] {\n  order: 9; }\n\n.order-10[_ngcontent-%COMP%] {\n  order: 10; }\n\n.order-11[_ngcontent-%COMP%] {\n  order: 11; }\n\n.order-12[_ngcontent-%COMP%] {\n  order: 12; }\n\n.offset-1[_ngcontent-%COMP%] {\n  margin-left: 8.33333%; }\n\n.offset-2[_ngcontent-%COMP%] {\n  margin-left: 16.66667%; }\n\n.offset-3[_ngcontent-%COMP%] {\n  margin-left: 25%; }\n\n.offset-4[_ngcontent-%COMP%] {\n  margin-left: 33.33333%; }\n\n.offset-5[_ngcontent-%COMP%] {\n  margin-left: 41.66667%; }\n\n.offset-6[_ngcontent-%COMP%] {\n  margin-left: 50%; }\n\n.offset-7[_ngcontent-%COMP%] {\n  margin-left: 58.33333%; }\n\n.offset-8[_ngcontent-%COMP%] {\n  margin-left: 66.66667%; }\n\n.offset-9[_ngcontent-%COMP%] {\n  margin-left: 75%; }\n\n.offset-10[_ngcontent-%COMP%] {\n  margin-left: 83.33333%; }\n\n.offset-11[_ngcontent-%COMP%] {\n  margin-left: 91.66667%; }\n\n@media (min-width: 576px) {\n  .col-sm[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1[_ngcontent-%COMP%] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-sm-2[_ngcontent-%COMP%] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-sm-3[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4[_ngcontent-%COMP%] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-sm-5[_ngcontent-%COMP%] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-sm-6[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7[_ngcontent-%COMP%] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-sm-8[_ngcontent-%COMP%] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-sm-9[_ngcontent-%COMP%] {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10[_ngcontent-%COMP%] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-sm-11[_ngcontent-%COMP%] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-sm-12[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first[_ngcontent-%COMP%] {\n    order: -1; }\n  .order-sm-last[_ngcontent-%COMP%] {\n    order: 13; }\n  .order-sm-0[_ngcontent-%COMP%] {\n    order: 0; }\n  .order-sm-1[_ngcontent-%COMP%] {\n    order: 1; }\n  .order-sm-2[_ngcontent-%COMP%] {\n    order: 2; }\n  .order-sm-3[_ngcontent-%COMP%] {\n    order: 3; }\n  .order-sm-4[_ngcontent-%COMP%] {\n    order: 4; }\n  .order-sm-5[_ngcontent-%COMP%] {\n    order: 5; }\n  .order-sm-6[_ngcontent-%COMP%] {\n    order: 6; }\n  .order-sm-7[_ngcontent-%COMP%] {\n    order: 7; }\n  .order-sm-8[_ngcontent-%COMP%] {\n    order: 8; }\n  .order-sm-9[_ngcontent-%COMP%] {\n    order: 9; }\n  .order-sm-10[_ngcontent-%COMP%] {\n    order: 10; }\n  .order-sm-11[_ngcontent-%COMP%] {\n    order: 11; }\n  .order-sm-12[_ngcontent-%COMP%] {\n    order: 12; }\n  .offset-sm-0[_ngcontent-%COMP%] {\n    margin-left: 0; }\n  .offset-sm-1[_ngcontent-%COMP%] {\n    margin-left: 8.33333%; }\n  .offset-sm-2[_ngcontent-%COMP%] {\n    margin-left: 16.66667%; }\n  .offset-sm-3[_ngcontent-%COMP%] {\n    margin-left: 25%; }\n  .offset-sm-4[_ngcontent-%COMP%] {\n    margin-left: 33.33333%; }\n  .offset-sm-5[_ngcontent-%COMP%] {\n    margin-left: 41.66667%; }\n  .offset-sm-6[_ngcontent-%COMP%] {\n    margin-left: 50%; }\n  .offset-sm-7[_ngcontent-%COMP%] {\n    margin-left: 58.33333%; }\n  .offset-sm-8[_ngcontent-%COMP%] {\n    margin-left: 66.66667%; }\n  .offset-sm-9[_ngcontent-%COMP%] {\n    margin-left: 75%; }\n  .offset-sm-10[_ngcontent-%COMP%] {\n    margin-left: 83.33333%; }\n  .offset-sm-11[_ngcontent-%COMP%] {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 768px) {\n  .col-md[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1[_ngcontent-%COMP%] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-md-2[_ngcontent-%COMP%] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-md-3[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4[_ngcontent-%COMP%] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-md-5[_ngcontent-%COMP%] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-md-6[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7[_ngcontent-%COMP%] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-md-8[_ngcontent-%COMP%] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-md-9[_ngcontent-%COMP%] {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10[_ngcontent-%COMP%] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-md-11[_ngcontent-%COMP%] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-md-12[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first[_ngcontent-%COMP%] {\n    order: -1; }\n  .order-md-last[_ngcontent-%COMP%] {\n    order: 13; }\n  .order-md-0[_ngcontent-%COMP%] {\n    order: 0; }\n  .order-md-1[_ngcontent-%COMP%] {\n    order: 1; }\n  .order-md-2[_ngcontent-%COMP%] {\n    order: 2; }\n  .order-md-3[_ngcontent-%COMP%] {\n    order: 3; }\n  .order-md-4[_ngcontent-%COMP%] {\n    order: 4; }\n  .order-md-5[_ngcontent-%COMP%] {\n    order: 5; }\n  .order-md-6[_ngcontent-%COMP%] {\n    order: 6; }\n  .order-md-7[_ngcontent-%COMP%] {\n    order: 7; }\n  .order-md-8[_ngcontent-%COMP%] {\n    order: 8; }\n  .order-md-9[_ngcontent-%COMP%] {\n    order: 9; }\n  .order-md-10[_ngcontent-%COMP%] {\n    order: 10; }\n  .order-md-11[_ngcontent-%COMP%] {\n    order: 11; }\n  .order-md-12[_ngcontent-%COMP%] {\n    order: 12; }\n  .offset-md-0[_ngcontent-%COMP%] {\n    margin-left: 0; }\n  .offset-md-1[_ngcontent-%COMP%] {\n    margin-left: 8.33333%; }\n  .offset-md-2[_ngcontent-%COMP%] {\n    margin-left: 16.66667%; }\n  .offset-md-3[_ngcontent-%COMP%] {\n    margin-left: 25%; }\n  .offset-md-4[_ngcontent-%COMP%] {\n    margin-left: 33.33333%; }\n  .offset-md-5[_ngcontent-%COMP%] {\n    margin-left: 41.66667%; }\n  .offset-md-6[_ngcontent-%COMP%] {\n    margin-left: 50%; }\n  .offset-md-7[_ngcontent-%COMP%] {\n    margin-left: 58.33333%; }\n  .offset-md-8[_ngcontent-%COMP%] {\n    margin-left: 66.66667%; }\n  .offset-md-9[_ngcontent-%COMP%] {\n    margin-left: 75%; }\n  .offset-md-10[_ngcontent-%COMP%] {\n    margin-left: 83.33333%; }\n  .offset-md-11[_ngcontent-%COMP%] {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 992px) {\n  .col-lg[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1[_ngcontent-%COMP%] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-lg-2[_ngcontent-%COMP%] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-lg-3[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4[_ngcontent-%COMP%] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-lg-5[_ngcontent-%COMP%] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-lg-6[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7[_ngcontent-%COMP%] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-lg-8[_ngcontent-%COMP%] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-lg-9[_ngcontent-%COMP%] {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10[_ngcontent-%COMP%] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-lg-11[_ngcontent-%COMP%] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-lg-12[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first[_ngcontent-%COMP%] {\n    order: -1; }\n  .order-lg-last[_ngcontent-%COMP%] {\n    order: 13; }\n  .order-lg-0[_ngcontent-%COMP%] {\n    order: 0; }\n  .order-lg-1[_ngcontent-%COMP%] {\n    order: 1; }\n  .order-lg-2[_ngcontent-%COMP%] {\n    order: 2; }\n  .order-lg-3[_ngcontent-%COMP%] {\n    order: 3; }\n  .order-lg-4[_ngcontent-%COMP%] {\n    order: 4; }\n  .order-lg-5[_ngcontent-%COMP%] {\n    order: 5; }\n  .order-lg-6[_ngcontent-%COMP%] {\n    order: 6; }\n  .order-lg-7[_ngcontent-%COMP%] {\n    order: 7; }\n  .order-lg-8[_ngcontent-%COMP%] {\n    order: 8; }\n  .order-lg-9[_ngcontent-%COMP%] {\n    order: 9; }\n  .order-lg-10[_ngcontent-%COMP%] {\n    order: 10; }\n  .order-lg-11[_ngcontent-%COMP%] {\n    order: 11; }\n  .order-lg-12[_ngcontent-%COMP%] {\n    order: 12; }\n  .offset-lg-0[_ngcontent-%COMP%] {\n    margin-left: 0; }\n  .offset-lg-1[_ngcontent-%COMP%] {\n    margin-left: 8.33333%; }\n  .offset-lg-2[_ngcontent-%COMP%] {\n    margin-left: 16.66667%; }\n  .offset-lg-3[_ngcontent-%COMP%] {\n    margin-left: 25%; }\n  .offset-lg-4[_ngcontent-%COMP%] {\n    margin-left: 33.33333%; }\n  .offset-lg-5[_ngcontent-%COMP%] {\n    margin-left: 41.66667%; }\n  .offset-lg-6[_ngcontent-%COMP%] {\n    margin-left: 50%; }\n  .offset-lg-7[_ngcontent-%COMP%] {\n    margin-left: 58.33333%; }\n  .offset-lg-8[_ngcontent-%COMP%] {\n    margin-left: 66.66667%; }\n  .offset-lg-9[_ngcontent-%COMP%] {\n    margin-left: 75%; }\n  .offset-lg-10[_ngcontent-%COMP%] {\n    margin-left: 83.33333%; }\n  .offset-lg-11[_ngcontent-%COMP%] {\n    margin-left: 91.66667%; } }\n\n@media (min-width: 1200px) {\n  .col-xl[_ngcontent-%COMP%] {\n    flex-basis: 0;\n    flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1[_ngcontent-%COMP%] {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .col-xl-2[_ngcontent-%COMP%] {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .col-xl-3[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4[_ngcontent-%COMP%] {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .col-xl-5[_ngcontent-%COMP%] {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .col-xl-6[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7[_ngcontent-%COMP%] {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .col-xl-8[_ngcontent-%COMP%] {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .col-xl-9[_ngcontent-%COMP%] {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10[_ngcontent-%COMP%] {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .col-xl-11[_ngcontent-%COMP%] {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .col-xl-12[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first[_ngcontent-%COMP%] {\n    order: -1; }\n  .order-xl-last[_ngcontent-%COMP%] {\n    order: 13; }\n  .order-xl-0[_ngcontent-%COMP%] {\n    order: 0; }\n  .order-xl-1[_ngcontent-%COMP%] {\n    order: 1; }\n  .order-xl-2[_ngcontent-%COMP%] {\n    order: 2; }\n  .order-xl-3[_ngcontent-%COMP%] {\n    order: 3; }\n  .order-xl-4[_ngcontent-%COMP%] {\n    order: 4; }\n  .order-xl-5[_ngcontent-%COMP%] {\n    order: 5; }\n  .order-xl-6[_ngcontent-%COMP%] {\n    order: 6; }\n  .order-xl-7[_ngcontent-%COMP%] {\n    order: 7; }\n  .order-xl-8[_ngcontent-%COMP%] {\n    order: 8; }\n  .order-xl-9[_ngcontent-%COMP%] {\n    order: 9; }\n  .order-xl-10[_ngcontent-%COMP%] {\n    order: 10; }\n  .order-xl-11[_ngcontent-%COMP%] {\n    order: 11; }\n  .order-xl-12[_ngcontent-%COMP%] {\n    order: 12; }\n  .offset-xl-0[_ngcontent-%COMP%] {\n    margin-left: 0; }\n  .offset-xl-1[_ngcontent-%COMP%] {\n    margin-left: 8.33333%; }\n  .offset-xl-2[_ngcontent-%COMP%] {\n    margin-left: 16.66667%; }\n  .offset-xl-3[_ngcontent-%COMP%] {\n    margin-left: 25%; }\n  .offset-xl-4[_ngcontent-%COMP%] {\n    margin-left: 33.33333%; }\n  .offset-xl-5[_ngcontent-%COMP%] {\n    margin-left: 41.66667%; }\n  .offset-xl-6[_ngcontent-%COMP%] {\n    margin-left: 50%; }\n  .offset-xl-7[_ngcontent-%COMP%] {\n    margin-left: 58.33333%; }\n  .offset-xl-8[_ngcontent-%COMP%] {\n    margin-left: 66.66667%; }\n  .offset-xl-9[_ngcontent-%COMP%] {\n    margin-left: 75%; }\n  .offset-xl-10[_ngcontent-%COMP%] {\n    margin-left: 83.33333%; }\n  .offset-xl-11[_ngcontent-%COMP%] {\n    margin-left: 91.66667%; } }\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1.2rem;\n  background-color: transparent; }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n  .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n  .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n    border-top: 2px solid #dee2e6; }\n  .table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n    background-color: white; }\n\n.table-sm[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-sm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.3rem; }\n\n.table-bordered[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6; }\n  .table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #dee2e6; }\n  .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border-bottom-width: 2px; }\n\n.table-borderless[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-borderless[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-borderless[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-borderless[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border: 0; }\n\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-primary[_ngcontent-%COMP%], .table-primary[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-primary[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #c9ceea; }\n\n.table-hover[_ngcontent-%COMP%]   .table-primary[_ngcontent-%COMP%]:hover {\n  background-color: #b7bde3; }\n  .table-hover[_ngcontent-%COMP%]   .table-primary[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-primary[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n    background-color: #b7bde3; }\n\n.table-secondary[_ngcontent-%COMP%], .table-secondary[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-secondary[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #cfd3e8; }\n\n.table-hover[_ngcontent-%COMP%]   .table-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #bec3e0; }\n  .table-hover[_ngcontent-%COMP%]   .table-secondary[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-secondary[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n    background-color: #bec3e0; }\n\n.table-success[_ngcontent-%COMP%], .table-success[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-success[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #c3e6cb; }\n\n.table-hover[_ngcontent-%COMP%]   .table-success[_ngcontent-%COMP%]:hover {\n  background-color: #b1dfbb; }\n  .table-hover[_ngcontent-%COMP%]   .table-success[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-success[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n    background-color: #b1dfbb; }\n\n.table-info[_ngcontent-%COMP%], .table-info[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-info[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #f1f1f1; }\n\n.table-hover[_ngcontent-%COMP%]   .table-info[_ngcontent-%COMP%]:hover {\n  background-color: #e4e4e4; }\n  .table-hover[_ngcontent-%COMP%]   .table-info[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-info[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n    background-color: #e4e4e4; }\n\n.table-warning[_ngcontent-%COMP%], .table-warning[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-warning[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #ffeeba; }\n\n.table-hover[_ngcontent-%COMP%]   .table-warning[_ngcontent-%COMP%]:hover {\n  background-color: #ffe8a1; }\n  .table-hover[_ngcontent-%COMP%]   .table-warning[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-warning[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n    background-color: #ffe8a1; }\n\n.table-danger[_ngcontent-%COMP%], .table-danger[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-danger[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #f5c6cb; }\n\n.table-hover[_ngcontent-%COMP%]   .table-danger[_ngcontent-%COMP%]:hover {\n  background-color: #f1b0b7; }\n  .table-hover[_ngcontent-%COMP%]   .table-danger[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-danger[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n    background-color: #f1b0b7; }\n\n.table-light[_ngcontent-%COMP%], .table-light[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-light[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #fcfcfc; }\n\n.table-hover[_ngcontent-%COMP%]   .table-light[_ngcontent-%COMP%]:hover {\n  background-color: #efefef; }\n  .table-hover[_ngcontent-%COMP%]   .table-light[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-light[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n    background-color: #efefef; }\n\n.table-dark[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: #bdbdbd; }\n\n.table-hover[_ngcontent-%COMP%]   .table-dark[_ngcontent-%COMP%]:hover {\n  background-color: #b0b0b0; }\n  .table-hover[_ngcontent-%COMP%]   .table-dark[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-dark[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n    background-color: #b0b0b0; }\n\n.table-active[_ngcontent-%COMP%], .table-active[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-active[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover[_ngcontent-%COMP%]   .table-active[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n  .table-hover[_ngcontent-%COMP%]   .table-active[_ngcontent-%COMP%]:hover    > td[_ngcontent-%COMP%], .table-hover[_ngcontent-%COMP%]   .table-active[_ngcontent-%COMP%]:hover    > th[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.075); }\n\n.table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #212529;\n  border-color: #32383e; }\n\n.table[_ngcontent-%COMP%]   .thead-light[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n\n.table-dark[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #212529; }\n  .table-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    border-color: #32383e; }\n  .table-dark.table-bordered[_ngcontent-%COMP%] {\n    border: 0; }\n  .table-dark.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n  .table-dark.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n      border: 0; } }\n\n@media (max-width: 767.98px) {\n  .table-responsive-md[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n      border: 0; } }\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n      border: 0; } }\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n      border: 0; } }\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n  .table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0; }\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .form-control[_ngcontent-%COMP%] {\n      transition: none; } }\n  .form-control[_ngcontent-%COMP%]::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n  .form-control[_ngcontent-%COMP%]:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #98a2db;\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(63, 81, 181, 0.25); }\n  .form-control[_ngcontent-%COMP%]::placeholder {\n    color: #6c757d;\n    opacity: 1; }\n  .form-control[_ngcontent-%COMP%]:disabled, .form-control[readonly][_ngcontent-%COMP%] {\n    background-color: #e9ecef;\n    opacity: 1; }\n\nselect.form-control[_ngcontent-%COMP%]:focus::-ms-value {\n  color: #495057;\n  background-color: #fff; }\n\n.form-control-file[_ngcontent-%COMP%], .form-control-range[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%; }\n\n.col-form-label[_ngcontent-%COMP%] {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n\n.col-form-label-lg[_ngcontent-%COMP%] {\n  padding-top: calc(0.55rem + 1px);\n  padding-bottom: calc(0.55rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.col-form-label-sm[_ngcontent-%COMP%] {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.form-control-plaintext[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: #333;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n  .form-control-plaintext.form-control-sm[_ngcontent-%COMP%], .form-control-plaintext.form-control-lg[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0; }\n\n.form-control-sm[_ngcontent-%COMP%] {\n  height: calc(1.8125rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.form-control-lg[_ngcontent-%COMP%] {\n  height: calc(2.975rem + 2px);\n  padding: 0.55rem 1.2rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\nselect.form-control[size][_ngcontent-%COMP%], select.form-control[multiple][_ngcontent-%COMP%] {\n  height: auto; }\n\ntextarea.form-control[_ngcontent-%COMP%] {\n  height: auto; }\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem; }\n\n.form-text[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem; }\n\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n  .form-row[_ngcontent-%COMP%]    > .col[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]    > [class*=\"col-\"][_ngcontent-%COMP%] {\n    padding-right: 5px;\n    padding-left: 5px; }\n\n.form-check[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem; }\n\n.form-check-input[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem; }\n  .form-check-input[_ngcontent-%COMP%]:disabled    ~ .form-check-label[_ngcontent-%COMP%] {\n    color: #6c757d; }\n\n.form-check-label[_ngcontent-%COMP%] {\n  margin-bottom: 0; }\n\n.form-check-inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem; }\n  .form-check-inline[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n    position: static;\n    margin-top: 0;\n    margin-right: 0.3125rem;\n    margin-left: 0; }\n\n.valid-feedback[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745; }\n\n.valid-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.9);\n  border-radius: 0.25rem; }\n\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid, .form-control.is-valid[_ngcontent-%COMP%], .was-validated\n.custom-select[_ngcontent-%COMP%]:valid, .custom-select.is-valid[_ngcontent-%COMP%] {\n  border-color: #28a745; }\n  .was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid:focus, .form-control.is-valid[_ngcontent-%COMP%]:focus, .was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:valid:focus, .custom-select.is-valid[_ngcontent-%COMP%]:focus {\n    border-color: #28a745;\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n  .was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .form-control.is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .form-control.is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .custom-select.is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .custom-select.is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%] {\n    display: block; }\n\n.was-validated[_ngcontent-%COMP%]   .form-control-file[_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-control-file[_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .form-control-file.is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .form-control-file.is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%] {\n  display: block; }\n\n.was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:valid    ~ .form-check-label[_ngcontent-%COMP%], .form-check-input.is-valid[_ngcontent-%COMP%]    ~ .form-check-label[_ngcontent-%COMP%] {\n  color: #28a745; }\n\n.was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .form-check-input.is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .form-check-input.is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%] {\n  display: block; }\n\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid    ~ .custom-control-label[_ngcontent-%COMP%], .custom-control-input.is-valid[_ngcontent-%COMP%]    ~ .custom-control-label[_ngcontent-%COMP%] {\n  color: #28a745; }\n  .was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-valid[_ngcontent-%COMP%]    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n    background-color: #71dd8a; }\n\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .custom-control-input.is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .custom-control-input.is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%] {\n  display: block; }\n\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-valid[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: #34ce57; }\n\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:valid:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-valid[_ngcontent-%COMP%]:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  box-shadow: 0 0 0 1px white, 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:valid    ~ .custom-file-label[_ngcontent-%COMP%], .custom-file-input.is-valid[_ngcontent-%COMP%]    ~ .custom-file-label[_ngcontent-%COMP%] {\n  border-color: #28a745; }\n  .was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:valid    ~ .custom-file-label[_ngcontent-%COMP%]::after, .custom-file-input.is-valid[_ngcontent-%COMP%]    ~ .custom-file-label[_ngcontent-%COMP%]::after {\n    border-color: inherit; }\n\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:valid    ~ .valid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:valid    ~ .valid-tooltip[_ngcontent-%COMP%], .custom-file-input.is-valid[_ngcontent-%COMP%]    ~ .valid-feedback[_ngcontent-%COMP%], .custom-file-input.is-valid[_ngcontent-%COMP%]    ~ .valid-tooltip[_ngcontent-%COMP%] {\n  display: block; }\n\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:valid:focus    ~ .custom-file-label[_ngcontent-%COMP%], .custom-file-input.is-valid[_ngcontent-%COMP%]:focus    ~ .custom-file-label[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545; }\n\n.invalid-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: .1rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.9);\n  border-radius: 0.25rem; }\n\n.was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid, .form-control.is-invalid[_ngcontent-%COMP%], .was-validated\n.custom-select[_ngcontent-%COMP%]:invalid, .custom-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545; }\n  .was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid:focus, .form-control.is-invalid[_ngcontent-%COMP%]:focus, .was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:invalid:focus, .custom-select.is-invalid[_ngcontent-%COMP%]:focus {\n    border-color: #dc3545;\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n  .was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .form-control.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .form-control.is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .custom-select.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .custom-select.is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%] {\n    display: block; }\n\n.was-validated[_ngcontent-%COMP%]   .form-control-file[_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-control-file[_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .form-control-file.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .form-control-file.is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%] {\n  display: block; }\n\n.was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:invalid    ~ .form-check-label[_ngcontent-%COMP%], .form-check-input.is-invalid[_ngcontent-%COMP%]    ~ .form-check-label[_ngcontent-%COMP%] {\n  color: #dc3545; }\n\n.was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .form-check-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .form-check-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%] {\n  display: block; }\n\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid    ~ .custom-control-label[_ngcontent-%COMP%], .custom-control-input.is-invalid[_ngcontent-%COMP%]    ~ .custom-control-label[_ngcontent-%COMP%] {\n  color: #dc3545; }\n  .was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-invalid[_ngcontent-%COMP%]    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n    background-color: #efa2a9; }\n\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .custom-control-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .custom-control-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%] {\n  display: block; }\n\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-invalid[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: #e4606d; }\n\n.was-validated[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:invalid:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-input.is-invalid[_ngcontent-%COMP%]:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  box-shadow: 0 0 0 1px white, 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:invalid    ~ .custom-file-label[_ngcontent-%COMP%], .custom-file-input.is-invalid[_ngcontent-%COMP%]    ~ .custom-file-label[_ngcontent-%COMP%] {\n  border-color: #dc3545; }\n  .was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:invalid    ~ .custom-file-label[_ngcontent-%COMP%]::after, .custom-file-input.is-invalid[_ngcontent-%COMP%]    ~ .custom-file-label[_ngcontent-%COMP%]::after {\n    border-color: inherit; }\n\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:invalid    ~ .invalid-feedback[_ngcontent-%COMP%], .was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:invalid    ~ .invalid-tooltip[_ngcontent-%COMP%], .custom-file-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-feedback[_ngcontent-%COMP%], .custom-file-input.is-invalid[_ngcontent-%COMP%]    ~ .invalid-tooltip[_ngcontent-%COMP%] {\n  display: block; }\n\n.was-validated[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:invalid:focus    ~ .custom-file-label[_ngcontent-%COMP%], .custom-file-input.is-invalid[_ngcontent-%COMP%]:focus    ~ .custom-file-label[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n\n.form-inline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center; }\n  .form-inline[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n    width: 100%; }\n  @media (min-width: 576px) {\n    .form-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin-bottom: 0; }\n    .form-inline[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n      display: flex;\n      flex: 0 0 auto;\n      flex-flow: row wrap;\n      align-items: center;\n      margin-bottom: 0; }\n    .form-inline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline[_ngcontent-%COMP%]   .form-control-plaintext[_ngcontent-%COMP%] {\n      display: inline-block; }\n    .form-inline[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%], .form-inline[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n      width: auto; }\n    .form-inline[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: auto;\n      padding-left: 0; }\n    .form-inline[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n      position: relative;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline[_ngcontent-%COMP%]   .custom-control[_ngcontent-%COMP%] {\n      align-items: center;\n      justify-content: center; }\n    .form-inline[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%] {\n      margin-bottom: 0; } }\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .btn[_ngcontent-%COMP%] {\n      transition: none; } }\n  .btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:focus {\n    text-decoration: none; }\n  .btn[_ngcontent-%COMP%]:focus, .btn.focus[_ngcontent-%COMP%] {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(63, 81, 181, 0.25); }\n  .btn.disabled[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled {\n    opacity: 0.65;\n    box-shadow: none; }\n  .btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n  .btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n    .btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus {\n      box-shadow: 0 0 0 0.2rem rgba(63, 81, 181, 0.25), inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n\na.btn.disabled[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%]:disabled   a.btn[_ngcontent-%COMP%] {\n  pointer-events: none; }\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #3f51b5;\n  border-color: #3f51b5;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .btn-primary[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: #354499;\n    border-color: #32408f; }\n  .btn-primary[_ngcontent-%COMP%]:focus, .btn-primary.focus[_ngcontent-%COMP%] {\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(63, 81, 181, 0.5); }\n  .btn-primary.disabled[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:disabled {\n    color: #fff;\n    background-color: #3f51b5;\n    border-color: #3f51b5; }\n  .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-primary.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #32408f;\n    border-color: #2f3c86; }\n    .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-primary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(63, 81, 181, 0.5); }\n\n.btn-secondary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #5562ad;\n  border-color: #5562ad;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .btn-secondary[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: #485394;\n    border-color: #434e8c; }\n  .btn-secondary[_ngcontent-%COMP%]:focus, .btn-secondary.focus[_ngcontent-%COMP%] {\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(85, 98, 173, 0.5); }\n  .btn-secondary.disabled[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%]:disabled {\n    color: #fff;\n    background-color: #5562ad;\n    border-color: #5562ad; }\n  .btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #434e8c;\n    border-color: #3f4983; }\n    .btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-secondary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(85, 98, 173, 0.5); }\n\n.btn-success[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .btn-success[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34; }\n  .btn-success[_ngcontent-%COMP%]:focus, .btn-success.focus[_ngcontent-%COMP%] {\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n  .btn-success.disabled[_ngcontent-%COMP%], .btn-success[_ngcontent-%COMP%]:disabled {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n  .btn-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-success.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430; }\n    .btn-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-success.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.btn-info[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #ccc;\n  border-color: #ccc;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .btn-info[_ngcontent-%COMP%]:hover {\n    color: #212529;\n    background-color: #b9b9b9;\n    border-color: #b3b3b3; }\n  .btn-info[_ngcontent-%COMP%]:focus, .btn-info.focus[_ngcontent-%COMP%] {\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(204, 204, 204, 0.5); }\n  .btn-info.disabled[_ngcontent-%COMP%], .btn-info[_ngcontent-%COMP%]:disabled {\n    color: #212529;\n    background-color: #ccc;\n    border-color: #ccc; }\n  .btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-info.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #212529;\n    background-color: #b3b3b3;\n    border-color: #acacac; }\n    .btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-info.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(204, 204, 204, 0.5); }\n\n.btn-warning[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .btn-warning[_ngcontent-%COMP%]:hover {\n    color: #212529;\n    background-color: #e0a800;\n    border-color: #d39e00; }\n  .btn-warning[_ngcontent-%COMP%]:focus, .btn-warning.focus[_ngcontent-%COMP%] {\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n  .btn-warning.disabled[_ngcontent-%COMP%], .btn-warning[_ngcontent-%COMP%]:disabled {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n  .btn-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-warning.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #212529;\n    background-color: #d39e00;\n    border-color: #c69500; }\n    .btn-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-warning.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.btn-danger[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .btn-danger[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130; }\n  .btn-danger[_ngcontent-%COMP%]:focus, .btn-danger.focus[_ngcontent-%COMP%] {\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n  .btn-danger.disabled[_ngcontent-%COMP%], .btn-danger[_ngcontent-%COMP%]:disabled {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n  .btn-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-danger.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #bd2130;\n    border-color: #b21f2d; }\n    .btn-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-danger.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-light[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #f3f3f3;\n  border-color: #f3f3f3;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .btn-light[_ngcontent-%COMP%]:hover {\n    color: #212529;\n    background-color: #e0e0e0;\n    border-color: #dadada; }\n  .btn-light[_ngcontent-%COMP%]:focus, .btn-light.focus[_ngcontent-%COMP%] {\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(243, 243, 243, 0.5); }\n  .btn-light.disabled[_ngcontent-%COMP%], .btn-light[_ngcontent-%COMP%]:disabled {\n    color: #212529;\n    background-color: #f3f3f3;\n    border-color: #f3f3f3; }\n  .btn-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-light.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #212529;\n    background-color: #dadada;\n    border-color: lightgray; }\n    .btn-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-light.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(243, 243, 243, 0.5); }\n\n.btn-dark[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #151515;\n  border-color: #151515;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .btn-dark[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: #020202;\n    border-color: black; }\n  .btn-dark[_ngcontent-%COMP%]:focus, .btn-dark.focus[_ngcontent-%COMP%] {\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(21, 21, 21, 0.5); }\n  .btn-dark.disabled[_ngcontent-%COMP%], .btn-dark[_ngcontent-%COMP%]:disabled {\n    color: #fff;\n    background-color: #151515;\n    border-color: #151515; }\n  .btn-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-dark.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: black;\n    border-color: black; }\n    .btn-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-dark.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(21, 21, 21, 0.5); }\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #3f51b5;\n  background-color: transparent;\n  background-image: none;\n  border-color: #3f51b5; }\n  .btn-outline-primary[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: #3f51b5;\n    border-color: #3f51b5; }\n  .btn-outline-primary[_ngcontent-%COMP%]:focus, .btn-outline-primary.focus[_ngcontent-%COMP%] {\n    box-shadow: 0 0 0 0.2rem rgba(63, 81, 181, 0.5); }\n  .btn-outline-primary.disabled[_ngcontent-%COMP%], .btn-outline-primary[_ngcontent-%COMP%]:disabled {\n    color: #3f51b5;\n    background-color: transparent; }\n  .btn-outline-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-primary.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #3f51b5;\n    border-color: #3f51b5; }\n    .btn-outline-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-primary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(63, 81, 181, 0.5); }\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  color: #5562ad;\n  background-color: transparent;\n  background-image: none;\n  border-color: #5562ad; }\n  .btn-outline-secondary[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: #5562ad;\n    border-color: #5562ad; }\n  .btn-outline-secondary[_ngcontent-%COMP%]:focus, .btn-outline-secondary.focus[_ngcontent-%COMP%] {\n    box-shadow: 0 0 0 0.2rem rgba(85, 98, 173, 0.5); }\n  .btn-outline-secondary.disabled[_ngcontent-%COMP%], .btn-outline-secondary[_ngcontent-%COMP%]:disabled {\n    color: #5562ad;\n    background-color: transparent; }\n  .btn-outline-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #5562ad;\n    border-color: #5562ad; }\n    .btn-outline-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-secondary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(85, 98, 173, 0.5); }\n\n.btn-outline-success[_ngcontent-%COMP%] {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745; }\n  .btn-outline-success[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n  .btn-outline-success[_ngcontent-%COMP%]:focus, .btn-outline-success.focus[_ngcontent-%COMP%] {\n    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n  .btn-outline-success.disabled[_ngcontent-%COMP%], .btn-outline-success[_ngcontent-%COMP%]:disabled {\n    color: #28a745;\n    background-color: transparent; }\n  .btn-outline-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-success.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n    .btn-outline-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-success[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-success.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n\n.btn-outline-info[_ngcontent-%COMP%] {\n  color: #ccc;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ccc; }\n  .btn-outline-info[_ngcontent-%COMP%]:hover {\n    color: #212529;\n    background-color: #ccc;\n    border-color: #ccc; }\n  .btn-outline-info[_ngcontent-%COMP%]:focus, .btn-outline-info.focus[_ngcontent-%COMP%] {\n    box-shadow: 0 0 0 0.2rem rgba(204, 204, 204, 0.5); }\n  .btn-outline-info.disabled[_ngcontent-%COMP%], .btn-outline-info[_ngcontent-%COMP%]:disabled {\n    color: #ccc;\n    background-color: transparent; }\n  .btn-outline-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-info.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #212529;\n    background-color: #ccc;\n    border-color: #ccc; }\n    .btn-outline-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-info[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-info.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(204, 204, 204, 0.5); }\n\n.btn-outline-warning[_ngcontent-%COMP%] {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107; }\n  .btn-outline-warning[_ngcontent-%COMP%]:hover {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n  .btn-outline-warning[_ngcontent-%COMP%]:focus, .btn-outline-warning.focus[_ngcontent-%COMP%] {\n    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n  .btn-outline-warning.disabled[_ngcontent-%COMP%], .btn-outline-warning[_ngcontent-%COMP%]:disabled {\n    color: #ffc107;\n    background-color: transparent; }\n  .btn-outline-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-warning.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n    .btn-outline-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-warning[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-warning.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n\n.btn-outline-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545; }\n  .btn-outline-danger[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n  .btn-outline-danger[_ngcontent-%COMP%]:focus, .btn-outline-danger.focus[_ngcontent-%COMP%] {\n    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n  .btn-outline-danger.disabled[_ngcontent-%COMP%], .btn-outline-danger[_ngcontent-%COMP%]:disabled {\n    color: #dc3545;\n    background-color: transparent; }\n  .btn-outline-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-danger.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n    .btn-outline-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-danger[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-danger.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n\n.btn-outline-light[_ngcontent-%COMP%] {\n  color: #f3f3f3;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f3f3f3; }\n  .btn-outline-light[_ngcontent-%COMP%]:hover {\n    color: #212529;\n    background-color: #f3f3f3;\n    border-color: #f3f3f3; }\n  .btn-outline-light[_ngcontent-%COMP%]:focus, .btn-outline-light.focus[_ngcontent-%COMP%] {\n    box-shadow: 0 0 0 0.2rem rgba(243, 243, 243, 0.5); }\n  .btn-outline-light.disabled[_ngcontent-%COMP%], .btn-outline-light[_ngcontent-%COMP%]:disabled {\n    color: #f3f3f3;\n    background-color: transparent; }\n  .btn-outline-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-light.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #212529;\n    background-color: #f3f3f3;\n    border-color: #f3f3f3; }\n    .btn-outline-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-light[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-light.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(243, 243, 243, 0.5); }\n\n.btn-outline-dark[_ngcontent-%COMP%] {\n  color: #151515;\n  background-color: transparent;\n  background-image: none;\n  border-color: #151515; }\n  .btn-outline-dark[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    background-color: #151515;\n    border-color: #151515; }\n  .btn-outline-dark[_ngcontent-%COMP%]:focus, .btn-outline-dark.focus[_ngcontent-%COMP%] {\n    box-shadow: 0 0 0 0.2rem rgba(21, 21, 21, 0.5); }\n  .btn-outline-dark.disabled[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%]:disabled {\n    color: #151515;\n    background-color: transparent; }\n  .btn-outline-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, .btn-outline-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, .show[_ngcontent-%COMP%]    > .btn-outline-dark.dropdown-toggle[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #151515;\n    border-color: #151515; }\n    .btn-outline-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, .btn-outline-dark[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, .show[_ngcontent-%COMP%]    > .btn-outline-dark.dropdown-toggle[_ngcontent-%COMP%]:focus {\n      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125), 0 0 0 0.2rem rgba(21, 21, 21, 0.5); }\n\n.btn-link[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: white;\n  background-color: transparent; }\n  .btn-link[_ngcontent-%COMP%]:hover {\n    color: #d9d9d9;\n    text-decoration: underline;\n    background-color: transparent;\n    border-color: transparent; }\n  .btn-link[_ngcontent-%COMP%]:focus, .btn-link.focus[_ngcontent-%COMP%] {\n    text-decoration: underline;\n    border-color: transparent;\n    box-shadow: none; }\n  .btn-link[_ngcontent-%COMP%]:disabled, .btn-link.disabled[_ngcontent-%COMP%] {\n    color: #6c757d;\n    pointer-events: none; }\n\n.btn-lg[_ngcontent-%COMP%], .btn-group-lg[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  padding: 0.55rem 1.2rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.btn-sm[_ngcontent-%COMP%], .btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.btn-block[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%; }\n  .btn-block[_ngcontent-%COMP%]    + .btn-block[_ngcontent-%COMP%] {\n    margin-top: 0.5rem; }\n\ninput[type=\"submit\"].btn-block[_ngcontent-%COMP%], input[type=\"reset\"].btn-block[_ngcontent-%COMP%], input[type=\"button\"].btn-block[_ngcontent-%COMP%] {\n  width: 100%; }\n\n.fade[_ngcontent-%COMP%] {\n  transition: opacity 0.15s linear; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .fade[_ngcontent-%COMP%] {\n      transition: none; } }\n  .fade[_ngcontent-%COMP%]:not(.show) {\n    opacity: 0; }\n\n.collapse[_ngcontent-%COMP%]:not(.show) {\n  display: none; }\n\n.collapsing[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .collapsing[_ngcontent-%COMP%] {\n      transition: none; } }\n\n.dropup[_ngcontent-%COMP%], .dropright[_ngcontent-%COMP%], .dropdown[_ngcontent-%COMP%], .dropleft[_ngcontent-%COMP%] {\n  position: relative; }\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent; }\n\n.dropdown-toggle[_ngcontent-%COMP%]:empty::after {\n  margin-left: 0; }\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #333;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175); }\n\n.dropdown-menu-right[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto; }\n\n.dropup[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n\n.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n\n.dropup[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty::after {\n  margin-left: 0; }\n\n.dropright[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: 0.125rem; }\n\n.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid; }\n\n.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty::after {\n  margin-left: 0; }\n\n.dropright[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  vertical-align: 0; }\n\n.dropleft[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: 0.125rem; }\n\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\"; }\n\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none; }\n\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent; }\n\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:empty::after {\n  margin-left: 0; }\n\n.dropleft[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::before {\n  vertical-align: 0; }\n\n.dropdown-menu[x-placement^=\"top\"][_ngcontent-%COMP%], .dropdown-menu[x-placement^=\"right\"][_ngcontent-%COMP%], .dropdown-menu[x-placement^=\"bottom\"][_ngcontent-%COMP%], .dropdown-menu[x-placement^=\"left\"][_ngcontent-%COMP%] {\n  right: auto;\n  bottom: auto; }\n\n.dropdown-divider[_ngcontent-%COMP%] {\n  height: 0;\n  margin: 0.6rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n\n.dropdown-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n  .dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-item[_ngcontent-%COMP%]:focus {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #3f51b5; }\n  .dropdown-item.disabled[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:disabled {\n    color: #6c757d;\n    background-color: transparent; }\n\n.dropdown-menu.show[_ngcontent-%COMP%] {\n  display: block; }\n\n.dropdown-header[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap; }\n\n.dropdown-item-text[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.25rem 1.5rem;\n  color: #212529; }\n\n.btn-group[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; }\n  .btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n    position: relative;\n    flex: 0 1 auto; }\n    .btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:hover, .btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:hover {\n      z-index: 1; }\n    .btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:focus, .btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:active, .btn-group[_ngcontent-%COMP%]    > .btn.active[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:focus, .btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:active, .btn-group-vertical[_ngcontent-%COMP%]    > .btn.active[_ngcontent-%COMP%] {\n      z-index: 1; }\n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn-group[_ngcontent-%COMP%], .btn-group[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .btn-group[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]    + .btn-group[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn-group[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]    + .btn-group[_ngcontent-%COMP%] {\n    margin-left: -1px; }\n\n.btn-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start; }\n  .btn-toolbar[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n    width: auto; }\n\n.btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:first-child {\n  margin-left: 0; }\n\n.btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle), .btn-group[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]:not(:last-child)    > .btn[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:not(:first-child), .btn-group[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]:not(:first-child)    > .btn[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.dropdown-toggle-split[_ngcontent-%COMP%] {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n  .dropdown-toggle-split[_ngcontent-%COMP%]::after, .dropup[_ngcontent-%COMP%]   .dropdown-toggle-split[_ngcontent-%COMP%]::after, .dropright[_ngcontent-%COMP%]   .dropdown-toggle-split[_ngcontent-%COMP%]::after {\n    margin-left: 0; }\n  .dropleft[_ngcontent-%COMP%]   .dropdown-toggle-split[_ngcontent-%COMP%]::before {\n    margin-right: 0; }\n\n.btn-sm[_ngcontent-%COMP%]    + .dropdown-toggle-split[_ngcontent-%COMP%], .btn-group-sm[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]    + .dropdown-toggle-split[_ngcontent-%COMP%] {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n\n.btn-lg[_ngcontent-%COMP%]    + .dropdown-toggle-split[_ngcontent-%COMP%], .btn-group-lg[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]    + .dropdown-toggle-split[_ngcontent-%COMP%] {\n  padding-right: 0.9rem;\n  padding-left: 0.9rem; }\n\n.btn-group.show[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-group.show[_ngcontent-%COMP%]   .dropdown-toggle.btn-link[_ngcontent-%COMP%] {\n    box-shadow: none; }\n\n.btn-group-vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; }\n  .btn-group-vertical[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n    width: 100%; }\n  .btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]    + .btn-group[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]    + .btn-group[_ngcontent-%COMP%] {\n    margin-top: -1px;\n    margin-left: 0; }\n  .btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle), .btn-group-vertical[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]:not(:last-child)    > .btn[_ngcontent-%COMP%] {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n  .btn-group-vertical[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:not(:first-child), .btn-group-vertical[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]:not(:first-child)    > .btn[_ngcontent-%COMP%] {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group-toggle[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .btn-group-toggle[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  margin-bottom: 0; }\n  .btn-group-toggle[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%], .btn-group-toggle[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%], .btn-group-toggle[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%], .btn-group-toggle[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none; }\n\n.input-group[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%; }\n  .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%] {\n    position: relative;\n    flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0; }\n    .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]    + .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]    + .custom-select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]    + .custom-file[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]    + .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]    + .custom-select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]    + .custom-file[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]    + .form-control[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]    + .custom-select[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]    + .custom-file[_ngcontent-%COMP%] {\n      margin-left: -1px; }\n  .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:focus, .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]:focus, .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:focus    ~ .custom-file-label[_ngcontent-%COMP%] {\n    z-index: 3; }\n  .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]:focus {\n    z-index: 4; }\n  .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:not(:last-child), .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n  .input-group[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%]:not(:first-child), .input-group[_ngcontent-%COMP%]    > .custom-select[_ngcontent-%COMP%]:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n  .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center; }\n    .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]:not(:last-child)   .custom-file-label[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]:not(:last-child)   .custom-file-label[_ngcontent-%COMP%]::after {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0; }\n    .input-group[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]:not(:first-child)   .custom-file-label[_ngcontent-%COMP%] {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0; }\n\n.input-group-prepend[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%] {\n  display: flex; }\n  .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 2; }\n  .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%], .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]    + .input-group-text[_ngcontent-%COMP%], .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n    margin-left: -1px; }\n\n.input-group-prepend[_ngcontent-%COMP%] {\n  margin-right: -1px; }\n\n.input-group-append[_ngcontent-%COMP%] {\n  margin-left: -1px; }\n\n.input-group-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 1rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n  .input-group-text[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%], .input-group-text[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n    margin-top: 0; }\n\n.input-group-lg[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .input-group-lg[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  height: calc(2.975rem + 2px);\n  padding: 0.55rem 1.2rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n\n.input-group-sm[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .input-group-sm[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  height: calc(1.8125rem + 2px);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n\n.input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]:not(:last-child)    > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]:not(:last-child)    > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]:last-child    > .btn[_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle), .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]:last-child    > .input-group-text[_ngcontent-%COMP%]:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-append[_ngcontent-%COMP%]    > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]:not(:first-child)    > .btn[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]:not(:first-child)    > .input-group-text[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]:first-child    > .btn[_ngcontent-%COMP%]:not(:first-child), .input-group[_ngcontent-%COMP%]    > .input-group-prepend[_ngcontent-%COMP%]:first-child    > .input-group-text[_ngcontent-%COMP%]:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.custom-control[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem; }\n\n.custom-control-inline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-right: 1rem; }\n\n.custom-control-input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n  .custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n    color: #fff;\n    background-color: #3f51b5;\n    box-shadow: none; }\n  .custom-control-input[_ngcontent-%COMP%]:focus    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n    box-shadow: 0 0 0 1px white, 0 0 0 0.2rem rgba(63, 81, 181, 0.25); }\n  .custom-control-input[_ngcontent-%COMP%]:active    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n    color: #fff;\n    background-color: #bec5e8;\n    box-shadow: none; }\n  .custom-control-input[_ngcontent-%COMP%]:disabled    ~ .custom-control-label[_ngcontent-%COMP%] {\n    color: #6c757d; }\n    .custom-control-input[_ngcontent-%COMP%]:disabled    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n      background-color: #e9ecef; }\n\n.custom-control-label[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0; }\n  .custom-control-label[_ngcontent-%COMP%]::before {\n    position: absolute;\n    top: 0.25rem;\n    left: -1.5rem;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    pointer-events: none;\n    content: \"\";\n    -webkit-user-select: none;\n            user-select: none;\n    background-color: #dee2e6;\n    box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1); }\n  .custom-control-label[_ngcontent-%COMP%]::after {\n    position: absolute;\n    top: 0.25rem;\n    left: -1.5rem;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    content: \"\";\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 50% 50%; }\n\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\n  border-radius: 0.25rem; }\n\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: #3f51b5; }\n\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"); }\n\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:indeterminate    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: #3f51b5;\n  box-shadow: none; }\n\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:indeterminate    ~ .custom-control-label[_ngcontent-%COMP%]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\"); }\n\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:disabled:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:disabled:indeterminate    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.custom-radio[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\n  border-radius: 50%; }\n\n.custom-radio[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: #3f51b5; }\n\n.custom-radio[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\"); }\n\n.custom-radio[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:disabled:checked    ~ .custom-control-label[_ngcontent-%COMP%]::before {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.custom-select[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);\n  -webkit-appearance: none;\n          appearance: none; }\n  .custom-select[_ngcontent-%COMP%]:focus {\n    border-color: #98a2db;\n    outline: 0;\n    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(152, 162, 219, 0.5); }\n    .custom-select[_ngcontent-%COMP%]:focus::-ms-value {\n      color: #495057;\n      background-color: #fff; }\n  .custom-select[multiple][_ngcontent-%COMP%], .custom-select[size][_ngcontent-%COMP%]:not([size=\"1\"]) {\n    height: auto;\n    padding-right: 0.75rem;\n    background-image: none; }\n  .custom-select[_ngcontent-%COMP%]:disabled {\n    color: #6c757d;\n    background-color: #e9ecef; }\n  .custom-select[_ngcontent-%COMP%]::-ms-expand {\n    opacity: 0; }\n\n.custom-select-sm[_ngcontent-%COMP%] {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%; }\n\n.custom-select-lg[_ngcontent-%COMP%] {\n  height: calc(2.975rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%; }\n\n.custom-file[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0; }\n\n.custom-file-input[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0; }\n  .custom-file-input[_ngcontent-%COMP%]:focus    ~ .custom-file-label[_ngcontent-%COMP%] {\n    border-color: #98a2db;\n    box-shadow: 0 0 0 0.2rem rgba(63, 81, 181, 0.25); }\n    .custom-file-input[_ngcontent-%COMP%]:focus    ~ .custom-file-label[_ngcontent-%COMP%]::after {\n      border-color: #98a2db; }\n  .custom-file-input[_ngcontent-%COMP%]:disabled    ~ .custom-file-label[_ngcontent-%COMP%] {\n    background-color: #e9ecef; }\n  .custom-file-input[_ngcontent-%COMP%]:lang(en)    ~ .custom-file-label[_ngcontent-%COMP%]::after {\n    content: \"Browse\"; }\n\n.custom-file-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .custom-file-label[_ngcontent-%COMP%]::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: block;\n    height: 2.25rem;\n    padding: 0.375rem 1rem;\n    line-height: 1.5;\n    color: #495057;\n    content: \"Browse\";\n    background-color: #e9ecef;\n    border-left: 1px solid #ced4da;\n    border-radius: 0 0.25rem 0.25rem 0; }\n\n.custom-range[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n          appearance: none; }\n  .custom-range[_ngcontent-%COMP%]:focus {\n    outline: none; }\n    .custom-range[_ngcontent-%COMP%]:focus::-webkit-slider-thumb {\n      box-shadow: 0 0 0 1px white, 0 0 0 0.2rem rgba(63, 81, 181, 0.25); }\n    .custom-range[_ngcontent-%COMP%]:focus::-moz-range-thumb {\n      box-shadow: 0 0 0 1px white, 0 0 0 0.2rem rgba(63, 81, 181, 0.25); }\n    .custom-range[_ngcontent-%COMP%]:focus::-ms-thumb {\n      box-shadow: 0 0 0 1px white, 0 0 0 0.2rem rgba(63, 81, 181, 0.25); }\n  .custom-range[_ngcontent-%COMP%]::-moz-focus-outer {\n    border: 0; }\n  .custom-range[_ngcontent-%COMP%]::-webkit-slider-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: -0.25rem;\n    background-color: #3f51b5;\n    border: 0;\n    border-radius: 1rem;\n    box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);\n    -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    -webkit-appearance: none;\n            appearance: none; }\n    @media screen and (prefers-reduced-motion: reduce) {\n      .custom-range[_ngcontent-%COMP%]::-webkit-slider-thumb {\n        -webkit-transition: none;\n        transition: none; } }\n    .custom-range[_ngcontent-%COMP%]::-webkit-slider-thumb:active {\n      background-color: #bec5e8; }\n  .custom-range[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem;\n    box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1); }\n  .custom-range[_ngcontent-%COMP%]::-moz-range-thumb {\n    width: 1rem;\n    height: 1rem;\n    background-color: #3f51b5;\n    border: 0;\n    border-radius: 1rem;\n    box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);\n    -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media screen and (prefers-reduced-motion: reduce) {\n      .custom-range[_ngcontent-%COMP%]::-moz-range-thumb {\n        -moz-transition: none;\n        transition: none; } }\n    .custom-range[_ngcontent-%COMP%]::-moz-range-thumb:active {\n      background-color: #bec5e8; }\n  .custom-range[_ngcontent-%COMP%]::-moz-range-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: #dee2e6;\n    border-color: transparent;\n    border-radius: 1rem;\n    box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1); }\n  .custom-range[_ngcontent-%COMP%]::-ms-thumb {\n    width: 1rem;\n    height: 1rem;\n    margin-top: 0;\n    margin-right: 0.2rem;\n    margin-left: 0.2rem;\n    background-color: #3f51b5;\n    border: 0;\n    border-radius: 1rem;\n    box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);\n    -ms-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    appearance: none; }\n    @media screen and (prefers-reduced-motion: reduce) {\n      .custom-range[_ngcontent-%COMP%]::-ms-thumb {\n        -ms-transition: none;\n        transition: none; } }\n    .custom-range[_ngcontent-%COMP%]::-ms-thumb:active {\n      background-color: #bec5e8; }\n  .custom-range[_ngcontent-%COMP%]::-ms-track {\n    width: 100%;\n    height: 0.5rem;\n    color: transparent;\n    cursor: pointer;\n    background-color: transparent;\n    border-color: transparent;\n    border-width: 0.5rem;\n    box-shadow: inset 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1); }\n  .custom-range[_ngcontent-%COMP%]::-ms-fill-lower {\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n  .custom-range[_ngcontent-%COMP%]::-ms-fill-upper {\n    margin-right: 15px;\n    background-color: #dee2e6;\n    border-radius: 1rem; }\n\n.custom-control-label[_ngcontent-%COMP%]::before, .custom-file-label[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%] {\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .custom-control-label[_ngcontent-%COMP%]::before, .custom-file-label[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%] {\n      transition: none; } }\n\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.nav-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem 1rem; }\n  .nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:focus {\n    text-decoration: none; }\n  .nav-link.disabled[_ngcontent-%COMP%] {\n    color: #6c757d; }\n\n.nav-tabs[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6; }\n  .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    margin-bottom: -1px; }\n  .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n    .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n      border-color: #e9ecef #e9ecef #dee2e6; }\n    .nav-tabs[_ngcontent-%COMP%]   .nav-link.disabled[_ngcontent-%COMP%] {\n      color: #6c757d;\n      background-color: transparent;\n      border-color: transparent; }\n  .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: #495057;\n    background-color: white;\n    border-color: #dee2e6 #dee2e6 white; }\n  .nav-tabs[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border-radius: 0.25rem; }\n\n.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #3f51b5; }\n\n.nav-fill[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  text-align: center; }\n\n.nav-justified[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center; }\n\n.tab-content[_ngcontent-%COMP%]    > .tab-pane[_ngcontent-%COMP%] {\n  display: none; }\n\n.tab-content[_ngcontent-%COMP%]    > .active[_ngcontent-%COMP%] {\n  display: block; }\n\n.navbar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.6rem 1.2rem; }\n  .navbar[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between; }\n\n.navbar-brand[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1.2rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n  .navbar-brand[_ngcontent-%COMP%]:hover, .navbar-brand[_ngcontent-%COMP%]:focus {\n    text-decoration: none; }\n\n.navbar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n  .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: static;\n    float: none; }\n\n.navbar-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n\n.navbar-collapse[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center; }\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n  .navbar-toggler[_ngcontent-%COMP%]:hover, .navbar-toggler[_ngcontent-%COMP%]:focus {\n    text-decoration: none; }\n  .navbar-toggler[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n\n@media (max-width: 575.98px) {\n  .navbar-expand-sm[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-sm[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 576px) {\n  .navbar-expand-sm[_ngcontent-%COMP%] {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n      flex-direction: row; }\n      .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n        position: absolute; }\n      .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-sm[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-sm[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n      flex-wrap: nowrap; }\n    .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-sm[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n      display: none; } }\n\n@media (max-width: 767.98px) {\n  .navbar-expand-md[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-md[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 768px) {\n  .navbar-expand-md[_ngcontent-%COMP%] {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n      flex-direction: row; }\n      .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n        position: absolute; }\n      .navbar-expand-md[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-md[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-md[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n      flex-wrap: nowrap; }\n    .navbar-expand-md[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-md[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n      display: none; } }\n\n@media (max-width: 991.98px) {\n  .navbar-expand-lg[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-lg[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 992px) {\n  .navbar-expand-lg[_ngcontent-%COMP%] {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n      flex-direction: row; }\n      .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n        position: absolute; }\n      .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-lg[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-lg[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n      flex-wrap: nowrap; }\n    .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n      display: none; } }\n\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-xl[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0; } }\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl[_ngcontent-%COMP%] {\n    flex-flow: row nowrap;\n    justify-content: flex-start; }\n    .navbar-expand-xl[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n      flex-direction: row; }\n      .navbar-expand-xl[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n        position: absolute; }\n      .navbar-expand-xl[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-xl[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand-xl[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n      flex-wrap: nowrap; }\n    .navbar-expand-xl[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n      display: flex !important;\n      flex-basis: auto; }\n    .navbar-expand-xl[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n      display: none; } }\n\n.navbar-expand[_ngcontent-%COMP%] {\n  flex-flow: row nowrap;\n  justify-content: flex-start; }\n  .navbar-expand[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0; }\n  .navbar-expand[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    flex-direction: row; }\n    .navbar-expand[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n      position: absolute; }\n    .navbar-expand[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n      padding-right: 0.5rem;\n      padding-left: 0.5rem; }\n  .navbar-expand[_ngcontent-%COMP%]    > .container[_ngcontent-%COMP%], .navbar-expand[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\n    flex-wrap: nowrap; }\n  .navbar-expand[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n    display: flex !important;\n    flex-basis: auto; }\n  .navbar-expand[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n    display: none; }\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.9); }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover, .navbar-light[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus {\n    color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n    color: rgba(0, 0, 0, 0.7); }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.disabled[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 0.3); }\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%], .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.9); }\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-light[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5); }\n  .navbar-light[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 0.9); }\n    .navbar-light[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-light[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n      color: rgba(0, 0, 0, 0.9); }\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #fff; }\n  .navbar-dark[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover, .navbar-dark[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus {\n    color: #fff; }\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n    color: rgba(255, 255, 255, 0.75); }\n  .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.disabled[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.25); }\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #fff; }\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n\n.navbar-dark[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5); }\n  .navbar-dark[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff; }\n    .navbar-dark[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-dark[_ngcontent-%COMP%]   .navbar-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n      color: #fff; }\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #f3f3f3;\n  background-clip: border-box;\n  border: 0px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n  .card[_ngcontent-%COMP%]    > hr[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-left: 0; }\n  .card[_ngcontent-%COMP%]    > .list-group[_ngcontent-%COMP%]:first-child   .list-group-item[_ngcontent-%COMP%]:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n  .card[_ngcontent-%COMP%]    > .list-group[_ngcontent-%COMP%]:last-child   .list-group-item[_ngcontent-%COMP%]:last-child {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n\n.card-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 1.25rem; }\n\n.card-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem; }\n\n.card-subtitle[_ngcontent-%COMP%] {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n\n.card-text[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0; }\n\n.card-link[_ngcontent-%COMP%]:hover {\n  text-decoration: none; }\n\n.card-link[_ngcontent-%COMP%]    + .card-link[_ngcontent-%COMP%] {\n  margin-left: 1.25rem; }\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 0px solid rgba(0, 0, 0, 0.125); }\n  .card-header[_ngcontent-%COMP%]:first-child {\n    border-radius: calc(0.25rem - 0px) calc(0.25rem - 0px) 0 0; }\n  .card-header[_ngcontent-%COMP%]    + .list-group[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:first-child {\n    border-top: 0; }\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 0px solid rgba(0, 0, 0, 0.125); }\n  .card-footer[_ngcontent-%COMP%]:last-child {\n    border-radius: 0 0 calc(0.25rem - 0px) calc(0.25rem - 0px); }\n\n.card-header-tabs[_ngcontent-%COMP%] {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0; }\n\n.card-header-pills[_ngcontent-%COMP%] {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem; }\n\n.card-img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n\n.card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: calc(0.25rem - 0px); }\n\n.card-img-top[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 0px);\n  border-top-right-radius: calc(0.25rem - 0px); }\n\n.card-img-bottom[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 0px);\n  border-bottom-left-radius: calc(0.25rem - 0px); }\n\n.card-deck[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column; }\n  .card-deck[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin-bottom: 15px; }\n  @media (min-width: 576px) {\n    .card-deck[_ngcontent-%COMP%] {\n      flex-flow: row wrap;\n      margin-right: -15px;\n      margin-left: -15px; }\n      .card-deck[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        display: flex;\n        flex: 1 0 0%;\n        flex-direction: column;\n        margin-right: 15px;\n        margin-bottom: 0;\n        margin-left: 15px; } }\n\n.card-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column; }\n  .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%] {\n    margin-bottom: 15px; }\n  @media (min-width: 576px) {\n    .card-group[_ngcontent-%COMP%] {\n      flex-flow: row wrap; }\n      .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%] {\n        flex: 1 0 0%;\n        margin-bottom: 0; }\n        .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]    + .card[_ngcontent-%COMP%] {\n          margin-left: 0;\n          border-left: 0; }\n        .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:first-child {\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n          .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:first-child   .card-img-top[_ngcontent-%COMP%], .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:first-child   .card-header[_ngcontent-%COMP%] {\n            border-top-right-radius: 0; }\n          .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:first-child   .card-img-bottom[_ngcontent-%COMP%], .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:first-child   .card-footer[_ngcontent-%COMP%] {\n            border-bottom-right-radius: 0; }\n        .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:last-child {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0; }\n          .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:last-child   .card-img-top[_ngcontent-%COMP%], .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:last-child   .card-header[_ngcontent-%COMP%] {\n            border-top-left-radius: 0; }\n          .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:last-child   .card-img-bottom[_ngcontent-%COMP%], .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:last-child   .card-footer[_ngcontent-%COMP%] {\n            border-bottom-left-radius: 0; }\n        .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:only-child {\n          border-radius: 0.25rem; }\n          .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:only-child   .card-img-top[_ngcontent-%COMP%], .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:only-child   .card-header[_ngcontent-%COMP%] {\n            border-top-left-radius: 0.25rem;\n            border-top-right-radius: 0.25rem; }\n          .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:only-child   .card-img-bottom[_ngcontent-%COMP%], .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:only-child   .card-footer[_ngcontent-%COMP%] {\n            border-bottom-right-radius: 0.25rem;\n            border-bottom-left-radius: 0.25rem; }\n        .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:first-child):not(:last-child):not(:only-child) {\n          border-radius: 0; }\n          .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:first-child):not(:last-child):not(:only-child)   .card-img-top[_ngcontent-%COMP%], .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:first-child):not(:last-child):not(:only-child)   .card-img-bottom[_ngcontent-%COMP%], .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:first-child):not(:last-child):not(:only-child)   .card-header[_ngcontent-%COMP%], .card-group[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%]:not(:first-child):not(:last-child):not(:only-child)   .card-footer[_ngcontent-%COMP%] {\n            border-radius: 0; } }\n\n.card-columns[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem; }\n\n@media (min-width: 576px) {\n  .card-columns[_ngcontent-%COMP%] {\n    column-count: 3;\n    column-gap: 1.25rem;\n    orphans: 1;\n    widows: 1; }\n    .card-columns[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n      display: inline-block;\n      width: 100%; } }\n\n.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type) {\n  border-bottom: 0;\n  border-radius: 0; }\n\n.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:first-of-type)   .card-header[_ngcontent-%COMP%]:first-child {\n  border-radius: 0; }\n\n.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:first-of-type {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:last-of-type {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: transparent;\n  border-radius: 0.25rem; }\n\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%] {\n  padding-left: 0.5rem; }\n  .breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]::before {\n    display: inline-block;\n    padding-right: 0.5rem;\n    color: #6c757d;\n    content: \"/\"; }\n\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]:hover::before {\n  text-decoration: underline; }\n\n.breadcrumb-item[_ngcontent-%COMP%]    + .breadcrumb-item[_ngcontent-%COMP%]:hover::before {\n  text-decoration: none; }\n\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #6c757d; }\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem; }\n\n.page-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: white;\n  background-color: #fff;\n  border: 1px solid #dee2e6; }\n  .page-link[_ngcontent-%COMP%]:hover {\n    z-index: 2;\n    color: #d9d9d9;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #dee2e6; }\n  .page-link[_ngcontent-%COMP%]:focus {\n    z-index: 2;\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(63, 81, 181, 0.25); }\n  .page-link[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n\n.page-item[_ngcontent-%COMP%]:first-child   .page-link[_ngcontent-%COMP%] {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n\n.page-item[_ngcontent-%COMP%]:last-child   .page-link[_ngcontent-%COMP%] {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n.page-item.active[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  z-index: 1;\n  color: #fff;\n  background-color: #3f51b5;\n  border-color: #3f51b5; }\n\n.page-item.disabled[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6; }\n\n.pagination-lg[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n\n.pagination-lg[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]:first-child   .page-link[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n\n.pagination-lg[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]:last-child   .page-link[_ngcontent-%COMP%] {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n\n.pagination-sm[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n\n.pagination-sm[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]:first-child   .page-link[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n\n.pagination-sm[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]:last-child   .page-link[_ngcontent-%COMP%] {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n  .badge[_ngcontent-%COMP%]:empty {\n    display: none; }\n\n.btn[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: relative;\n  top: -1px; }\n\n.badge-pill[_ngcontent-%COMP%] {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem; }\n\n.badge-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #3f51b5; }\n  .badge-primary[href][_ngcontent-%COMP%]:hover, .badge-primary[href][_ngcontent-%COMP%]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #32408f; }\n\n.badge-secondary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #5562ad; }\n  .badge-secondary[href][_ngcontent-%COMP%]:hover, .badge-secondary[href][_ngcontent-%COMP%]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #434e8c; }\n\n.badge-success[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #28a745; }\n  .badge-success[href][_ngcontent-%COMP%]:hover, .badge-success[href][_ngcontent-%COMP%]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1e7e34; }\n\n.badge-info[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #ccc; }\n  .badge-info[href][_ngcontent-%COMP%]:hover, .badge-info[href][_ngcontent-%COMP%]:focus {\n    color: #212529;\n    text-decoration: none;\n    background-color: #b3b3b3; }\n\n.badge-warning[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #ffc107; }\n  .badge-warning[href][_ngcontent-%COMP%]:hover, .badge-warning[href][_ngcontent-%COMP%]:focus {\n    color: #212529;\n    text-decoration: none;\n    background-color: #d39e00; }\n\n.badge-danger[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #dc3545; }\n  .badge-danger[href][_ngcontent-%COMP%]:hover, .badge-danger[href][_ngcontent-%COMP%]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #bd2130; }\n\n.badge-light[_ngcontent-%COMP%] {\n  color: #212529;\n  background-color: #f3f3f3; }\n  .badge-light[href][_ngcontent-%COMP%]:hover, .badge-light[href][_ngcontent-%COMP%]:focus {\n    color: #212529;\n    text-decoration: none;\n    background-color: #dadada; }\n\n.badge-dark[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #151515; }\n  .badge-dark[href][_ngcontent-%COMP%]:hover, .badge-dark[href][_ngcontent-%COMP%]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: black; }\n\n.jumbotron[_ngcontent-%COMP%] {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem; }\n  @media (min-width: 576px) {\n    .jumbotron[_ngcontent-%COMP%] {\n      padding: 4rem 2rem; } }\n\n.jumbotron-fluid[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n\n.alert[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n\n.alert-heading[_ngcontent-%COMP%] {\n  color: inherit; }\n\n.alert-link[_ngcontent-%COMP%] {\n  font-weight: 700; }\n\n.alert-dismissible[_ngcontent-%COMP%] {\n  padding-right: 4rem; }\n  .alert-dismissible[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0.75rem 1.25rem;\n    color: inherit; }\n\n.alert-primary[_ngcontent-%COMP%] {\n  color: #212a5e;\n  background-color: #d9dcf0;\n  border-color: #c9ceea; }\n  .alert-primary[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    border-top-color: #b7bde3; }\n  .alert-primary[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n    color: #141938; }\n\n.alert-secondary[_ngcontent-%COMP%] {\n  color: #2c335a;\n  background-color: #dde0ef;\n  border-color: #cfd3e8; }\n  .alert-secondary[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    border-top-color: #bec3e0; }\n  .alert-secondary[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n    color: #1b2038; }\n\n.alert-success[_ngcontent-%COMP%] {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb; }\n  .alert-success[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    border-top-color: #b1dfbb; }\n  .alert-success[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n    color: #0b2e13; }\n\n.alert-info[_ngcontent-%COMP%] {\n  color: #6a6a6a;\n  background-color: whitesmoke;\n  border-color: #f1f1f1; }\n  .alert-info[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    border-top-color: #e4e4e4; }\n  .alert-info[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n    color: #515151; }\n\n.alert-warning[_ngcontent-%COMP%] {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba; }\n  .alert-warning[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    border-top-color: #ffe8a1; }\n  .alert-warning[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n    color: #533f03; }\n\n.alert-danger[_ngcontent-%COMP%] {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb; }\n  .alert-danger[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    border-top-color: #f1b0b7; }\n  .alert-danger[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n    color: #491217; }\n\n.alert-light[_ngcontent-%COMP%] {\n  color: #7e7e7e;\n  background-color: #fdfdfd;\n  border-color: #fcfcfc; }\n  .alert-light[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    border-top-color: #efefef; }\n  .alert-light[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n    color: #656565; }\n\n.alert-dark[_ngcontent-%COMP%] {\n  color: #0b0b0b;\n  background-color: #d0d0d0;\n  border-color: #bdbdbd; }\n  .alert-dark[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    border-top-color: #b0b0b0; }\n  .alert-dark[_ngcontent-%COMP%]   .alert-link[_ngcontent-%COMP%] {\n    color: black; }\n\n@keyframes _ngcontent-%COMP%_progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress[_ngcontent-%COMP%] {\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n  box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1); }\n\n.progress-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #3f51b5;\n  transition: width 0.6s ease; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .progress-bar[_ngcontent-%COMP%] {\n      transition: none; } }\n\n.progress-bar-striped[_ngcontent-%COMP%] {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n\n.progress-bar-animated[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_progress-bar-stripes 1s linear infinite; }\n\n.media[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start; }\n\n.media-body[_ngcontent-%COMP%] {\n  flex: 1; }\n\n.list-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n\n.list-group-item-action[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n  .list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-action[_ngcontent-%COMP%]:focus {\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n  .list-group-item-action[_ngcontent-%COMP%]:active {\n    color: #333;\n    background-color: #e9ecef; }\n\n.list-group-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n  .list-group-item[_ngcontent-%COMP%]:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n  .list-group-item[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n  .list-group-item[_ngcontent-%COMP%]:hover, .list-group-item[_ngcontent-%COMP%]:focus {\n    z-index: 1;\n    text-decoration: none; }\n  .list-group-item.disabled[_ngcontent-%COMP%], .list-group-item[_ngcontent-%COMP%]:disabled {\n    color: #6c757d;\n    background-color: #fff; }\n  .list-group-item.active[_ngcontent-%COMP%] {\n    z-index: 2;\n    color: #fff;\n    background-color: #3f51b5;\n    border-color: #3f51b5; }\n\n.list-group-flush[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n\n.list-group-flush[_ngcontent-%COMP%]:first-child   .list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top: 0; }\n\n.list-group-flush[_ngcontent-%COMP%]:last-child   .list-group-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0; }\n\n.list-group-item-primary[_ngcontent-%COMP%] {\n  color: #212a5e;\n  background-color: #c9ceea; }\n  .list-group-item-primary.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-primary.list-group-item-action[_ngcontent-%COMP%]:focus {\n    color: #212a5e;\n    background-color: #b7bde3; }\n  .list-group-item-primary.list-group-item-action.active[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #212a5e;\n    border-color: #212a5e; }\n\n.list-group-item-secondary[_ngcontent-%COMP%] {\n  color: #2c335a;\n  background-color: #cfd3e8; }\n  .list-group-item-secondary.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-secondary.list-group-item-action[_ngcontent-%COMP%]:focus {\n    color: #2c335a;\n    background-color: #bec3e0; }\n  .list-group-item-secondary.list-group-item-action.active[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #2c335a;\n    border-color: #2c335a; }\n\n.list-group-item-success[_ngcontent-%COMP%] {\n  color: #155724;\n  background-color: #c3e6cb; }\n  .list-group-item-success.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-success.list-group-item-action[_ngcontent-%COMP%]:focus {\n    color: #155724;\n    background-color: #b1dfbb; }\n  .list-group-item-success.list-group-item-action.active[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #155724;\n    border-color: #155724; }\n\n.list-group-item-info[_ngcontent-%COMP%] {\n  color: #6a6a6a;\n  background-color: #f1f1f1; }\n  .list-group-item-info.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-info.list-group-item-action[_ngcontent-%COMP%]:focus {\n    color: #6a6a6a;\n    background-color: #e4e4e4; }\n  .list-group-item-info.list-group-item-action.active[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #6a6a6a;\n    border-color: #6a6a6a; }\n\n.list-group-item-warning[_ngcontent-%COMP%] {\n  color: #856404;\n  background-color: #ffeeba; }\n  .list-group-item-warning.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-warning.list-group-item-action[_ngcontent-%COMP%]:focus {\n    color: #856404;\n    background-color: #ffe8a1; }\n  .list-group-item-warning.list-group-item-action.active[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #856404;\n    border-color: #856404; }\n\n.list-group-item-danger[_ngcontent-%COMP%] {\n  color: #721c24;\n  background-color: #f5c6cb; }\n  .list-group-item-danger.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-danger.list-group-item-action[_ngcontent-%COMP%]:focus {\n    color: #721c24;\n    background-color: #f1b0b7; }\n  .list-group-item-danger.list-group-item-action.active[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #721c24;\n    border-color: #721c24; }\n\n.list-group-item-light[_ngcontent-%COMP%] {\n  color: #7e7e7e;\n  background-color: #fcfcfc; }\n  .list-group-item-light.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-light.list-group-item-action[_ngcontent-%COMP%]:focus {\n    color: #7e7e7e;\n    background-color: #efefef; }\n  .list-group-item-light.list-group-item-action.active[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #7e7e7e;\n    border-color: #7e7e7e; }\n\n.list-group-item-dark[_ngcontent-%COMP%] {\n  color: #0b0b0b;\n  background-color: #bdbdbd; }\n  .list-group-item-dark.list-group-item-action[_ngcontent-%COMP%]:hover, .list-group-item-dark.list-group-item-action[_ngcontent-%COMP%]:focus {\n    color: #0b0b0b;\n    background-color: #b0b0b0; }\n  .list-group-item-dark.list-group-item-action.active[_ngcontent-%COMP%] {\n    color: #fff;\n    background-color: #0b0b0b;\n    border-color: #0b0b0b; }\n\n.close[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5; }\n  .close[_ngcontent-%COMP%]:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n    .close[_ngcontent-%COMP%]:not(:disabled):not(.disabled):hover, .close[_ngcontent-%COMP%]:not(:disabled):not(.disabled):focus {\n      color: #000;\n      text-decoration: none;\n      opacity: .75; }\n\nbutton.close[_ngcontent-%COMP%] {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open[_ngcontent-%COMP%] {\n  overflow: hidden; }\n  .modal-open[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    overflow-y: auto; }\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0; }\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none; }\n  .modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    transition: transform 0.3s ease-out;\n    transform: translate(0, -25%); }\n    @media screen and (prefers-reduced-motion: reduce) {\n      .modal.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n        transition: none; } }\n  .modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n    transform: translate(0, 0); }\n\n.modal-dialog-centered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - (0.5rem * 2)); }\n  .modal-dialog-centered[_ngcontent-%COMP%]::before {\n    display: block;\n    height: calc(100vh - (0.5rem * 2));\n    content: \"\"; }\n\n.modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.5);\n  outline: 0; }\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade[_ngcontent-%COMP%] {\n    opacity: 0; }\n  .modal-backdrop.show[_ngcontent-%COMP%] {\n    opacity: 0.5; }\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid #e9ecef;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem; }\n  .modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin: -1rem -1rem -1rem auto; }\n\n.modal-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  line-height: 1.5; }\n\n.modal-body[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem; }\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid #e9ecef; }\n  .modal-footer[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:first-child) {\n    margin-left: .25rem; }\n  .modal-footer[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: .25rem; }\n\n.modal-scrollbar-measure[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 576px) {\n  .modal-dialog[_ngcontent-%COMP%] {\n    max-width: 500px;\n    margin: 1.75rem auto; }\n  .modal-dialog-centered[_ngcontent-%COMP%] {\n    min-height: calc(100% - (1.75rem * 2)); }\n    .modal-dialog-centered[_ngcontent-%COMP%]::before {\n      height: calc(100vh - (1.75rem * 2)); }\n  .modal-content[_ngcontent-%COMP%] {\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5); }\n  .modal-sm[_ngcontent-%COMP%] {\n    max-width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg[_ngcontent-%COMP%] {\n    max-width: 800px; } }\n\n.tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n  .tooltip.show[_ngcontent-%COMP%] {\n    opacity: 0.9; }\n  .tooltip[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n    .tooltip[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-tooltip-top[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"top\"][_ngcontent-%COMP%] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"top\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    bottom: 0; }\n    .bs-tooltip-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-tooltip-auto[x-placement^=\"top\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n      top: 0;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000; }\n\n.bs-tooltip-right[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"right\"][_ngcontent-%COMP%] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"right\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    left: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-tooltip-auto[x-placement^=\"right\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n      right: 0;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000; }\n\n.bs-tooltip-bottom[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%] {\n  padding: 0.4rem 0; }\n  .bs-tooltip-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    top: 0; }\n    .bs-tooltip-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-tooltip-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n      bottom: 0;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000; }\n\n.bs-tooltip-left[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"left\"][_ngcontent-%COMP%] {\n  padding: 0 0.4rem; }\n  .bs-tooltip-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-tooltip-auto[x-placement^=\"left\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    right: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n    .bs-tooltip-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-tooltip-auto[x-placement^=\"left\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n      left: 0;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000; }\n\n.tooltip-inner[_ngcontent-%COMP%] {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.popover[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2); }\n  .popover[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    position: absolute;\n    display: block;\n    width: 1rem;\n    height: 0.5rem;\n    margin: 0 0.3rem; }\n    .popover[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .popover[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n\n.bs-popover-top[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"top\"][_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem; }\n  .bs-popover-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"top\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    bottom: calc((0.5rem + 1px) * -1); }\n  .bs-popover-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"top\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-popover-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after, .bs-popover-auto[x-placement^=\"top\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after {\n    border-width: 0.5rem 0.5rem 0; }\n  .bs-popover-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"top\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n    bottom: 0;\n    border-top-color: rgba(0, 0, 0, 0.25); }\n  \n  .bs-popover-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after, .bs-popover-auto[x-placement^=\"top\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after {\n    bottom: 1px;\n    border-top-color: #fff; }\n\n.bs-popover-right[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"right\"][_ngcontent-%COMP%] {\n  margin-left: 0.5rem; }\n  .bs-popover-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"right\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    left: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n  .bs-popover-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"right\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-popover-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after, .bs-popover-auto[x-placement^=\"right\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after {\n    border-width: 0.5rem 0.5rem 0.5rem 0; }\n  .bs-popover-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"right\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n    left: 0;\n    border-right-color: rgba(0, 0, 0, 0.25); }\n  \n  .bs-popover-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after, .bs-popover-auto[x-placement^=\"right\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after {\n    left: 1px;\n    border-right-color: #fff; }\n\n.bs-popover-bottom[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%] {\n  margin-top: 0.5rem; }\n  .bs-popover-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    top: calc((0.5rem + 1px) * -1); }\n  .bs-popover-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-popover-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after, .bs-popover-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after {\n    border-width: 0 0.5rem 0.5rem 0.5rem; }\n  .bs-popover-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n    top: 0;\n    border-bottom-color: rgba(0, 0, 0, 0.25); }\n  \n  .bs-popover-bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after, .bs-popover-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after {\n    top: 1px;\n    border-bottom-color: #fff; }\n  .bs-popover-bottom[_ngcontent-%COMP%]   .popover-header[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"bottom\"][_ngcontent-%COMP%]   .popover-header[_ngcontent-%COMP%]::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1rem;\n    margin-left: -0.5rem;\n    content: \"\";\n    border-bottom: 1px solid #f7f7f7; }\n\n.bs-popover-left[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"left\"][_ngcontent-%COMP%] {\n  margin-right: 0.5rem; }\n  .bs-popover-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%], .bs-popover-auto[x-placement^=\"left\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n    right: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n  .bs-popover-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"left\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-popover-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after, .bs-popover-auto[x-placement^=\"left\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after {\n    border-width: 0.5rem 0 0.5rem 0.5rem; }\n  .bs-popover-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before, .bs-popover-auto[x-placement^=\"left\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::before {\n    right: 0;\n    border-left-color: rgba(0, 0, 0, 0.25); }\n  \n  .bs-popover-left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after, .bs-popover-auto[x-placement^=\"left\"][_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]::after {\n    right: 1px;\n    border-left-color: #fff; }\n\n.popover-header[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  color: inherit;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n  .popover-header[_ngcontent-%COMP%]:empty {\n    display: none; }\n\n.popover-body[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  color: #333; }\n\n.carousel[_ngcontent-%COMP%] {\n  position: relative; }\n\n.carousel-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n\n.carousel-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: none;\n  align-items: center;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1000px; }\n\n.carousel-item.active[_ngcontent-%COMP%], .carousel-item-next[_ngcontent-%COMP%], .carousel-item-prev[_ngcontent-%COMP%] {\n  display: block;\n  transition: transform 0.6s ease; }\n  @media screen and (prefers-reduced-motion: reduce) {\n    .carousel-item.active[_ngcontent-%COMP%], .carousel-item-next[_ngcontent-%COMP%], .carousel-item-prev[_ngcontent-%COMP%] {\n      transition: none; } }\n\n.carousel-item-next[_ngcontent-%COMP%], .carousel-item-prev[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0; }\n\n.carousel-item-next.carousel-item-left[_ngcontent-%COMP%], .carousel-item-prev.carousel-item-right[_ngcontent-%COMP%] {\n  transform: translateX(0); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-next.carousel-item-left[_ngcontent-%COMP%], .carousel-item-prev.carousel-item-right[_ngcontent-%COMP%] {\n      transform: translate3d(0, 0, 0); } }\n\n.carousel-item-next[_ngcontent-%COMP%], .active.carousel-item-right[_ngcontent-%COMP%] {\n  transform: translateX(100%); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-next[_ngcontent-%COMP%], .active.carousel-item-right[_ngcontent-%COMP%] {\n      transform: translate3d(100%, 0, 0); } }\n\n.carousel-item-prev[_ngcontent-%COMP%], .active.carousel-item-left[_ngcontent-%COMP%] {\n  transform: translateX(-100%); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-item-prev[_ngcontent-%COMP%], .active.carousel-item-left[_ngcontent-%COMP%] {\n      transform: translate3d(-100%, 0, 0); } }\n\n.carousel-fade[_ngcontent-%COMP%]   .carousel-item[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition-duration: .6s;\n  transition-property: opacity; }\n\n.carousel-fade[_ngcontent-%COMP%]   .carousel-item.active[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .carousel-item-next.carousel-item-left[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .carousel-item-prev.carousel-item-right[_ngcontent-%COMP%] {\n  opacity: 1; }\n\n.carousel-fade[_ngcontent-%COMP%]   .active.carousel-item-left[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .active.carousel-item-right[_ngcontent-%COMP%] {\n  opacity: 0; }\n\n.carousel-fade[_ngcontent-%COMP%]   .carousel-item-next[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .carousel-item-prev[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .carousel-item.active[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .active.carousel-item-left[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .active.carousel-item-prev[_ngcontent-%COMP%] {\n  transform: translateX(0); }\n  @supports (transform-style: preserve-3d) {\n    .carousel-fade[_ngcontent-%COMP%]   .carousel-item-next[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .carousel-item-prev[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .carousel-item.active[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .active.carousel-item-left[_ngcontent-%COMP%], .carousel-fade[_ngcontent-%COMP%]   .active.carousel-item-prev[_ngcontent-%COMP%] {\n      transform: translate3d(0, 0, 0); } }\n\n.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5; }\n  .carousel-control-prev[_ngcontent-%COMP%]:hover, .carousel-control-prev[_ngcontent-%COMP%]:focus, .carousel-control-next[_ngcontent-%COMP%]:hover, .carousel-control-next[_ngcontent-%COMP%]:focus {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9; }\n\n.carousel-control-prev[_ngcontent-%COMP%] {\n  left: 0; }\n\n.carousel-control-next[_ngcontent-%COMP%] {\n  right: 0; }\n\n.carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%; }\n\n.carousel-control-prev-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"); }\n\n.carousel-control-next-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"); }\n\n.carousel-indicators[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n  .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    position: relative;\n    flex: 0 1 auto;\n    width: 30px;\n    height: 6px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: rgba(255, 255, 255, 0.5); }\n    .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n      position: absolute;\n      top: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n    .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n  .carousel-indicators[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n    background-color: #fff; }\n\n.carousel-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0%;\n  bottom: 20px;\n  left: 0%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n\n.align-baseline[_ngcontent-%COMP%] {\n  vertical-align: baseline !important; }\n\n.align-top[_ngcontent-%COMP%] {\n  vertical-align: top !important; }\n\n.align-middle[_ngcontent-%COMP%] {\n  vertical-align: middle !important; }\n\n.align-bottom[_ngcontent-%COMP%] {\n  vertical-align: bottom !important; }\n\n.align-text-bottom[_ngcontent-%COMP%] {\n  vertical-align: text-bottom !important; }\n\n.align-text-top[_ngcontent-%COMP%] {\n  vertical-align: text-top !important; }\n\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: #3f51b5 !important; }\n\na.bg-primary[_ngcontent-%COMP%]:hover, a.bg-primary[_ngcontent-%COMP%]:focus, button.bg-primary[_ngcontent-%COMP%]:hover, button.bg-primary[_ngcontent-%COMP%]:focus {\n  background-color: #32408f !important; }\n\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: #5562ad !important; }\n\na.bg-secondary[_ngcontent-%COMP%]:hover, a.bg-secondary[_ngcontent-%COMP%]:focus, button.bg-secondary[_ngcontent-%COMP%]:hover, button.bg-secondary[_ngcontent-%COMP%]:focus {\n  background-color: #434e8c !important; }\n\n.bg-success[_ngcontent-%COMP%] {\n  background-color: #28a745 !important; }\n\na.bg-success[_ngcontent-%COMP%]:hover, a.bg-success[_ngcontent-%COMP%]:focus, button.bg-success[_ngcontent-%COMP%]:hover, button.bg-success[_ngcontent-%COMP%]:focus {\n  background-color: #1e7e34 !important; }\n\n.bg-info[_ngcontent-%COMP%] {\n  background-color: #ccc !important; }\n\na.bg-info[_ngcontent-%COMP%]:hover, a.bg-info[_ngcontent-%COMP%]:focus, button.bg-info[_ngcontent-%COMP%]:hover, button.bg-info[_ngcontent-%COMP%]:focus {\n  background-color: #b3b3b3 !important; }\n\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: #ffc107 !important; }\n\na.bg-warning[_ngcontent-%COMP%]:hover, a.bg-warning[_ngcontent-%COMP%]:focus, button.bg-warning[_ngcontent-%COMP%]:hover, button.bg-warning[_ngcontent-%COMP%]:focus {\n  background-color: #d39e00 !important; }\n\n.bg-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545 !important; }\n\na.bg-danger[_ngcontent-%COMP%]:hover, a.bg-danger[_ngcontent-%COMP%]:focus, button.bg-danger[_ngcontent-%COMP%]:hover, button.bg-danger[_ngcontent-%COMP%]:focus {\n  background-color: #bd2130 !important; }\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: #f3f3f3 !important; }\n\na.bg-light[_ngcontent-%COMP%]:hover, a.bg-light[_ngcontent-%COMP%]:focus, button.bg-light[_ngcontent-%COMP%]:hover, button.bg-light[_ngcontent-%COMP%]:focus {\n  background-color: #dadada !important; }\n\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: #151515 !important; }\n\na.bg-dark[_ngcontent-%COMP%]:hover, a.bg-dark[_ngcontent-%COMP%]:focus, button.bg-dark[_ngcontent-%COMP%]:hover, button.bg-dark[_ngcontent-%COMP%]:focus {\n  background-color: black !important; }\n\n.bg-white[_ngcontent-%COMP%] {\n  background-color: #fff !important; }\n\n.bg-transparent[_ngcontent-%COMP%] {\n  background-color: transparent !important; }\n\n.border[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6 !important; }\n\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6 !important; }\n\n.border-right[_ngcontent-%COMP%] {\n  border-right: 1px solid #dee2e6 !important; }\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6 !important; }\n\n.border-left[_ngcontent-%COMP%] {\n  border-left: 1px solid #dee2e6 !important; }\n\n.border-0[_ngcontent-%COMP%] {\n  border: 0 !important; }\n\n.border-top-0[_ngcontent-%COMP%] {\n  border-top: 0 !important; }\n\n.border-right-0[_ngcontent-%COMP%] {\n  border-right: 0 !important; }\n\n.border-bottom-0[_ngcontent-%COMP%] {\n  border-bottom: 0 !important; }\n\n.border-left-0[_ngcontent-%COMP%] {\n  border-left: 0 !important; }\n\n.border-primary[_ngcontent-%COMP%] {\n  border-color: #3f51b5 !important; }\n\n.border-secondary[_ngcontent-%COMP%] {\n  border-color: #5562ad !important; }\n\n.border-success[_ngcontent-%COMP%] {\n  border-color: #28a745 !important; }\n\n.border-info[_ngcontent-%COMP%] {\n  border-color: #ccc !important; }\n\n.border-warning[_ngcontent-%COMP%] {\n  border-color: #ffc107 !important; }\n\n.border-danger[_ngcontent-%COMP%] {\n  border-color: #dc3545 !important; }\n\n.border-light[_ngcontent-%COMP%] {\n  border-color: #f3f3f3 !important; }\n\n.border-dark[_ngcontent-%COMP%] {\n  border-color: #151515 !important; }\n\n.border-white[_ngcontent-%COMP%] {\n  border-color: #fff !important; }\n\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 0.25rem !important; }\n\n.rounded-top[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n\n.rounded-right[_ngcontent-%COMP%] {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n\n.rounded-bottom[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-left[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n\n.rounded-circle[_ngcontent-%COMP%] {\n  border-radius: 50% !important; }\n\n.rounded-0[_ngcontent-%COMP%] {\n  border-radius: 0 !important; }\n\n.clearfix[_ngcontent-%COMP%]::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n\n.d-none[_ngcontent-%COMP%] {\n  display: none !important; }\n\n.d-inline[_ngcontent-%COMP%] {\n  display: inline !important; }\n\n.d-inline-block[_ngcontent-%COMP%] {\n  display: inline-block !important; }\n\n.d-block[_ngcontent-%COMP%] {\n  display: block !important; }\n\n.d-table[_ngcontent-%COMP%] {\n  display: table !important; }\n\n.d-table-row[_ngcontent-%COMP%] {\n  display: table-row !important; }\n\n.d-table-cell[_ngcontent-%COMP%] {\n  display: table-cell !important; }\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important; }\n\n.d-inline-flex[_ngcontent-%COMP%] {\n  display: inline-flex !important; }\n\n@media (min-width: 576px) {\n  .d-sm-none[_ngcontent-%COMP%] {\n    display: none !important; }\n  .d-sm-inline[_ngcontent-%COMP%] {\n    display: inline !important; }\n  .d-sm-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important; }\n  .d-sm-block[_ngcontent-%COMP%] {\n    display: block !important; }\n  .d-sm-table[_ngcontent-%COMP%] {\n    display: table !important; }\n  .d-sm-table-row[_ngcontent-%COMP%] {\n    display: table-row !important; }\n  .d-sm-table-cell[_ngcontent-%COMP%] {\n    display: table-cell !important; }\n  .d-sm-flex[_ngcontent-%COMP%] {\n    display: flex !important; }\n  .d-sm-inline-flex[_ngcontent-%COMP%] {\n    display: inline-flex !important; } }\n\n@media (min-width: 768px) {\n  .d-md-none[_ngcontent-%COMP%] {\n    display: none !important; }\n  .d-md-inline[_ngcontent-%COMP%] {\n    display: inline !important; }\n  .d-md-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important; }\n  .d-md-block[_ngcontent-%COMP%] {\n    display: block !important; }\n  .d-md-table[_ngcontent-%COMP%] {\n    display: table !important; }\n  .d-md-table-row[_ngcontent-%COMP%] {\n    display: table-row !important; }\n  .d-md-table-cell[_ngcontent-%COMP%] {\n    display: table-cell !important; }\n  .d-md-flex[_ngcontent-%COMP%] {\n    display: flex !important; }\n  .d-md-inline-flex[_ngcontent-%COMP%] {\n    display: inline-flex !important; } }\n\n@media (min-width: 992px) {\n  .d-lg-none[_ngcontent-%COMP%] {\n    display: none !important; }\n  .d-lg-inline[_ngcontent-%COMP%] {\n    display: inline !important; }\n  .d-lg-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important; }\n  .d-lg-block[_ngcontent-%COMP%] {\n    display: block !important; }\n  .d-lg-table[_ngcontent-%COMP%] {\n    display: table !important; }\n  .d-lg-table-row[_ngcontent-%COMP%] {\n    display: table-row !important; }\n  .d-lg-table-cell[_ngcontent-%COMP%] {\n    display: table-cell !important; }\n  .d-lg-flex[_ngcontent-%COMP%] {\n    display: flex !important; }\n  .d-lg-inline-flex[_ngcontent-%COMP%] {\n    display: inline-flex !important; } }\n\n@media (min-width: 1200px) {\n  .d-xl-none[_ngcontent-%COMP%] {\n    display: none !important; }\n  .d-xl-inline[_ngcontent-%COMP%] {\n    display: inline !important; }\n  .d-xl-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important; }\n  .d-xl-block[_ngcontent-%COMP%] {\n    display: block !important; }\n  .d-xl-table[_ngcontent-%COMP%] {\n    display: table !important; }\n  .d-xl-table-row[_ngcontent-%COMP%] {\n    display: table-row !important; }\n  .d-xl-table-cell[_ngcontent-%COMP%] {\n    display: table-cell !important; }\n  .d-xl-flex[_ngcontent-%COMP%] {\n    display: flex !important; }\n  .d-xl-inline-flex[_ngcontent-%COMP%] {\n    display: inline-flex !important; } }\n\n@media print {\n  .d-print-none[_ngcontent-%COMP%] {\n    display: none !important; }\n  .d-print-inline[_ngcontent-%COMP%] {\n    display: inline !important; }\n  .d-print-inline-block[_ngcontent-%COMP%] {\n    display: inline-block !important; }\n  .d-print-block[_ngcontent-%COMP%] {\n    display: block !important; }\n  .d-print-table[_ngcontent-%COMP%] {\n    display: table !important; }\n  .d-print-table-row[_ngcontent-%COMP%] {\n    display: table-row !important; }\n  .d-print-table-cell[_ngcontent-%COMP%] {\n    display: table-cell !important; }\n  .d-print-flex[_ngcontent-%COMP%] {\n    display: flex !important; }\n  .d-print-inline-flex[_ngcontent-%COMP%] {\n    display: inline-flex !important; } }\n\n.embed-responsive[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive[_ngcontent-%COMP%]::before {\n    display: block;\n    content: \"\"; }\n  .embed-responsive[_ngcontent-%COMP%]   .embed-responsive-item[_ngcontent-%COMP%], .embed-responsive[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .embed-responsive[_ngcontent-%COMP%]   embed[_ngcontent-%COMP%], .embed-responsive[_ngcontent-%COMP%]   object[_ngcontent-%COMP%], .embed-responsive[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n\n.embed-responsive-21by9[_ngcontent-%COMP%]::before {\n  padding-top: 42.85714%; }\n\n.embed-responsive-16by9[_ngcontent-%COMP%]::before {\n  padding-top: 56.25%; }\n\n.embed-responsive-4by3[_ngcontent-%COMP%]::before {\n  padding-top: 75%; }\n\n.embed-responsive-1by1[_ngcontent-%COMP%]::before {\n  padding-top: 100%; }\n\n.flex-row[_ngcontent-%COMP%] {\n  flex-direction: row !important; }\n\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column !important; }\n\n.flex-row-reverse[_ngcontent-%COMP%] {\n  flex-direction: row-reverse !important; }\n\n.flex-column-reverse[_ngcontent-%COMP%] {\n  flex-direction: column-reverse !important; }\n\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap !important; }\n\n.flex-nowrap[_ngcontent-%COMP%] {\n  flex-wrap: nowrap !important; }\n\n.flex-wrap-reverse[_ngcontent-%COMP%] {\n  flex-wrap: wrap-reverse !important; }\n\n.flex-fill[_ngcontent-%COMP%] {\n  flex: 1 1 auto !important; }\n\n.flex-grow-0[_ngcontent-%COMP%] {\n  flex-grow: 0 !important; }\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1 !important; }\n\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0 !important; }\n\n.flex-shrink-1[_ngcontent-%COMP%] {\n  flex-shrink: 1 !important; }\n\n.justify-content-start[_ngcontent-%COMP%] {\n  justify-content: flex-start !important; }\n\n.justify-content-end[_ngcontent-%COMP%] {\n  justify-content: flex-end !important; }\n\n.justify-content-center[_ngcontent-%COMP%] {\n  justify-content: center !important; }\n\n.justify-content-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important; }\n\n.justify-content-around[_ngcontent-%COMP%] {\n  justify-content: space-around !important; }\n\n.align-items-start[_ngcontent-%COMP%] {\n  align-items: flex-start !important; }\n\n.align-items-end[_ngcontent-%COMP%] {\n  align-items: flex-end !important; }\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important; }\n\n.align-items-baseline[_ngcontent-%COMP%] {\n  align-items: baseline !important; }\n\n.align-items-stretch[_ngcontent-%COMP%] {\n  align-items: stretch !important; }\n\n.align-content-start[_ngcontent-%COMP%] {\n  align-content: flex-start !important; }\n\n.align-content-end[_ngcontent-%COMP%] {\n  align-content: flex-end !important; }\n\n.align-content-center[_ngcontent-%COMP%] {\n  align-content: center !important; }\n\n.align-content-between[_ngcontent-%COMP%] {\n  align-content: space-between !important; }\n\n.align-content-around[_ngcontent-%COMP%] {\n  align-content: space-around !important; }\n\n.align-content-stretch[_ngcontent-%COMP%] {\n  align-content: stretch !important; }\n\n.align-self-auto[_ngcontent-%COMP%] {\n  align-self: auto !important; }\n\n.align-self-start[_ngcontent-%COMP%] {\n  align-self: flex-start !important; }\n\n.align-self-end[_ngcontent-%COMP%] {\n  align-self: flex-end !important; }\n\n.align-self-center[_ngcontent-%COMP%] {\n  align-self: center !important; }\n\n.align-self-baseline[_ngcontent-%COMP%] {\n  align-self: baseline !important; }\n\n.align-self-stretch[_ngcontent-%COMP%] {\n  align-self: stretch !important; }\n\n@media (min-width: 576px) {\n  .flex-sm-row[_ngcontent-%COMP%] {\n    flex-direction: row !important; }\n  .flex-sm-column[_ngcontent-%COMP%] {\n    flex-direction: column !important; }\n  .flex-sm-row-reverse[_ngcontent-%COMP%] {\n    flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse[_ngcontent-%COMP%] {\n    flex-direction: column-reverse !important; }\n  .flex-sm-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap !important; }\n  .flex-sm-nowrap[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse[_ngcontent-%COMP%] {\n    flex-wrap: wrap-reverse !important; }\n  .flex-sm-fill[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important; }\n  .flex-sm-grow-0[_ngcontent-%COMP%] {\n    flex-grow: 0 !important; }\n  .flex-sm-grow-1[_ngcontent-%COMP%] {\n    flex-grow: 1 !important; }\n  .flex-sm-shrink-0[_ngcontent-%COMP%] {\n    flex-shrink: 0 !important; }\n  .flex-sm-shrink-1[_ngcontent-%COMP%] {\n    flex-shrink: 1 !important; }\n  .justify-content-sm-start[_ngcontent-%COMP%] {\n    justify-content: flex-start !important; }\n  .justify-content-sm-end[_ngcontent-%COMP%] {\n    justify-content: flex-end !important; }\n  .justify-content-sm-center[_ngcontent-%COMP%] {\n    justify-content: center !important; }\n  .justify-content-sm-between[_ngcontent-%COMP%] {\n    justify-content: space-between !important; }\n  .justify-content-sm-around[_ngcontent-%COMP%] {\n    justify-content: space-around !important; }\n  .align-items-sm-start[_ngcontent-%COMP%] {\n    align-items: flex-start !important; }\n  .align-items-sm-end[_ngcontent-%COMP%] {\n    align-items: flex-end !important; }\n  .align-items-sm-center[_ngcontent-%COMP%] {\n    align-items: center !important; }\n  .align-items-sm-baseline[_ngcontent-%COMP%] {\n    align-items: baseline !important; }\n  .align-items-sm-stretch[_ngcontent-%COMP%] {\n    align-items: stretch !important; }\n  .align-content-sm-start[_ngcontent-%COMP%] {\n    align-content: flex-start !important; }\n  .align-content-sm-end[_ngcontent-%COMP%] {\n    align-content: flex-end !important; }\n  .align-content-sm-center[_ngcontent-%COMP%] {\n    align-content: center !important; }\n  .align-content-sm-between[_ngcontent-%COMP%] {\n    align-content: space-between !important; }\n  .align-content-sm-around[_ngcontent-%COMP%] {\n    align-content: space-around !important; }\n  .align-content-sm-stretch[_ngcontent-%COMP%] {\n    align-content: stretch !important; }\n  .align-self-sm-auto[_ngcontent-%COMP%] {\n    align-self: auto !important; }\n  .align-self-sm-start[_ngcontent-%COMP%] {\n    align-self: flex-start !important; }\n  .align-self-sm-end[_ngcontent-%COMP%] {\n    align-self: flex-end !important; }\n  .align-self-sm-center[_ngcontent-%COMP%] {\n    align-self: center !important; }\n  .align-self-sm-baseline[_ngcontent-%COMP%] {\n    align-self: baseline !important; }\n  .align-self-sm-stretch[_ngcontent-%COMP%] {\n    align-self: stretch !important; } }\n\n@media (min-width: 768px) {\n  .flex-md-row[_ngcontent-%COMP%] {\n    flex-direction: row !important; }\n  .flex-md-column[_ngcontent-%COMP%] {\n    flex-direction: column !important; }\n  .flex-md-row-reverse[_ngcontent-%COMP%] {\n    flex-direction: row-reverse !important; }\n  .flex-md-column-reverse[_ngcontent-%COMP%] {\n    flex-direction: column-reverse !important; }\n  .flex-md-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap !important; }\n  .flex-md-nowrap[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse[_ngcontent-%COMP%] {\n    flex-wrap: wrap-reverse !important; }\n  .flex-md-fill[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important; }\n  .flex-md-grow-0[_ngcontent-%COMP%] {\n    flex-grow: 0 !important; }\n  .flex-md-grow-1[_ngcontent-%COMP%] {\n    flex-grow: 1 !important; }\n  .flex-md-shrink-0[_ngcontent-%COMP%] {\n    flex-shrink: 0 !important; }\n  .flex-md-shrink-1[_ngcontent-%COMP%] {\n    flex-shrink: 1 !important; }\n  .justify-content-md-start[_ngcontent-%COMP%] {\n    justify-content: flex-start !important; }\n  .justify-content-md-end[_ngcontent-%COMP%] {\n    justify-content: flex-end !important; }\n  .justify-content-md-center[_ngcontent-%COMP%] {\n    justify-content: center !important; }\n  .justify-content-md-between[_ngcontent-%COMP%] {\n    justify-content: space-between !important; }\n  .justify-content-md-around[_ngcontent-%COMP%] {\n    justify-content: space-around !important; }\n  .align-items-md-start[_ngcontent-%COMP%] {\n    align-items: flex-start !important; }\n  .align-items-md-end[_ngcontent-%COMP%] {\n    align-items: flex-end !important; }\n  .align-items-md-center[_ngcontent-%COMP%] {\n    align-items: center !important; }\n  .align-items-md-baseline[_ngcontent-%COMP%] {\n    align-items: baseline !important; }\n  .align-items-md-stretch[_ngcontent-%COMP%] {\n    align-items: stretch !important; }\n  .align-content-md-start[_ngcontent-%COMP%] {\n    align-content: flex-start !important; }\n  .align-content-md-end[_ngcontent-%COMP%] {\n    align-content: flex-end !important; }\n  .align-content-md-center[_ngcontent-%COMP%] {\n    align-content: center !important; }\n  .align-content-md-between[_ngcontent-%COMP%] {\n    align-content: space-between !important; }\n  .align-content-md-around[_ngcontent-%COMP%] {\n    align-content: space-around !important; }\n  .align-content-md-stretch[_ngcontent-%COMP%] {\n    align-content: stretch !important; }\n  .align-self-md-auto[_ngcontent-%COMP%] {\n    align-self: auto !important; }\n  .align-self-md-start[_ngcontent-%COMP%] {\n    align-self: flex-start !important; }\n  .align-self-md-end[_ngcontent-%COMP%] {\n    align-self: flex-end !important; }\n  .align-self-md-center[_ngcontent-%COMP%] {\n    align-self: center !important; }\n  .align-self-md-baseline[_ngcontent-%COMP%] {\n    align-self: baseline !important; }\n  .align-self-md-stretch[_ngcontent-%COMP%] {\n    align-self: stretch !important; } }\n\n@media (min-width: 992px) {\n  .flex-lg-row[_ngcontent-%COMP%] {\n    flex-direction: row !important; }\n  .flex-lg-column[_ngcontent-%COMP%] {\n    flex-direction: column !important; }\n  .flex-lg-row-reverse[_ngcontent-%COMP%] {\n    flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse[_ngcontent-%COMP%] {\n    flex-direction: column-reverse !important; }\n  .flex-lg-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap !important; }\n  .flex-lg-nowrap[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse[_ngcontent-%COMP%] {\n    flex-wrap: wrap-reverse !important; }\n  .flex-lg-fill[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important; }\n  .flex-lg-grow-0[_ngcontent-%COMP%] {\n    flex-grow: 0 !important; }\n  .flex-lg-grow-1[_ngcontent-%COMP%] {\n    flex-grow: 1 !important; }\n  .flex-lg-shrink-0[_ngcontent-%COMP%] {\n    flex-shrink: 0 !important; }\n  .flex-lg-shrink-1[_ngcontent-%COMP%] {\n    flex-shrink: 1 !important; }\n  .justify-content-lg-start[_ngcontent-%COMP%] {\n    justify-content: flex-start !important; }\n  .justify-content-lg-end[_ngcontent-%COMP%] {\n    justify-content: flex-end !important; }\n  .justify-content-lg-center[_ngcontent-%COMP%] {\n    justify-content: center !important; }\n  .justify-content-lg-between[_ngcontent-%COMP%] {\n    justify-content: space-between !important; }\n  .justify-content-lg-around[_ngcontent-%COMP%] {\n    justify-content: space-around !important; }\n  .align-items-lg-start[_ngcontent-%COMP%] {\n    align-items: flex-start !important; }\n  .align-items-lg-end[_ngcontent-%COMP%] {\n    align-items: flex-end !important; }\n  .align-items-lg-center[_ngcontent-%COMP%] {\n    align-items: center !important; }\n  .align-items-lg-baseline[_ngcontent-%COMP%] {\n    align-items: baseline !important; }\n  .align-items-lg-stretch[_ngcontent-%COMP%] {\n    align-items: stretch !important; }\n  .align-content-lg-start[_ngcontent-%COMP%] {\n    align-content: flex-start !important; }\n  .align-content-lg-end[_ngcontent-%COMP%] {\n    align-content: flex-end !important; }\n  .align-content-lg-center[_ngcontent-%COMP%] {\n    align-content: center !important; }\n  .align-content-lg-between[_ngcontent-%COMP%] {\n    align-content: space-between !important; }\n  .align-content-lg-around[_ngcontent-%COMP%] {\n    align-content: space-around !important; }\n  .align-content-lg-stretch[_ngcontent-%COMP%] {\n    align-content: stretch !important; }\n  .align-self-lg-auto[_ngcontent-%COMP%] {\n    align-self: auto !important; }\n  .align-self-lg-start[_ngcontent-%COMP%] {\n    align-self: flex-start !important; }\n  .align-self-lg-end[_ngcontent-%COMP%] {\n    align-self: flex-end !important; }\n  .align-self-lg-center[_ngcontent-%COMP%] {\n    align-self: center !important; }\n  .align-self-lg-baseline[_ngcontent-%COMP%] {\n    align-self: baseline !important; }\n  .align-self-lg-stretch[_ngcontent-%COMP%] {\n    align-self: stretch !important; } }\n\n@media (min-width: 1200px) {\n  .flex-xl-row[_ngcontent-%COMP%] {\n    flex-direction: row !important; }\n  .flex-xl-column[_ngcontent-%COMP%] {\n    flex-direction: column !important; }\n  .flex-xl-row-reverse[_ngcontent-%COMP%] {\n    flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse[_ngcontent-%COMP%] {\n    flex-direction: column-reverse !important; }\n  .flex-xl-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap !important; }\n  .flex-xl-nowrap[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse[_ngcontent-%COMP%] {\n    flex-wrap: wrap-reverse !important; }\n  .flex-xl-fill[_ngcontent-%COMP%] {\n    flex: 1 1 auto !important; }\n  .flex-xl-grow-0[_ngcontent-%COMP%] {\n    flex-grow: 0 !important; }\n  .flex-xl-grow-1[_ngcontent-%COMP%] {\n    flex-grow: 1 !important; }\n  .flex-xl-shrink-0[_ngcontent-%COMP%] {\n    flex-shrink: 0 !important; }\n  .flex-xl-shrink-1[_ngcontent-%COMP%] {\n    flex-shrink: 1 !important; }\n  .justify-content-xl-start[_ngcontent-%COMP%] {\n    justify-content: flex-start !important; }\n  .justify-content-xl-end[_ngcontent-%COMP%] {\n    justify-content: flex-end !important; }\n  .justify-content-xl-center[_ngcontent-%COMP%] {\n    justify-content: center !important; }\n  .justify-content-xl-between[_ngcontent-%COMP%] {\n    justify-content: space-between !important; }\n  .justify-content-xl-around[_ngcontent-%COMP%] {\n    justify-content: space-around !important; }\n  .align-items-xl-start[_ngcontent-%COMP%] {\n    align-items: flex-start !important; }\n  .align-items-xl-end[_ngcontent-%COMP%] {\n    align-items: flex-end !important; }\n  .align-items-xl-center[_ngcontent-%COMP%] {\n    align-items: center !important; }\n  .align-items-xl-baseline[_ngcontent-%COMP%] {\n    align-items: baseline !important; }\n  .align-items-xl-stretch[_ngcontent-%COMP%] {\n    align-items: stretch !important; }\n  .align-content-xl-start[_ngcontent-%COMP%] {\n    align-content: flex-start !important; }\n  .align-content-xl-end[_ngcontent-%COMP%] {\n    align-content: flex-end !important; }\n  .align-content-xl-center[_ngcontent-%COMP%] {\n    align-content: center !important; }\n  .align-content-xl-between[_ngcontent-%COMP%] {\n    align-content: space-between !important; }\n  .align-content-xl-around[_ngcontent-%COMP%] {\n    align-content: space-around !important; }\n  .align-content-xl-stretch[_ngcontent-%COMP%] {\n    align-content: stretch !important; }\n  .align-self-xl-auto[_ngcontent-%COMP%] {\n    align-self: auto !important; }\n  .align-self-xl-start[_ngcontent-%COMP%] {\n    align-self: flex-start !important; }\n  .align-self-xl-end[_ngcontent-%COMP%] {\n    align-self: flex-end !important; }\n  .align-self-xl-center[_ngcontent-%COMP%] {\n    align-self: center !important; }\n  .align-self-xl-baseline[_ngcontent-%COMP%] {\n    align-self: baseline !important; }\n  .align-self-xl-stretch[_ngcontent-%COMP%] {\n    align-self: stretch !important; } }\n\n.float-left[_ngcontent-%COMP%] {\n  float: left !important; }\n\n.float-right[_ngcontent-%COMP%] {\n  float: right !important; }\n\n.float-none[_ngcontent-%COMP%] {\n  float: none !important; }\n\n@media (min-width: 576px) {\n  .float-sm-left[_ngcontent-%COMP%] {\n    float: left !important; }\n  .float-sm-right[_ngcontent-%COMP%] {\n    float: right !important; }\n  .float-sm-none[_ngcontent-%COMP%] {\n    float: none !important; } }\n\n@media (min-width: 768px) {\n  .float-md-left[_ngcontent-%COMP%] {\n    float: left !important; }\n  .float-md-right[_ngcontent-%COMP%] {\n    float: right !important; }\n  .float-md-none[_ngcontent-%COMP%] {\n    float: none !important; } }\n\n@media (min-width: 992px) {\n  .float-lg-left[_ngcontent-%COMP%] {\n    float: left !important; }\n  .float-lg-right[_ngcontent-%COMP%] {\n    float: right !important; }\n  .float-lg-none[_ngcontent-%COMP%] {\n    float: none !important; } }\n\n@media (min-width: 1200px) {\n  .float-xl-left[_ngcontent-%COMP%] {\n    float: left !important; }\n  .float-xl-right[_ngcontent-%COMP%] {\n    float: right !important; }\n  .float-xl-none[_ngcontent-%COMP%] {\n    float: none !important; } }\n\n.position-static[_ngcontent-%COMP%] {\n  position: static !important; }\n\n.position-relative[_ngcontent-%COMP%] {\n  position: relative !important; }\n\n.position-absolute[_ngcontent-%COMP%] {\n  position: absolute !important; }\n\n.position-fixed[_ngcontent-%COMP%] {\n  position: fixed !important; }\n\n.position-sticky[_ngcontent-%COMP%] {\n  position: sticky !important; }\n\n.fixed-top[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n\n.fixed-bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n\n@supports (position: sticky) {\n  .sticky-top[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0; }\n\n.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal; }\n\n.shadow-sm[_ngcontent-%COMP%] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important; }\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; }\n\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important; }\n\n.shadow-none[_ngcontent-%COMP%] {\n  box-shadow: none !important; }\n\n.w-25[_ngcontent-%COMP%] {\n  width: 25% !important; }\n\n.w-50[_ngcontent-%COMP%] {\n  width: 50% !important; }\n\n.w-75[_ngcontent-%COMP%] {\n  width: 75% !important; }\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100% !important; }\n\n.w-auto[_ngcontent-%COMP%] {\n  width: auto !important; }\n\n.h-25[_ngcontent-%COMP%] {\n  height: 25% !important; }\n\n.h-50[_ngcontent-%COMP%] {\n  height: 50% !important; }\n\n.h-75[_ngcontent-%COMP%] {\n  height: 75% !important; }\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100% !important; }\n\n.h-auto[_ngcontent-%COMP%] {\n  height: auto !important; }\n\n.mw-100[_ngcontent-%COMP%] {\n  max-width: 100% !important; }\n\n.mh-100[_ngcontent-%COMP%] {\n  max-height: 100% !important; }\n\n.m-0[_ngcontent-%COMP%] {\n  margin: 0 !important; }\n\n.mt-0[_ngcontent-%COMP%], .my-0[_ngcontent-%COMP%] {\n  margin-top: 0 !important; }\n\n.mr-0[_ngcontent-%COMP%], .mx-0[_ngcontent-%COMP%] {\n  margin-right: 0 !important; }\n\n.mb-0[_ngcontent-%COMP%], .my-0[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important; }\n\n.ml-0[_ngcontent-%COMP%], .mx-0[_ngcontent-%COMP%] {\n  margin-left: 0 !important; }\n\n.m-1[_ngcontent-%COMP%] {\n  margin: 0.3rem !important; }\n\n.mt-1[_ngcontent-%COMP%], .my-1[_ngcontent-%COMP%] {\n  margin-top: 0.3rem !important; }\n\n.mr-1[_ngcontent-%COMP%], .mx-1[_ngcontent-%COMP%] {\n  margin-right: 0.3rem !important; }\n\n.mb-1[_ngcontent-%COMP%], .my-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem !important; }\n\n.ml-1[_ngcontent-%COMP%], .mx-1[_ngcontent-%COMP%] {\n  margin-left: 0.3rem !important; }\n\n.m-2[_ngcontent-%COMP%] {\n  margin: 0.6rem !important; }\n\n.mt-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\n  margin-top: 0.6rem !important; }\n\n.mr-2[_ngcontent-%COMP%], .mx-2[_ngcontent-%COMP%] {\n  margin-right: 0.6rem !important; }\n\n.mb-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.6rem !important; }\n\n.ml-2[_ngcontent-%COMP%], .mx-2[_ngcontent-%COMP%] {\n  margin-left: 0.6rem !important; }\n\n.m-3[_ngcontent-%COMP%] {\n  margin: 1.2rem !important; }\n\n.mt-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n  margin-top: 1.2rem !important; }\n\n.mr-3[_ngcontent-%COMP%], .mx-3[_ngcontent-%COMP%] {\n  margin-right: 1.2rem !important; }\n\n.mb-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem !important; }\n\n.ml-3[_ngcontent-%COMP%], .mx-3[_ngcontent-%COMP%] {\n  margin-left: 1.2rem !important; }\n\n.m-4[_ngcontent-%COMP%] {\n  margin: 1.8rem !important; }\n\n.mt-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\n  margin-top: 1.8rem !important; }\n\n.mr-4[_ngcontent-%COMP%], .mx-4[_ngcontent-%COMP%] {\n  margin-right: 1.8rem !important; }\n\n.mb-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\n  margin-bottom: 1.8rem !important; }\n\n.ml-4[_ngcontent-%COMP%], .mx-4[_ngcontent-%COMP%] {\n  margin-left: 1.8rem !important; }\n\n.m-5[_ngcontent-%COMP%] {\n  margin: 3.6rem !important; }\n\n.mt-5[_ngcontent-%COMP%], .my-5[_ngcontent-%COMP%] {\n  margin-top: 3.6rem !important; }\n\n.mr-5[_ngcontent-%COMP%], .mx-5[_ngcontent-%COMP%] {\n  margin-right: 3.6rem !important; }\n\n.mb-5[_ngcontent-%COMP%], .my-5[_ngcontent-%COMP%] {\n  margin-bottom: 3.6rem !important; }\n\n.ml-5[_ngcontent-%COMP%], .mx-5[_ngcontent-%COMP%] {\n  margin-left: 3.6rem !important; }\n\n.p-0[_ngcontent-%COMP%] {\n  padding: 0 !important; }\n\n.pt-0[_ngcontent-%COMP%], .py-0[_ngcontent-%COMP%] {\n  padding-top: 0 !important; }\n\n.pr-0[_ngcontent-%COMP%], .px-0[_ngcontent-%COMP%] {\n  padding-right: 0 !important; }\n\n.pb-0[_ngcontent-%COMP%], .py-0[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important; }\n\n.pl-0[_ngcontent-%COMP%], .px-0[_ngcontent-%COMP%] {\n  padding-left: 0 !important; }\n\n.p-1[_ngcontent-%COMP%] {\n  padding: 0.3rem !important; }\n\n.pt-1[_ngcontent-%COMP%], .py-1[_ngcontent-%COMP%] {\n  padding-top: 0.3rem !important; }\n\n.pr-1[_ngcontent-%COMP%], .px-1[_ngcontent-%COMP%] {\n  padding-right: 0.3rem !important; }\n\n.pb-1[_ngcontent-%COMP%], .py-1[_ngcontent-%COMP%] {\n  padding-bottom: 0.3rem !important; }\n\n.pl-1[_ngcontent-%COMP%], .px-1[_ngcontent-%COMP%] {\n  padding-left: 0.3rem !important; }\n\n.p-2[_ngcontent-%COMP%] {\n  padding: 0.6rem !important; }\n\n.pt-2[_ngcontent-%COMP%], .py-2[_ngcontent-%COMP%] {\n  padding-top: 0.6rem !important; }\n\n.pr-2[_ngcontent-%COMP%], .px-2[_ngcontent-%COMP%] {\n  padding-right: 0.6rem !important; }\n\n.pb-2[_ngcontent-%COMP%], .py-2[_ngcontent-%COMP%] {\n  padding-bottom: 0.6rem !important; }\n\n.pl-2[_ngcontent-%COMP%], .px-2[_ngcontent-%COMP%] {\n  padding-left: 0.6rem !important; }\n\n.p-3[_ngcontent-%COMP%] {\n  padding: 1.2rem !important; }\n\n.pt-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-top: 1.2rem !important; }\n\n.pr-3[_ngcontent-%COMP%], .px-3[_ngcontent-%COMP%] {\n  padding-right: 1.2rem !important; }\n\n.pb-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-bottom: 1.2rem !important; }\n\n.pl-3[_ngcontent-%COMP%], .px-3[_ngcontent-%COMP%] {\n  padding-left: 1.2rem !important; }\n\n.p-4[_ngcontent-%COMP%] {\n  padding: 1.8rem !important; }\n\n.pt-4[_ngcontent-%COMP%], .py-4[_ngcontent-%COMP%] {\n  padding-top: 1.8rem !important; }\n\n.pr-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-right: 1.8rem !important; }\n\n.pb-4[_ngcontent-%COMP%], .py-4[_ngcontent-%COMP%] {\n  padding-bottom: 1.8rem !important; }\n\n.pl-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-left: 1.8rem !important; }\n\n.p-5[_ngcontent-%COMP%] {\n  padding: 3.6rem !important; }\n\n.pt-5[_ngcontent-%COMP%], .py-5[_ngcontent-%COMP%] {\n  padding-top: 3.6rem !important; }\n\n.pr-5[_ngcontent-%COMP%], .px-5[_ngcontent-%COMP%] {\n  padding-right: 3.6rem !important; }\n\n.pb-5[_ngcontent-%COMP%], .py-5[_ngcontent-%COMP%] {\n  padding-bottom: 3.6rem !important; }\n\n.pl-5[_ngcontent-%COMP%], .px-5[_ngcontent-%COMP%] {\n  padding-left: 3.6rem !important; }\n\n.m-auto[_ngcontent-%COMP%] {\n  margin: auto !important; }\n\n.mt-auto[_ngcontent-%COMP%], .my-auto[_ngcontent-%COMP%] {\n  margin-top: auto !important; }\n\n.mr-auto[_ngcontent-%COMP%], .mx-auto[_ngcontent-%COMP%] {\n  margin-right: auto !important; }\n\n.mb-auto[_ngcontent-%COMP%], .my-auto[_ngcontent-%COMP%] {\n  margin-bottom: auto !important; }\n\n.ml-auto[_ngcontent-%COMP%], .mx-auto[_ngcontent-%COMP%] {\n  margin-left: auto !important; }\n\n@media (min-width: 576px) {\n  .m-sm-0[_ngcontent-%COMP%] {\n    margin: 0 !important; }\n  .mt-sm-0[_ngcontent-%COMP%], .my-sm-0[_ngcontent-%COMP%] {\n    margin-top: 0 !important; }\n  .mr-sm-0[_ngcontent-%COMP%], .mx-sm-0[_ngcontent-%COMP%] {\n    margin-right: 0 !important; }\n  .mb-sm-0[_ngcontent-%COMP%], .my-sm-0[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important; }\n  .ml-sm-0[_ngcontent-%COMP%], .mx-sm-0[_ngcontent-%COMP%] {\n    margin-left: 0 !important; }\n  .m-sm-1[_ngcontent-%COMP%] {\n    margin: 0.3rem !important; }\n  .mt-sm-1[_ngcontent-%COMP%], .my-sm-1[_ngcontent-%COMP%] {\n    margin-top: 0.3rem !important; }\n  .mr-sm-1[_ngcontent-%COMP%], .mx-sm-1[_ngcontent-%COMP%] {\n    margin-right: 0.3rem !important; }\n  .mb-sm-1[_ngcontent-%COMP%], .my-sm-1[_ngcontent-%COMP%] {\n    margin-bottom: 0.3rem !important; }\n  .ml-sm-1[_ngcontent-%COMP%], .mx-sm-1[_ngcontent-%COMP%] {\n    margin-left: 0.3rem !important; }\n  .m-sm-2[_ngcontent-%COMP%] {\n    margin: 0.6rem !important; }\n  .mt-sm-2[_ngcontent-%COMP%], .my-sm-2[_ngcontent-%COMP%] {\n    margin-top: 0.6rem !important; }\n  .mr-sm-2[_ngcontent-%COMP%], .mx-sm-2[_ngcontent-%COMP%] {\n    margin-right: 0.6rem !important; }\n  .mb-sm-2[_ngcontent-%COMP%], .my-sm-2[_ngcontent-%COMP%] {\n    margin-bottom: 0.6rem !important; }\n  .ml-sm-2[_ngcontent-%COMP%], .mx-sm-2[_ngcontent-%COMP%] {\n    margin-left: 0.6rem !important; }\n  .m-sm-3[_ngcontent-%COMP%] {\n    margin: 1.2rem !important; }\n  .mt-sm-3[_ngcontent-%COMP%], .my-sm-3[_ngcontent-%COMP%] {\n    margin-top: 1.2rem !important; }\n  .mr-sm-3[_ngcontent-%COMP%], .mx-sm-3[_ngcontent-%COMP%] {\n    margin-right: 1.2rem !important; }\n  .mb-sm-3[_ngcontent-%COMP%], .my-sm-3[_ngcontent-%COMP%] {\n    margin-bottom: 1.2rem !important; }\n  .ml-sm-3[_ngcontent-%COMP%], .mx-sm-3[_ngcontent-%COMP%] {\n    margin-left: 1.2rem !important; }\n  .m-sm-4[_ngcontent-%COMP%] {\n    margin: 1.8rem !important; }\n  .mt-sm-4[_ngcontent-%COMP%], .my-sm-4[_ngcontent-%COMP%] {\n    margin-top: 1.8rem !important; }\n  .mr-sm-4[_ngcontent-%COMP%], .mx-sm-4[_ngcontent-%COMP%] {\n    margin-right: 1.8rem !important; }\n  .mb-sm-4[_ngcontent-%COMP%], .my-sm-4[_ngcontent-%COMP%] {\n    margin-bottom: 1.8rem !important; }\n  .ml-sm-4[_ngcontent-%COMP%], .mx-sm-4[_ngcontent-%COMP%] {\n    margin-left: 1.8rem !important; }\n  .m-sm-5[_ngcontent-%COMP%] {\n    margin: 3.6rem !important; }\n  .mt-sm-5[_ngcontent-%COMP%], .my-sm-5[_ngcontent-%COMP%] {\n    margin-top: 3.6rem !important; }\n  .mr-sm-5[_ngcontent-%COMP%], .mx-sm-5[_ngcontent-%COMP%] {\n    margin-right: 3.6rem !important; }\n  .mb-sm-5[_ngcontent-%COMP%], .my-sm-5[_ngcontent-%COMP%] {\n    margin-bottom: 3.6rem !important; }\n  .ml-sm-5[_ngcontent-%COMP%], .mx-sm-5[_ngcontent-%COMP%] {\n    margin-left: 3.6rem !important; }\n  .p-sm-0[_ngcontent-%COMP%] {\n    padding: 0 !important; }\n  .pt-sm-0[_ngcontent-%COMP%], .py-sm-0[_ngcontent-%COMP%] {\n    padding-top: 0 !important; }\n  .pr-sm-0[_ngcontent-%COMP%], .px-sm-0[_ngcontent-%COMP%] {\n    padding-right: 0 !important; }\n  .pb-sm-0[_ngcontent-%COMP%], .py-sm-0[_ngcontent-%COMP%] {\n    padding-bottom: 0 !important; }\n  .pl-sm-0[_ngcontent-%COMP%], .px-sm-0[_ngcontent-%COMP%] {\n    padding-left: 0 !important; }\n  .p-sm-1[_ngcontent-%COMP%] {\n    padding: 0.3rem !important; }\n  .pt-sm-1[_ngcontent-%COMP%], .py-sm-1[_ngcontent-%COMP%] {\n    padding-top: 0.3rem !important; }\n  .pr-sm-1[_ngcontent-%COMP%], .px-sm-1[_ngcontent-%COMP%] {\n    padding-right: 0.3rem !important; }\n  .pb-sm-1[_ngcontent-%COMP%], .py-sm-1[_ngcontent-%COMP%] {\n    padding-bottom: 0.3rem !important; }\n  .pl-sm-1[_ngcontent-%COMP%], .px-sm-1[_ngcontent-%COMP%] {\n    padding-left: 0.3rem !important; }\n  .p-sm-2[_ngcontent-%COMP%] {\n    padding: 0.6rem !important; }\n  .pt-sm-2[_ngcontent-%COMP%], .py-sm-2[_ngcontent-%COMP%] {\n    padding-top: 0.6rem !important; }\n  .pr-sm-2[_ngcontent-%COMP%], .px-sm-2[_ngcontent-%COMP%] {\n    padding-right: 0.6rem !important; }\n  .pb-sm-2[_ngcontent-%COMP%], .py-sm-2[_ngcontent-%COMP%] {\n    padding-bottom: 0.6rem !important; }\n  .pl-sm-2[_ngcontent-%COMP%], .px-sm-2[_ngcontent-%COMP%] {\n    padding-left: 0.6rem !important; }\n  .p-sm-3[_ngcontent-%COMP%] {\n    padding: 1.2rem !important; }\n  .pt-sm-3[_ngcontent-%COMP%], .py-sm-3[_ngcontent-%COMP%] {\n    padding-top: 1.2rem !important; }\n  .pr-sm-3[_ngcontent-%COMP%], .px-sm-3[_ngcontent-%COMP%] {\n    padding-right: 1.2rem !important; }\n  .pb-sm-3[_ngcontent-%COMP%], .py-sm-3[_ngcontent-%COMP%] {\n    padding-bottom: 1.2rem !important; }\n  .pl-sm-3[_ngcontent-%COMP%], .px-sm-3[_ngcontent-%COMP%] {\n    padding-left: 1.2rem !important; }\n  .p-sm-4[_ngcontent-%COMP%] {\n    padding: 1.8rem !important; }\n  .pt-sm-4[_ngcontent-%COMP%], .py-sm-4[_ngcontent-%COMP%] {\n    padding-top: 1.8rem !important; }\n  .pr-sm-4[_ngcontent-%COMP%], .px-sm-4[_ngcontent-%COMP%] {\n    padding-right: 1.8rem !important; }\n  .pb-sm-4[_ngcontent-%COMP%], .py-sm-4[_ngcontent-%COMP%] {\n    padding-bottom: 1.8rem !important; }\n  .pl-sm-4[_ngcontent-%COMP%], .px-sm-4[_ngcontent-%COMP%] {\n    padding-left: 1.8rem !important; }\n  .p-sm-5[_ngcontent-%COMP%] {\n    padding: 3.6rem !important; }\n  .pt-sm-5[_ngcontent-%COMP%], .py-sm-5[_ngcontent-%COMP%] {\n    padding-top: 3.6rem !important; }\n  .pr-sm-5[_ngcontent-%COMP%], .px-sm-5[_ngcontent-%COMP%] {\n    padding-right: 3.6rem !important; }\n  .pb-sm-5[_ngcontent-%COMP%], .py-sm-5[_ngcontent-%COMP%] {\n    padding-bottom: 3.6rem !important; }\n  .pl-sm-5[_ngcontent-%COMP%], .px-sm-5[_ngcontent-%COMP%] {\n    padding-left: 3.6rem !important; }\n  .m-sm-auto[_ngcontent-%COMP%] {\n    margin: auto !important; }\n  .mt-sm-auto[_ngcontent-%COMP%], .my-sm-auto[_ngcontent-%COMP%] {\n    margin-top: auto !important; }\n  .mr-sm-auto[_ngcontent-%COMP%], .mx-sm-auto[_ngcontent-%COMP%] {\n    margin-right: auto !important; }\n  .mb-sm-auto[_ngcontent-%COMP%], .my-sm-auto[_ngcontent-%COMP%] {\n    margin-bottom: auto !important; }\n  .ml-sm-auto[_ngcontent-%COMP%], .mx-sm-auto[_ngcontent-%COMP%] {\n    margin-left: auto !important; } }\n\n@media (min-width: 768px) {\n  .m-md-0[_ngcontent-%COMP%] {\n    margin: 0 !important; }\n  .mt-md-0[_ngcontent-%COMP%], .my-md-0[_ngcontent-%COMP%] {\n    margin-top: 0 !important; }\n  .mr-md-0[_ngcontent-%COMP%], .mx-md-0[_ngcontent-%COMP%] {\n    margin-right: 0 !important; }\n  .mb-md-0[_ngcontent-%COMP%], .my-md-0[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important; }\n  .ml-md-0[_ngcontent-%COMP%], .mx-md-0[_ngcontent-%COMP%] {\n    margin-left: 0 !important; }\n  .m-md-1[_ngcontent-%COMP%] {\n    margin: 0.3rem !important; }\n  .mt-md-1[_ngcontent-%COMP%], .my-md-1[_ngcontent-%COMP%] {\n    margin-top: 0.3rem !important; }\n  .mr-md-1[_ngcontent-%COMP%], .mx-md-1[_ngcontent-%COMP%] {\n    margin-right: 0.3rem !important; }\n  .mb-md-1[_ngcontent-%COMP%], .my-md-1[_ngcontent-%COMP%] {\n    margin-bottom: 0.3rem !important; }\n  .ml-md-1[_ngcontent-%COMP%], .mx-md-1[_ngcontent-%COMP%] {\n    margin-left: 0.3rem !important; }\n  .m-md-2[_ngcontent-%COMP%] {\n    margin: 0.6rem !important; }\n  .mt-md-2[_ngcontent-%COMP%], .my-md-2[_ngcontent-%COMP%] {\n    margin-top: 0.6rem !important; }\n  .mr-md-2[_ngcontent-%COMP%], .mx-md-2[_ngcontent-%COMP%] {\n    margin-right: 0.6rem !important; }\n  .mb-md-2[_ngcontent-%COMP%], .my-md-2[_ngcontent-%COMP%] {\n    margin-bottom: 0.6rem !important; }\n  .ml-md-2[_ngcontent-%COMP%], .mx-md-2[_ngcontent-%COMP%] {\n    margin-left: 0.6rem !important; }\n  .m-md-3[_ngcontent-%COMP%] {\n    margin: 1.2rem !important; }\n  .mt-md-3[_ngcontent-%COMP%], .my-md-3[_ngcontent-%COMP%] {\n    margin-top: 1.2rem !important; }\n  .mr-md-3[_ngcontent-%COMP%], .mx-md-3[_ngcontent-%COMP%] {\n    margin-right: 1.2rem !important; }\n  .mb-md-3[_ngcontent-%COMP%], .my-md-3[_ngcontent-%COMP%] {\n    margin-bottom: 1.2rem !important; }\n  .ml-md-3[_ngcontent-%COMP%], .mx-md-3[_ngcontent-%COMP%] {\n    margin-left: 1.2rem !important; }\n  .m-md-4[_ngcontent-%COMP%] {\n    margin: 1.8rem !important; }\n  .mt-md-4[_ngcontent-%COMP%], .my-md-4[_ngcontent-%COMP%] {\n    margin-top: 1.8rem !important; }\n  .mr-md-4[_ngcontent-%COMP%], .mx-md-4[_ngcontent-%COMP%] {\n    margin-right: 1.8rem !important; }\n  .mb-md-4[_ngcontent-%COMP%], .my-md-4[_ngcontent-%COMP%] {\n    margin-bottom: 1.8rem !important; }\n  .ml-md-4[_ngcontent-%COMP%], .mx-md-4[_ngcontent-%COMP%] {\n    margin-left: 1.8rem !important; }\n  .m-md-5[_ngcontent-%COMP%] {\n    margin: 3.6rem !important; }\n  .mt-md-5[_ngcontent-%COMP%], .my-md-5[_ngcontent-%COMP%] {\n    margin-top: 3.6rem !important; }\n  .mr-md-5[_ngcontent-%COMP%], .mx-md-5[_ngcontent-%COMP%] {\n    margin-right: 3.6rem !important; }\n  .mb-md-5[_ngcontent-%COMP%], .my-md-5[_ngcontent-%COMP%] {\n    margin-bottom: 3.6rem !important; }\n  .ml-md-5[_ngcontent-%COMP%], .mx-md-5[_ngcontent-%COMP%] {\n    margin-left: 3.6rem !important; }\n  .p-md-0[_ngcontent-%COMP%] {\n    padding: 0 !important; }\n  .pt-md-0[_ngcontent-%COMP%], .py-md-0[_ngcontent-%COMP%] {\n    padding-top: 0 !important; }\n  .pr-md-0[_ngcontent-%COMP%], .px-md-0[_ngcontent-%COMP%] {\n    padding-right: 0 !important; }\n  .pb-md-0[_ngcontent-%COMP%], .py-md-0[_ngcontent-%COMP%] {\n    padding-bottom: 0 !important; }\n  .pl-md-0[_ngcontent-%COMP%], .px-md-0[_ngcontent-%COMP%] {\n    padding-left: 0 !important; }\n  .p-md-1[_ngcontent-%COMP%] {\n    padding: 0.3rem !important; }\n  .pt-md-1[_ngcontent-%COMP%], .py-md-1[_ngcontent-%COMP%] {\n    padding-top: 0.3rem !important; }\n  .pr-md-1[_ngcontent-%COMP%], .px-md-1[_ngcontent-%COMP%] {\n    padding-right: 0.3rem !important; }\n  .pb-md-1[_ngcontent-%COMP%], .py-md-1[_ngcontent-%COMP%] {\n    padding-bottom: 0.3rem !important; }\n  .pl-md-1[_ngcontent-%COMP%], .px-md-1[_ngcontent-%COMP%] {\n    padding-left: 0.3rem !important; }\n  .p-md-2[_ngcontent-%COMP%] {\n    padding: 0.6rem !important; }\n  .pt-md-2[_ngcontent-%COMP%], .py-md-2[_ngcontent-%COMP%] {\n    padding-top: 0.6rem !important; }\n  .pr-md-2[_ngcontent-%COMP%], .px-md-2[_ngcontent-%COMP%] {\n    padding-right: 0.6rem !important; }\n  .pb-md-2[_ngcontent-%COMP%], .py-md-2[_ngcontent-%COMP%] {\n    padding-bottom: 0.6rem !important; }\n  .pl-md-2[_ngcontent-%COMP%], .px-md-2[_ngcontent-%COMP%] {\n    padding-left: 0.6rem !important; }\n  .p-md-3[_ngcontent-%COMP%] {\n    padding: 1.2rem !important; }\n  .pt-md-3[_ngcontent-%COMP%], .py-md-3[_ngcontent-%COMP%] {\n    padding-top: 1.2rem !important; }\n  .pr-md-3[_ngcontent-%COMP%], .px-md-3[_ngcontent-%COMP%] {\n    padding-right: 1.2rem !important; }\n  .pb-md-3[_ngcontent-%COMP%], .py-md-3[_ngcontent-%COMP%] {\n    padding-bottom: 1.2rem !important; }\n  .pl-md-3[_ngcontent-%COMP%], .px-md-3[_ngcontent-%COMP%] {\n    padding-left: 1.2rem !important; }\n  .p-md-4[_ngcontent-%COMP%] {\n    padding: 1.8rem !important; }\n  .pt-md-4[_ngcontent-%COMP%], .py-md-4[_ngcontent-%COMP%] {\n    padding-top: 1.8rem !important; }\n  .pr-md-4[_ngcontent-%COMP%], .px-md-4[_ngcontent-%COMP%] {\n    padding-right: 1.8rem !important; }\n  .pb-md-4[_ngcontent-%COMP%], .py-md-4[_ngcontent-%COMP%] {\n    padding-bottom: 1.8rem !important; }\n  .pl-md-4[_ngcontent-%COMP%], .px-md-4[_ngcontent-%COMP%] {\n    padding-left: 1.8rem !important; }\n  .p-md-5[_ngcontent-%COMP%] {\n    padding: 3.6rem !important; }\n  .pt-md-5[_ngcontent-%COMP%], .py-md-5[_ngcontent-%COMP%] {\n    padding-top: 3.6rem !important; }\n  .pr-md-5[_ngcontent-%COMP%], .px-md-5[_ngcontent-%COMP%] {\n    padding-right: 3.6rem !important; }\n  .pb-md-5[_ngcontent-%COMP%], .py-md-5[_ngcontent-%COMP%] {\n    padding-bottom: 3.6rem !important; }\n  .pl-md-5[_ngcontent-%COMP%], .px-md-5[_ngcontent-%COMP%] {\n    padding-left: 3.6rem !important; }\n  .m-md-auto[_ngcontent-%COMP%] {\n    margin: auto !important; }\n  .mt-md-auto[_ngcontent-%COMP%], .my-md-auto[_ngcontent-%COMP%] {\n    margin-top: auto !important; }\n  .mr-md-auto[_ngcontent-%COMP%], .mx-md-auto[_ngcontent-%COMP%] {\n    margin-right: auto !important; }\n  .mb-md-auto[_ngcontent-%COMP%], .my-md-auto[_ngcontent-%COMP%] {\n    margin-bottom: auto !important; }\n  .ml-md-auto[_ngcontent-%COMP%], .mx-md-auto[_ngcontent-%COMP%] {\n    margin-left: auto !important; } }\n\n@media (min-width: 992px) {\n  .m-lg-0[_ngcontent-%COMP%] {\n    margin: 0 !important; }\n  .mt-lg-0[_ngcontent-%COMP%], .my-lg-0[_ngcontent-%COMP%] {\n    margin-top: 0 !important; }\n  .mr-lg-0[_ngcontent-%COMP%], .mx-lg-0[_ngcontent-%COMP%] {\n    margin-right: 0 !important; }\n  .mb-lg-0[_ngcontent-%COMP%], .my-lg-0[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important; }\n  .ml-lg-0[_ngcontent-%COMP%], .mx-lg-0[_ngcontent-%COMP%] {\n    margin-left: 0 !important; }\n  .m-lg-1[_ngcontent-%COMP%] {\n    margin: 0.3rem !important; }\n  .mt-lg-1[_ngcontent-%COMP%], .my-lg-1[_ngcontent-%COMP%] {\n    margin-top: 0.3rem !important; }\n  .mr-lg-1[_ngcontent-%COMP%], .mx-lg-1[_ngcontent-%COMP%] {\n    margin-right: 0.3rem !important; }\n  .mb-lg-1[_ngcontent-%COMP%], .my-lg-1[_ngcontent-%COMP%] {\n    margin-bottom: 0.3rem !important; }\n  .ml-lg-1[_ngcontent-%COMP%], .mx-lg-1[_ngcontent-%COMP%] {\n    margin-left: 0.3rem !important; }\n  .m-lg-2[_ngcontent-%COMP%] {\n    margin: 0.6rem !important; }\n  .mt-lg-2[_ngcontent-%COMP%], .my-lg-2[_ngcontent-%COMP%] {\n    margin-top: 0.6rem !important; }\n  .mr-lg-2[_ngcontent-%COMP%], .mx-lg-2[_ngcontent-%COMP%] {\n    margin-right: 0.6rem !important; }\n  .mb-lg-2[_ngcontent-%COMP%], .my-lg-2[_ngcontent-%COMP%] {\n    margin-bottom: 0.6rem !important; }\n  .ml-lg-2[_ngcontent-%COMP%], .mx-lg-2[_ngcontent-%COMP%] {\n    margin-left: 0.6rem !important; }\n  .m-lg-3[_ngcontent-%COMP%] {\n    margin: 1.2rem !important; }\n  .mt-lg-3[_ngcontent-%COMP%], .my-lg-3[_ngcontent-%COMP%] {\n    margin-top: 1.2rem !important; }\n  .mr-lg-3[_ngcontent-%COMP%], .mx-lg-3[_ngcontent-%COMP%] {\n    margin-right: 1.2rem !important; }\n  .mb-lg-3[_ngcontent-%COMP%], .my-lg-3[_ngcontent-%COMP%] {\n    margin-bottom: 1.2rem !important; }\n  .ml-lg-3[_ngcontent-%COMP%], .mx-lg-3[_ngcontent-%COMP%] {\n    margin-left: 1.2rem !important; }\n  .m-lg-4[_ngcontent-%COMP%] {\n    margin: 1.8rem !important; }\n  .mt-lg-4[_ngcontent-%COMP%], .my-lg-4[_ngcontent-%COMP%] {\n    margin-top: 1.8rem !important; }\n  .mr-lg-4[_ngcontent-%COMP%], .mx-lg-4[_ngcontent-%COMP%] {\n    margin-right: 1.8rem !important; }\n  .mb-lg-4[_ngcontent-%COMP%], .my-lg-4[_ngcontent-%COMP%] {\n    margin-bottom: 1.8rem !important; }\n  .ml-lg-4[_ngcontent-%COMP%], .mx-lg-4[_ngcontent-%COMP%] {\n    margin-left: 1.8rem !important; }\n  .m-lg-5[_ngcontent-%COMP%] {\n    margin: 3.6rem !important; }\n  .mt-lg-5[_ngcontent-%COMP%], .my-lg-5[_ngcontent-%COMP%] {\n    margin-top: 3.6rem !important; }\n  .mr-lg-5[_ngcontent-%COMP%], .mx-lg-5[_ngcontent-%COMP%] {\n    margin-right: 3.6rem !important; }\n  .mb-lg-5[_ngcontent-%COMP%], .my-lg-5[_ngcontent-%COMP%] {\n    margin-bottom: 3.6rem !important; }\n  .ml-lg-5[_ngcontent-%COMP%], .mx-lg-5[_ngcontent-%COMP%] {\n    margin-left: 3.6rem !important; }\n  .p-lg-0[_ngcontent-%COMP%] {\n    padding: 0 !important; }\n  .pt-lg-0[_ngcontent-%COMP%], .py-lg-0[_ngcontent-%COMP%] {\n    padding-top: 0 !important; }\n  .pr-lg-0[_ngcontent-%COMP%], .px-lg-0[_ngcontent-%COMP%] {\n    padding-right: 0 !important; }\n  .pb-lg-0[_ngcontent-%COMP%], .py-lg-0[_ngcontent-%COMP%] {\n    padding-bottom: 0 !important; }\n  .pl-lg-0[_ngcontent-%COMP%], .px-lg-0[_ngcontent-%COMP%] {\n    padding-left: 0 !important; }\n  .p-lg-1[_ngcontent-%COMP%] {\n    padding: 0.3rem !important; }\n  .pt-lg-1[_ngcontent-%COMP%], .py-lg-1[_ngcontent-%COMP%] {\n    padding-top: 0.3rem !important; }\n  .pr-lg-1[_ngcontent-%COMP%], .px-lg-1[_ngcontent-%COMP%] {\n    padding-right: 0.3rem !important; }\n  .pb-lg-1[_ngcontent-%COMP%], .py-lg-1[_ngcontent-%COMP%] {\n    padding-bottom: 0.3rem !important; }\n  .pl-lg-1[_ngcontent-%COMP%], .px-lg-1[_ngcontent-%COMP%] {\n    padding-left: 0.3rem !important; }\n  .p-lg-2[_ngcontent-%COMP%] {\n    padding: 0.6rem !important; }\n  .pt-lg-2[_ngcontent-%COMP%], .py-lg-2[_ngcontent-%COMP%] {\n    padding-top: 0.6rem !important; }\n  .pr-lg-2[_ngcontent-%COMP%], .px-lg-2[_ngcontent-%COMP%] {\n    padding-right: 0.6rem !important; }\n  .pb-lg-2[_ngcontent-%COMP%], .py-lg-2[_ngcontent-%COMP%] {\n    padding-bottom: 0.6rem !important; }\n  .pl-lg-2[_ngcontent-%COMP%], .px-lg-2[_ngcontent-%COMP%] {\n    padding-left: 0.6rem !important; }\n  .p-lg-3[_ngcontent-%COMP%] {\n    padding: 1.2rem !important; }\n  .pt-lg-3[_ngcontent-%COMP%], .py-lg-3[_ngcontent-%COMP%] {\n    padding-top: 1.2rem !important; }\n  .pr-lg-3[_ngcontent-%COMP%], .px-lg-3[_ngcontent-%COMP%] {\n    padding-right: 1.2rem !important; }\n  .pb-lg-3[_ngcontent-%COMP%], .py-lg-3[_ngcontent-%COMP%] {\n    padding-bottom: 1.2rem !important; }\n  .pl-lg-3[_ngcontent-%COMP%], .px-lg-3[_ngcontent-%COMP%] {\n    padding-left: 1.2rem !important; }\n  .p-lg-4[_ngcontent-%COMP%] {\n    padding: 1.8rem !important; }\n  .pt-lg-4[_ngcontent-%COMP%], .py-lg-4[_ngcontent-%COMP%] {\n    padding-top: 1.8rem !important; }\n  .pr-lg-4[_ngcontent-%COMP%], .px-lg-4[_ngcontent-%COMP%] {\n    padding-right: 1.8rem !important; }\n  .pb-lg-4[_ngcontent-%COMP%], .py-lg-4[_ngcontent-%COMP%] {\n    padding-bottom: 1.8rem !important; }\n  .pl-lg-4[_ngcontent-%COMP%], .px-lg-4[_ngcontent-%COMP%] {\n    padding-left: 1.8rem !important; }\n  .p-lg-5[_ngcontent-%COMP%] {\n    padding: 3.6rem !important; }\n  .pt-lg-5[_ngcontent-%COMP%], .py-lg-5[_ngcontent-%COMP%] {\n    padding-top: 3.6rem !important; }\n  .pr-lg-5[_ngcontent-%COMP%], .px-lg-5[_ngcontent-%COMP%] {\n    padding-right: 3.6rem !important; }\n  .pb-lg-5[_ngcontent-%COMP%], .py-lg-5[_ngcontent-%COMP%] {\n    padding-bottom: 3.6rem !important; }\n  .pl-lg-5[_ngcontent-%COMP%], .px-lg-5[_ngcontent-%COMP%] {\n    padding-left: 3.6rem !important; }\n  .m-lg-auto[_ngcontent-%COMP%] {\n    margin: auto !important; }\n  .mt-lg-auto[_ngcontent-%COMP%], .my-lg-auto[_ngcontent-%COMP%] {\n    margin-top: auto !important; }\n  .mr-lg-auto[_ngcontent-%COMP%], .mx-lg-auto[_ngcontent-%COMP%] {\n    margin-right: auto !important; }\n  .mb-lg-auto[_ngcontent-%COMP%], .my-lg-auto[_ngcontent-%COMP%] {\n    margin-bottom: auto !important; }\n  .ml-lg-auto[_ngcontent-%COMP%], .mx-lg-auto[_ngcontent-%COMP%] {\n    margin-left: auto !important; } }\n\n@media (min-width: 1200px) {\n  .m-xl-0[_ngcontent-%COMP%] {\n    margin: 0 !important; }\n  .mt-xl-0[_ngcontent-%COMP%], .my-xl-0[_ngcontent-%COMP%] {\n    margin-top: 0 !important; }\n  .mr-xl-0[_ngcontent-%COMP%], .mx-xl-0[_ngcontent-%COMP%] {\n    margin-right: 0 !important; }\n  .mb-xl-0[_ngcontent-%COMP%], .my-xl-0[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important; }\n  .ml-xl-0[_ngcontent-%COMP%], .mx-xl-0[_ngcontent-%COMP%] {\n    margin-left: 0 !important; }\n  .m-xl-1[_ngcontent-%COMP%] {\n    margin: 0.3rem !important; }\n  .mt-xl-1[_ngcontent-%COMP%], .my-xl-1[_ngcontent-%COMP%] {\n    margin-top: 0.3rem !important; }\n  .mr-xl-1[_ngcontent-%COMP%], .mx-xl-1[_ngcontent-%COMP%] {\n    margin-right: 0.3rem !important; }\n  .mb-xl-1[_ngcontent-%COMP%], .my-xl-1[_ngcontent-%COMP%] {\n    margin-bottom: 0.3rem !important; }\n  .ml-xl-1[_ngcontent-%COMP%], .mx-xl-1[_ngcontent-%COMP%] {\n    margin-left: 0.3rem !important; }\n  .m-xl-2[_ngcontent-%COMP%] {\n    margin: 0.6rem !important; }\n  .mt-xl-2[_ngcontent-%COMP%], .my-xl-2[_ngcontent-%COMP%] {\n    margin-top: 0.6rem !important; }\n  .mr-xl-2[_ngcontent-%COMP%], .mx-xl-2[_ngcontent-%COMP%] {\n    margin-right: 0.6rem !important; }\n  .mb-xl-2[_ngcontent-%COMP%], .my-xl-2[_ngcontent-%COMP%] {\n    margin-bottom: 0.6rem !important; }\n  .ml-xl-2[_ngcontent-%COMP%], .mx-xl-2[_ngcontent-%COMP%] {\n    margin-left: 0.6rem !important; }\n  .m-xl-3[_ngcontent-%COMP%] {\n    margin: 1.2rem !important; }\n  .mt-xl-3[_ngcontent-%COMP%], .my-xl-3[_ngcontent-%COMP%] {\n    margin-top: 1.2rem !important; }\n  .mr-xl-3[_ngcontent-%COMP%], .mx-xl-3[_ngcontent-%COMP%] {\n    margin-right: 1.2rem !important; }\n  .mb-xl-3[_ngcontent-%COMP%], .my-xl-3[_ngcontent-%COMP%] {\n    margin-bottom: 1.2rem !important; }\n  .ml-xl-3[_ngcontent-%COMP%], .mx-xl-3[_ngcontent-%COMP%] {\n    margin-left: 1.2rem !important; }\n  .m-xl-4[_ngcontent-%COMP%] {\n    margin: 1.8rem !important; }\n  .mt-xl-4[_ngcontent-%COMP%], .my-xl-4[_ngcontent-%COMP%] {\n    margin-top: 1.8rem !important; }\n  .mr-xl-4[_ngcontent-%COMP%], .mx-xl-4[_ngcontent-%COMP%] {\n    margin-right: 1.8rem !important; }\n  .mb-xl-4[_ngcontent-%COMP%], .my-xl-4[_ngcontent-%COMP%] {\n    margin-bottom: 1.8rem !important; }\n  .ml-xl-4[_ngcontent-%COMP%], .mx-xl-4[_ngcontent-%COMP%] {\n    margin-left: 1.8rem !important; }\n  .m-xl-5[_ngcontent-%COMP%] {\n    margin: 3.6rem !important; }\n  .mt-xl-5[_ngcontent-%COMP%], .my-xl-5[_ngcontent-%COMP%] {\n    margin-top: 3.6rem !important; }\n  .mr-xl-5[_ngcontent-%COMP%], .mx-xl-5[_ngcontent-%COMP%] {\n    margin-right: 3.6rem !important; }\n  .mb-xl-5[_ngcontent-%COMP%], .my-xl-5[_ngcontent-%COMP%] {\n    margin-bottom: 3.6rem !important; }\n  .ml-xl-5[_ngcontent-%COMP%], .mx-xl-5[_ngcontent-%COMP%] {\n    margin-left: 3.6rem !important; }\n  .p-xl-0[_ngcontent-%COMP%] {\n    padding: 0 !important; }\n  .pt-xl-0[_ngcontent-%COMP%], .py-xl-0[_ngcontent-%COMP%] {\n    padding-top: 0 !important; }\n  .pr-xl-0[_ngcontent-%COMP%], .px-xl-0[_ngcontent-%COMP%] {\n    padding-right: 0 !important; }\n  .pb-xl-0[_ngcontent-%COMP%], .py-xl-0[_ngcontent-%COMP%] {\n    padding-bottom: 0 !important; }\n  .pl-xl-0[_ngcontent-%COMP%], .px-xl-0[_ngcontent-%COMP%] {\n    padding-left: 0 !important; }\n  .p-xl-1[_ngcontent-%COMP%] {\n    padding: 0.3rem !important; }\n  .pt-xl-1[_ngcontent-%COMP%], .py-xl-1[_ngcontent-%COMP%] {\n    padding-top: 0.3rem !important; }\n  .pr-xl-1[_ngcontent-%COMP%], .px-xl-1[_ngcontent-%COMP%] {\n    padding-right: 0.3rem !important; }\n  .pb-xl-1[_ngcontent-%COMP%], .py-xl-1[_ngcontent-%COMP%] {\n    padding-bottom: 0.3rem !important; }\n  .pl-xl-1[_ngcontent-%COMP%], .px-xl-1[_ngcontent-%COMP%] {\n    padding-left: 0.3rem !important; }\n  .p-xl-2[_ngcontent-%COMP%] {\n    padding: 0.6rem !important; }\n  .pt-xl-2[_ngcontent-%COMP%], .py-xl-2[_ngcontent-%COMP%] {\n    padding-top: 0.6rem !important; }\n  .pr-xl-2[_ngcontent-%COMP%], .px-xl-2[_ngcontent-%COMP%] {\n    padding-right: 0.6rem !important; }\n  .pb-xl-2[_ngcontent-%COMP%], .py-xl-2[_ngcontent-%COMP%] {\n    padding-bottom: 0.6rem !important; }\n  .pl-xl-2[_ngcontent-%COMP%], .px-xl-2[_ngcontent-%COMP%] {\n    padding-left: 0.6rem !important; }\n  .p-xl-3[_ngcontent-%COMP%] {\n    padding: 1.2rem !important; }\n  .pt-xl-3[_ngcontent-%COMP%], .py-xl-3[_ngcontent-%COMP%] {\n    padding-top: 1.2rem !important; }\n  .pr-xl-3[_ngcontent-%COMP%], .px-xl-3[_ngcontent-%COMP%] {\n    padding-right: 1.2rem !important; }\n  .pb-xl-3[_ngcontent-%COMP%], .py-xl-3[_ngcontent-%COMP%] {\n    padding-bottom: 1.2rem !important; }\n  .pl-xl-3[_ngcontent-%COMP%], .px-xl-3[_ngcontent-%COMP%] {\n    padding-left: 1.2rem !important; }\n  .p-xl-4[_ngcontent-%COMP%] {\n    padding: 1.8rem !important; }\n  .pt-xl-4[_ngcontent-%COMP%], .py-xl-4[_ngcontent-%COMP%] {\n    padding-top: 1.8rem !important; }\n  .pr-xl-4[_ngcontent-%COMP%], .px-xl-4[_ngcontent-%COMP%] {\n    padding-right: 1.8rem !important; }\n  .pb-xl-4[_ngcontent-%COMP%], .py-xl-4[_ngcontent-%COMP%] {\n    padding-bottom: 1.8rem !important; }\n  .pl-xl-4[_ngcontent-%COMP%], .px-xl-4[_ngcontent-%COMP%] {\n    padding-left: 1.8rem !important; }\n  .p-xl-5[_ngcontent-%COMP%] {\n    padding: 3.6rem !important; }\n  .pt-xl-5[_ngcontent-%COMP%], .py-xl-5[_ngcontent-%COMP%] {\n    padding-top: 3.6rem !important; }\n  .pr-xl-5[_ngcontent-%COMP%], .px-xl-5[_ngcontent-%COMP%] {\n    padding-right: 3.6rem !important; }\n  .pb-xl-5[_ngcontent-%COMP%], .py-xl-5[_ngcontent-%COMP%] {\n    padding-bottom: 3.6rem !important; }\n  .pl-xl-5[_ngcontent-%COMP%], .px-xl-5[_ngcontent-%COMP%] {\n    padding-left: 3.6rem !important; }\n  .m-xl-auto[_ngcontent-%COMP%] {\n    margin: auto !important; }\n  .mt-xl-auto[_ngcontent-%COMP%], .my-xl-auto[_ngcontent-%COMP%] {\n    margin-top: auto !important; }\n  .mr-xl-auto[_ngcontent-%COMP%], .mx-xl-auto[_ngcontent-%COMP%] {\n    margin-right: auto !important; }\n  .mb-xl-auto[_ngcontent-%COMP%], .my-xl-auto[_ngcontent-%COMP%] {\n    margin-bottom: auto !important; }\n  .ml-xl-auto[_ngcontent-%COMP%], .mx-xl-auto[_ngcontent-%COMP%] {\n    margin-left: auto !important; } }\n\n.text-monospace[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\n.text-justify[_ngcontent-%COMP%] {\n  text-align: justify !important; }\n\n.text-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap !important; }\n\n.text-truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.text-left[_ngcontent-%COMP%] {\n  text-align: left !important; }\n\n.text-right[_ngcontent-%COMP%] {\n  text-align: right !important; }\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important; }\n\n@media (min-width: 576px) {\n  .text-sm-left[_ngcontent-%COMP%] {\n    text-align: left !important; }\n  .text-sm-right[_ngcontent-%COMP%] {\n    text-align: right !important; }\n  .text-sm-center[_ngcontent-%COMP%] {\n    text-align: center !important; } }\n\n@media (min-width: 768px) {\n  .text-md-left[_ngcontent-%COMP%] {\n    text-align: left !important; }\n  .text-md-right[_ngcontent-%COMP%] {\n    text-align: right !important; }\n  .text-md-center[_ngcontent-%COMP%] {\n    text-align: center !important; } }\n\n@media (min-width: 992px) {\n  .text-lg-left[_ngcontent-%COMP%] {\n    text-align: left !important; }\n  .text-lg-right[_ngcontent-%COMP%] {\n    text-align: right !important; }\n  .text-lg-center[_ngcontent-%COMP%] {\n    text-align: center !important; } }\n\n@media (min-width: 1200px) {\n  .text-xl-left[_ngcontent-%COMP%] {\n    text-align: left !important; }\n  .text-xl-right[_ngcontent-%COMP%] {\n    text-align: right !important; }\n  .text-xl-center[_ngcontent-%COMP%] {\n    text-align: center !important; } }\n\n.text-lowercase[_ngcontent-%COMP%] {\n  text-transform: lowercase !important; }\n\n.text-uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase !important; }\n\n.text-capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize !important; }\n\n.font-weight-light[_ngcontent-%COMP%] {\n  font-weight: 300 !important; }\n\n.font-weight-normal[_ngcontent-%COMP%] {\n  font-weight: 400 !important; }\n\n.font-weight-bold[_ngcontent-%COMP%] {\n  font-weight: 700 !important; }\n\n.font-italic[_ngcontent-%COMP%] {\n  font-style: italic !important; }\n\n.text-white[_ngcontent-%COMP%] {\n  color: #fff !important; }\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #3f51b5 !important; }\n\na.text-primary[_ngcontent-%COMP%]:hover, a.text-primary[_ngcontent-%COMP%]:focus {\n  color: #32408f !important; }\n\n.text-secondary[_ngcontent-%COMP%] {\n  color: #5562ad !important; }\n\na.text-secondary[_ngcontent-%COMP%]:hover, a.text-secondary[_ngcontent-%COMP%]:focus {\n  color: #434e8c !important; }\n\n.text-success[_ngcontent-%COMP%] {\n  color: #28a745 !important; }\n\na.text-success[_ngcontent-%COMP%]:hover, a.text-success[_ngcontent-%COMP%]:focus {\n  color: #1e7e34 !important; }\n\n.text-info[_ngcontent-%COMP%] {\n  color: #ccc !important; }\n\na.text-info[_ngcontent-%COMP%]:hover, a.text-info[_ngcontent-%COMP%]:focus {\n  color: #b3b3b3 !important; }\n\n.text-warning[_ngcontent-%COMP%] {\n  color: #ffc107 !important; }\n\na.text-warning[_ngcontent-%COMP%]:hover, a.text-warning[_ngcontent-%COMP%]:focus {\n  color: #d39e00 !important; }\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important; }\n\na.text-danger[_ngcontent-%COMP%]:hover, a.text-danger[_ngcontent-%COMP%]:focus {\n  color: #bd2130 !important; }\n\n.text-light[_ngcontent-%COMP%] {\n  color: #f3f3f3 !important; }\n\na.text-light[_ngcontent-%COMP%]:hover, a.text-light[_ngcontent-%COMP%]:focus {\n  color: #dadada !important; }\n\n.text-dark[_ngcontent-%COMP%] {\n  color: #151515 !important; }\n\na.text-dark[_ngcontent-%COMP%]:hover, a.text-dark[_ngcontent-%COMP%]:focus {\n  color: black !important; }\n\n.text-body[_ngcontent-%COMP%] {\n  color: #333 !important; }\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important; }\n\n.text-black-50[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5) !important; }\n\n.text-white-50[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5) !important; }\n\n.text-hide[_ngcontent-%COMP%] {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.visible[_ngcontent-%COMP%] {\n  visibility: visible !important; }\n\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden !important; }\n\n@media print {\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n    text-shadow: none !important;\n    box-shadow: none !important; }\n  a[_ngcontent-%COMP%]:not(.btn) {\n    text-decoration: underline; }\n  abbr[title][_ngcontent-%COMP%]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre[_ngcontent-%COMP%] {\n    white-space: pre-wrap !important; }\n  pre[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%] {\n    border: 1px solid #adb5bd;\n    page-break-inside: avoid; }\n  thead[_ngcontent-%COMP%] {\n    display: table-header-group; }\n  tr[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n    page-break-inside: avoid; }\n  p[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n    orphans: 3;\n    widows: 3; }\n  h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n    page-break-after: avoid; }\n  @page {\n    size: a3; }\n  body[_ngcontent-%COMP%] {\n    min-width: 992px !important; }\n  .container[_ngcontent-%COMP%] {\n    min-width: 992px !important; }\n  .navbar[_ngcontent-%COMP%] {\n    display: none; }\n  .badge[_ngcontent-%COMP%] {\n    border: 1px solid #000; }\n  .table[_ngcontent-%COMP%] {\n    border-collapse: collapse !important; }\n    .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n      background-color: #fff !important; }\n  .table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #dee2e6 !important; }\n  .table-dark[_ngcontent-%COMP%] {\n    color: inherit; }\n    .table-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-dark[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n      border-color: #dee2e6; }\n  .table[_ngcontent-%COMP%]   .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    color: inherit;\n    border-color: #dee2e6; } }\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%; }\n\nbody[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: cover; }\n\n.bg-primary[_ngcontent-%COMP%] {\n  color: #fff; }\n  .bg-primary[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: rgba(255, 255, 255, 0.8); }\n  .bg-primary[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n    color: #fff; }\n\n.bg-secondary[_ngcontent-%COMP%] {\n  color: #fff; }\n  .bg-secondary[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: rgba(255, 255, 255, 0.8); }\n  .bg-secondary[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n    color: #fff; }\n\n.bg-success[_ngcontent-%COMP%] {\n  color: #fff; }\n  .bg-success[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: rgba(255, 255, 255, 0.8); }\n  .bg-success[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n    color: #fff; }\n\n.bg-info[_ngcontent-%COMP%] {\n  color: #212529; }\n  .bg-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: rgba(33, 37, 41, 0.8); }\n  .bg-info[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n    color: #212529; }\n\n.bg-warning[_ngcontent-%COMP%] {\n  color: #212529; }\n  .bg-warning[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: rgba(33, 37, 41, 0.8); }\n  .bg-warning[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n    color: #212529; }\n\n.bg-danger[_ngcontent-%COMP%] {\n  color: #fff; }\n  .bg-danger[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: rgba(255, 255, 255, 0.8); }\n  .bg-danger[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n    color: #fff; }\n\n.bg-light[_ngcontent-%COMP%] {\n  color: #212529; }\n  .bg-light[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: rgba(33, 37, 41, 0.8); }\n  .bg-light[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n    color: #212529; }\n\n.bg-dark[_ngcontent-%COMP%] {\n  color: #fff; }\n  .bg-dark[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n    color: rgba(255, 255, 255, 0.8); }\n  .bg-dark[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n    color: #fff; }\n\n.cover[_ngcontent-%COMP%] {\n  min-height: 100%; }\n\n.inset-shadowed[_ngcontent-%COMP%] {\n  box-shadow: inset 0px 0px 45px #555; }\n\n.shadowed[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 5px #555; }\n\n.section-aquamarine[_ngcontent-%COMP%] {\n  position: relative;\n  color: white;\n  background-size: cover;\n  background-position: center; }\n  .section-aquamarine[_ngcontent-%COMP%]:before {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    content: ' ';\n    background: linear-gradient(to bottom right, rgba(63, 81, 181, 0.9) 0%, rgba(85, 98, 173, 0.9) 100%); }\n\n.section-dark[_ngcontent-%COMP%] {\n  position: relative;\n  color: #f3f3f3;\n  background-size: cover;\n  background-position: center; }\n  .section-dark[_ngcontent-%COMP%]:before {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    content: ' ';\n    background: rgba(21, 21, 21, 0.75); }\n\n.section-light[_ngcontent-%COMP%] {\n  position: relative;\n  color: #151515;\n  background-size: cover;\n  background-position: center; }\n  .section-light[_ngcontent-%COMP%]:before {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    content: ' ';\n    background: rgba(243, 243, 243, 0.75); }\n\n.section-parallax[_ngcontent-%COMP%] {\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center; }\n\n.bg-aquamarine[_ngcontent-%COMP%] {\n  background: linear-gradient(-30deg, rgba(85, 98, 173, 0.9) 0%, rgba(63, 81, 181, 0.9) 50%, rgba(63, 81, 181, 0.95) 100%);\n  color: white; }\n\n.img-thumbnail[_ngcontent-%COMP%] {\n  border: 0px;\n  padding: 10px; }\n\n.carousel[_ngcontent-%COMP%]   .carousel-caption[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  padding-bottom: 20px;\n  bottom: 0px;\n  background: linear-gradient(transparent 10%, rgba(21, 21, 21, 0.95) 100%); }\n\n.carousel[_ngcontent-%COMP%]   .carousel-control-next[_ngcontent-%COMP%], .carousel[_ngcontent-%COMP%]   .carousel-control-prev[_ngcontent-%COMP%] {\n  opacity: 0.85; }\n\n.carousel[_ngcontent-%COMP%]   .carousel-indicators[_ngcontent-%COMP%] {\n  bottom: 0px; }\n\n\n\n.navbar[_ngcontent-%COMP%] {\n  transition: background-color .5s ease-out; }\n\n.navbar-ontop[_ngcontent-%COMP%] {\n  background-color: transparent !important; }\n\n\n\n.animate-in-down[_ngcontent-%COMP%] {\n  transition: all 1.3s ease-out;\n  position: relative;\n  opacity: 1;\n  top: 0px; }\n  .animate-in-down.out-of-viewport[_ngcontent-%COMP%] {\n    top: 40px;\n    opacity: 0; }\n\n.animate-in-left[_ngcontent-%COMP%] {\n  transition: all 1.0s ease-out;\n  position: relative;\n  opacity: 1;\n  left: 0%; }\n  .animate-in-left.out-of-viewport[_ngcontent-%COMP%] {\n    opacity: 0;\n    left: -5%; }\n\n.animate-in-right[_ngcontent-%COMP%] {\n  transition: all 1.0s ease-out;\n  position: relative;\n  opacity: 1;\n  left: 0%; }\n  .animate-in-right.out-of-viewport[_ngcontent-%COMP%] {\n    opacity: 0;\n    left: 5%; }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbmRleC9pbmRleC9hcXVhbWFyaW5lLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUlDO0FBRUQ7Ozs7O0VBS0U7QUFDRjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa01BQWtNO0VBQ2xNLDZHQUE2RyxFQUFFOztBQUVqSDs7O0VBR0Usc0JBQXNCLEVBQUU7O0FBRTFCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw2Q0FBNkMsRUFBRTs7QUFLakQ7RUFDRSxjQUFjLEVBQUU7O0FBRWxCO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFFOztBQUUzQjtFQUNFLHFCQUFxQixFQUFFOztBQUV6QjtFQUNFLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsaUJBQWlCLEVBQUU7O0FBRXJCO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQixFQUFFOztBQUV6QjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBRTs7QUFFdkI7O0VBRUUsMEJBQTBCO0VBQzFCLHlDQUF5QztVQUNq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RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRLEVBQUU7RUFDVjtJQUNFLFNBQVM7SUFDVCxVQUFVLEVBQUU7O0FBRWhCO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUSxFQUFFO0VBQ1Y7SUFDRSxVQUFVO0lBQ1YsU0FBUyxFQUFFOztBQUVmO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUSxFQUFFO0VBQ1Y7SUFDRSxVQUFVO0lBQ1YsUUFBUSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4qIEFxdWFtYXJpbmUgUGluZ2VuZG8gdGVtcGxhdGUgKGh0dHBzOi8vdGVtcGxhdGVzLnBpbmdlbmRvLmNvbSlcbiogQmFzZWQgb246IEJvb3RzdHJhcCB2NC4xLjMgKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbSlcbiogQ29weXJpZ2h0IDIwMTQtMjAxOCBQaW5nZW5kbyAoaHR0cHM6Ly9waW5nZW5kby5jb20pXG4qL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjIwMCwzMDAsNDAwXCIpO1xuLyohXG4gKiBCb290c3RyYXAgdjQuMS4zIChodHRwczovL2dldGJvb3RzdHJhcC5jb20vKVxuICogQ29weXJpZ2h0IDIwMTEtMjAxOCBUaGUgQm9vdHN0cmFwIEF1dGhvcnNcbiAqIENvcHlyaWdodCAyMDExLTIwMTggVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuOnJvb3Qge1xuICAtLWJsdWU6ICMwMDdiZmY7XG4gIC0taW5kaWdvOiAjNjYxMGYyO1xuICAtLXB1cnBsZTogIzZmNDJjMTtcbiAgLS1waW5rOiAjZTgzZThjO1xuICAtLXJlZDogI2RjMzU0NTtcbiAgLS1vcmFuZ2U6ICNmZDdlMTQ7XG4gIC0teWVsbG93OiAjZmZjMTA3O1xuICAtLWdyZWVuOiAjMjhhNzQ1O1xuICAtLXRlYWw6ICMyMGM5OTc7XG4gIC0tY3lhbjogIzE3YTJiODtcbiAgLS13aGl0ZTogI2ZmZjtcbiAgLS1ncmF5OiAjNmM3NTdkO1xuICAtLWdyYXktZGFyazogIzM0M2E0MDtcbiAgLS1wcmltYXJ5OiAjM2Y1MWI1O1xuICAtLXNlY29uZGFyeTogIzU1NjJhZDtcbiAgLS1zdWNjZXNzOiAjMjhhNzQ1O1xuICAtLWluZm86ICNjY2M7XG4gIC0td2FybmluZzogI2ZmYzEwNztcbiAgLS1kYW5nZXI6ICNkYzM1NDU7XG4gIC0tbGlnaHQ6ICNmM2YzZjM7XG4gIC0tZGFyazogIzE1MTUxNTtcbiAgLS1icmVha3BvaW50LXhzOiAwO1xuICAtLWJyZWFrcG9pbnQtc206IDU3NnB4O1xuICAtLWJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xuICAtLWJyZWFrcG9pbnQtbGc6IDk5MnB4O1xuICAtLWJyZWFrcG9pbnQteGw6IDEyMDBweDtcbiAgLS1mb250LWZhbWlseS1zYW5zLXNlcmlmOiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIC0tZm9udC1mYW1pbHktbW9ub3NwYWNlOiBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlOyB9XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTsgfVxuXG5ALW1zLXZpZXdwb3J0IHtcbiAgd2lkdGg6IGRldmljZS13aWR0aDsgfVxuXG5hcnRpY2xlLCBhc2lkZSwgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtYWluLCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG5bdGFiaW5kZXg9XCItMVwiXTpmb2N1cyB7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDsgfVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07IH1cblxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cblxuYWJiclt0aXRsZV0sXG5hYmJyW2RhdGEtb3JpZ2luYWwtdGl0bGVdIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgY3Vyc29yOiBoZWxwO1xuICBib3JkZXItYm90dG9tOiAwOyB9XG5cbmFkZHJlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XG5cbm9sLFxudWwsXG5kbCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cblxub2wgb2wsXG51bCB1bCxcbm9sIHVsLFxudWwgb2wge1xuICBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbmR0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxuXG5kZCB7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBtYXJnaW4tbGVmdDogMDsgfVxuXG5ibG9ja3F1b3RlIHtcbiAgbWFyZ2luOiAwIDAgMXJlbTsgfVxuXG5kZm4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTsgfVxuXG5zdWIsXG5zdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XG5cbnN1YiB7XG4gIGJvdHRvbTogLS4yNWVtOyB9XG5cbnN1cCB7XG4gIHRvcDogLS41ZW07IH1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0czsgfVxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2Q5ZDlkOTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6aG92ZXIsIGE6bm90KFtocmVmXSk6bm90KFt0YWJpbmRleF0pOmZvY3VzIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7IH1cblxucHJlLFxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07IH1cblxucHJlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogc2Nyb2xsYmFyOyB9XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMCAwIDFyZW07IH1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXN0eWxlOiBub25lOyB9XG5cbnN2ZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbmNhcHRpb24ge1xuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjYXB0aW9uLXNpZGU6IGJvdHRvbTsgfVxuXG50aCB7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7IH1cblxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTsgfVxuXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwOyB9XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQ7XG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjsgfVxuXG5pbnB1dCxcbmJ1dHRvbixcbnNlbGVjdCxcbm9wdGdyb3VwLFxudGV4dGFyZWEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XG5cbmJ1dHRvbixcbmlucHV0IHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IH1cblxuYnV0dG9uLFxuaHRtbCBbdHlwZT1cImJ1dHRvblwiXSxcblt0eXBlPVwicmVzZXRcIl0sXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyB9XG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXN0eWxlOiBub25lOyB9XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7IH1cblxuaW5wdXRbdHlwZT1cImRhdGVcIl0sXG5pbnB1dFt0eXBlPVwidGltZVwiXSxcbmlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXSxcbmlucHV0W3R5cGU9XCJtb250aFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbGlzdGJveDsgfVxuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICByZXNpemU6IHZlcnRpY2FsOyB9XG5cbmZpZWxkc2V0IHtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDsgfVxuXG5sZWdlbmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IH1cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cblxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bzsgfVxuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cblxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgZm9udDogaW5oZXJpdDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IH1cblxub3V0cHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNixcbi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYge1xuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiBpbmhlcml0OyB9XG5cbmgxLCAuaDEge1xuICBmb250LXNpemU6IDIuNXJlbTsgfVxuXG5oMiwgLmgyIHtcbiAgZm9udC1zaXplOiAycmVtOyB9XG5cbmgzLCAuaDMge1xuICBmb250LXNpemU6IDEuNzVyZW07IH1cblxuaDQsIC5oNCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtOyB9XG5cbmg1LCAuaDUge1xuICBmb250LXNpemU6IDEuMjVyZW07IH1cblxuaDYsIC5oNiB7XG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxuXG4ubGVhZCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogMzAwOyB9XG5cbi5kaXNwbGF5LTEge1xuICBmb250LXNpemU6IDZyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7IH1cblxuLmRpc3BsYXktMiB7XG4gIGZvbnQtc2l6ZTogNS41cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS4yOyB9XG5cbi5kaXNwbGF5LTMge1xuICBmb250LXNpemU6IDQuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjsgfVxuXG4uZGlzcGxheS00IHtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7IH1cblxuaHIge1xuICBtYXJnaW4tdG9wOiAxLjJyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbnNtYWxsLFxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cblxubWFyayxcbi5tYXJrIHtcbiAgcGFkZGluZzogMC4yZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7IH1cblxuLmxpc3QtdW5zdHlsZWQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cblxuLmxpc3QtaW5saW5lIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi5saXN0LWlubGluZS1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gIC5saXN0LWlubGluZS1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtOyB9XG5cbi5pbml0aWFsaXNtIHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLmJsb2NrcXVvdGUge1xuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTsgfVxuXG4uYmxvY2txdW90ZS1mb290ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA4MCU7XG4gIGNvbG9yOiAjNmM3NTdkOyB9XG4gIC5ibG9ja3F1b3RlLWZvb3Rlcjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcMjAxNCBcXDAwQTBcIjsgfVxuXG4uaW1nLWZsdWlkIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87IH1cblxuLmltZy10aHVtYm5haWwge1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bzsgfVxuXG4uZmlndXJlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5maWd1cmUtaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xuICBsaW5lLWhlaWdodDogMTsgfVxuXG4uZmlndXJlLWNhcHRpb24ge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICM2Yzc1N2Q7IH1cblxuY29kZSB7XG4gIGZvbnQtc2l6ZTogODcuNSU7XG4gIGNvbG9yOiAjZTgzZThjO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyB9XG4gIGEgPiBjb2RlIHtcbiAgICBjb2xvcjogaW5oZXJpdDsgfVxuXG5rYmQge1xuICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xuICBmb250LXNpemU6IDg3LjUlO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0wLjFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMjUpOyB9XG4gIGtiZCBrYmQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTsgfVxuXG5wcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA4Ny41JTtcbiAgY29sb3I6ICMyMTI1Mjk7IH1cbiAgcHJlIGNvZGUge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB3b3JkLWJyZWFrOiBub3JtYWw7IH1cblxuLnByZS1zY3JvbGxhYmxlIHtcbiAgbWF4LWhlaWdodDogMzQwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bzsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogNTQwcHg7IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogNzIwcHg7IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogOTYwcHg7IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDExNDBweDsgfSB9XG5cbi5jb250YWluZXItZmx1aWQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDsgfVxuXG4ubm8tZ3V0dGVycyB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgLm5vLWd1dHRlcnMgPiAuY29sLFxuICAubm8tZ3V0dGVycyA+IFtjbGFzcyo9XCJjb2wtXCJdIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDsgfVxuXG4uY29sLTEsIC5jb2wtMiwgLmNvbC0zLCAuY29sLTQsIC5jb2wtNSwgLmNvbC02LCAuY29sLTcsIC5jb2wtOCwgLmNvbC05LCAuY29sLTEwLCAuY29sLTExLCAuY29sLTEyLCAuY29sLFxuLmNvbC1hdXRvLCAuY29sLXNtLTEsIC5jb2wtc20tMiwgLmNvbC1zbS0zLCAuY29sLXNtLTQsIC5jb2wtc20tNSwgLmNvbC1zbS02LCAuY29sLXNtLTcsIC5jb2wtc20tOCwgLmNvbC1zbS05LCAuY29sLXNtLTEwLCAuY29sLXNtLTExLCAuY29sLXNtLTEyLCAuY29sLXNtLFxuLmNvbC1zbS1hdXRvLCAuY29sLW1kLTEsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLW1kLTEwLCAuY29sLW1kLTExLCAuY29sLW1kLTEyLCAuY29sLW1kLFxuLmNvbC1tZC1hdXRvLCAuY29sLWxnLTEsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLWxnLTEwLCAuY29sLWxnLTExLCAuY29sLWxnLTEyLCAuY29sLWxnLFxuLmNvbC1sZy1hdXRvLCAuY29sLXhsLTEsIC5jb2wteGwtMiwgLmNvbC14bC0zLCAuY29sLXhsLTQsIC5jb2wteGwtNSwgLmNvbC14bC02LCAuY29sLXhsLTcsIC5jb2wteGwtOCwgLmNvbC14bC05LCAuY29sLXhsLTEwLCAuY29sLXhsLTExLCAuY29sLXhsLTEyLCAuY29sLXhsLFxuLmNvbC14bC1hdXRvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7IH1cblxuLmNvbCB7XG4gIGZsZXgtYmFzaXM6IDA7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XG5cbi5jb2wtYXV0byB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiBub25lOyB9XG5cbi5jb2wtMSB7XG4gIGZsZXg6IDAgMCA4LjMzMzMzJTtcbiAgbWF4LXdpZHRoOiA4LjMzMzMzJTsgfVxuXG4uY29sLTIge1xuICBmbGV4OiAwIDAgMTYuNjY2NjclO1xuICBtYXgtd2lkdGg6IDE2LjY2NjY3JTsgfVxuXG4uY29sLTMge1xuICBmbGV4OiAwIDAgMjUlO1xuICBtYXgtd2lkdGg6IDI1JTsgfVxuXG4uY29sLTQge1xuICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xuICBtYXgtd2lkdGg6IDMzLjMzMzMzJTsgfVxuXG4uY29sLTUge1xuICBmbGV4OiAwIDAgNDEuNjY2NjclO1xuICBtYXgtd2lkdGg6IDQxLjY2NjY3JTsgfVxuXG4uY29sLTYge1xuICBmbGV4OiAwIDAgNTAlO1xuICBtYXgtd2lkdGg6IDUwJTsgfVxuXG4uY29sLTcge1xuICBmbGV4OiAwIDAgNTguMzMzMzMlO1xuICBtYXgtd2lkdGg6IDU4LjMzMzMzJTsgfVxuXG4uY29sLTgge1xuICBmbGV4OiAwIDAgNjYuNjY2NjclO1xuICBtYXgtd2lkdGg6IDY2LjY2NjY3JTsgfVxuXG4uY29sLTkge1xuICBmbGV4OiAwIDAgNzUlO1xuICBtYXgtd2lkdGg6IDc1JTsgfVxuXG4uY29sLTEwIHtcbiAgZmxleDogMCAwIDgzLjMzMzMzJTtcbiAgbWF4LXdpZHRoOiA4My4zMzMzMyU7IH1cblxuLmNvbC0xMSB7XG4gIGZsZXg6IDAgMCA5MS42NjY2NyU7XG4gIG1heC13aWR0aDogOTEuNjY2NjclOyB9XG5cbi5jb2wtMTIge1xuICBmbGV4OiAwIDAgMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XG5cbi5vcmRlci1maXJzdCB7XG4gIG9yZGVyOiAtMTsgfVxuXG4ub3JkZXItbGFzdCB7XG4gIG9yZGVyOiAxMzsgfVxuXG4ub3JkZXItMCB7XG4gIG9yZGVyOiAwOyB9XG5cbi5vcmRlci0xIHtcbiAgb3JkZXI6IDE7IH1cblxuLm9yZGVyLTIge1xuICBvcmRlcjogMjsgfVxuXG4ub3JkZXItMyB7XG4gIG9yZGVyOiAzOyB9XG5cbi5vcmRlci00IHtcbiAgb3JkZXI6IDQ7IH1cblxuLm9yZGVyLTUge1xuICBvcmRlcjogNTsgfVxuXG4ub3JkZXItNiB7XG4gIG9yZGVyOiA2OyB9XG5cbi5vcmRlci03IHtcbiAgb3JkZXI6IDc7IH1cblxuLm9yZGVyLTgge1xuICBvcmRlcjogODsgfVxuXG4ub3JkZXItOSB7XG4gIG9yZGVyOiA5OyB9XG5cbi5vcmRlci0xMCB7XG4gIG9yZGVyOiAxMDsgfVxuXG4ub3JkZXItMTEge1xuICBvcmRlcjogMTE7IH1cblxuLm9yZGVyLTEyIHtcbiAgb3JkZXI6IDEyOyB9XG5cbi5vZmZzZXQtMSB7XG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTsgfVxuXG4ub2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclOyB9XG5cbi5vZmZzZXQtMyB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7IH1cblxuLm9mZnNldC00IHtcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTsgfVxuXG4ub2Zmc2V0LTUge1xuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclOyB9XG5cbi5vZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7IH1cblxuLm9mZnNldC03IHtcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTsgfVxuXG4ub2Zmc2V0LTgge1xuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclOyB9XG5cbi5vZmZzZXQtOSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7IH1cblxuLm9mZnNldC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7IH1cblxuLm9mZnNldC0xMSB7XG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jb2wtc20ge1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1heC13aWR0aDogMTAwJTsgfVxuICAuY29sLXNtLWF1dG8ge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogbm9uZTsgfVxuICAuY29sLXNtLTEge1xuICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMlOyB9XG4gIC5jb2wtc20tMiB7XG4gICAgZmxleDogMCAwIDE2LjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY3JTsgfVxuICAuY29sLXNtLTMge1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWF4LXdpZHRoOiAyNSU7IH1cbiAgLmNvbC1zbS00IHtcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xuICAgIG1heC13aWR0aDogMzMuMzMzMzMlOyB9XG4gIC5jb2wtc20tNSB7XG4gICAgZmxleDogMCAwIDQxLjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY3JTsgfVxuICAuY29sLXNtLTYge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7IH1cbiAgLmNvbC1zbS03IHtcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xuICAgIG1heC13aWR0aDogNTguMzMzMzMlOyB9XG4gIC5jb2wtc20tOCB7XG4gICAgZmxleDogMCAwIDY2LjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY3JTsgfVxuICAuY29sLXNtLTkge1xuICAgIGZsZXg6IDAgMCA3NSU7XG4gICAgbWF4LXdpZHRoOiA3NSU7IH1cbiAgLmNvbC1zbS0xMCB7XG4gICAgZmxleDogMCAwIDgzLjMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzJTsgfVxuICAuY29sLXNtLTExIHtcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xuICAgIG1heC13aWR0aDogOTEuNjY2NjclOyB9XG4gIC5jb2wtc20tMTIge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTsgfVxuICAub3JkZXItc20tZmlyc3Qge1xuICAgIG9yZGVyOiAtMTsgfVxuICAub3JkZXItc20tbGFzdCB7XG4gICAgb3JkZXI6IDEzOyB9XG4gIC5vcmRlci1zbS0wIHtcbiAgICBvcmRlcjogMDsgfVxuICAub3JkZXItc20tMSB7XG4gICAgb3JkZXI6IDE7IH1cbiAgLm9yZGVyLXNtLTIge1xuICAgIG9yZGVyOiAyOyB9XG4gIC5vcmRlci1zbS0zIHtcbiAgICBvcmRlcjogMzsgfVxuICAub3JkZXItc20tNCB7XG4gICAgb3JkZXI6IDQ7IH1cbiAgLm9yZGVyLXNtLTUge1xuICAgIG9yZGVyOiA1OyB9XG4gIC5vcmRlci1zbS02IHtcbiAgICBvcmRlcjogNjsgfVxuICAub3JkZXItc20tNyB7XG4gICAgb3JkZXI6IDc7IH1cbiAgLm9yZGVyLXNtLTgge1xuICAgIG9yZGVyOiA4OyB9XG4gIC5vcmRlci1zbS05IHtcbiAgICBvcmRlcjogOTsgfVxuICAub3JkZXItc20tMTAge1xuICAgIG9yZGVyOiAxMDsgfVxuICAub3JkZXItc20tMTEge1xuICAgIG9yZGVyOiAxMTsgfVxuICAub3JkZXItc20tMTIge1xuICAgIG9yZGVyOiAxMjsgfVxuICAub2Zmc2V0LXNtLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC5vZmZzZXQtc20tMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlOyB9XG4gIC5vZmZzZXQtc20tMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTsgfVxuICAub2Zmc2V0LXNtLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7IH1cbiAgLm9mZnNldC1zbS00IHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlOyB9XG4gIC5vZmZzZXQtc20tNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTsgfVxuICAub2Zmc2V0LXNtLTYge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7IH1cbiAgLm9mZnNldC1zbS03IHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMlOyB9XG4gIC5vZmZzZXQtc20tOCB7XG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTsgfVxuICAub2Zmc2V0LXNtLTkge1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7IH1cbiAgLm9mZnNldC1zbS0xMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTsgfVxuICAub2Zmc2V0LXNtLTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclOyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb2wtbWQge1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1heC13aWR0aDogMTAwJTsgfVxuICAuY29sLW1kLWF1dG8ge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogbm9uZTsgfVxuICAuY29sLW1kLTEge1xuICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMlOyB9XG4gIC5jb2wtbWQtMiB7XG4gICAgZmxleDogMCAwIDE2LjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY3JTsgfVxuICAuY29sLW1kLTMge1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWF4LXdpZHRoOiAyNSU7IH1cbiAgLmNvbC1tZC00IHtcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xuICAgIG1heC13aWR0aDogMzMuMzMzMzMlOyB9XG4gIC5jb2wtbWQtNSB7XG4gICAgZmxleDogMCAwIDQxLjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY3JTsgfVxuICAuY29sLW1kLTYge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7IH1cbiAgLmNvbC1tZC03IHtcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xuICAgIG1heC13aWR0aDogNTguMzMzMzMlOyB9XG4gIC5jb2wtbWQtOCB7XG4gICAgZmxleDogMCAwIDY2LjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY3JTsgfVxuICAuY29sLW1kLTkge1xuICAgIGZsZXg6IDAgMCA3NSU7XG4gICAgbWF4LXdpZHRoOiA3NSU7IH1cbiAgLmNvbC1tZC0xMCB7XG4gICAgZmxleDogMCAwIDgzLjMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzJTsgfVxuICAuY29sLW1kLTExIHtcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xuICAgIG1heC13aWR0aDogOTEuNjY2NjclOyB9XG4gIC5jb2wtbWQtMTIge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTsgfVxuICAub3JkZXItbWQtZmlyc3Qge1xuICAgIG9yZGVyOiAtMTsgfVxuICAub3JkZXItbWQtbGFzdCB7XG4gICAgb3JkZXI6IDEzOyB9XG4gIC5vcmRlci1tZC0wIHtcbiAgICBvcmRlcjogMDsgfVxuICAub3JkZXItbWQtMSB7XG4gICAgb3JkZXI6IDE7IH1cbiAgLm9yZGVyLW1kLTIge1xuICAgIG9yZGVyOiAyOyB9XG4gIC5vcmRlci1tZC0zIHtcbiAgICBvcmRlcjogMzsgfVxuICAub3JkZXItbWQtNCB7XG4gICAgb3JkZXI6IDQ7IH1cbiAgLm9yZGVyLW1kLTUge1xuICAgIG9yZGVyOiA1OyB9XG4gIC5vcmRlci1tZC02IHtcbiAgICBvcmRlcjogNjsgfVxuICAub3JkZXItbWQtNyB7XG4gICAgb3JkZXI6IDc7IH1cbiAgLm9yZGVyLW1kLTgge1xuICAgIG9yZGVyOiA4OyB9XG4gIC5vcmRlci1tZC05IHtcbiAgICBvcmRlcjogOTsgfVxuICAub3JkZXItbWQtMTAge1xuICAgIG9yZGVyOiAxMDsgfVxuICAub3JkZXItbWQtMTEge1xuICAgIG9yZGVyOiAxMTsgfVxuICAub3JkZXItbWQtMTIge1xuICAgIG9yZGVyOiAxMjsgfVxuICAub2Zmc2V0LW1kLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC5vZmZzZXQtbWQtMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlOyB9XG4gIC5vZmZzZXQtbWQtMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTsgfVxuICAub2Zmc2V0LW1kLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7IH1cbiAgLm9mZnNldC1tZC00IHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlOyB9XG4gIC5vZmZzZXQtbWQtNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTsgfVxuICAub2Zmc2V0LW1kLTYge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7IH1cbiAgLm9mZnNldC1tZC03IHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMlOyB9XG4gIC5vZmZzZXQtbWQtOCB7XG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTsgfVxuICAub2Zmc2V0LW1kLTkge1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7IH1cbiAgLm9mZnNldC1tZC0xMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTsgfVxuICAub2Zmc2V0LW1kLTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclOyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5jb2wtbGcge1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1heC13aWR0aDogMTAwJTsgfVxuICAuY29sLWxnLWF1dG8ge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogbm9uZTsgfVxuICAuY29sLWxnLTEge1xuICAgIGZsZXg6IDAgMCA4LjMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMlOyB9XG4gIC5jb2wtbGctMiB7XG4gICAgZmxleDogMCAwIDE2LjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY3JTsgfVxuICAuY29sLWxnLTMge1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWF4LXdpZHRoOiAyNSU7IH1cbiAgLmNvbC1sZy00IHtcbiAgICBmbGV4OiAwIDAgMzMuMzMzMzMlO1xuICAgIG1heC13aWR0aDogMzMuMzMzMzMlOyB9XG4gIC5jb2wtbGctNSB7XG4gICAgZmxleDogMCAwIDQxLjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY3JTsgfVxuICAuY29sLWxnLTYge1xuICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7IH1cbiAgLmNvbC1sZy03IHtcbiAgICBmbGV4OiAwIDAgNTguMzMzMzMlO1xuICAgIG1heC13aWR0aDogNTguMzMzMzMlOyB9XG4gIC5jb2wtbGctOCB7XG4gICAgZmxleDogMCAwIDY2LjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY3JTsgfVxuICAuY29sLWxnLTkge1xuICAgIGZsZXg6IDAgMCA3NSU7XG4gICAgbWF4LXdpZHRoOiA3NSU7IH1cbiAgLmNvbC1sZy0xMCB7XG4gICAgZmxleDogMCAwIDgzLjMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzJTsgfVxuICAuY29sLWxnLTExIHtcbiAgICBmbGV4OiAwIDAgOTEuNjY2NjclO1xuICAgIG1heC13aWR0aDogOTEuNjY2NjclOyB9XG4gIC5jb2wtbGctMTIge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTsgfVxuICAub3JkZXItbGctZmlyc3Qge1xuICAgIG9yZGVyOiAtMTsgfVxuICAub3JkZXItbGctbGFzdCB7XG4gICAgb3JkZXI6IDEzOyB9XG4gIC5vcmRlci1sZy0wIHtcbiAgICBvcmRlcjogMDsgfVxuICAub3JkZXItbGctMSB7XG4gICAgb3JkZXI6IDE7IH1cbiAgLm9yZGVyLWxnLTIge1xuICAgIG9yZGVyOiAyOyB9XG4gIC5vcmRlci1sZy0zIHtcbiAgICBvcmRlcjogMzsgfVxuICAub3JkZXItbGctNCB7XG4gICAgb3JkZXI6IDQ7IH1cbiAgLm9yZGVyLWxnLTUge1xuICAgIG9yZGVyOiA1OyB9XG4gIC5vcmRlci1sZy02IHtcbiAgICBvcmRlcjogNjsgfVxuICAub3JkZXItbGctNyB7XG4gICAgb3JkZXI6IDc7IH1cbiAgLm9yZGVyLWxnLTgge1xuICAgIG9yZGVyOiA4OyB9XG4gIC5vcmRlci1sZy05IHtcbiAgICBvcmRlcjogOTsgfVxuICAub3JkZXItbGctMTAge1xuICAgIG9yZGVyOiAxMDsgfVxuICAub3JkZXItbGctMTEge1xuICAgIG9yZGVyOiAxMTsgfVxuICAub3JkZXItbGctMTIge1xuICAgIG9yZGVyOiAxMjsgfVxuICAub2Zmc2V0LWxnLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC5vZmZzZXQtbGctMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlOyB9XG4gIC5vZmZzZXQtbGctMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTsgfVxuICAub2Zmc2V0LWxnLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7IH1cbiAgLm9mZnNldC1sZy00IHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlOyB9XG4gIC5vZmZzZXQtbGctNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTsgfVxuICAub2Zmc2V0LWxnLTYge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7IH1cbiAgLm9mZnNldC1sZy03IHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMlOyB9XG4gIC5vZmZzZXQtbGctOCB7XG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTsgfVxuICAub2Zmc2V0LWxnLTkge1xuICAgIG1hcmdpbi1sZWZ0OiA3NSU7IH1cbiAgLm9mZnNldC1sZy0xMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTsgfVxuICAub2Zmc2V0LWxnLTExIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclOyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuY29sLXhsIHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cbiAgLmNvbC14bC1hdXRvIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cbiAgLmNvbC14bC0xIHtcbiAgICBmbGV4OiAwIDAgOC4zMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4LjMzMzMzJTsgfVxuICAuY29sLXhsLTIge1xuICAgIGZsZXg6IDAgMCAxNi42NjY2NyU7XG4gICAgbWF4LXdpZHRoOiAxNi42NjY2NyU7IH1cbiAgLmNvbC14bC0zIHtcbiAgICBmbGV4OiAwIDAgMjUlO1xuICAgIG1heC13aWR0aDogMjUlOyB9XG4gIC5jb2wteGwtNCB7XG4gICAgZmxleDogMCAwIDMzLjMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzJTsgfVxuICAuY29sLXhsLTUge1xuICAgIGZsZXg6IDAgMCA0MS42NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA0MS42NjY2NyU7IH1cbiAgLmNvbC14bC02IHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlOyB9XG4gIC5jb2wteGwtNyB7XG4gICAgZmxleDogMCAwIDU4LjMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDU4LjMzMzMzJTsgfVxuICAuY29sLXhsLTgge1xuICAgIGZsZXg6IDAgMCA2Ni42NjY2NyU7XG4gICAgbWF4LXdpZHRoOiA2Ni42NjY2NyU7IH1cbiAgLmNvbC14bC05IHtcbiAgICBmbGV4OiAwIDAgNzUlO1xuICAgIG1heC13aWR0aDogNzUlOyB9XG4gIC5jb2wteGwtMTAge1xuICAgIGZsZXg6IDAgMCA4My4zMzMzMyU7XG4gICAgbWF4LXdpZHRoOiA4My4zMzMzMyU7IH1cbiAgLmNvbC14bC0xMSB7XG4gICAgZmxleDogMCAwIDkxLjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDkxLjY2NjY3JTsgfVxuICAuY29sLXhsLTEyIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IH1cbiAgLm9yZGVyLXhsLWZpcnN0IHtcbiAgICBvcmRlcjogLTE7IH1cbiAgLm9yZGVyLXhsLWxhc3Qge1xuICAgIG9yZGVyOiAxMzsgfVxuICAub3JkZXIteGwtMCB7XG4gICAgb3JkZXI6IDA7IH1cbiAgLm9yZGVyLXhsLTEge1xuICAgIG9yZGVyOiAxOyB9XG4gIC5vcmRlci14bC0yIHtcbiAgICBvcmRlcjogMjsgfVxuICAub3JkZXIteGwtMyB7XG4gICAgb3JkZXI6IDM7IH1cbiAgLm9yZGVyLXhsLTQge1xuICAgIG9yZGVyOiA0OyB9XG4gIC5vcmRlci14bC01IHtcbiAgICBvcmRlcjogNTsgfVxuICAub3JkZXIteGwtNiB7XG4gICAgb3JkZXI6IDY7IH1cbiAgLm9yZGVyLXhsLTcge1xuICAgIG9yZGVyOiA3OyB9XG4gIC5vcmRlci14bC04IHtcbiAgICBvcmRlcjogODsgfVxuICAub3JkZXIteGwtOSB7XG4gICAgb3JkZXI6IDk7IH1cbiAgLm9yZGVyLXhsLTEwIHtcbiAgICBvcmRlcjogMTA7IH1cbiAgLm9yZGVyLXhsLTExIHtcbiAgICBvcmRlcjogMTE7IH1cbiAgLm9yZGVyLXhsLTEyIHtcbiAgICBvcmRlcjogMTI7IH1cbiAgLm9mZnNldC14bC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuICAub2Zmc2V0LXhsLTEge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTsgfVxuICAub2Zmc2V0LXhsLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7IH1cbiAgLm9mZnNldC14bC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlOyB9XG4gIC5vZmZzZXQteGwtNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTsgfVxuICAub2Zmc2V0LXhsLTUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7IH1cbiAgLm9mZnNldC14bC02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlOyB9XG4gIC5vZmZzZXQteGwtNyB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTsgfVxuICAub2Zmc2V0LXhsLTgge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7IH1cbiAgLm9mZnNldC14bC05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlOyB9XG4gIC5vZmZzZXQteGwtMTAge1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7IH1cbiAgLm9mZnNldC14bC0xMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTsgfSB9XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIC50YWJsZSB0aCxcbiAgLnRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7IH1cbiAgLnRhYmxlIHRoZWFkIHRoIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2OyB9XG4gIC50YWJsZSB0Ym9keSArIHRib2R5IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2RlZTJlNjsgfVxuICAudGFibGUgLnRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4udGFibGUtc20gdGgsXG4udGFibGUtc20gdGQge1xuICBwYWRkaW5nOiAwLjNyZW07IH1cblxuLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjsgfVxuICAudGFibGUtYm9yZGVyZWQgdGgsXG4gIC50YWJsZS1ib3JkZXJlZCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjsgfVxuICAudGFibGUtYm9yZGVyZWQgdGhlYWQgdGgsXG4gIC50YWJsZS1ib3JkZXJlZCB0aGVhZCB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4OyB9XG5cbi50YWJsZS1ib3JkZXJsZXNzIHRoLFxuLnRhYmxlLWJvcmRlcmxlc3MgdGQsXG4udGFibGUtYm9yZGVybGVzcyB0aGVhZCB0aCxcbi50YWJsZS1ib3JkZXJsZXNzIHRib2R5ICsgdGJvZHkge1xuICBib3JkZXI6IDA7IH1cblxuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7IH1cblxuLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7IH1cblxuLnRhYmxlLXByaW1hcnksXG4udGFibGUtcHJpbWFyeSA+IHRoLFxuLnRhYmxlLXByaW1hcnkgPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWNlZWE7IH1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3YmRlMzsgfVxuICAudGFibGUtaG92ZXIgLnRhYmxlLXByaW1hcnk6aG92ZXIgPiB0ZCxcbiAgLnRhYmxlLWhvdmVyIC50YWJsZS1wcmltYXJ5OmhvdmVyID4gdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiN2JkZTM7IH1cblxuLnRhYmxlLXNlY29uZGFyeSxcbi50YWJsZS1zZWNvbmRhcnkgPiB0aCxcbi50YWJsZS1zZWNvbmRhcnkgPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQzZTg7IH1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVjM2UwOyB9XG4gIC50YWJsZS1ob3ZlciAudGFibGUtc2Vjb25kYXJ5OmhvdmVyID4gdGQsXG4gIC50YWJsZS1ob3ZlciAudGFibGUtc2Vjb25kYXJ5OmhvdmVyID4gdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWMzZTA7IH1cblxuLnRhYmxlLXN1Y2Nlc3MsXG4udGFibGUtc3VjY2VzcyA+IHRoLFxuLnRhYmxlLXN1Y2Nlc3MgPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjM2U2Y2I7IH1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1zdWNjZXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IxZGZiYjsgfVxuICAudGFibGUtaG92ZXIgLnRhYmxlLXN1Y2Nlc3M6aG92ZXIgPiB0ZCxcbiAgLnRhYmxlLWhvdmVyIC50YWJsZS1zdWNjZXNzOmhvdmVyID4gdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWRmYmI7IH1cblxuLnRhYmxlLWluZm8sXG4udGFibGUtaW5mbyA+IHRoLFxuLnRhYmxlLWluZm8gPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7IH1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1pbmZvOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDsgfVxuICAudGFibGUtaG92ZXIgLnRhYmxlLWluZm86aG92ZXIgPiB0ZCxcbiAgLnRhYmxlLWhvdmVyIC50YWJsZS1pbmZvOmhvdmVyID4gdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7IH1cblxuLnRhYmxlLXdhcm5pbmcsXG4udGFibGUtd2FybmluZyA+IHRoLFxuLnRhYmxlLXdhcm5pbmcgPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVlYmE7IH1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS13YXJuaW5nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZThhMTsgfVxuICAudGFibGUtaG92ZXIgLnRhYmxlLXdhcm5pbmc6aG92ZXIgPiB0ZCxcbiAgLnRhYmxlLWhvdmVyIC50YWJsZS13YXJuaW5nOmhvdmVyID4gdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU4YTE7IH1cblxuLnRhYmxlLWRhbmdlcixcbi50YWJsZS1kYW5nZXIgPiB0aCxcbi50YWJsZS1kYW5nZXIgPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWM2Y2I7IH1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1kYW5nZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFiMGI3OyB9XG4gIC50YWJsZS1ob3ZlciAudGFibGUtZGFuZ2VyOmhvdmVyID4gdGQsXG4gIC50YWJsZS1ob3ZlciAudGFibGUtZGFuZ2VyOmhvdmVyID4gdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWIwYjc7IH1cblxuLnRhYmxlLWxpZ2h0LFxuLnRhYmxlLWxpZ2h0ID4gdGgsXG4udGFibGUtbGlnaHQgPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7IH1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1saWdodDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7IH1cbiAgLnRhYmxlLWhvdmVyIC50YWJsZS1saWdodDpob3ZlciA+IHRkLFxuICAudGFibGUtaG92ZXIgLnRhYmxlLWxpZ2h0OmhvdmVyID4gdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7IH1cblxuLnRhYmxlLWRhcmssXG4udGFibGUtZGFyayA+IHRoLFxuLnRhYmxlLWRhcmsgPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7IH1cblxuLnRhYmxlLWhvdmVyIC50YWJsZS1kYXJrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwYjBiMDsgfVxuICAudGFibGUtaG92ZXIgLnRhYmxlLWRhcms6aG92ZXIgPiB0ZCxcbiAgLnRhYmxlLWhvdmVyIC50YWJsZS1kYXJrOmhvdmVyID4gdGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMGIwYjA7IH1cblxuLnRhYmxlLWFjdGl2ZSxcbi50YWJsZS1hY3RpdmUgPiB0aCxcbi50YWJsZS1hY3RpdmUgPiB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpOyB9XG5cbi50YWJsZS1ob3ZlciAudGFibGUtYWN0aXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7IH1cbiAgLnRhYmxlLWhvdmVyIC50YWJsZS1hY3RpdmU6aG92ZXIgPiB0ZCxcbiAgLnRhYmxlLWhvdmVyIC50YWJsZS1hY3RpdmU6aG92ZXIgPiB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7IH1cblxuLnRhYmxlIC50aGVhZC1kYXJrIHRoIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICBib3JkZXItY29sb3I6ICMzMjM4M2U7IH1cblxuLnRhYmxlIC50aGVhZC1saWdodCB0aCB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXItY29sb3I6ICNkZWUyZTY7IH1cblxuLnRhYmxlLWRhcmsge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7IH1cbiAgLnRhYmxlLWRhcmsgdGgsXG4gIC50YWJsZS1kYXJrIHRkLFxuICAudGFibGUtZGFyayB0aGVhZCB0aCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMzIzODNlOyB9XG4gIC50YWJsZS1kYXJrLnRhYmxlLWJvcmRlcmVkIHtcbiAgICBib3JkZXI6IDA7IH1cbiAgLnRhYmxlLWRhcmsudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpOyB9XG4gIC50YWJsZS1kYXJrLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDc1KTsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgLnRhYmxlLXJlc3BvbnNpdmUtc20ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyOyB9XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUtc20gPiAudGFibGUtYm9yZGVyZWQge1xuICAgICAgYm9yZGVyOiAwOyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC50YWJsZS1yZXNwb25zaXZlLW1kIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjsgfVxuICAgIC50YWJsZS1yZXNwb25zaXZlLW1kID4gLnRhYmxlLWJvcmRlcmVkIHtcbiAgICAgIGJvcmRlcjogMDsgfSB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAudGFibGUtcmVzcG9uc2l2ZS1sZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7IH1cbiAgICAudGFibGUtcmVzcG9uc2l2ZS1sZyA+IC50YWJsZS1ib3JkZXJlZCB7XG4gICAgICBib3JkZXI6IDA7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC50YWJsZS1yZXNwb25zaXZlLXhsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjsgfVxuICAgIC50YWJsZS1yZXNwb25zaXZlLXhsID4gLnRhYmxlLWJvcmRlcmVkIHtcbiAgICAgIGJvcmRlcjogMDsgfSB9XG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyOyB9XG4gIC50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkIHtcbiAgICBib3JkZXI6IDA7IH1cblxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAxcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICB0cmFuc2l0aW9uOiBub25lOyB9IH1cbiAgLmZvcm0tY29udHJvbDo6LW1zLWV4cGFuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwOyB9XG4gIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjOThhMmRiO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgMCAwLjJyZW0gcmdiYSg2MywgODEsIDE4MSwgMC4yNSk7IH1cbiAgLmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgb3BhY2l0eTogMTsgfVxuICAuZm9ybS1jb250cm9sOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgb3BhY2l0eTogMTsgfVxuICAuZm9ybS1jb250cm9sOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgLmZvcm0tY29udHJvbDpkaXNhYmxlZCwgLmZvcm0tY29udHJvbFtyZWFkb25seV0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gICAgb3BhY2l0eTogMTsgfVxuXG5zZWxlY3QuZm9ybS1jb250cm9sOmZvY3VzOjotbXMtdmFsdWUge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuXG4uZm9ybS1jb250cm9sLWZpbGUsXG4uZm9ybS1jb250cm9sLXJhbmdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5jb2wtZm9ybS1sYWJlbCB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDAuMzc1cmVtICsgMXB4KTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoMC4zNzVyZW0gKyAxcHgpO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7IH1cblxuLmNvbC1mb3JtLWxhYmVsLWxnIHtcbiAgcGFkZGluZy10b3A6IGNhbGMoMC41NXJlbSArIDFweCk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuNTVyZW0gKyAxcHgpO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7IH1cblxuLmNvbC1mb3JtLWxhYmVsLXNtIHtcbiAgcGFkZGluZy10b3A6IGNhbGMoMC4yNXJlbSArIDFweCk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuMjVyZW0gKyAxcHgpO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41OyB9XG5cbi5mb3JtLWNvbnRyb2wtcGxhaW50ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMC4zNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjM3NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItd2lkdGg6IDFweCAwOyB9XG4gIC5mb3JtLWNvbnRyb2wtcGxhaW50ZXh0LmZvcm0tY29udHJvbC1zbSwgLmZvcm0tY29udHJvbC1wbGFpbnRleHQuZm9ybS1jb250cm9sLWxnIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDsgfVxuXG4uZm9ybS1jb250cm9sLXNtIHtcbiAgaGVpZ2h0OiBjYWxjKDEuODEyNXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07IH1cblxuLmZvcm0tY29udHJvbC1sZyB7XG4gIGhlaWdodDogY2FsYygyLjk3NXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuNTVyZW0gMS4ycmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTsgfVxuXG5zZWxlY3QuZm9ybS1jb250cm9sW3NpemVdLCBzZWxlY3QuZm9ybS1jb250cm9sW211bHRpcGxlXSB7XG4gIGhlaWdodDogYXV0bzsgfVxuXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IGF1dG87IH1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XG5cbi5mb3JtLXRleHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTsgfVxuXG4uZm9ybS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogLTVweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7IH1cbiAgLmZvcm0tcm93ID4gLmNvbCxcbiAgLmZvcm0tcm93ID4gW2NsYXNzKj1cImNvbC1cIl0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDsgfVxuXG4uZm9ybS1jaGVjayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTsgfVxuXG4uZm9ybS1jaGVjay1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICBtYXJnaW4tbGVmdDogLTEuMjVyZW07IH1cbiAgLmZvcm0tY2hlY2staW5wdXQ6ZGlzYWJsZWQgfiAuZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgY29sb3I6ICM2Yzc1N2Q7IH1cblxuLmZvcm0tY2hlY2stbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbi5mb3JtLWNoZWNrLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTsgfVxuICAuZm9ybS1jaGVjay1pbmxpbmUgLmZvcm0tY2hlY2staW5wdXQge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMzEyNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuXG4udmFsaWQtZmVlZGJhY2sge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGNvbG9yOiAjMjhhNzQ1OyB9XG5cbi52YWxpZC10b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHotaW5kZXg6IDU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIG1hcmdpbi10b3A6IC4xcmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MCwgMTY3LCA2OSwgMC45KTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTsgfVxuXG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOnZhbGlkLCAuZm9ybS1jb250cm9sLmlzLXZhbGlkLCAud2FzLXZhbGlkYXRlZFxuLmN1c3RvbS1zZWxlY3Q6dmFsaWQsXG4uY3VzdG9tLXNlbGVjdC5pcy12YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTsgfVxuICAud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOnZhbGlkOmZvY3VzLCAuZm9ybS1jb250cm9sLmlzLXZhbGlkOmZvY3VzLCAud2FzLXZhbGlkYXRlZFxuICAuY3VzdG9tLXNlbGVjdDp2YWxpZDpmb2N1cyxcbiAgLmN1c3RvbS1zZWxlY3QuaXMtdmFsaWQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC4yNSk7IH1cbiAgLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDp2YWxpZCB+IC52YWxpZC1mZWVkYmFjayxcbiAgLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDp2YWxpZCB+IC52YWxpZC10b29sdGlwLCAuZm9ybS1jb250cm9sLmlzLXZhbGlkIH4gLnZhbGlkLWZlZWRiYWNrLFxuICAuZm9ybS1jb250cm9sLmlzLXZhbGlkIH4gLnZhbGlkLXRvb2x0aXAsIC53YXMtdmFsaWRhdGVkXG4gIC5jdXN0b20tc2VsZWN0OnZhbGlkIH4gLnZhbGlkLWZlZWRiYWNrLFxuICAud2FzLXZhbGlkYXRlZFxuICAuY3VzdG9tLXNlbGVjdDp2YWxpZCB+IC52YWxpZC10b29sdGlwLFxuICAuY3VzdG9tLXNlbGVjdC5pcy12YWxpZCB+IC52YWxpZC1mZWVkYmFjayxcbiAgLmN1c3RvbS1zZWxlY3QuaXMtdmFsaWQgfiAudmFsaWQtdG9vbHRpcCB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cblxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbC1maWxlOnZhbGlkIH4gLnZhbGlkLWZlZWRiYWNrLFxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbC1maWxlOnZhbGlkIH4gLnZhbGlkLXRvb2x0aXAsIC5mb3JtLWNvbnRyb2wtZmlsZS5pcy12YWxpZCB+IC52YWxpZC1mZWVkYmFjayxcbi5mb3JtLWNvbnRyb2wtZmlsZS5pcy12YWxpZCB+IC52YWxpZC10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY2hlY2staW5wdXQ6dmFsaWQgfiAuZm9ybS1jaGVjay1sYWJlbCwgLmZvcm0tY2hlY2staW5wdXQuaXMtdmFsaWQgfiAuZm9ybS1jaGVjay1sYWJlbCB7XG4gIGNvbG9yOiAjMjhhNzQ1OyB9XG5cbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNoZWNrLWlucHV0OnZhbGlkIH4gLnZhbGlkLWZlZWRiYWNrLFxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY2hlY2staW5wdXQ6dmFsaWQgfiAudmFsaWQtdG9vbHRpcCwgLmZvcm0tY2hlY2staW5wdXQuaXMtdmFsaWQgfiAudmFsaWQtZmVlZGJhY2ssXG4uZm9ybS1jaGVjay1pbnB1dC5pcy12YWxpZCB+IC52YWxpZC10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OnZhbGlkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsLCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQuaXMtdmFsaWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICBjb2xvcjogIzI4YTc0NTsgfVxuICAud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6dmFsaWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLXZhbGlkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MWRkOGE7IH1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OnZhbGlkIH4gLnZhbGlkLWZlZWRiYWNrLFxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OnZhbGlkIH4gLnZhbGlkLXRvb2x0aXAsIC5jdXN0b20tY29udHJvbC1pbnB1dC5pcy12YWxpZCB+IC52YWxpZC1mZWVkYmFjayxcbi5jdXN0b20tY29udHJvbC1pbnB1dC5pcy12YWxpZCB+IC52YWxpZC10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OnZhbGlkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLXZhbGlkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNGNlNTc7IH1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OnZhbGlkOmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1pbnB1dC5pcy12YWxpZDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHdoaXRlLCAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC4yNSk7IH1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1maWxlLWlucHV0OnZhbGlkIH4gLmN1c3RvbS1maWxlLWxhYmVsLCAuY3VzdG9tLWZpbGUtaW5wdXQuaXMtdmFsaWQgfiAuY3VzdG9tLWZpbGUtbGFiZWwge1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7IH1cbiAgLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1maWxlLWlucHV0OnZhbGlkIH4gLmN1c3RvbS1maWxlLWxhYmVsOjphZnRlciwgLmN1c3RvbS1maWxlLWlucHV0LmlzLXZhbGlkIH4gLmN1c3RvbS1maWxlLWxhYmVsOjphZnRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyB9XG5cbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tZmlsZS1pbnB1dDp2YWxpZCB+IC52YWxpZC1mZWVkYmFjayxcbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tZmlsZS1pbnB1dDp2YWxpZCB+IC52YWxpZC10b29sdGlwLCAuY3VzdG9tLWZpbGUtaW5wdXQuaXMtdmFsaWQgfiAudmFsaWQtZmVlZGJhY2ssXG4uY3VzdG9tLWZpbGUtaW5wdXQuaXMtdmFsaWQgfiAudmFsaWQtdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tZmlsZS1pbnB1dDp2YWxpZDpmb2N1cyB+IC5jdXN0b20tZmlsZS1sYWJlbCwgLmN1c3RvbS1maWxlLWlucHV0LmlzLXZhbGlkOmZvY3VzIH4gLmN1c3RvbS1maWxlLWxhYmVsIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIDAuMjUpOyB9XG5cbi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogODAlO1xuICBjb2xvcjogI2RjMzU0NTsgfVxuXG4uaW52YWxpZC10b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHotaW5kZXg6IDU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIG1hcmdpbi10b3A6IC4xcmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDUzLCA2OSwgMC45KTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTsgfVxuXG4ud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQsIC5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCwgLndhcy12YWxpZGF0ZWRcbi5jdXN0b20tc2VsZWN0OmludmFsaWQsXG4uY3VzdG9tLXNlbGVjdC5pcy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1OyB9XG4gIC53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZDpmb2N1cywgLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkOmZvY3VzLCAud2FzLXZhbGlkYXRlZFxuICAuY3VzdG9tLXNlbGVjdDppbnZhbGlkOmZvY3VzLFxuICAuY3VzdG9tLXNlbGVjdC5pcy1pbnZhbGlkOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjIwLCA1MywgNjksIDAuMjUpOyB9XG4gIC53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxuICAud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQgfiAuaW52YWxpZC10b29sdGlwLCAuZm9ybS1jb250cm9sLmlzLWludmFsaWQgfiAuaW52YWxpZC1mZWVkYmFjayxcbiAgLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCwgLndhcy12YWxpZGF0ZWRcbiAgLmN1c3RvbS1zZWxlY3Q6aW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxuICAud2FzLXZhbGlkYXRlZFxuICAuY3VzdG9tLXNlbGVjdDppbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCxcbiAgLmN1c3RvbS1zZWxlY3QuaXMtaW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxuICAuY3VzdG9tLXNlbGVjdC5pcy1pbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cblxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbC1maWxlOmludmFsaWQgfiAuaW52YWxpZC1mZWVkYmFjayxcbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2wtZmlsZTppbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCwgLmZvcm0tY29udHJvbC1maWxlLmlzLWludmFsaWQgfiAuaW52YWxpZC1mZWVkYmFjayxcbi5mb3JtLWNvbnRyb2wtZmlsZS5pcy1pbnZhbGlkIH4gLmludmFsaWQtdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNoZWNrLWlucHV0OmludmFsaWQgfiAuZm9ybS1jaGVjay1sYWJlbCwgLmZvcm0tY2hlY2staW5wdXQuaXMtaW52YWxpZCB+IC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgY29sb3I6ICNkYzM1NDU7IH1cblxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY2hlY2staW5wdXQ6aW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY2hlY2staW5wdXQ6aW52YWxpZCB+IC5pbnZhbGlkLXRvb2x0aXAsIC5mb3JtLWNoZWNrLWlucHV0LmlzLWludmFsaWQgfiAuaW52YWxpZC1mZWVkYmFjayxcbi5mb3JtLWNoZWNrLWlucHV0LmlzLWludmFsaWQgfiAuaW52YWxpZC10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OmludmFsaWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWwsIC5jdXN0b20tY29udHJvbC1pbnB1dC5pcy1pbnZhbGlkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgY29sb3I6ICNkYzM1NDU7IH1cbiAgLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OmludmFsaWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSwgLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLWludmFsaWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmYTJhOTsgfVxuXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6aW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OmludmFsaWQgfiAuaW52YWxpZC10b29sdGlwLCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQuaXMtaW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxuLmN1c3RvbS1jb250cm9sLWlucHV0LmlzLWludmFsaWQgfiAuaW52YWxpZC10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1jb250cm9sLWlucHV0OmludmFsaWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQuaXMtaW52YWxpZDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQ2MDZkOyB9XG5cbi53YXMtdmFsaWRhdGVkIC5jdXN0b20tY29udHJvbC1pbnB1dDppbnZhbGlkOmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsIC5jdXN0b20tY29udHJvbC1pbnB1dC5pcy1pbnZhbGlkOmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggd2hpdGUsIDAgMCAwIDAuMnJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjI1KTsgfVxuXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWZpbGUtaW5wdXQ6aW52YWxpZCB+IC5jdXN0b20tZmlsZS1sYWJlbCwgLmN1c3RvbS1maWxlLWlucHV0LmlzLWludmFsaWQgfiAuY3VzdG9tLWZpbGUtbGFiZWwge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDU7IH1cbiAgLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1maWxlLWlucHV0OmludmFsaWQgfiAuY3VzdG9tLWZpbGUtbGFiZWw6OmFmdGVyLCAuY3VzdG9tLWZpbGUtaW5wdXQuaXMtaW52YWxpZCB+IC5jdXN0b20tZmlsZS1sYWJlbDo6YWZ0ZXIge1xuICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgfVxuXG4ud2FzLXZhbGlkYXRlZCAuY3VzdG9tLWZpbGUtaW5wdXQ6aW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1maWxlLWlucHV0OmludmFsaWQgfiAuaW52YWxpZC10b29sdGlwLCAuY3VzdG9tLWZpbGUtaW5wdXQuaXMtaW52YWxpZCB+IC5pbnZhbGlkLWZlZWRiYWNrLFxuLmN1c3RvbS1maWxlLWlucHV0LmlzLWludmFsaWQgfiAuaW52YWxpZC10b29sdGlwIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLndhcy12YWxpZGF0ZWQgLmN1c3RvbS1maWxlLWlucHV0OmludmFsaWQ6Zm9jdXMgfiAuY3VzdG9tLWZpbGUtbGFiZWwsIC5jdXN0b20tZmlsZS1pbnB1dC5pcy1pbnZhbGlkOmZvY3VzIH4gLmN1c3RvbS1maWxlLWxhYmVsIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjIwLCA1MywgNjksIDAuMjUpOyB9XG5cbi5mb3JtLWlubGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmZvcm0taW5saW5lIC5mb3JtLWNoZWNrIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAuZm9ybS1pbmxpbmUgbGFiZWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cbiAgICAuZm9ybS1pbmxpbmUgLmZvcm0tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gICAgLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2wge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2wtcGxhaW50ZXh0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAsXG4gICAgLmZvcm0taW5saW5lIC5jdXN0b20tc2VsZWN0IHtcbiAgICAgIHdpZHRoOiBhdXRvOyB9XG4gICAgLmZvcm0taW5saW5lIC5mb3JtLWNoZWNrIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHBhZGRpbmctbGVmdDogMDsgfVxuICAgIC5mb3JtLWlubGluZSAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgICAuZm9ybS1pbmxpbmUgLmN1c3RvbS1jb250cm9sIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgIC5mb3JtLWlubGluZSAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfSB9XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICAgLmJ0biB7XG4gICAgICB0cmFuc2l0aW9uOiBub25lOyB9IH1cbiAgLmJ0bjpob3ZlciwgLmJ0bjpmb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gIC5idG46Zm9jdXMsIC5idG4uZm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNjMsIDgxLCAxODEsIDAuMjUpOyB9XG4gIC5idG4uZGlzYWJsZWQsIC5idG46ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNjU7XG4gICAgYm94LXNoYWRvdzogbm9uZTsgfVxuICAuYnRuOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmJ0bjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG46bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7IH1cbiAgICAuYnRuOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNjMsIDgxLCAxODEsIDAuMjUpLCBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7IH1cblxuYS5idG4uZGlzYWJsZWQsXG5maWVsZHNldDpkaXNhYmxlZCBhLmJ0biB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpOyB9XG4gIC5idG4tcHJpbWFyeTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDQ5OTtcbiAgICBib3JkZXItY29sb3I6ICMzMjQwOGY7IH1cbiAgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnkuZm9jdXMge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgMCAwLjJyZW0gcmdiYSg2MywgODEsIDE4MSwgMC41KTsgfVxuICAuYnRuLXByaW1hcnkuZGlzYWJsZWQsIC5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgICBib3JkZXItY29sb3I6ICMzZjUxYjU7IH1cbiAgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbiAgLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0MDhmO1xuICAgIGJvcmRlci1jb2xvcjogIzJmM2M4NjsgfVxuICAgIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4gICAgLnNob3cgPiAuYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTI1KSwgMCAwIDAgMC4ycmVtIHJnYmEoNjMsIDgxLCAxODEsIDAuNSk7IH1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NjJhZDtcbiAgYm9yZGVyLWNvbG9yOiAjNTU2MmFkO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTsgfVxuICAuYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NTM5NDtcbiAgICBib3JkZXItY29sb3I6ICM0MzRlOGM7IH1cbiAgLmJ0bi1zZWNvbmRhcnk6Zm9jdXMsIC5idG4tc2Vjb25kYXJ5LmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDAgMC4ycmVtIHJnYmEoODUsIDk4LCAxNzMsIDAuNSk7IH1cbiAgLmJ0bi1zZWNvbmRhcnkuZGlzYWJsZWQsIC5idG4tc2Vjb25kYXJ5OmRpc2FibGVkIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU2MmFkO1xuICAgIGJvcmRlci1jb2xvcjogIzU1NjJhZDsgfVxuICAuYnRuLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbiAgLnNob3cgPiAuYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzRlOGM7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2Y0OTgzOyB9XG4gICAgLmJ0bi1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4gICAgLnNob3cgPiAuYnRuLXNlY29uZGFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpLCAwIDAgMCAwLjJyZW0gcmdiYSg4NSwgOTgsIDE3MywgMC41KTsgfVxuXG4uYnRuLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTsgfVxuICAuYnRuLXN1Y2Nlc3M6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTg4Mzg7XG4gICAgYm9yZGVyLWNvbG9yOiAjMWU3ZTM0OyB9XG4gIC5idG4tc3VjY2Vzczpmb2N1cywgLmJ0bi1zdWNjZXNzLmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIDAuNSk7IH1cbiAgLmJ0bi1zdWNjZXNzLmRpc2FibGVkLCAuYnRuLXN1Y2Nlc3M6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1OyB9XG4gIC5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4gIC5zaG93ID4gLmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlN2UzNDtcbiAgICBib3JkZXItY29sb3I6ICMxYzc0MzA7IH1cbiAgICAuYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxuICAgIC5zaG93ID4gLmJ0bi1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSksIDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAwLjUpOyB9XG5cbi5idG4taW5mbyB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpOyB9XG4gIC5idG4taW5mbzpob3ZlciB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjliOTtcbiAgICBib3JkZXItY29sb3I6ICNiM2IzYjM7IH1cbiAgLmJ0bi1pbmZvOmZvY3VzLCAuYnRuLWluZm8uZm9jdXMge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgMCAwLjJyZW0gcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjUpOyB9XG4gIC5idG4taW5mby5kaXNhYmxlZCwgLmJ0bi1pbmZvOmRpc2FibGVkIHtcbiAgICBjb2xvcjogIzIxMjUyOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIGJvcmRlci1jb2xvcjogI2NjYzsgfVxuICAuYnRuLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuICAuc2hvdyA+IC5idG4taW5mby5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiM2IzYjM7XG4gICAgYm9yZGVyLWNvbG9yOiAjYWNhY2FjOyB9XG4gICAgLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbiAgICAuc2hvdyA+IC5idG4taW5mby5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpLCAwIDAgMCAwLjJyZW0gcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjUpOyB9XG5cbi5idG4td2FybmluZyB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpOyB9XG4gIC5idG4td2FybmluZzpob3ZlciB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYTgwMDtcbiAgICBib3JkZXItY29sb3I6ICNkMzllMDA7IH1cbiAgLmJ0bi13YXJuaW5nOmZvY3VzLCAuYnRuLXdhcm5pbmcuZm9jdXMge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsIDE5MywgNywgMC41KTsgfVxuICAuYnRuLXdhcm5pbmcuZGlzYWJsZWQsIC5idG4td2FybmluZzpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbiAgICBib3JkZXItY29sb3I6ICNmZmMxMDc7IH1cbiAgLmJ0bi13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbiAgLnNob3cgPiAuYnRuLXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogIzIxMjUyOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDM5ZTAwO1xuICAgIGJvcmRlci1jb2xvcjogI2M2OTUwMDsgfVxuICAgIC5idG4td2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4td2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4gICAgLnNob3cgPiAuYnRuLXdhcm5pbmcuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTI1KSwgMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCAxOTMsIDcsIDAuNSk7IH1cblxuLmJ0bi1kYW5nZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTsgfVxuICAuYnRuLWRhbmdlcjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M4MjMzMztcbiAgICBib3JkZXItY29sb3I6ICNiZDIxMzA7IH1cbiAgLmJ0bi1kYW5nZXI6Zm9jdXMsIC5idG4tZGFuZ2VyLmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDAgMC4ycmVtIHJnYmEoMjIwLCA1MywgNjksIDAuNSk7IH1cbiAgLmJ0bi1kYW5nZXIuZGlzYWJsZWQsIC5idG4tZGFuZ2VyOmRpc2FibGVkIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTsgfVxuICAuYnRuLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tZGFuZ2VyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbiAgLnNob3cgPiAuYnRuLWRhbmdlci5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7XG4gICAgYm9yZGVyLWNvbG9yOiAjYjIxZjJkOyB9XG4gICAgLmJ0bi1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4gICAgLnNob3cgPiAuYnRuLWRhbmdlci5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpLCAwIDAgMCAwLjJyZW0gcmdiYSgyMjAsIDUzLCA2OSwgMC41KTsgfVxuXG4uYnRuLWxpZ2h0IHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGJvcmRlci1jb2xvcjogI2YzZjNmMztcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7IH1cbiAgLmJ0bi1saWdodDpob3ZlciB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICBib3JkZXItY29sb3I6ICNkYWRhZGE7IH1cbiAgLmJ0bi1saWdodDpmb2N1cywgLmJ0bi1saWdodC5mb2N1cyB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpLCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCAwIDAuMnJlbSByZ2JhKDI0MywgMjQzLCAyNDMsIDAuNSk7IH1cbiAgLmJ0bi1saWdodC5kaXNhYmxlZCwgLmJ0bi1saWdodDpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBib3JkZXItY29sb3I6ICNmM2YzZjM7IH1cbiAgLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuICAuc2hvdyA+IC5idG4tbGlnaHQuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogIzIxMjUyOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmF5OyB9XG4gICAgLmJ0bi1saWdodDpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxuICAgIC5zaG93ID4gLmJ0bi1saWdodC5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpLCAwIDAgMCAwLjJyZW0gcmdiYSgyNDMsIDI0MywgMjQzLCAwLjUpOyB9XG5cbi5idG4tZGFyayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xuICBib3JkZXItY29sb3I6ICMxNTE1MTU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpOyB9XG4gIC5idG4tZGFyazpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDIwMjtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrOyB9XG4gIC5idG4tZGFyazpmb2N1cywgLmJ0bi1kYXJrLmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSksIDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDAgMC4ycmVtIHJnYmEoMjEsIDIxLCAyMSwgMC41KTsgfVxuICAuYnRuLWRhcmsuZGlzYWJsZWQsIC5idG4tZGFyazpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcbiAgICBib3JkZXItY29sb3I6ICMxNTE1MTU7IH1cbiAgLmJ0bi1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbiAgLnNob3cgPiAuYnRuLWRhcmsuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItY29sb3I6IGJsYWNrOyB9XG4gICAgLmJ0bi1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbiAgICAuc2hvdyA+IC5idG4tZGFyay5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpLCAwIDAgMCAwLjJyZW0gcmdiYSgyMSwgMjEsIDIxLCAwLjUpOyB9XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgY29sb3I6ICMzZjUxYjU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXItY29sb3I6ICMzZjUxYjU7IH1cbiAgLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1OyB9XG4gIC5idG4tb3V0bGluZS1wcmltYXJ5OmZvY3VzLCAuYnRuLW91dGxpbmUtcHJpbWFyeS5mb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNjMsIDgxLCAxODEsIDAuNSk7IH1cbiAgLmJ0bi1vdXRsaW5lLXByaW1hcnkuZGlzYWJsZWQsIC5idG4tb3V0bGluZS1wcmltYXJ5OmRpc2FibGVkIHtcbiAgICBjb2xvcjogIzNmNTFiNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAuYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZSxcbiAgLnNob3cgPiAuYnRuLW91dGxpbmUtcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1OyB9XG4gICAgLmJ0bi1vdXRsaW5lLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLW91dGxpbmUtcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG4gICAgLnNob3cgPiAuYnRuLW91dGxpbmUtcHJpbWFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpLCAwIDAgMCAwLjJyZW0gcmdiYSg2MywgODEsIDE4MSwgMC41KTsgfVxuXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICM1NTYyYWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXItY29sb3I6ICM1NTYyYWQ7IH1cbiAgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NjJhZDtcbiAgICBib3JkZXItY29sb3I6ICM1NTYyYWQ7IH1cbiAgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpmb2N1cywgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5mb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoODUsIDk4LCAxNzMsIDAuNSk7IH1cbiAgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeS5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpkaXNhYmxlZCB7XG4gICAgY29sb3I6ICM1NTYyYWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgLmJ0bi1vdXRsaW5lLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tb3V0bGluZS1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuICAuc2hvdyA+IC5idG4tb3V0bGluZS1zZWNvbmRhcnkuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU2MmFkO1xuICAgIGJvcmRlci1jb2xvcjogIzU1NjJhZDsgfVxuICAgIC5idG4tb3V0bGluZS1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbiAgICAuc2hvdyA+IC5idG4tb3V0bGluZS1zZWNvbmRhcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTI1KSwgMCAwIDAgMC4ycmVtIHJnYmEoODUsIDk4LCAxNzMsIDAuNSk7IH1cblxuLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xuICBjb2xvcjogIzI4YTc0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTsgfVxuICAuYnRuLW91dGxpbmUtc3VjY2Vzczpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7IH1cbiAgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6Zm9jdXMsIC5idG4tb3V0bGluZS1zdWNjZXNzLmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg0MCwgMTY3LCA2OSwgMC41KTsgfVxuICAuYnRuLW91dGxpbmUtc3VjY2Vzcy5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAjMjhhNzQ1O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIC5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXN1Y2Nlc3M6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuICAuc2hvdyA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7IH1cbiAgICAuYnRuLW91dGxpbmUtc3VjY2Vzczpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tb3V0bGluZS1zdWNjZXNzOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbiAgICAuc2hvdyA+IC5idG4tb3V0bGluZS1zdWNjZXNzLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSksIDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAwLjUpOyB9XG5cbi5idG4tb3V0bGluZS1pbmZvIHtcbiAgY29sb3I6ICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXItY29sb3I6ICNjY2M7IH1cbiAgLmJ0bi1vdXRsaW5lLWluZm86aG92ZXIge1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjOyB9XG4gIC5idG4tb3V0bGluZS1pbmZvOmZvY3VzLCAuYnRuLW91dGxpbmUtaW5mby5mb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjA0LCAyMDQsIDIwNCwgMC41KTsgfVxuICAuYnRuLW91dGxpbmUtaW5mby5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLWluZm86ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIC5idG4tb3V0bGluZS1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWluZm86bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuICAuc2hvdyA+IC5idG4tb3V0bGluZS1pbmZvLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICBib3JkZXItY29sb3I6ICNjY2M7IH1cbiAgICAuYnRuLW91dGxpbmUtaW5mbzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tb3V0bGluZS1pbmZvOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbiAgICAuc2hvdyA+IC5idG4tb3V0bGluZS1pbmZvLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSksIDAgMCAwIDAuMnJlbSByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNSk7IH1cblxuLmJ0bi1vdXRsaW5lLXdhcm5pbmcge1xuICBjb2xvcjogI2ZmYzEwNztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNzsgfVxuICAuYnRuLW91dGxpbmUtd2FybmluZzpob3ZlciB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbiAgICBib3JkZXItY29sb3I6ICNmZmMxMDc7IH1cbiAgLmJ0bi1vdXRsaW5lLXdhcm5pbmc6Zm9jdXMsIC5idG4tb3V0bGluZS13YXJuaW5nLmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsIDE5MywgNywgMC41KTsgfVxuICAuYnRuLW91dGxpbmUtd2FybmluZy5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLXdhcm5pbmc6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAjZmZjMTA3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIC5idG4tb3V0bGluZS13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLXdhcm5pbmc6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuICAuc2hvdyA+IC5idG4tb3V0bGluZS13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbiAgICBib3JkZXItY29sb3I6ICNmZmMxMDc7IH1cbiAgICAuYnRuLW91dGxpbmUtd2FybmluZzpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tb3V0bGluZS13YXJuaW5nOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbiAgICAuc2hvdyA+IC5idG4tb3V0bGluZS13YXJuaW5nLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSksIDAgMCAwIDAuMnJlbSByZ2JhKDI1NSwgMTkzLCA3LCAwLjUpOyB9XG5cbi5idG4tb3V0bGluZS1kYW5nZXIge1xuICBjb2xvcjogI2RjMzU0NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTsgfVxuICAuYnRuLW91dGxpbmUtZGFuZ2VyOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTsgfVxuICAuYnRuLW91dGxpbmUtZGFuZ2VyOmZvY3VzLCAuYnRuLW91dGxpbmUtZGFuZ2VyLmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMjAsIDUzLCA2OSwgMC41KTsgfVxuICAuYnRuLW91dGxpbmUtZGFuZ2VyLmRpc2FibGVkLCAuYnRuLW91dGxpbmUtZGFuZ2VyOmRpc2FibGVkIHtcbiAgICBjb2xvcjogI2RjMzU0NTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAuYnRuLW91dGxpbmUtZGFuZ2VyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4gIC5zaG93ID4gLmJ0bi1vdXRsaW5lLWRhbmdlci5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1OyB9XG4gICAgLmJ0bi1vdXRsaW5lLWRhbmdlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tb3V0bGluZS1kYW5nZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLFxuICAgIC5zaG93ID4gLmJ0bi1vdXRsaW5lLWRhbmdlci5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpLCAwIDAgMCAwLjJyZW0gcmdiYSgyMjAsIDUzLCA2OSwgMC41KTsgfVxuXG4uYnRuLW91dGxpbmUtbGlnaHQge1xuICBjb2xvcjogI2YzZjNmMztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2YzZjNmMzsgfVxuICAuYnRuLW91dGxpbmUtbGlnaHQ6aG92ZXIge1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjNmM2YzOyB9XG4gIC5idG4tb3V0bGluZS1saWdodDpmb2N1cywgLmJ0bi1vdXRsaW5lLWxpZ2h0LmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNDMsIDI0MywgMjQzLCAwLjUpOyB9XG4gIC5idG4tb3V0bGluZS1saWdodC5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLWxpZ2h0OmRpc2FibGVkIHtcbiAgICBjb2xvcjogI2YzZjNmMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAuYnRuLW91dGxpbmUtbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLW91dGxpbmUtbGlnaHQ6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuICAuc2hvdyA+IC5idG4tb3V0bGluZS1saWdodC5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgYm9yZGVyLWNvbG9yOiAjZjNmM2YzOyB9XG4gICAgLmJ0bi1vdXRsaW5lLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1vdXRsaW5lLWxpZ2h0Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbiAgICAuc2hvdyA+IC5idG4tb3V0bGluZS1saWdodC5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpLCAwIDAgMCAwLjJyZW0gcmdiYSgyNDMsIDI0MywgMjQzLCAwLjUpOyB9XG5cbi5idG4tb3V0bGluZS1kYXJrIHtcbiAgY29sb3I6ICMxNTE1MTU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXItY29sb3I6ICMxNTE1MTU7IH1cbiAgLmJ0bi1vdXRsaW5lLWRhcms6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTUxNTE1OyB9XG4gIC5idG4tb3V0bGluZS1kYXJrOmZvY3VzLCAuYnRuLW91dGxpbmUtZGFyay5mb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjEsIDIxLCAyMSwgMC41KTsgfVxuICAuYnRuLW91dGxpbmUtZGFyay5kaXNhYmxlZCwgLmJ0bi1vdXRsaW5lLWRhcms6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAjMTUxNTE1O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIC5idG4tb3V0bGluZS1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSwgLmJ0bi1vdXRsaW5lLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuICAuc2hvdyA+IC5idG4tb3V0bGluZS1kYXJrLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcbiAgICBib3JkZXItY29sb3I6ICMxNTE1MTU7IH1cbiAgICAuYnRuLW91dGxpbmUtZGFyazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tb3V0bGluZS1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cyxcbiAgICAuc2hvdyA+IC5idG4tb3V0bGluZS1kYXJrLmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSksIDAgMCAwIDAuMnJlbSByZ2JhKDIxLCAyMSwgMjEsIDAuNSk7IH1cblxuLmJ0bi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAuYnRuLWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjZDlkOWQ5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgLmJ0bi1saW5rOmZvY3VzLCAuYnRuLWxpbmsuZm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTsgfVxuICAuYnRuLWxpbms6ZGlzYWJsZWQsIC5idG4tbGluay5kaXNhYmxlZCB7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmJ0bi1sZywgLmJ0bi1ncm91cC1sZyA+IC5idG4ge1xuICBwYWRkaW5nOiAwLjU1cmVtIDEuMnJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07IH1cblxuLmJ0bi1zbSwgLmJ0bi1ncm91cC1zbSA+IC5idG4ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtOyB9XG5cbi5idG4tYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7IH1cbiAgLmJ0bi1ibG9jayArIC5idG4tYmxvY2sge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLmJ0bi1ibG9jayxcbmlucHV0W3R5cGU9XCJyZXNldFwiXS5idG4tYmxvY2ssXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLmJ0bi1ibG9jayB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5mYWRlIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAgIC5mYWRlIHtcbiAgICAgIHRyYW5zaXRpb246IG5vbmU7IH0gfVxuICAuZmFkZTpub3QoLnNob3cpIHtcbiAgICBvcGFjaXR5OiAwOyB9XG5cbi5jb2xsYXBzZTpub3QoLnNob3cpIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4uY29sbGFwc2luZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zNXMgZWFzZTsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICAgLmNvbGxhcHNpbmcge1xuICAgICAgdHJhbnNpdGlvbjogbm9uZTsgfSB9XG5cbi5kcm9wdXAsXG4uZHJvcHJpZ2h0LFxuLmRyb3Bkb3duLFxuLmRyb3BsZWZ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogMC4yNTVlbTtcbiAgdmVydGljYWwtYWxpZ246IDAuMjU1ZW07XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci10b3A6IDAuM2VtIHNvbGlkO1xuICBib3JkZXItcmlnaHQ6IDAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgdHJhbnNwYXJlbnQ7IH1cblxuLmRyb3Bkb3duLXRvZ2dsZTplbXB0eTo6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogMDsgfVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgbWluLXdpZHRoOiAxMHJlbTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIG1hcmdpbjogMC4xMjVyZW0gMCAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNzUpOyB9XG5cbi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87IH1cblxuLmRyb3B1cCAuZHJvcGRvd24tbWVudSB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjEyNXJlbTsgfVxuXG4uZHJvcHVwIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogMC4yNTVlbTtcbiAgdmVydGljYWwtYWxpZ246IDAuMjU1ZW07XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1yaWdodDogMC4zZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDAuM2VtIHNvbGlkO1xuICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgdHJhbnNwYXJlbnQ7IH1cblxuLmRyb3B1cCAuZHJvcGRvd24tdG9nZ2xlOmVtcHR5OjphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAwOyB9XG5cbi5kcm9wcmlnaHQgLmRyb3Bkb3duLW1lbnUge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogMC4xMjVyZW07IH1cblxuLmRyb3ByaWdodCAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDAuMjU1ZW07XG4gIHZlcnRpY2FsLWFsaWduOiAwLjI1NWVtO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXItdG9wOiAwLjNlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiAwLjNlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDAuM2VtIHNvbGlkOyB9XG5cbi5kcm9wcmlnaHQgLmRyb3Bkb3duLXRvZ2dsZTplbXB0eTo6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogMDsgfVxuXG4uZHJvcHJpZ2h0IC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgdmVydGljYWwtYWxpZ246IDA7IH1cblxuLmRyb3BsZWZ0IC5kcm9wZG93bi1tZW51IHtcbiAgdG9wOiAwO1xuICByaWdodDogMTAwJTtcbiAgbGVmdDogYXV0bztcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjEyNXJlbTsgfVxuXG4uZHJvcGxlZnQgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1NWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogMC4yNTVlbTtcbiAgY29udGVudDogXCJcIjsgfVxuXG4uZHJvcGxlZnQgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5kcm9wbGVmdCAuZHJvcGRvd24tdG9nZ2xlOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMC4yNTVlbTtcbiAgdmVydGljYWwtYWxpZ246IDAuMjU1ZW07XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci10b3A6IDAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDAuM2VtIHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAwLjNlbSBzb2xpZCB0cmFuc3BhcmVudDsgfVxuXG4uZHJvcGxlZnQgLmRyb3Bkb3duLXRvZ2dsZTplbXB0eTo6YWZ0ZXIge1xuICBtYXJnaW4tbGVmdDogMDsgfVxuXG4uZHJvcGxlZnQgLmRyb3Bkb3duLXRvZ2dsZTo6YmVmb3JlIHtcbiAgdmVydGljYWwtYWxpZ246IDA7IH1cblxuLmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePVwidG9wXCJdLCAuZHJvcGRvd24tbWVudVt4LXBsYWNlbWVudF49XCJyaWdodFwiXSwgLmRyb3Bkb3duLW1lbnVbeC1wbGFjZW1lbnRePVwiYm90dG9tXCJdLCAuZHJvcGRvd24tbWVudVt4LXBsYWNlbWVudF49XCJsZWZ0XCJdIHtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvdHRvbTogYXV0bzsgfVxuXG4uZHJvcGRvd24tZGl2aWRlciB7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luOiAwLjZyZW0gMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7IH1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMS41cmVtO1xuICBjbGVhcjogYm90aDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7IH1cbiAgLmRyb3Bkb3duLWl0ZW06aG92ZXIsIC5kcm9wZG93bi1pdGVtOmZvY3VzIHtcbiAgICBjb2xvcjogIzE2MTgxYjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTsgfVxuICAuZHJvcGRvd24taXRlbS5hY3RpdmUsIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IH1cbiAgLmRyb3Bkb3duLWl0ZW0uZGlzYWJsZWQsIC5kcm9wZG93bi1pdGVtOmRpc2FibGVkIHtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4uZHJvcGRvd24tbWVudS5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmRyb3Bkb3duLWhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4uZHJvcGRvd24taXRlbS10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMS41cmVtO1xuICBjb2xvcjogIzIxMjUyOTsgfVxuXG4uYnRuLWdyb3VwLFxuLmJ0bi1ncm91cC12ZXJ0aWNhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cbiAgLmJ0bi1ncm91cCA+IC5idG4sXG4gIC5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogMCAxIGF1dG87IH1cbiAgICAuYnRuLWdyb3VwID4gLmJ0bjpob3ZlcixcbiAgICAuYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bjpob3ZlciB7XG4gICAgICB6LWluZGV4OiAxOyB9XG4gICAgLmJ0bi1ncm91cCA+IC5idG46Zm9jdXMsIC5idG4tZ3JvdXAgPiAuYnRuOmFjdGl2ZSwgLmJ0bi1ncm91cCA+IC5idG4uYWN0aXZlLFxuICAgIC5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuOmZvY3VzLFxuICAgIC5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuOmFjdGl2ZSxcbiAgICAuYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi5hY3RpdmUge1xuICAgICAgei1pbmRleDogMTsgfVxuICAuYnRuLWdyb3VwIC5idG4gKyAuYnRuLFxuICAuYnRuLWdyb3VwIC5idG4gKyAuYnRuLWdyb3VwLFxuICAuYnRuLWdyb3VwIC5idG4tZ3JvdXAgKyAuYnRuLFxuICAuYnRuLWdyb3VwIC5idG4tZ3JvdXAgKyAuYnRuLWdyb3VwLFxuICAuYnRuLWdyb3VwLXZlcnRpY2FsIC5idG4gKyAuYnRuLFxuICAuYnRuLWdyb3VwLXZlcnRpY2FsIC5idG4gKyAuYnRuLWdyb3VwLFxuICAuYnRuLWdyb3VwLXZlcnRpY2FsIC5idG4tZ3JvdXAgKyAuYnRuLFxuICAuYnRuLWdyb3VwLXZlcnRpY2FsIC5idG4tZ3JvdXAgKyAuYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tbGVmdDogLTFweDsgfVxuXG4uYnRuLXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAuYnRuLXRvb2xiYXIgLmlucHV0LWdyb3VwIHtcbiAgICB3aWR0aDogYXV0bzsgfVxuXG4uYnRuLWdyb3VwID4gLmJ0bjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwOyB9XG5cbi5idG4tZ3JvdXAgPiAuYnRuOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpLFxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXA6bm90KDpsYXN0LWNoaWxkKSA+IC5idG4ge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IH1cblxuLmJ0bi1ncm91cCA+IC5idG46bm90KDpmaXJzdC1jaGlsZCksXG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG4ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwOyB9XG5cbi5kcm9wZG93bi10b2dnbGUtc3BsaXQge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07IH1cbiAgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdDo6YWZ0ZXIsXG4gIC5kcm9wdXAgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdDo6YWZ0ZXIsXG4gIC5kcm9wcmlnaHQgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdDo6YWZ0ZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC5kcm9wbGVmdCAuZHJvcGRvd24tdG9nZ2xlLXNwbGl0OjpiZWZvcmUge1xuICAgIG1hcmdpbi1yaWdodDogMDsgfVxuXG4uYnRuLXNtICsgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdCwgLmJ0bi1ncm91cC1zbSA+IC5idG4gKyAuZHJvcGRvd24tdG9nZ2xlLXNwbGl0IHtcbiAgcGFkZGluZy1yaWdodDogMC4zNzVyZW07XG4gIHBhZGRpbmctbGVmdDogMC4zNzVyZW07IH1cblxuLmJ0bi1sZyArIC5kcm9wZG93bi10b2dnbGUtc3BsaXQsIC5idG4tZ3JvdXAtbGcgPiAuYnRuICsgLmRyb3Bkb3duLXRvZ2dsZS1zcGxpdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuOXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjlyZW07IH1cblxuLmJ0bi1ncm91cC5zaG93IC5kcm9wZG93bi10b2dnbGUge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7IH1cbiAgLmJ0bi1ncm91cC5zaG93IC5kcm9wZG93bi10b2dnbGUuYnRuLWxpbmsge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLmJ0bi1ncm91cC12ZXJ0aWNhbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuYnRuLWdyb3VwLXZlcnRpY2FsIC5idG4sXG4gIC5idG4tZ3JvdXAtdmVydGljYWwgLmJ0bi1ncm91cCB7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4gKyAuYnRuLFxuICAuYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0biArIC5idG4tZ3JvdXAsXG4gIC5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwICsgLmJ0bixcbiAgLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXAgKyAuYnRuLWdyb3VwIHtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpLFxuICAuYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bi1ncm91cDpub3QoOmxhc3QtY2hpbGQpID4gLmJ0biB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDsgfVxuICAuYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0bjpub3QoOmZpcnN0LWNoaWxkKSxcbiAgLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwOyB9XG5cbi5idG4tZ3JvdXAtdG9nZ2xlID4gLmJ0bixcbi5idG4tZ3JvdXAtdG9nZ2xlID4gLmJ0bi1ncm91cCA+IC5idG4ge1xuICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gIC5idG4tZ3JvdXAtdG9nZ2xlID4gLmJ0biBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4gIC5idG4tZ3JvdXAtdG9nZ2xlID4gLmJ0biBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG4gIC5idG4tZ3JvdXAtdG9nZ2xlID4gLmJ0bi1ncm91cCA+IC5idG4gaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuICAuYnRuLWdyb3VwLXRvZ2dsZSA+IC5idG4tZ3JvdXAgPiAuYnRuIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmlucHV0LWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB3aWR0aDogMTAwJTsgfVxuICAuaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sLFxuICAuaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLXNlbGVjdCxcbiAgLmlucHV0LWdyb3VwID4gLmN1c3RvbS1maWxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgd2lkdGg6IDElO1xuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cbiAgICAuaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sICsgLmZvcm0tY29udHJvbCxcbiAgICAuaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sICsgLmN1c3RvbS1zZWxlY3QsXG4gICAgLmlucHV0LWdyb3VwID4gLmZvcm0tY29udHJvbCArIC5jdXN0b20tZmlsZSxcbiAgICAuaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLXNlbGVjdCArIC5mb3JtLWNvbnRyb2wsXG4gICAgLmlucHV0LWdyb3VwID4gLmN1c3RvbS1zZWxlY3QgKyAuY3VzdG9tLXNlbGVjdCxcbiAgICAuaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLXNlbGVjdCArIC5jdXN0b20tZmlsZSxcbiAgICAuaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLWZpbGUgKyAuZm9ybS1jb250cm9sLFxuICAgIC5pbnB1dC1ncm91cCA+IC5jdXN0b20tZmlsZSArIC5jdXN0b20tc2VsZWN0LFxuICAgIC5pbnB1dC1ncm91cCA+IC5jdXN0b20tZmlsZSArIC5jdXN0b20tZmlsZSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTFweDsgfVxuICAuaW5wdXQtZ3JvdXAgPiAuZm9ybS1jb250cm9sOmZvY3VzLFxuICAuaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLXNlbGVjdDpmb2N1cyxcbiAgLmlucHV0LWdyb3VwID4gLmN1c3RvbS1maWxlIC5jdXN0b20tZmlsZS1pbnB1dDpmb2N1cyB+IC5jdXN0b20tZmlsZS1sYWJlbCB7XG4gICAgei1pbmRleDogMzsgfVxuICAuaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLWZpbGUgLmN1c3RvbS1maWxlLWlucHV0OmZvY3VzIHtcbiAgICB6LWluZGV4OiA0OyB9XG4gIC5pbnB1dC1ncm91cCA+IC5mb3JtLWNvbnRyb2w6bm90KDpsYXN0LWNoaWxkKSxcbiAgLmlucHV0LWdyb3VwID4gLmN1c3RvbS1zZWxlY3Q6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IH1cbiAgLmlucHV0LWdyb3VwID4gLmZvcm0tY29udHJvbDpub3QoOmZpcnN0LWNoaWxkKSxcbiAgLmlucHV0LWdyb3VwID4gLmN1c3RvbS1zZWxlY3Q6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDsgfVxuICAuaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLWZpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgIC5pbnB1dC1ncm91cCA+IC5jdXN0b20tZmlsZTpub3QoOmxhc3QtY2hpbGQpIC5jdXN0b20tZmlsZS1sYWJlbCxcbiAgICAuaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLWZpbGU6bm90KDpsYXN0LWNoaWxkKSAuY3VzdG9tLWZpbGUtbGFiZWw6OmFmdGVyIHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IH1cbiAgICAuaW5wdXQtZ3JvdXAgPiAuY3VzdG9tLWZpbGU6bm90KDpmaXJzdC1jaGlsZCkgLmN1c3RvbS1maWxlLWxhYmVsIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwOyB9XG5cbi5pbnB1dC1ncm91cC1wcmVwZW5kLFxuLmlucHV0LWdyb3VwLWFwcGVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7IH1cbiAgLmlucHV0LWdyb3VwLXByZXBlbmQgLmJ0bixcbiAgLmlucHV0LWdyb3VwLWFwcGVuZCAuYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjsgfVxuICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCAuYnRuICsgLmJ0bixcbiAgLmlucHV0LWdyb3VwLXByZXBlbmQgLmJ0biArIC5pbnB1dC1ncm91cC10ZXh0LFxuICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCArIC5pbnB1dC1ncm91cC10ZXh0LFxuICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCArIC5idG4sXG4gIC5pbnB1dC1ncm91cC1hcHBlbmQgLmJ0biArIC5idG4sXG4gIC5pbnB1dC1ncm91cC1hcHBlbmQgLmJ0biArIC5pbnB1dC1ncm91cC10ZXh0LFxuICAuaW5wdXQtZ3JvdXAtYXBwZW5kIC5pbnB1dC1ncm91cC10ZXh0ICsgLmlucHV0LWdyb3VwLXRleHQsXG4gIC5pbnB1dC1ncm91cC1hcHBlbmQgLmlucHV0LWdyb3VwLXRleHQgKyAuYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogLTFweDsgfVxuXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XG4gIG1hcmdpbi1yaWdodDogLTFweDsgfVxuXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7IH1cblxuLmlucHV0LWdyb3VwLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cbiAgLmlucHV0LWdyb3VwLXRleHQgaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuICAuaW5wdXQtZ3JvdXAtdGV4dCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIG1hcmdpbi10b3A6IDA7IH1cblxuLmlucHV0LWdyb3VwLWxnID4gLmZvcm0tY29udHJvbCxcbi5pbnB1dC1ncm91cC1sZyA+IC5pbnB1dC1ncm91cC1wcmVwZW5kID4gLmlucHV0LWdyb3VwLXRleHQsXG4uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYXBwZW5kID4gLmlucHV0LWdyb3VwLXRleHQsXG4uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtcHJlcGVuZCA+IC5idG4sXG4uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYXBwZW5kID4gLmJ0biB7XG4gIGhlaWdodDogY2FsYygyLjk3NXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuNTVyZW0gMS4ycmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTsgfVxuXG4uaW5wdXQtZ3JvdXAtc20gPiAuZm9ybS1jb250cm9sLFxuLmlucHV0LWdyb3VwLXNtID4gLmlucHV0LWdyb3VwLXByZXBlbmQgPiAuaW5wdXQtZ3JvdXAtdGV4dCxcbi5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1hcHBlbmQgPiAuaW5wdXQtZ3JvdXAtdGV4dCxcbi5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1wcmVwZW5kID4gLmJ0bixcbi5pbnB1dC1ncm91cC1zbSA+IC5pbnB1dC1ncm91cC1hcHBlbmQgPiAuYnRuIHtcbiAgaGVpZ2h0OiBjYWxjKDEuODEyNXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07IH1cblxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLXByZXBlbmQgPiAuYnRuLFxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLXByZXBlbmQgPiAuaW5wdXQtZ3JvdXAtdGV4dCxcbi5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1hcHBlbmQ6bm90KDpsYXN0LWNoaWxkKSA+IC5idG4sXG4uaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtYXBwZW5kOm5vdCg6bGFzdC1jaGlsZCkgPiAuaW5wdXQtZ3JvdXAtdGV4dCxcbi5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1hcHBlbmQ6bGFzdC1jaGlsZCA+IC5idG46bm90KDpsYXN0LWNoaWxkKTpub3QoLmRyb3Bkb3duLXRvZ2dsZSksXG4uaW5wdXQtZ3JvdXAgPiAuaW5wdXQtZ3JvdXAtYXBwZW5kOmxhc3QtY2hpbGQgPiAuaW5wdXQtZ3JvdXAtdGV4dDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwOyB9XG5cbi5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1hcHBlbmQgPiAuYnRuLFxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLWFwcGVuZCA+IC5pbnB1dC1ncm91cC10ZXh0LFxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLXByZXBlbmQ6bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuLFxuLmlucHV0LWdyb3VwID4gLmlucHV0LWdyb3VwLXByZXBlbmQ6bm90KDpmaXJzdC1jaGlsZCkgPiAuaW5wdXQtZ3JvdXAtdGV4dCxcbi5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1wcmVwZW5kOmZpcnN0LWNoaWxkID4gLmJ0bjpub3QoOmZpcnN0LWNoaWxkKSxcbi5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1wcmVwZW5kOmZpcnN0LWNoaWxkID4gLmlucHV0LWdyb3VwLXRleHQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwOyB9XG5cbi5jdXN0b20tY29udHJvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07IH1cblxuLmN1c3RvbS1jb250cm9sLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07IH1cblxuLmN1c3RvbS1jb250cm9sLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMDsgfVxuICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cbiAgLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3VzIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB3aGl0ZSwgMCAwIDAgMC4ycmVtIHJnYmEoNjMsIDgxLCAxODEsIDAuMjUpOyB9XG4gIC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlYzVlODtcbiAgICBib3gtc2hhZG93OiBub25lOyB9XG4gIC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gICAgY29sb3I6ICM2Yzc1N2Q7IH1cbiAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmOyB9XG5cbi5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuICAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMC4yNXJlbTtcbiAgICBsZWZ0OiAtMS41cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMXJlbTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAuMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cbiAgLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMC4yNXJlbTtcbiAgICBsZWZ0OiAtMS41cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMXJlbTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7IH1cblxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cblxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGZpbGw9JyUyM2ZmZicgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2IDIuOTc0IDcuMjUgOCAyLjE5M3onLyUzRSUzQy9zdmclM0VcIik7IH1cblxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6aW5kZXRlcm1pbmF0ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxuXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDppbmRldGVybWluYXRlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNCclM0UlM0NwYXRoIHN0cm9rZT0nJTIzZmZmJyBkPSdNMCAyaDQnLyUzRSUzQy9zdmclM0VcIik7IH1cblxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgODEsIDE4MSwgMC41KTsgfVxuXG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpkaXNhYmxlZDppbmRldGVybWluYXRlIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA4MSwgMTgxLCAwLjUpOyB9XG5cbi5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cblxuLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuXG4uY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzRSUzQ2NpcmNsZSByPSczJyBmaWxsPSclMjNmZmYnLyUzRSUzQy9zdmclM0VcIik7IH1cblxuLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgODEsIDE4MSwgMC41KTsgfVxuXG4uY3VzdG9tLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygyLjI1cmVtICsgMnB4KTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMS43NXJlbSAwLjM3NXJlbSAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDUnJTNFJTNDcGF0aCBmaWxsPSclMjMzNDNhNDAnIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLyUzRSUzQy9zdmclM0VcIikgbm8tcmVwZWF0IHJpZ2h0IDAuNzVyZW0gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDhweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgLmN1c3RvbS1zZWxlY3Q6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzk4YTJkYjtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDAgMC4ycmVtIHJnYmEoMTUyLCAxNjIsIDIxOSwgMC41KTsgfVxuICAgIC5jdXN0b20tc2VsZWN0OmZvY3VzOjotbXMtdmFsdWUge1xuICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG4gIC5jdXN0b20tc2VsZWN0W211bHRpcGxlXSwgLmN1c3RvbS1zZWxlY3Rbc2l6ZV06bm90KFtzaXplPVwiMVwiXSkge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IH1cbiAgLmN1c3RvbS1zZWxlY3Q6ZGlzYWJsZWQge1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7IH1cbiAgLmN1c3RvbS1zZWxlY3Q6Oi1tcy1leHBhbmQge1xuICAgIG9wYWNpdHk6IDA7IH1cblxuLmN1c3RvbS1zZWxlY3Qtc20ge1xuICBoZWlnaHQ6IGNhbGMoMS44MTI1cmVtICsgMnB4KTtcbiAgcGFkZGluZy10b3A6IDAuMzc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zNzVyZW07XG4gIGZvbnQtc2l6ZTogNzUlOyB9XG5cbi5jdXN0b20tc2VsZWN0LWxnIHtcbiAgaGVpZ2h0OiBjYWxjKDIuOTc1cmVtICsgMnB4KTtcbiAgcGFkZGluZy10b3A6IDAuMzc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4zNzVyZW07XG4gIGZvbnQtc2l6ZTogMTI1JTsgfVxuXG4uY3VzdG9tLWZpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygyLjI1cmVtICsgMnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4uY3VzdG9tLWZpbGUtaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMi4yNXJlbSArIDJweCk7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMDsgfVxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWZpbGUtbGFiZWwge1xuICAgIGJvcmRlci1jb2xvcjogIzk4YTJkYjtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg2MywgODEsIDE4MSwgMC4yNSk7IH1cbiAgICAuY3VzdG9tLWZpbGUtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWZpbGUtbGFiZWw6OmFmdGVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzk4YTJkYjsgfVxuICAuY3VzdG9tLWZpbGUtaW5wdXQ6ZGlzYWJsZWQgfiAuY3VzdG9tLWZpbGUtbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7IH1cbiAgLmN1c3RvbS1maWxlLWlucHV0OmxhbmcoZW4pIH4gLmN1c3RvbS1maWxlLWxhYmVsOjphZnRlciB7XG4gICAgY29udGVudDogXCJCcm93c2VcIjsgfVxuXG4uY3VzdG9tLWZpbGUtbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogY2FsYygyLjI1cmVtICsgMnB4KTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTsgfVxuICAuY3VzdG9tLWZpbGUtbGFiZWw6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAzO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMi4yNXJlbTtcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgY29udGVudDogXCJCcm93c2VcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAuMjVyZW0gMC4yNXJlbSAwOyB9XG5cbi5jdXN0b20tcmFuZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAuY3VzdG9tLXJhbmdlOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgLmN1c3RvbS1yYW5nZTpmb2N1czo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHdoaXRlLCAwIDAgMCAwLjJyZW0gcmdiYSg2MywgODEsIDE4MSwgMC4yNSk7IH1cbiAgICAuY3VzdG9tLXJhbmdlOmZvY3VzOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB3aGl0ZSwgMCAwIDAgMC4ycmVtIHJnYmEoNjMsIDgxLCAxODEsIDAuMjUpOyB9XG4gICAgLmN1c3RvbS1yYW5nZTpmb2N1czo6LW1zLXRodW1iIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB3aGl0ZSwgMCAwIDAgMC4ycmVtIHJnYmEoNjMsIDgxLCAxODEsIDAuMjUpOyB9XG4gIC5jdXN0b20tcmFuZ2U6Oi1tb3otZm9jdXMtb3V0ZXIge1xuICAgIGJvcmRlcjogMDsgfVxuICAuY3VzdG9tLXJhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IC0wLjI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYm94LXNoYWRvdzogMCAwLjFyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICAgICAuY3VzdG9tLXJhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7IH0gfVxuICAgIC5jdXN0b20tcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVjNWU4OyB9XG4gIC5jdXN0b20tcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMC4yNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAuY3VzdG9tLXJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICB3aWR0aDogMXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDAuMXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgICAgIC5jdXN0b20tcmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgICAgICB0cmFuc2l0aW9uOiBub25lOyB9IH1cbiAgICAuY3VzdG9tLXJhbmdlOjotbW96LXJhbmdlLXRodW1iOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVjNWU4OyB9XG4gIC5jdXN0b20tcmFuZ2U6Oi1tb3otcmFuZ2UtdHJhY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMC41cmVtO1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwLjI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG4gIC5jdXN0b20tcmFuZ2U6Oi1tcy10aHVtYiB7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMC4xcmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICBhcHBlYXJhbmNlOiBub25lOyB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAgICAgLmN1c3RvbS1yYW5nZTo6LW1zLXRodW1iIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTsgfSB9XG4gICAgLmN1c3RvbS1yYW5nZTo6LW1zLXRodW1iOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVjNWU4OyB9XG4gIC5jdXN0b20tcmFuZ2U6Oi1tcy10cmFjayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwLjVyZW07XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci13aWR0aDogMC41cmVtO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMC4yNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuICAuY3VzdG9tLXJhbmdlOjotbXMtZmlsbC1sb3dlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtOyB9XG4gIC5jdXN0b20tcmFuZ2U6Oi1tcy1maWxsLXVwcGVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtOyB9XG5cbi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuLmN1c3RvbS1maWxlLWxhYmVsLFxuLmN1c3RvbS1zZWxlY3Qge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAgIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuICAgIC5jdXN0b20tZmlsZS1sYWJlbCxcbiAgICAuY3VzdG9tLXNlbGVjdCB7XG4gICAgICB0cmFuc2l0aW9uOiBub25lOyB9IH1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTsgfVxuICAubmF2LWxpbms6aG92ZXIsIC5uYXYtbGluazpmb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gIC5uYXYtbGluay5kaXNhYmxlZCB7XG4gICAgY29sb3I6ICM2Yzc1N2Q7IH1cblxuLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7IH1cbiAgLm5hdi10YWJzIC5uYXYtaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDsgfVxuICAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtOyB9XG4gICAgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlciwgLm5hdi10YWJzIC5uYXYtbGluazpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICNlOWVjZWYgI2U5ZWNlZiAjZGVlMmU2OyB9XG4gICAgLm5hdi10YWJzIC5uYXYtbGluay5kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSxcbiAgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayB7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2ICNkZWUyZTYgd2hpdGU7IH1cbiAgLm5hdi10YWJzIC5kcm9wZG93bi1tZW51IHtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7IH1cblxuLm5hdi1waWxscyAubmF2LWxpbmsge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtOyB9XG5cbi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSxcbi5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuXG4ubmF2LWZpbGwgLm5hdi1pdGVtIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ubmF2LWp1c3RpZmllZCAubmF2LWl0ZW0ge1xuICBmbGV4LWJhc2lzOiAwO1xuICBmbGV4LWdyb3c6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4udGFiLWNvbnRlbnQgPiAudGFiLXBhbmUge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi50YWItY29udGVudCA+IC5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4ubmF2YmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC42cmVtIDEuMnJlbTsgfVxuICAubmF2YmFyID4gLmNvbnRhaW5lcixcbiAgLm5hdmJhciA+IC5jb250YWluZXItZmx1aWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XG5cbi5uYXZiYXItYnJhbmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAwLjMxMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjMxMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMS4ycmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gIC5uYXZiYXItYnJhbmQ6aG92ZXIsIC5uYXZiYXItYnJhbmQ6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4ubmF2YmFyLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwOyB9XG4gIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGZsb2F0OiBub25lOyB9XG5cbi5uYXZiYXItdGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTsgfVxuXG4ubmF2YmFyLWNvbGxhcHNlIHtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgZmxleC1ncm93OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtOyB9XG4gIC5uYXZiYXItdG9nZ2xlcjpob3ZlciwgLm5hdmJhci10b2dnbGVyOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgLm5hdmJhci10b2dnbGVyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLm5hdmJhci10b2dnbGVyLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxLjVlbTtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAubmF2YmFyLWV4cGFuZC1zbSA+IC5jb250YWluZXIsXG4gIC5uYXZiYXItZXhwYW5kLXNtID4gLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLm5hdmJhci1leHBhbmQtc20ge1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgICAubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLW5hdiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG4gICAgICAubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgICAgLm5hdmJhci1leHBhbmQtc20gLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTsgfVxuICAgIC5uYXZiYXItZXhwYW5kLXNtID4gLmNvbnRhaW5lcixcbiAgICAubmF2YmFyLWV4cGFuZC1zbSA+IC5jb250YWluZXItZmx1aWQge1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7IH1cbiAgICAubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIGZsZXgtYmFzaXM6IGF1dG87IH1cbiAgICAubmF2YmFyLWV4cGFuZC1zbSAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAubmF2YmFyLWV4cGFuZC1tZCA+IC5jb250YWluZXIsXG4gIC5uYXZiYXItZXhwYW5kLW1kID4gLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhci1leHBhbmQtbWQge1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgICAubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG4gICAgICAubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgICAgLm5hdmJhci1leHBhbmQtbWQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTsgfVxuICAgIC5uYXZiYXItZXhwYW5kLW1kID4gLmNvbnRhaW5lcixcbiAgICAubmF2YmFyLWV4cGFuZC1tZCA+IC5jb250YWluZXItZmx1aWQge1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7IH1cbiAgICAubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIGZsZXgtYmFzaXM6IGF1dG87IH1cbiAgICAubmF2YmFyLWV4cGFuZC1tZCAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAubmF2YmFyLWV4cGFuZC1sZyA+IC5jb250YWluZXIsXG4gIC5uYXZiYXItZXhwYW5kLWxnID4gLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm5hdmJhci1leHBhbmQtbGcge1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XG4gICAgICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgICAgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTsgfVxuICAgIC5uYXZiYXItZXhwYW5kLWxnID4gLmNvbnRhaW5lcixcbiAgICAubmF2YmFyLWV4cGFuZC1sZyA+IC5jb250YWluZXItZmx1aWQge1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7IH1cbiAgICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIGZsZXgtYmFzaXM6IGF1dG87IH1cbiAgICAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLXRvZ2dsZXIge1xuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLm5hdmJhci1leHBhbmQteGwgPiAuY29udGFpbmVyLFxuICAubmF2YmFyLWV4cGFuZC14bCA+IC5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwOyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubmF2YmFyLWV4cGFuZC14bCB7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAgIC5uYXZiYXItZXhwYW5kLXhsIC5uYXZiYXItbmF2IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cbiAgICAgIC5uYXZiYXItZXhwYW5kLXhsIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gICAgICAubmF2YmFyLWV4cGFuZC14bCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtOyB9XG4gICAgLm5hdmJhci1leHBhbmQteGwgPiAuY29udGFpbmVyLFxuICAgIC5uYXZiYXItZXhwYW5kLXhsID4gLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDsgfVxuICAgIC5uYXZiYXItZXhwYW5kLXhsIC5uYXZiYXItY29sbGFwc2Uge1xuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgZmxleC1iYXNpczogYXV0bzsgfVxuICAgIC5uYXZiYXItZXhwYW5kLXhsIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuLm5hdmJhci1leHBhbmQge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAubmF2YmFyLWV4cGFuZCA+IC5jb250YWluZXIsXG4gIC5uYXZiYXItZXhwYW5kID4gLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cbiAgLm5hdmJhci1leHBhbmQgLm5hdmJhci1uYXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cbiAgICAubmF2YmFyLWV4cGFuZCAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAubmF2YmFyLWV4cGFuZCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07IH1cbiAgLm5hdmJhci1leHBhbmQgPiAuY29udGFpbmVyLFxuICAubmF2YmFyLWV4cGFuZCA+IC5jb250YWluZXItZmx1aWQge1xuICAgIGZsZXgtd3JhcDogbm93cmFwOyB9XG4gIC5uYXZiYXItZXhwYW5kIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4LWJhc2lzOiBhdXRvOyB9XG4gIC5uYXZiYXItZXhwYW5kIC5uYXZiYXItdG9nZ2xlciB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpOyB9XG4gIC5uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZDpob3ZlciwgLm5hdmJhci1saWdodCAubmF2YmFyLWJyYW5kOmZvY3VzIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpOyB9XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciwgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7IH1cbiAgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuZGlzYWJsZWQge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7IH1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAuc2hvdyA+IC5uYXYtbGluayxcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLmFjdGl2ZSA+IC5uYXYtbGluayxcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLnNob3csXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpOyB9XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cblxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDAsIDAsIDAsIDAuNSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM0UlM0Mvc3ZnJTNFXCIpOyB9XG5cbi5uYXZiYXItbGlnaHQgLm5hdmJhci10ZXh0IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuICAubmF2YmFyLWxpZ2h0IC5uYXZiYXItdGV4dCBhIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpOyB9XG4gICAgLm5hdmJhci1saWdodCAubmF2YmFyLXRleHQgYTpob3ZlciwgLm5hdmJhci1saWdodCAubmF2YmFyLXRleHQgYTpmb2N1cyB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpOyB9XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICNmZmY7IH1cbiAgLm5hdmJhci1kYXJrIC5uYXZiYXItYnJhbmQ6aG92ZXIsIC5uYXZiYXItZGFyayAubmF2YmFyLWJyYW5kOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZjsgfVxuXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxuICAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyLCAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTsgfVxuICAubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1saW5rLmRpc2FibGVkIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTsgfVxuXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLnNob3cgPiAubmF2LWxpbmssXG4ubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLmFjdGl2ZSA+IC5uYXYtbGluayxcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsuc2hvdyxcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7IH1cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItdG9nZ2xlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM0UlM0Mvc3ZnJTNFXCIpOyB9XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLXRleHQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XG4gIC5uYXZiYXItZGFyayAubmF2YmFyLXRleHQgYSB7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgICAubmF2YmFyLWRhcmsgLm5hdmJhci10ZXh0IGE6aG92ZXIsIC5uYXZiYXItZGFyayAubmF2YmFyLXRleHQgYTpmb2N1cyB7XG4gICAgICBjb2xvcjogI2ZmZjsgfVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cbiAgLmNhcmQgPiBociB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC5jYXJkID4gLmxpc3QtZ3JvdXA6Zmlyc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTsgfVxuICAuY2FyZCA+IC5saXN0LWdyb3VwOmxhc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtOyB9XG5cbi5jYXJkLWJvZHkge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogMS4yNXJlbTsgfVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07IH1cblxuLmNhcmQtc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAtMC4zNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7IH1cblxuLmNhcmQtdGV4dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxuXG4uY2FyZC1saW5rOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5jYXJkLWxpbmsgKyAuY2FyZC1saW5rIHtcbiAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07IH1cblxuLmNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7IH1cbiAgLmNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKDAuMjVyZW0gLSAwcHgpIGNhbGMoMC4yNXJlbSAtIDBweCkgMCAwOyB9XG4gIC5jYXJkLWhlYWRlciArIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IDA7IH1cblxuLmNhcmQtZm9vdGVyIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBib3JkZXItdG9wOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7IH1cbiAgLmNhcmQtZm9vdGVyOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCBjYWxjKDAuMjVyZW0gLSAwcHgpIGNhbGMoMC4yNXJlbSAtIDBweCk7IH1cblxuLmNhcmQtaGVhZGVyLXRhYnMge1xuICBtYXJnaW4tcmlnaHQ6IC0wLjYyNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTAuNzVyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMC42MjVyZW07XG4gIGJvcmRlci1ib3R0b206IDA7IH1cblxuLmNhcmQtaGVhZGVyLXBpbGxzIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMC42MjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMC42MjVyZW07IH1cblxuLmNhcmQtaW1nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMS4yNXJlbTsgfVxuXG4uY2FyZC1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogY2FsYygwLjI1cmVtIC0gMHB4KTsgfVxuXG4uY2FyZC1pbWctdG9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGNhbGMoMC4yNXJlbSAtIDBweCk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBjYWxjKDAuMjVyZW0gLSAwcHgpOyB9XG5cbi5jYXJkLWltZy1ib3R0b20ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IGNhbGMoMC4yNXJlbSAtIDBweCk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGNhbGMoMC4yNXJlbSAtIDBweCk7IH1cblxuLmNhcmQtZGVjayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgLmNhcmQtZGVjayAuY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAuY2FyZC1kZWNrIHtcbiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4OyB9XG4gICAgICAuY2FyZC1kZWNrIC5jYXJkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMSAwIDAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4OyB9IH1cblxuLmNhcmQtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5jYXJkLWdyb3VwID4gLmNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgLmNhcmQtZ3JvdXAge1xuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDsgfVxuICAgICAgLmNhcmQtZ3JvdXAgPiAuY2FyZCB7XG4gICAgICAgIGZsZXg6IDEgMCAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxuICAgICAgICAuY2FyZC1ncm91cCA+IC5jYXJkICsgLmNhcmQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAwOyB9XG4gICAgICAgIC5jYXJkLWdyb3VwID4gLmNhcmQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwOyB9XG4gICAgICAgICAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpmaXJzdC1jaGlsZCAuY2FyZC1pbWctdG9wLFxuICAgICAgICAgIC5jYXJkLWdyb3VwID4gLmNhcmQ6Zmlyc3QtY2hpbGQgLmNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwOyB9XG4gICAgICAgICAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpmaXJzdC1jaGlsZCAuY2FyZC1pbWctYm90dG9tLFxuICAgICAgICAgIC5jYXJkLWdyb3VwID4gLmNhcmQ6Zmlyc3QtY2hpbGQgLmNhcmQtZm9vdGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwOyB9XG4gICAgICAgIC5jYXJkLWdyb3VwID4gLmNhcmQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwOyB9XG4gICAgICAgICAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpsYXN0LWNoaWxkIC5jYXJkLWltZy10b3AsXG4gICAgICAgICAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpsYXN0LWNoaWxkIC5jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwOyB9XG4gICAgICAgICAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpsYXN0LWNoaWxkIC5jYXJkLWltZy1ib3R0b20sXG4gICAgICAgICAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpsYXN0LWNoaWxkIC5jYXJkLWZvb3RlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwOyB9XG4gICAgICAgIC5jYXJkLWdyb3VwID4gLmNhcmQ6b25seS1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTsgfVxuICAgICAgICAgIC5jYXJkLWdyb3VwID4gLmNhcmQ6b25seS1jaGlsZCAuY2FyZC1pbWctdG9wLFxuICAgICAgICAgIC5jYXJkLWdyb3VwID4gLmNhcmQ6b25seS1jaGlsZCAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtOyB9XG4gICAgICAgICAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpvbmx5LWNoaWxkIC5jYXJkLWltZy1ib3R0b20sXG4gICAgICAgICAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpvbmx5LWNoaWxkIC5jYXJkLWZvb3RlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW07IH1cbiAgICAgICAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpOm5vdCg6b25seS1jaGlsZCkge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cbiAgICAgICAgICAuY2FyZC1ncm91cCA+IC5jYXJkOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCk6bm90KDpvbmx5LWNoaWxkKSAuY2FyZC1pbWctdG9wLFxuICAgICAgICAgIC5jYXJkLWdyb3VwID4gLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKTpub3QoOm9ubHktY2hpbGQpIC5jYXJkLWltZy1ib3R0b20sXG4gICAgICAgICAgLmNhcmQtZ3JvdXAgPiAuY2FyZDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpOm5vdCg6b25seS1jaGlsZCkgLmNhcmQtaGVhZGVyLFxuICAgICAgICAgIC5jYXJkLWdyb3VwID4gLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKTpub3QoOm9ubHktY2hpbGQpIC5jYXJkLWZvb3RlciB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwOyB9IH1cblxuLmNhcmQtY29sdW1ucyAuY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jYXJkLWNvbHVtbnMge1xuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xuICAgICAgICAgICAgY29sdW1uLWNvdW50OiAzO1xuICAgIC13ZWJraXQtY29sdW1uLWdhcDogMS4yNXJlbTtcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDEuMjVyZW07XG4gICAgb3JwaGFuczogMTtcbiAgICB3aWRvd3M6IDE7IH1cbiAgICAuY2FyZC1jb2x1bW5zIC5jYXJkIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cblxuLmFjY29yZGlvbiAuY2FyZDpub3QoOmZpcnN0LW9mLXR5cGUpOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cblxuLmFjY29yZGlvbiAuY2FyZDpub3QoOmZpcnN0LW9mLXR5cGUpIC5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cblxuLmFjY29yZGlvbiAuY2FyZDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7IH1cblxuLmFjY29yZGlvbiAuY2FyZDpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDsgfVxuXG4uYnJlYWRjcnVtYiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTsgfVxuXG4uYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtOyB9XG4gIC5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgY29udGVudDogXCIvXCI7IH1cblxuLmJyZWFkY3J1bWItaXRlbSArIC5icmVhZGNydW1iLWl0ZW06aG92ZXI6OmJlZm9yZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG5cbi5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOmhvdmVyOjpiZWZvcmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuLmJyZWFkY3J1bWItaXRlbS5hY3RpdmUge1xuICBjb2xvcjogIzZjNzU3ZDsgfVxuXG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTsgfVxuXG4ucGFnZS1saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2OyB9XG4gIC5wYWdlLWxpbms6aG92ZXIge1xuICAgIHotaW5kZXg6IDI7XG4gICAgY29sb3I6ICNkOWQ5ZDk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2OyB9XG4gIC5wYWdlLWxpbms6Zm9jdXMge1xuICAgIHotaW5kZXg6IDI7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg2MywgODEsIDE4MSwgMC4yNSk7IH1cbiAgLnBhZ2UtbGluazpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5wYWdlLWl0ZW06Zmlyc3QtY2hpbGQgLnBhZ2UtbGluayB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjI1cmVtOyB9XG5cbi5wYWdlLWl0ZW06bGFzdC1jaGlsZCAucGFnZS1saW5rIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtOyB9XG5cbi5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5wYWdlLWl0ZW0uZGlzYWJsZWQgLnBhZ2UtbGluayB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNkZWUyZTY7IH1cblxuLnBhZ2luYXRpb24tbGcgLnBhZ2UtbGluayB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7IH1cblxuLnBhZ2luYXRpb24tbGcgLnBhZ2UtaXRlbTpmaXJzdC1jaGlsZCAucGFnZS1saW5rIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjNyZW07IH1cblxuLnBhZ2luYXRpb24tbGcgLnBhZ2UtaXRlbTpsYXN0LWNoaWxkIC5wYWdlLWxpbmsge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4zcmVtOyB9XG5cbi5wYWdpbmF0aW9uLXNtIC5wYWdlLWxpbmsge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgfVxuXG4ucGFnaW5hdGlvbi1zbSAucGFnZS1pdGVtOmZpcnN0LWNoaWxkIC5wYWdlLWxpbmsge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjJyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMnJlbTsgfVxuXG4ucGFnaW5hdGlvbi1zbSAucGFnZS1pdGVtOmxhc3QtY2hpbGQgLnBhZ2UtbGluayB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjJyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjJyZW07IH1cblxuLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjI1ZW0gMC40ZW07XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cbiAgLmJhZGdlOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG5cbi5idG4gLmJhZGdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xcHg7IH1cblxuLmJhZGdlLXBpbGwge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjZlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07IH1cblxuLmJhZGdlLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuICAuYmFkZ2UtcHJpbWFyeVtocmVmXTpob3ZlciwgLmJhZGdlLXByaW1hcnlbaHJlZl06Zm9jdXMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0MDhmOyB9XG5cbi5iYWRnZS1zZWNvbmRhcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NjJhZDsgfVxuICAuYmFkZ2Utc2Vjb25kYXJ5W2hyZWZdOmhvdmVyLCAuYmFkZ2Utc2Vjb25kYXJ5W2hyZWZdOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNGU4YzsgfVxuXG4uYmFkZ2Utc3VjY2VzcyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1OyB9XG4gIC5iYWRnZS1zdWNjZXNzW2hyZWZdOmhvdmVyLCAuYmFkZ2Utc3VjY2Vzc1tocmVmXTpmb2N1cyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQ7IH1cblxuLmJhZGdlLWluZm8ge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYzsgfVxuICAuYmFkZ2UtaW5mb1tocmVmXTpob3ZlciwgLmJhZGdlLWluZm9baHJlZl06Zm9jdXMge1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiM2IzOyB9XG5cbi5iYWRnZS13YXJuaW5nIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7IH1cbiAgLmJhZGdlLXdhcm5pbmdbaHJlZl06aG92ZXIsIC5iYWRnZS13YXJuaW5nW2hyZWZdOmZvY3VzIHtcbiAgICBjb2xvcjogIzIxMjUyOTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUwMDsgfVxuXG4uYmFkZ2UtZGFuZ2VyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7IH1cbiAgLmJhZGdlLWRhbmdlcltocmVmXTpob3ZlciwgLmJhZGdlLWRhbmdlcltocmVmXTpmb2N1cyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7IH1cblxuLmJhZGdlLWxpZ2h0IHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7IH1cbiAgLmJhZGdlLWxpZ2h0W2hyZWZdOmhvdmVyLCAuYmFkZ2UtbGlnaHRbaHJlZl06Zm9jdXMge1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhOyB9XG5cbi5iYWRnZS1kYXJrIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7IH1cbiAgLmJhZGdlLWRhcmtbaHJlZl06aG92ZXIsIC5iYWRnZS1kYXJrW2hyZWZdOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IH1cblxuLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtOyB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgIC5qdW1ib3Ryb24ge1xuICAgICAgcGFkZGluZzogNHJlbSAycmVtOyB9IH1cblxuLmp1bWJvdHJvbi1mbHVpZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxuXG4uYWxlcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cblxuLmFsZXJ0LWhlYWRpbmcge1xuICBjb2xvcjogaW5oZXJpdDsgfVxuXG4uYWxlcnQtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLmFsZXJ0LWRpc21pc3NpYmxlIHtcbiAgcGFkZGluZy1yaWdodDogNHJlbTsgfVxuICAuYWxlcnQtZGlzbWlzc2libGUgLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgICBjb2xvcjogaW5oZXJpdDsgfVxuXG4uYWxlcnQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjMjEyYTVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkY2YwO1xuICBib3JkZXItY29sb3I6ICNjOWNlZWE7IH1cbiAgLmFsZXJ0LXByaW1hcnkgaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNiN2JkZTM7IH1cbiAgLmFsZXJ0LXByaW1hcnkgLmFsZXJ0LWxpbmsge1xuICAgIGNvbG9yOiAjMTQxOTM4OyB9XG5cbi5hbGVydC1zZWNvbmRhcnkge1xuICBjb2xvcjogIzJjMzM1YTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTBlZjtcbiAgYm9yZGVyLWNvbG9yOiAjY2ZkM2U4OyB9XG4gIC5hbGVydC1zZWNvbmRhcnkgaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNiZWMzZTA7IH1cbiAgLmFsZXJ0LXNlY29uZGFyeSAuYWxlcnQtbGluayB7XG4gICAgY29sb3I6ICMxYjIwMzg7IH1cblxuLmFsZXJ0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzE1NTcyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcbiAgYm9yZGVyLWNvbG9yOiAjYzNlNmNiOyB9XG4gIC5hbGVydC1zdWNjZXNzIGhyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjYjFkZmJiOyB9XG4gIC5hbGVydC1zdWNjZXNzIC5hbGVydC1saW5rIHtcbiAgICBjb2xvcjogIzBiMmUxMzsgfVxuXG4uYWxlcnQtaW5mbyB7XG4gIGNvbG9yOiAjNmE2YTZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3JkZXItY29sb3I6ICNmMWYxZjE7IH1cbiAgLmFsZXJ0LWluZm8gaHIge1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNlNGU0ZTQ7IH1cbiAgLmFsZXJ0LWluZm8gLmFsZXJ0LWxpbmsge1xuICAgIGNvbG9yOiAjNTE1MTUxOyB9XG5cbi5hbGVydC13YXJuaW5nIHtcbiAgY29sb3I6ICM4NTY0MDQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XG4gIGJvcmRlci1jb2xvcjogI2ZmZWViYTsgfVxuICAuYWxlcnQtd2FybmluZyBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZThhMTsgfVxuICAuYWxlcnQtd2FybmluZyAuYWxlcnQtbGluayB7XG4gICAgY29sb3I6ICM1MzNmMDM7IH1cblxuLmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiAjNzIxYzI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICBib3JkZXItY29sb3I6ICNmNWM2Y2I7IH1cbiAgLmFsZXJ0LWRhbmdlciBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2YxYjBiNzsgfVxuICAuYWxlcnQtZGFuZ2VyIC5hbGVydC1saW5rIHtcbiAgICBjb2xvcjogIzQ5MTIxNzsgfVxuXG4uYWxlcnQtbGlnaHQge1xuICBjb2xvcjogIzdlN2U3ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcbiAgYm9yZGVyLWNvbG9yOiAjZmNmY2ZjOyB9XG4gIC5hbGVydC1saWdodCBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2VmZWZlZjsgfVxuICAuYWxlcnQtbGlnaHQgLmFsZXJ0LWxpbmsge1xuICAgIGNvbG9yOiAjNjU2NTY1OyB9XG5cbi5hbGVydC1kYXJrIHtcbiAgY29sb3I6ICMwYjBiMGI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGQwZDA7XG4gIGJvcmRlci1jb2xvcjogI2JkYmRiZDsgfVxuICAuYWxlcnQtZGFyayBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2IwYjBiMDsgfVxuICAuYWxlcnQtZGFyayAuYWxlcnQtbGluayB7XG4gICAgY29sb3I6IGJsYWNrOyB9XG5cbkAtd2Via2l0LWtleWZyYW1lcyBwcm9ncmVzcy1iYXItc3RyaXBlcyB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDFyZW0gMDsgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9IH1cblxuQGtleWZyYW1lcyBwcm9ncmVzcy1iYXItc3RyaXBlcyB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDFyZW0gMDsgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9IH1cblxuLnByb2dyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMC4xcmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cblxuLnByb2dyZXNzLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGVhc2U7IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgdHJhbnNpdGlvbjogbm9uZTsgfSB9XG5cbi5wcm9ncmVzcy1iYXItc3RyaXBlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSA3NSUsIHRyYW5zcGFyZW50IDc1JSwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDFyZW0gMXJlbTsgfVxuXG4ucHJvZ3Jlc3MtYmFyLWFuaW1hdGVkIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHByb2dyZXNzLWJhci1zdHJpcGVzIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICBhbmltYXRpb246IHByb2dyZXNzLWJhci1zdHJpcGVzIDFzIGxpbmVhciBpbmZpbml0ZTsgfVxuXG4ubWVkaWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxuXG4ubWVkaWEtYm9keSB7XG4gIGZsZXg6IDE7IH1cblxuLmxpc3QtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7IH1cblxuLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7IH1cbiAgLmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246aG92ZXIsIC5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmZvY3VzIHtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTsgfVxuICAubGlzdC1ncm91cC1pdGVtLWFjdGlvbjphY3RpdmUge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7IH1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7IH1cbiAgLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4yNXJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNXJlbTsgfVxuICAubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNXJlbTsgfVxuICAubGlzdC1ncm91cC1pdGVtOmhvdmVyLCAubGlzdC1ncm91cC1pdGVtOmZvY3VzIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAubGlzdC1ncm91cC1pdGVtLmRpc2FibGVkLCAubGlzdC1ncm91cC1pdGVtOmRpc2FibGVkIHtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG4gIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5saXN0LWdyb3VwLWZsdXNoIC5saXN0LWdyb3VwLWl0ZW0ge1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmFkaXVzOiAwOyB9XG5cbi5saXN0LWdyb3VwLWZsdXNoOmZpcnN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiAwOyB9XG5cbi5saXN0LWdyb3VwLWZsdXNoOmxhc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMDsgfVxuXG4ubGlzdC1ncm91cC1pdGVtLXByaW1hcnkge1xuICBjb2xvcjogIzIxMmE1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5Y2VlYTsgfVxuICAubGlzdC1ncm91cC1pdGVtLXByaW1hcnkubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpob3ZlciwgLmxpc3QtZ3JvdXAtaXRlbS1wcmltYXJ5Lmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246Zm9jdXMge1xuICAgIGNvbG9yOiAjMjEyYTVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiN2JkZTM7IH1cbiAgLmxpc3QtZ3JvdXAtaXRlbS1wcmltYXJ5Lmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24uYWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyYTVlO1xuICAgIGJvcmRlci1jb2xvcjogIzIxMmE1ZTsgfVxuXG4ubGlzdC1ncm91cC1pdGVtLXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjMmMzMzVhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkM2U4OyB9XG4gIC5saXN0LWdyb3VwLWl0ZW0tc2Vjb25kYXJ5Lmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246aG92ZXIsIC5saXN0LWdyb3VwLWl0ZW0tc2Vjb25kYXJ5Lmxpc3QtZ3JvdXAtaXRlbS1hY3Rpb246Zm9jdXMge1xuICAgIGNvbG9yOiAjMmMzMzVhO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZWMzZTA7IH1cbiAgLmxpc3QtZ3JvdXAtaXRlbS1zZWNvbmRhcnkubGlzdC1ncm91cC1pdGVtLWFjdGlvbi5hY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzMzNWE7XG4gICAgYm9yZGVyLWNvbG9yOiAjMmMzMzVhOyB9XG5cbi5saXN0LWdyb3VwLWl0ZW0tc3VjY2VzcyB7XG4gIGNvbG9yOiAjMTU1NzI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzNlNmNiOyB9XG4gIC5saXN0LWdyb3VwLWl0ZW0tc3VjY2Vzcy5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmhvdmVyLCAubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpmb2N1cyB7XG4gICAgY29sb3I6ICMxNTU3MjQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxZGZiYjsgfVxuICAubGlzdC1ncm91cC1pdGVtLXN1Y2Nlc3MubGlzdC1ncm91cC1pdGVtLWFjdGlvbi5hY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTU3MjQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTU1NzI0OyB9XG5cbi5saXN0LWdyb3VwLWl0ZW0taW5mbyB7XG4gIGNvbG9yOiAjNmE2YTZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxOyB9XG4gIC5saXN0LWdyb3VwLWl0ZW0taW5mby5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmhvdmVyLCAubGlzdC1ncm91cC1pdGVtLWluZm8ubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpmb2N1cyB7XG4gICAgY29sb3I6ICM2YTZhNmE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDsgfVxuICAubGlzdC1ncm91cC1pdGVtLWluZm8ubGlzdC1ncm91cC1pdGVtLWFjdGlvbi5hY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YTZhNmE7XG4gICAgYm9yZGVyLWNvbG9yOiAjNmE2YTZhOyB9XG5cbi5saXN0LWdyb3VwLWl0ZW0td2FybmluZyB7XG4gIGNvbG9yOiAjODU2NDA0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZWJhOyB9XG4gIC5saXN0LWdyb3VwLWl0ZW0td2FybmluZy5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmhvdmVyLCAubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpmb2N1cyB7XG4gICAgY29sb3I6ICM4NTY0MDQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZThhMTsgfVxuICAubGlzdC1ncm91cC1pdGVtLXdhcm5pbmcubGlzdC1ncm91cC1pdGVtLWFjdGlvbi5hY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTY0MDQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjODU2NDA0OyB9XG5cbi5saXN0LWdyb3VwLWl0ZW0tZGFuZ2VyIHtcbiAgY29sb3I6ICM3MjFjMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWM2Y2I7IH1cbiAgLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpob3ZlciwgLmxpc3QtZ3JvdXAtaXRlbS1kYW5nZXIubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpmb2N1cyB7XG4gICAgY29sb3I6ICM3MjFjMjQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxYjBiNzsgfVxuICAubGlzdC1ncm91cC1pdGVtLWRhbmdlci5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uLmFjdGl2ZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcyMWMyNDtcbiAgICBib3JkZXItY29sb3I6ICM3MjFjMjQ7IH1cblxuLmxpc3QtZ3JvdXAtaXRlbS1saWdodCB7XG4gIGNvbG9yOiAjN2U3ZTdlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjOyB9XG4gIC5saXN0LWdyb3VwLWl0ZW0tbGlnaHQubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpob3ZlciwgLmxpc3QtZ3JvdXAtaXRlbS1saWdodC5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmZvY3VzIHtcbiAgICBjb2xvcjogIzdlN2U3ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmOyB9XG4gIC5saXN0LWdyb3VwLWl0ZW0tbGlnaHQubGlzdC1ncm91cC1pdGVtLWFjdGlvbi5hY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZTdlN2U7XG4gICAgYm9yZGVyLWNvbG9yOiAjN2U3ZTdlOyB9XG5cbi5saXN0LWdyb3VwLWl0ZW0tZGFyayB7XG4gIGNvbG9yOiAjMGIwYjBiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkOyB9XG4gIC5saXN0LWdyb3VwLWl0ZW0tZGFyay5saXN0LWdyb3VwLWl0ZW0tYWN0aW9uOmhvdmVyLCAubGlzdC1ncm91cC1pdGVtLWRhcmsubGlzdC1ncm91cC1pdGVtLWFjdGlvbjpmb2N1cyB7XG4gICAgY29sb3I6ICMwYjBiMGI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IwYjBiMDsgfVxuICAubGlzdC1ncm91cC1pdGVtLWRhcmsubGlzdC1ncm91cC1pdGVtLWFjdGlvbi5hY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjBiMGI7XG4gICAgYm9yZGVyLWNvbG9yOiAjMGIwYjBiOyB9XG5cbi5jbG9zZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZjtcbiAgb3BhY2l0eTogLjU7IH1cbiAgLmNsb3NlOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAuY2xvc2U6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6aG92ZXIsIC5jbG9zZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpmb2N1cyB7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIG9wYWNpdHk6IC43NTsgfVxuXG5idXR0b24uY2xvc2Uge1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cblxuLm1vZGFsLW9wZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIC5tb2RhbC1vcGVuIC5tb2RhbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwNTA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG91dGxpbmU6IDA7IH1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMC41cmVtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAubW9kYWwuZmFkZSAubW9kYWwtZGlhbG9nIHtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTsgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgICAgIC5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xuICAgICAgICB0cmFuc2l0aW9uOiBub25lOyB9IH1cbiAgLm1vZGFsLnNob3cgLm1vZGFsLWRpYWxvZyB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApOyB9XG5cbi5tb2RhbC1kaWFsb2ctY2VudGVyZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAoMC41cmVtICogMikpOyB9XG4gIC5tb2RhbC1kaWFsb2ctY2VudGVyZWQ6OmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDAuNXJlbSAqIDIpKTtcbiAgICBjb250ZW50OiBcIlwiOyB9XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgb3V0bGluZTogMDsgfVxuXG4ubW9kYWwtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA0MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgfVxuICAubW9kYWwtYmFja2Ryb3AuZmFkZSB7XG4gICAgb3BhY2l0eTogMDsgfVxuICAubW9kYWwtYmFja2Ryb3Auc2hvdyB7XG4gICAgb3BhY2l0eTogMC41OyB9XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC4zcmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtOyB9XG4gIC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1hcmdpbjogLTFyZW0gLTFyZW0gLTFyZW0gYXV0bzsgfVxuXG4ubW9kYWwtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMS41OyB9XG5cbi5tb2RhbC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogMXJlbTsgfVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7IH1cbiAgLm1vZGFsLWZvb3RlciA+IDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWxlZnQ6IC4yNXJlbTsgfVxuICAubW9kYWwtZm9vdGVyID4gOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogLjI1cmVtOyB9XG5cbi5tb2RhbC1zY3JvbGxiYXItbWVhc3VyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTk5OXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsOyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAubW9kYWwtZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMS43NXJlbSBhdXRvOyB9XG4gIC5tb2RhbC1kaWFsb2ctY2VudGVyZWQge1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICgxLjc1cmVtICogMikpOyB9XG4gICAgLm1vZGFsLWRpYWxvZy1jZW50ZXJlZDo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICgxLjc1cmVtICogMikpOyB9XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuICAubW9kYWwtc20ge1xuICAgIG1heC13aWR0aDogMzAwcHg7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm1vZGFsLWxnIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4OyB9IH1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwNzA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWJyZWFrOiBhdXRvO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG9wYWNpdHk6IDA7IH1cbiAgLnRvb2x0aXAuc2hvdyB7XG4gICAgb3BhY2l0eTogMC45OyB9XG4gIC50b29sdGlwIC5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAwLjhyZW07XG4gICAgaGVpZ2h0OiAwLjRyZW07IH1cbiAgICAudG9vbHRpcCAuYXJyb3c6OmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7IH1cblxuLmJzLXRvb2x0aXAtdG9wLCAuYnMtdG9vbHRpcC1hdXRvW3gtcGxhY2VtZW50Xj1cInRvcFwiXSB7XG4gIHBhZGRpbmc6IDAuNHJlbSAwOyB9XG4gIC5icy10b29sdGlwLXRvcCAuYXJyb3csIC5icy10b29sdGlwLWF1dG9beC1wbGFjZW1lbnRePVwidG9wXCJdIC5hcnJvdyB7XG4gICAgYm90dG9tOiAwOyB9XG4gICAgLmJzLXRvb2x0aXAtdG9wIC5hcnJvdzo6YmVmb3JlLCAuYnMtdG9vbHRpcC1hdXRvW3gtcGxhY2VtZW50Xj1cInRvcFwiXSAuYXJyb3c6OmJlZm9yZSB7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3JkZXItd2lkdGg6IDAuNHJlbSAwLjRyZW0gMDtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDA7IH1cblxuLmJzLXRvb2x0aXAtcmlnaHQsIC5icy10b29sdGlwLWF1dG9beC1wbGFjZW1lbnRePVwicmlnaHRcIl0ge1xuICBwYWRkaW5nOiAwIDAuNHJlbTsgfVxuICAuYnMtdG9vbHRpcC1yaWdodCAuYXJyb3csIC5icy10b29sdGlwLWF1dG9beC1wbGFjZW1lbnRePVwicmlnaHRcIl0gLmFycm93IHtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAwLjRyZW07XG4gICAgaGVpZ2h0OiAwLjhyZW07IH1cbiAgICAuYnMtdG9vbHRpcC1yaWdodCAuYXJyb3c6OmJlZm9yZSwgLmJzLXRvb2x0aXAtYXV0b1t4LXBsYWNlbWVudF49XCJyaWdodFwiXSAuYXJyb3c6OmJlZm9yZSB7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvcmRlci13aWR0aDogMC40cmVtIDAuNHJlbSAwLjRyZW0gMDtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzAwMDsgfVxuXG4uYnMtdG9vbHRpcC1ib3R0b20sIC5icy10b29sdGlwLWF1dG9beC1wbGFjZW1lbnRePVwiYm90dG9tXCJdIHtcbiAgcGFkZGluZzogMC40cmVtIDA7IH1cbiAgLmJzLXRvb2x0aXAtYm90dG9tIC5hcnJvdywgLmJzLXRvb2x0aXAtYXV0b1t4LXBsYWNlbWVudF49XCJib3R0b21cIl0gLmFycm93IHtcbiAgICB0b3A6IDA7IH1cbiAgICAuYnMtdG9vbHRpcC1ib3R0b20gLmFycm93OjpiZWZvcmUsIC5icy10b29sdGlwLWF1dG9beC1wbGFjZW1lbnRePVwiYm90dG9tXCJdIC5hcnJvdzo6YmVmb3JlIHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGJvcmRlci13aWR0aDogMCAwLjRyZW0gMC40cmVtO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDsgfVxuXG4uYnMtdG9vbHRpcC1sZWZ0LCAuYnMtdG9vbHRpcC1hdXRvW3gtcGxhY2VtZW50Xj1cImxlZnRcIl0ge1xuICBwYWRkaW5nOiAwIDAuNHJlbTsgfVxuICAuYnMtdG9vbHRpcC1sZWZ0IC5hcnJvdywgLmJzLXRvb2x0aXAtYXV0b1t4LXBsYWNlbWVudF49XCJsZWZ0XCJdIC5hcnJvdyB7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDAuNHJlbTtcbiAgICBoZWlnaHQ6IDAuOHJlbTsgfVxuICAgIC5icy10b29sdGlwLWxlZnQgLmFycm93OjpiZWZvcmUsIC5icy10b29sdGlwLWF1dG9beC1wbGFjZW1lbnRePVwibGVmdFwiXSAuYXJyb3c6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm9yZGVyLXdpZHRoOiAwLjRyZW0gMCAwLjRyZW0gMC40cmVtO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDA7IH1cblxuLnRvb2x0aXAtaW5uZXIge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTsgfVxuXG4ucG9wb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDYwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAyNzZweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtYnJlYWs6IGF1dG87XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpOyB9XG4gIC5wb3BvdmVyIC5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGhlaWdodDogMC41cmVtO1xuICAgIG1hcmdpbjogMCAwLjNyZW07IH1cbiAgICAucG9wb3ZlciAuYXJyb3c6OmJlZm9yZSwgLnBvcG92ZXIgLmFycm93OjphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgfVxuXG4uYnMtcG9wb3Zlci10b3AsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwidG9wXCJdIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtOyB9XG4gIC5icy1wb3BvdmVyLXRvcCAuYXJyb3csIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwidG9wXCJdIC5hcnJvdyB7XG4gICAgYm90dG9tOiBjYWxjKCgwLjVyZW0gKyAxcHgpICogLTEpOyB9XG4gIC5icy1wb3BvdmVyLXRvcCAuYXJyb3c6OmJlZm9yZSwgLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49XCJ0b3BcIl0gLmFycm93OjpiZWZvcmUsXG4gIC5icy1wb3BvdmVyLXRvcCAuYXJyb3c6OmFmdGVyLFxuICAuYnMtcG9wb3Zlci1hdXRvW3gtcGxhY2VtZW50Xj1cInRvcFwiXSAuYXJyb3c6OmFmdGVyIHtcbiAgICBib3JkZXItd2lkdGg6IDAuNXJlbSAwLjVyZW0gMDsgfVxuICAuYnMtcG9wb3Zlci10b3AgLmFycm93OjpiZWZvcmUsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwidG9wXCJdIC5hcnJvdzo6YmVmb3JlIHtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTsgfVxuICBcbiAgLmJzLXBvcG92ZXItdG9wIC5hcnJvdzo6YWZ0ZXIsXG4gIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwidG9wXCJdIC5hcnJvdzo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMXB4O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmY7IH1cblxuLmJzLXBvcG92ZXItcmlnaHQsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwicmlnaHRcIl0ge1xuICBtYXJnaW4tbGVmdDogMC41cmVtOyB9XG4gIC5icy1wb3BvdmVyLXJpZ2h0IC5hcnJvdywgLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49XCJyaWdodFwiXSAuYXJyb3cge1xuICAgIGxlZnQ6IGNhbGMoKDAuNXJlbSArIDFweCkgKiAtMSk7XG4gICAgd2lkdGg6IDAuNXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgbWFyZ2luOiAwLjNyZW0gMDsgfVxuICAuYnMtcG9wb3Zlci1yaWdodCAuYXJyb3c6OmJlZm9yZSwgLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49XCJyaWdodFwiXSAuYXJyb3c6OmJlZm9yZSxcbiAgLmJzLXBvcG92ZXItcmlnaHQgLmFycm93OjphZnRlcixcbiAgLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49XCJyaWdodFwiXSAuYXJyb3c6OmFmdGVyIHtcbiAgICBib3JkZXItd2lkdGg6IDAuNXJlbSAwLjVyZW0gMC41cmVtIDA7IH1cbiAgLmJzLXBvcG92ZXItcmlnaHQgLmFycm93OjpiZWZvcmUsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwicmlnaHRcIl0gLmFycm93OjpiZWZvcmUge1xuICAgIGxlZnQ6IDA7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpOyB9XG4gIFxuICAuYnMtcG9wb3Zlci1yaWdodCAuYXJyb3c6OmFmdGVyLFxuICAuYnMtcG9wb3Zlci1hdXRvW3gtcGxhY2VtZW50Xj1cInJpZ2h0XCJdIC5hcnJvdzo6YWZ0ZXIge1xuICAgIGxlZnQ6IDFweDtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNmZmY7IH1cblxuLmJzLXBvcG92ZXItYm90dG9tLCAuYnMtcG9wb3Zlci1hdXRvW3gtcGxhY2VtZW50Xj1cImJvdHRvbVwiXSB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuICAuYnMtcG9wb3Zlci1ib3R0b20gLmFycm93LCAuYnMtcG9wb3Zlci1hdXRvW3gtcGxhY2VtZW50Xj1cImJvdHRvbVwiXSAuYXJyb3cge1xuICAgIHRvcDogY2FsYygoMC41cmVtICsgMXB4KSAqIC0xKTsgfVxuICAuYnMtcG9wb3Zlci1ib3R0b20gLmFycm93OjpiZWZvcmUsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwiYm90dG9tXCJdIC5hcnJvdzo6YmVmb3JlLFxuICAuYnMtcG9wb3Zlci1ib3R0b20gLmFycm93OjphZnRlcixcbiAgLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49XCJib3R0b21cIl0gLmFycm93OjphZnRlciB7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAuNXJlbSAwLjVyZW0gMC41cmVtOyB9XG4gIC5icy1wb3BvdmVyLWJvdHRvbSAuYXJyb3c6OmJlZm9yZSwgLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49XCJib3R0b21cIl0gLmFycm93OjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpOyB9XG4gIFxuICAuYnMtcG9wb3Zlci1ib3R0b20gLmFycm93OjphZnRlcixcbiAgLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49XCJib3R0b21cIl0gLmFycm93OjphZnRlciB7XG4gICAgdG9wOiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjsgfVxuICAuYnMtcG9wb3Zlci1ib3R0b20gLnBvcG92ZXItaGVhZGVyOjpiZWZvcmUsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwiYm90dG9tXCJdIC5wb3BvdmVyLWhlYWRlcjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjdmN2Y3OyB9XG5cbi5icy1wb3BvdmVyLWxlZnQsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwibGVmdFwiXSB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtOyB9XG4gIC5icy1wb3BvdmVyLWxlZnQgLmFycm93LCAuYnMtcG9wb3Zlci1hdXRvW3gtcGxhY2VtZW50Xj1cImxlZnRcIl0gLmFycm93IHtcbiAgICByaWdodDogY2FsYygoMC41cmVtICsgMXB4KSAqIC0xKTtcbiAgICB3aWR0aDogMC41cmVtO1xuICAgIGhlaWdodDogMXJlbTtcbiAgICBtYXJnaW46IDAuM3JlbSAwOyB9XG4gIC5icy1wb3BvdmVyLWxlZnQgLmFycm93OjpiZWZvcmUsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwibGVmdFwiXSAuYXJyb3c6OmJlZm9yZSxcbiAgLmJzLXBvcG92ZXItbGVmdCAuYXJyb3c6OmFmdGVyLFxuICAuYnMtcG9wb3Zlci1hdXRvW3gtcGxhY2VtZW50Xj1cImxlZnRcIl0gLmFycm93OjphZnRlciB7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjVyZW0gMCAwLjVyZW0gMC41cmVtOyB9XG4gIC5icy1wb3BvdmVyLWxlZnQgLmFycm93OjpiZWZvcmUsIC5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePVwibGVmdFwiXSAuYXJyb3c6OmJlZm9yZSB7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cbiAgXG4gIC5icy1wb3BvdmVyLWxlZnQgLmFycm93OjphZnRlcixcbiAgLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49XCJsZWZ0XCJdIC5hcnJvdzo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAxcHg7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZmY7IH1cblxuLnBvcG92ZXItaGVhZGVyIHtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBjYWxjKDAuM3JlbSAtIDFweCk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBjYWxjKDAuM3JlbSAtIDFweCk7IH1cbiAgLnBvcG92ZXItaGVhZGVyOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG5cbi5wb3BvdmVyLWJvZHkge1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgY29sb3I6ICMzMzM7IH1cblxuLmNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4OyB9XG5cbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSxcbi5jYXJvdXNlbC1pdGVtLW5leHQsXG4uY2Fyb3VzZWwtaXRlbS1wcmV2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuNnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gMC42cyBlYXNlOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgICAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUsXG4gICAgLmNhcm91c2VsLWl0ZW0tbmV4dCxcbiAgICAuY2Fyb3VzZWwtaXRlbS1wcmV2IHtcbiAgICAgIHRyYW5zaXRpb246IG5vbmU7IH0gfVxuXG4uY2Fyb3VzZWwtaXRlbS1uZXh0LFxuLmNhcm91c2VsLWl0ZW0tcHJldiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwOyB9XG5cbi5jYXJvdXNlbC1pdGVtLW5leHQuY2Fyb3VzZWwtaXRlbS1sZWZ0LFxuLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIEBzdXBwb3J0cyAoKC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZCkgb3IgKHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2QpKSB7XG4gICAgLmNhcm91c2VsLWl0ZW0tbmV4dC5jYXJvdXNlbC1pdGVtLWxlZnQsXG4gICAgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfSB9XG5cbi5jYXJvdXNlbC1pdGVtLW5leHQsXG4uYWN0aXZlLmNhcm91c2VsLWl0ZW0tcmlnaHQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cbiAgQHN1cHBvcnRzICgoLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkKSBvciAodHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZCkpIHtcbiAgICAuY2Fyb3VzZWwtaXRlbS1uZXh0LFxuICAgIC5hY3RpdmUuY2Fyb3VzZWwtaXRlbS1yaWdodCB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7IH0gfVxuXG4uY2Fyb3VzZWwtaXRlbS1wcmV2LFxuLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxuICBAc3VwcG9ydHMgKCgtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2QpIG9yICh0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkKSkge1xuICAgIC5jYXJvdXNlbC1pdGVtLXByZXYsXG4gICAgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7IH0gfVxuXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC42cztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTsgfVxuXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUsXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS1uZXh0LmNhcm91c2VsLWl0ZW0tbGVmdCxcbi5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pdGVtLXByZXYuY2Fyb3VzZWwtaXRlbS1yaWdodCB7XG4gIG9wYWNpdHk6IDE7IH1cblxuLmNhcm91c2VsLWZhZGUgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQsXG4uY2Fyb3VzZWwtZmFkZSAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tcmlnaHQge1xuICBvcGFjaXR5OiAwOyB9XG5cbi5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pdGVtLW5leHQsXG4uY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS1wcmV2LFxuLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0uYWN0aXZlLFxuLmNhcm91c2VsLWZhZGUgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQsXG4uY2Fyb3VzZWwtZmFkZSAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tcHJldiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICBAc3VwcG9ydHMgKCgtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2QpIG9yICh0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkKSkge1xuICAgIC5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pdGVtLW5leHQsXG4gICAgLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWl0ZW0tcHJldixcbiAgICAuY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUsXG4gICAgLmNhcm91c2VsLWZhZGUgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLWxlZnQsXG4gICAgLmNhcm91c2VsLWZhZGUgLmFjdGl2ZS5jYXJvdXNlbC1pdGVtLXByZXYge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9IH1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldixcbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDE1JTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMC41OyB9XG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXY6aG92ZXIsIC5jYXJvdXNlbC1jb250cm9sLXByZXY6Zm9jdXMsXG4gIC5jYXJvdXNlbC1jb250cm9sLW5leHQ6aG92ZXIsXG4gIC5jYXJvdXNlbC1jb250cm9sLW5leHQ6Zm9jdXMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIG9wYWNpdHk6IC45OyB9XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBsZWZ0OiAwOyB9XG5cbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICByaWdodDogMDsgfVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24sXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgfVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyM2ZmZicgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzRSUzQy9zdmclM0VcIik7IH1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjNmZmYnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpOyB9XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxNTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cbiAgLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgIHRleHQtaW5kZW50OiAtOTk5cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpOjpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMTBweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7IH1cbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaTo6YWZ0ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7IH1cbiAgLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDAlO1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5hbGlnbi1iYXNlbGluZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi10b3Age1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLW1pZGRsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24tYm90dG9tIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbSAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi10ZXh0LWJvdHRvbSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbSAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi10ZXh0LXRvcCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcCAhaW1wb3J0YW50OyB9XG5cbi5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50OyB9XG5cbmEuYmctcHJpbWFyeTpob3ZlciwgYS5iZy1wcmltYXJ5OmZvY3VzLFxuYnV0dG9uLmJnLXByaW1hcnk6aG92ZXIsXG5idXR0b24uYmctcHJpbWFyeTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQwOGYgIWltcG9ydGFudDsgfVxuXG4uYmctc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NjJhZCAhaW1wb3J0YW50OyB9XG5cbmEuYmctc2Vjb25kYXJ5OmhvdmVyLCBhLmJnLXNlY29uZGFyeTpmb2N1cyxcbmJ1dHRvbi5iZy1zZWNvbmRhcnk6aG92ZXIsXG5idXR0b24uYmctc2Vjb25kYXJ5OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNGU4YyAhaW1wb3J0YW50OyB9XG5cbi5iZy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50OyB9XG5cbmEuYmctc3VjY2Vzczpob3ZlciwgYS5iZy1zdWNjZXNzOmZvY3VzLFxuYnV0dG9uLmJnLXN1Y2Nlc3M6aG92ZXIsXG5idXR0b24uYmctc3VjY2Vzczpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQgIWltcG9ydGFudDsgfVxuXG4uYmctaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2MgIWltcG9ydGFudDsgfVxuXG5hLmJnLWluZm86aG92ZXIsIGEuYmctaW5mbzpmb2N1cyxcbmJ1dHRvbi5iZy1pbmZvOmhvdmVyLFxuYnV0dG9uLmJnLWluZm86Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiM2IzICFpbXBvcnRhbnQ7IH1cblxuLmJnLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7IH1cblxuYS5iZy13YXJuaW5nOmhvdmVyLCBhLmJnLXdhcm5pbmc6Zm9jdXMsXG5idXR0b24uYmctd2FybmluZzpob3ZlcixcbmJ1dHRvbi5iZy13YXJuaW5nOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzOWUwMCAhaW1wb3J0YW50OyB9XG5cbi5iZy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7IH1cblxuYS5iZy1kYW5nZXI6aG92ZXIsIGEuYmctZGFuZ2VyOmZvY3VzLFxuYnV0dG9uLmJnLWRhbmdlcjpob3ZlcixcbmJ1dHRvbi5iZy1kYW5nZXI6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQyMTMwICFpbXBvcnRhbnQ7IH1cblxuLmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMyAhaW1wb3J0YW50OyB9XG5cbmEuYmctbGlnaHQ6aG92ZXIsIGEuYmctbGlnaHQ6Zm9jdXMsXG5idXR0b24uYmctbGlnaHQ6aG92ZXIsXG5idXR0b24uYmctbGlnaHQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhICFpbXBvcnRhbnQ7IH1cblxuLmJnLWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1ICFpbXBvcnRhbnQ7IH1cblxuYS5iZy1kYXJrOmhvdmVyLCBhLmJnLWRhcms6Zm9jdXMsXG5idXR0b24uYmctZGFyazpob3ZlcixcbmJ1dHRvbi5iZy1kYXJrOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDsgfVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cblxuLmJnLXRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLXJpZ2h0IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWxlZnQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLTAge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLXRvcC0wIHtcbiAgYm9yZGVyLXRvcDogMCAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItcmlnaHQtMCB7XG4gIGJvcmRlci1yaWdodDogMCAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItYm90dG9tLTAge1xuICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1sZWZ0LTAge1xuICBib3JkZXItbGVmdDogMCAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItcHJpbWFyeSB7XG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiAjNTU2MmFkICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1zdWNjZXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1pbmZvIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci13YXJuaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1kYW5nZXIge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWxpZ2h0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZjNmM2YzICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1kYXJrIHtcbiAgYm9yZGVyLWNvbG9yOiAjMTUxNTE1ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci13aGl0ZSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50OyB9XG5cbi5yb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5yb3VuZGVkLXRvcCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuXG4ucm91bmRlZC1yaWdodCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7IH1cblxuLnJvdW5kZWQtYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50OyB9XG5cbi5yb3VuZGVkLWxlZnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuMjVyZW0gIWltcG9ydGFudDsgfVxuXG4ucm91bmRlZC1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDsgfVxuXG4ucm91bmRlZC0wIHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50OyB9XG5cbi5jbGVhcmZpeDo6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7IH1cblxuLmQtbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4uZC1pbmxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDsgfVxuXG4uZC1pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsgfVxuXG4uZC1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cblxuLmQtdGFibGUge1xuICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50OyB9XG5cbi5kLXRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50OyB9XG5cbi5kLXRhYmxlLWNlbGwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7IH1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgfVxuXG4uZC1pbmxpbmUtZmxleCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5kLXNtLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAuZC1zbS1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50OyB9XG4gIC5kLXNtLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7IH1cbiAgLmQtc20tYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cbiAgLmQtc20tdGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7IH1cbiAgLmQtc20tdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDsgfVxuICAuZC1zbS10YWJsZS1jZWxsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7IH1cbiAgLmQtc20tZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyB9XG4gIC5kLXNtLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5kLW1kLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAuZC1tZC1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50OyB9XG4gIC5kLW1kLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7IH1cbiAgLmQtbWQtYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cbiAgLmQtbWQtdGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7IH1cbiAgLmQtbWQtdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDsgfVxuICAuZC1tZC10YWJsZS1jZWxsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7IH1cbiAgLmQtbWQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyB9XG4gIC5kLW1kLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5kLWxnLW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAuZC1sZy1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50OyB9XG4gIC5kLWxnLWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7IH1cbiAgLmQtbGctYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cbiAgLmQtbGctdGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7IH1cbiAgLmQtbGctdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDsgfVxuICAuZC1sZy10YWJsZS1jZWxsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7IH1cbiAgLmQtbGctZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyB9XG4gIC5kLWxnLWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuZC14bC1ub25lIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLmQteGwtaW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDsgfVxuICAuZC14bC1pbmxpbmUtYmxvY2sge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50OyB9XG4gIC5kLXhsLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4gIC5kLXhsLXRhYmxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50OyB9XG4gIC5kLXhsLXRhYmxlLXJvdyB7XG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7IH1cbiAgLmQteGwtdGFibGUtY2VsbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50OyB9XG4gIC5kLXhsLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgfVxuICAuZC14bC1pbmxpbmUtZmxleCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSBwcmludCB7XG4gIC5kLXByaW50LW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAuZC1wcmludC1pbmxpbmUge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50OyB9XG4gIC5kLXByaW50LWlubGluZS1ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7IH1cbiAgLmQtcHJpbnQtYmxvY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cbiAgLmQtcHJpbnQtdGFibGUge1xuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7IH1cbiAgLmQtcHJpbnQtdGFibGUtcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDsgfVxuICAuZC1wcmludC10YWJsZS1jZWxsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7IH1cbiAgLmQtcHJpbnQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyB9XG4gIC5kLXByaW50LWlubGluZS1mbGV4IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50OyB9IH1cblxuLmVtYmVkLXJlc3BvbnNpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAuZW1iZWQtcmVzcG9uc2l2ZTo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIlwiOyB9XG4gIC5lbWJlZC1yZXNwb25zaXZlIC5lbWJlZC1yZXNwb25zaXZlLWl0ZW0sXG4gIC5lbWJlZC1yZXNwb25zaXZlIGlmcmFtZSxcbiAgLmVtYmVkLXJlc3BvbnNpdmUgZW1iZWQsXG4gIC5lbWJlZC1yZXNwb25zaXZlIG9iamVjdCxcbiAgLmVtYmVkLXJlc3BvbnNpdmUgdmlkZW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMDsgfVxuXG4uZW1iZWQtcmVzcG9uc2l2ZS0yMWJ5OTo6YmVmb3JlIHtcbiAgcGFkZGluZy10b3A6IDQyLjg1NzE0JTsgfVxuXG4uZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OTo6YmVmb3JlIHtcbiAgcGFkZGluZy10b3A6IDU2LjI1JTsgfVxuXG4uZW1iZWQtcmVzcG9uc2l2ZS00YnkzOjpiZWZvcmUge1xuICBwYWRkaW5nLXRvcDogNzUlOyB9XG5cbi5lbWJlZC1yZXNwb25zaXZlLTFieTE6OmJlZm9yZSB7XG4gIHBhZGRpbmctdG9wOiAxMDAlOyB9XG5cbi5mbGV4LXJvdyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDsgfVxuXG4uZmxleC1jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7IH1cblxuLmZsZXgtcm93LXJldmVyc2Uge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDsgfVxuXG4uZmxleC1jb2x1bW4tcmV2ZXJzZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG5cbi5mbGV4LXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDsgfVxuXG4uZmxleC1ub3dyYXAge1xuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50OyB9XG5cbi5mbGV4LXdyYXAtcmV2ZXJzZSB7XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cblxuLmZsZXgtZmlsbCB7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLmZsZXgtZ3Jvdy0wIHtcbiAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7IH1cblxuLmZsZXgtZ3Jvdy0xIHtcbiAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7IH1cblxuLmZsZXgtc2hyaW5rLTAge1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50OyB9XG5cbi5mbGV4LXNocmluay0xIHtcbiAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDsgfVxuXG4uanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cblxuLmp1c3RpZnktY29udGVudC1lbmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cblxuLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XG5cbi5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG5cbi5qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24taXRlbXMtc3RhcnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1pdGVtcy1lbmQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1pdGVtcy1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1pdGVtcy1zdHJldGNoIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuXG4uYWxpZ24tY29udGVudC1zdGFydCB7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24tY29udGVudC1lbmQge1xuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1jb250ZW50LWNlbnRlciB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1jb250ZW50LWJldHdlZW4ge1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLWNvbnRlbnQtYXJvdW5kIHtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLWNvbnRlbnQtc3RyZXRjaCB7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuXG4uYWxpZ24tc2VsZi1hdXRvIHtcbiAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1zZWxmLXN0YXJ0IHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1zZWxmLWVuZCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLXNlbGYtYmFzZWxpbmUge1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1zZWxmLXN0cmV0Y2gge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5mbGV4LXNtLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXNtLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXNtLXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAuZmxleC1zbS1jb2x1bW4tcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtc20td3JhcCB7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtc20tbm93cmFwIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXNtLXdyYXAtcmV2ZXJzZSB7XG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAuZmxleC1zbS1maWxsIHtcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXNtLWdyb3ctMCB7XG4gICAgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtc20tZ3Jvdy0xIHtcbiAgICBmbGV4LWdyb3c6IDEgIWltcG9ydGFudDsgfVxuICAuZmxleC1zbS1zaHJpbmstMCB7XG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDsgfVxuICAuZmxleC1zbS1zaHJpbmstMSB7XG4gICAgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LXNtLXN0YXJ0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LXNtLWVuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtc20tYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1zbS1hcm91bmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLXNtLXN0YXJ0IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1zbS1lbmQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1zbS1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtc20tYmFzZWxpbmUge1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1zbS1zdHJldGNoIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LXNtLXN0YXJ0IHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtc20tZW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LXNtLWNlbnRlciB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtc20tYmV0d2VlbiB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LXNtLWFyb3VuZCB7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtc20tc3RyZXRjaCB7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLXNtLWF1dG8ge1xuICAgIGFsaWduLXNlbGY6IGF1dG8gIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1zbS1zdGFydCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLXNtLWVuZCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1zbS1jZW50ZXIge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLXNtLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLXNtLXN0cmV0Y2gge1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZmxleC1tZC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDsgfVxuICAuZmxleC1tZC1jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDsgfVxuICAuZmxleC1tZC1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbWQtY29sdW1uLXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LW1kLXdyYXAge1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LW1kLW5vd3JhcCB7XG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDsgfVxuICAuZmxleC1tZC13cmFwLXJldmVyc2Uge1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbWQtZmlsbCB7XG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDsgfVxuICAuZmxleC1tZC1ncm93LTAge1xuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LW1kLWdyb3ctMSB7XG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbWQtc2hyaW5rLTAge1xuICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbWQtc2hyaW5rLTEge1xuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1tZC1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1tZC1lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LW1kLWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LW1kLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbWQtYXJvdW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1tZC1zdGFydCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtbWQtZW5kIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtbWQtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLW1kLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtbWQtc3RyZXRjaCB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1tZC1zdGFydCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LW1kLWVuZCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1tZC1jZW50ZXIge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LW1kLWJldHdlZW4ge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1tZC1hcm91bmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LW1kLXN0cmV0Y2gge1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1tZC1hdXRvIHtcbiAgICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtbWQtc3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1tZC1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtbWQtY2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1tZC1iYXNlbGluZSB7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi1tZC1zdHJldGNoIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmZsZXgtbGctcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbGctY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbGctcm93LXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LWxnLWNvbHVtbi1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDsgfVxuICAuZmxleC1sZy13cmFwIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDsgfVxuICAuZmxleC1sZy1ub3dyYXAge1xuICAgIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbGctd3JhcC1yZXZlcnNlIHtcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LWxnLWZpbGwge1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgtbGctZ3Jvdy0wIHtcbiAgICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDsgfVxuICAuZmxleC1sZy1ncm93LTEge1xuICAgIGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LWxnLXNocmluay0wIHtcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LWxnLXNocmluay0xIHtcbiAgICBmbGV4LXNocmluazogMSAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctc3RhcnQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQtbGctZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1sZy1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC1sZy1iZXR3ZWVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LWxnLWFyb3VuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMtbGctc3RhcnQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLWxnLWVuZCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLWxnLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy1sZy1iYXNlbGluZSB7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLWxnLXN0cmV0Y2gge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtbGctc3RhcnQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1sZy1lbmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtbGctY2VudGVyIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1sZy1iZXR3ZWVuIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWNvbnRlbnQtbGctYXJvdW5kIHtcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC1sZy1zdHJldGNoIHtcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtbGctYXV0byB7XG4gICAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLWxnLXN0YXJ0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtbGctZW5kIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1zZWxmLWxnLWNlbnRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtbGctYmFzZWxpbmUge1xuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYtbGctc3RyZXRjaCB7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuZmxleC14bC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDsgfVxuICAuZmxleC14bC1jb2x1bW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDsgfVxuICAuZmxleC14bC1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgteGwtY29sdW1uLXJldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXhsLXdyYXAge1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXhsLW5vd3JhcCB7XG4gICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDsgfVxuICAuZmxleC14bC13cmFwLXJldmVyc2Uge1xuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgteGwtZmlsbCB7XG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDsgfVxuICAuZmxleC14bC1ncm93LTAge1xuICAgIGZsZXgtZ3JvdzogMCAhaW1wb3J0YW50OyB9XG4gIC5mbGV4LXhsLWdyb3ctMSB7XG4gICAgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgteGwtc2hyaW5rLTAge1xuICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7IH1cbiAgLmZsZXgteGwtc2hyaW5rLTEge1xuICAgIGZsZXgtc2hyaW5rOiAxICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC14bC1zdGFydCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbiAgLmp1c3RpZnktY29udGVudC14bC1lbmQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LXhsLWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuanVzdGlmeS1jb250ZW50LXhsLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG4gIC5qdXN0aWZ5LWNvbnRlbnQteGwtYXJvdW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1pdGVtcy14bC1zdGFydCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMteGwtZW5kIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMteGwtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLWl0ZW1zLXhsLWJhc2VsaW5lIHtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDsgfVxuICAuYWxpZ24taXRlbXMteGwtc3RyZXRjaCB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC14bC1zdGFydCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LXhsLWVuZCB7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC14bC1jZW50ZXIge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LXhsLWJldHdlZW4ge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDsgfVxuICAuYWxpZ24tY29udGVudC14bC1hcm91bmQge1xuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50OyB9XG4gIC5hbGlnbi1jb250ZW50LXhsLXN0cmV0Y2gge1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi14bC1hdXRvIHtcbiAgICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYteGwtc3RhcnQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi14bC1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbiAgLmFsaWduLXNlbGYteGwtY2VudGVyIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi14bC1iYXNlbGluZSB7XG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDsgfVxuICAuYWxpZ24tc2VsZi14bC1zdHJldGNoIHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7IH0gfVxuXG4uZmxvYXQtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7IH1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7IH1cblxuLmZsb2F0LW5vbmUge1xuICBmbG9hdDogbm9uZSAhaW1wb3J0YW50OyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuZmxvYXQtc20tbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDsgfVxuICAuZmxvYXQtc20tcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50OyB9XG4gIC5mbG9hdC1zbS1ub25lIHtcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mbG9hdC1tZC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50OyB9XG4gIC5mbG9hdC1tZC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7IH1cbiAgLmZsb2F0LW1kLW5vbmUge1xuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmZsb2F0LWxnLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7IH1cbiAgLmZsb2F0LWxnLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDsgfVxuICAuZmxvYXQtbGctbm9uZSB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZsb2F0LXhsLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7IH1cbiAgLmZsb2F0LXhsLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDsgfVxuICAuZmxvYXQteGwtbm9uZSB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgfSB9XG5cbi5wb3NpdGlvbi1zdGF0aWMge1xuICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7IH1cblxuLnBvc2l0aW9uLXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7IH1cblxuLnBvc2l0aW9uLWFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7IH1cblxuLnBvc2l0aW9uLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7IH1cblxuLnBvc2l0aW9uLXN0aWNreSB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7IH1cblxuLmZpeGVkLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAzMDsgfVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDMwOyB9XG5cbkBzdXBwb3J0cyAoKHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOiBzdGlja3kpKSB7XG4gIC5zdGlja3ktdG9wIHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTAyMDsgfSB9XG5cbi5zci1vbmx5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiAwOyB9XG5cbi5zci1vbmx5LWZvY3VzYWJsZTphY3RpdmUsIC5zci1vbmx5LWZvY3VzYWJsZTpmb2N1cyB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBjbGlwOiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9XG5cbi5zaGFkb3ctc20ge1xuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSkgIWltcG9ydGFudDsgfVxuXG4uc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7IH1cblxuLnNoYWRvdy1sZyB7XG4gIGJveC1zaGFkb3c6IDAgMXJlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC4xNzUpICFpbXBvcnRhbnQ7IH1cblxuLnNoYWRvdy1ub25lIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi53LTI1IHtcbiAgd2lkdGg6IDI1JSAhaW1wb3J0YW50OyB9XG5cbi53LTUwIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50OyB9XG5cbi53LTc1IHtcbiAgd2lkdGg6IDc1JSAhaW1wb3J0YW50OyB9XG5cbi53LTEwMCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IH1cblxuLnctYXV0byB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLmgtMjUge1xuICBoZWlnaHQ6IDI1JSAhaW1wb3J0YW50OyB9XG5cbi5oLTUwIHtcbiAgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDsgfVxuXG4uaC03NSB7XG4gIGhlaWdodDogNzUlICFpbXBvcnRhbnQ7IH1cblxuLmgtMTAwIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7IH1cblxuLmgtYXV0byB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyB9XG5cbi5tdy0xMDAge1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxuXG4ubWgtMTAwIHtcbiAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50OyB9XG5cbi5tLTAge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDsgfVxuXG4ubXQtMCxcbi5teS0wIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50OyB9XG5cbi5tci0wLFxuLm14LTAge1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDsgfVxuXG4ubWItMCxcbi5teS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XG5cbi5tbC0wLFxuLm14LTAge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50OyB9XG5cbi5tLTEge1xuICBtYXJnaW46IDAuM3JlbSAhaW1wb3J0YW50OyB9XG5cbi5tdC0xLFxuLm15LTEge1xuICBtYXJnaW4tdG9wOiAwLjNyZW0gIWltcG9ydGFudDsgfVxuXG4ubXItMSxcbi5teC0xIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjNyZW0gIWltcG9ydGFudDsgfVxuXG4ubWItMSxcbi5teS0xIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtICFpbXBvcnRhbnQ7IH1cblxuLm1sLTEsXG4ubXgtMSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW0gIWltcG9ydGFudDsgfVxuXG4ubS0yIHtcbiAgbWFyZ2luOiAwLjZyZW0gIWltcG9ydGFudDsgfVxuXG4ubXQtMixcbi5teS0yIHtcbiAgbWFyZ2luLXRvcDogMC42cmVtICFpbXBvcnRhbnQ7IH1cblxuLm1yLTIsXG4ubXgtMiB7XG4gIG1hcmdpbi1yaWdodDogMC42cmVtICFpbXBvcnRhbnQ7IH1cblxuLm1iLTIsXG4ubXktMiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbSAhaW1wb3J0YW50OyB9XG5cbi5tbC0yLFxuLm14LTIge1xuICBtYXJnaW4tbGVmdDogMC42cmVtICFpbXBvcnRhbnQ7IH1cblxuLm0tMyB7XG4gIG1hcmdpbjogMS4ycmVtICFpbXBvcnRhbnQ7IH1cblxuLm10LTMsXG4ubXktMyB7XG4gIG1hcmdpbi10b3A6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG5cbi5tci0zLFxuLm14LTMge1xuICBtYXJnaW4tcmlnaHQ6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG5cbi5tYi0zLFxuLm15LTMge1xuICBtYXJnaW4tYm90dG9tOiAxLjJyZW0gIWltcG9ydGFudDsgfVxuXG4ubWwtMyxcbi5teC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG5cbi5tLTQge1xuICBtYXJnaW46IDEuOHJlbSAhaW1wb3J0YW50OyB9XG5cbi5tdC00LFxuLm15LTQge1xuICBtYXJnaW4tdG9wOiAxLjhyZW0gIWltcG9ydGFudDsgfVxuXG4ubXItNCxcbi5teC00IHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjhyZW0gIWltcG9ydGFudDsgfVxuXG4ubWItNCxcbi5teS00IHtcbiAgbWFyZ2luLWJvdHRvbTogMS44cmVtICFpbXBvcnRhbnQ7IH1cblxuLm1sLTQsXG4ubXgtNCB7XG4gIG1hcmdpbi1sZWZ0OiAxLjhyZW0gIWltcG9ydGFudDsgfVxuXG4ubS01IHtcbiAgbWFyZ2luOiAzLjZyZW0gIWltcG9ydGFudDsgfVxuXG4ubXQtNSxcbi5teS01IHtcbiAgbWFyZ2luLXRvcDogMy42cmVtICFpbXBvcnRhbnQ7IH1cblxuLm1yLTUsXG4ubXgtNSB7XG4gIG1hcmdpbi1yaWdodDogMy42cmVtICFpbXBvcnRhbnQ7IH1cblxuLm1iLTUsXG4ubXktNSB7XG4gIG1hcmdpbi1ib3R0b206IDMuNnJlbSAhaW1wb3J0YW50OyB9XG5cbi5tbC01LFxuLm14LTUge1xuICBtYXJnaW4tbGVmdDogMy42cmVtICFpbXBvcnRhbnQ7IH1cblxuLnAtMCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxuXG4ucHQtMCxcbi5weS0wIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDsgfVxuXG4ucHItMCxcbi5weC0wIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50OyB9XG5cbi5wYi0wLFxuLnB5LTAge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XG5cbi5wbC0wLFxuLnB4LTAge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDsgfVxuXG4ucC0xIHtcbiAgcGFkZGluZzogMC4zcmVtICFpbXBvcnRhbnQ7IH1cblxuLnB0LTEsXG4ucHktMSB7XG4gIHBhZGRpbmctdG9wOiAwLjNyZW0gIWltcG9ydGFudDsgfVxuXG4ucHItMSxcbi5weC0xIHtcbiAgcGFkZGluZy1yaWdodDogMC4zcmVtICFpbXBvcnRhbnQ7IH1cblxuLnBiLTEsXG4ucHktMSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW0gIWltcG9ydGFudDsgfVxuXG4ucGwtMSxcbi5weC0xIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjNyZW0gIWltcG9ydGFudDsgfVxuXG4ucC0yIHtcbiAgcGFkZGluZzogMC42cmVtICFpbXBvcnRhbnQ7IH1cblxuLnB0LTIsXG4ucHktMiB7XG4gIHBhZGRpbmctdG9wOiAwLjZyZW0gIWltcG9ydGFudDsgfVxuXG4ucHItMixcbi5weC0yIHtcbiAgcGFkZGluZy1yaWdodDogMC42cmVtICFpbXBvcnRhbnQ7IH1cblxuLnBiLTIsXG4ucHktMiB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjZyZW0gIWltcG9ydGFudDsgfVxuXG4ucGwtMixcbi5weC0yIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjZyZW0gIWltcG9ydGFudDsgfVxuXG4ucC0zIHtcbiAgcGFkZGluZzogMS4ycmVtICFpbXBvcnRhbnQ7IH1cblxuLnB0LTMsXG4ucHktMyB7XG4gIHBhZGRpbmctdG9wOiAxLjJyZW0gIWltcG9ydGFudDsgfVxuXG4ucHItMyxcbi5weC0zIHtcbiAgcGFkZGluZy1yaWdodDogMS4ycmVtICFpbXBvcnRhbnQ7IH1cblxuLnBiLTMsXG4ucHktMyB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjJyZW0gIWltcG9ydGFudDsgfVxuXG4ucGwtMyxcbi5weC0zIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjJyZW0gIWltcG9ydGFudDsgfVxuXG4ucC00IHtcbiAgcGFkZGluZzogMS44cmVtICFpbXBvcnRhbnQ7IH1cblxuLnB0LTQsXG4ucHktNCB7XG4gIHBhZGRpbmctdG9wOiAxLjhyZW0gIWltcG9ydGFudDsgfVxuXG4ucHItNCxcbi5weC00IHtcbiAgcGFkZGluZy1yaWdodDogMS44cmVtICFpbXBvcnRhbnQ7IH1cblxuLnBiLTQsXG4ucHktNCB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjhyZW0gIWltcG9ydGFudDsgfVxuXG4ucGwtNCxcbi5weC00IHtcbiAgcGFkZGluZy1sZWZ0OiAxLjhyZW0gIWltcG9ydGFudDsgfVxuXG4ucC01IHtcbiAgcGFkZGluZzogMy42cmVtICFpbXBvcnRhbnQ7IH1cblxuLnB0LTUsXG4ucHktNSB7XG4gIHBhZGRpbmctdG9wOiAzLjZyZW0gIWltcG9ydGFudDsgfVxuXG4ucHItNSxcbi5weC01IHtcbiAgcGFkZGluZy1yaWdodDogMy42cmVtICFpbXBvcnRhbnQ7IH1cblxuLnBiLTUsXG4ucHktNSB7XG4gIHBhZGRpbmctYm90dG9tOiAzLjZyZW0gIWltcG9ydGFudDsgfVxuXG4ucGwtNSxcbi5weC01IHtcbiAgcGFkZGluZy1sZWZ0OiAzLjZyZW0gIWltcG9ydGFudDsgfVxuXG4ubS1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLm10LWF1dG8sXG4ubXktYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDsgfVxuXG4ubXItYXV0byxcbi5teC1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLm1iLWF1dG8sXG4ubXktYXV0byB7XG4gIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDsgfVxuXG4ubWwtYXV0byxcbi5teC1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDsgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLm0tc20tMCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH1cbiAgLm10LXNtLTAsXG4gIC5teS1zbS0wIHtcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7IH1cbiAgLm1yLXNtLTAsXG4gIC5teC1zbS0wIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDsgfVxuICAubWItc20tMCxcbiAgLm15LXNtLTAge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDsgfVxuICAubWwtc20tMCxcbiAgLm14LXNtLTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7IH1cbiAgLm0tc20tMSB7XG4gICAgbWFyZ2luOiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAubXQtc20tMSxcbiAgLm15LXNtLTEge1xuICAgIG1hcmdpbi10b3A6IDAuM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5tci1zbS0xLFxuICAubXgtc20tMSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAubWItc20tMSxcbiAgLm15LXNtLTEge1xuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5tbC1zbS0xLFxuICAubXgtc20tMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5tLXNtLTIge1xuICAgIG1hcmdpbjogMC42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LXNtLTIsXG4gIC5teS1zbS0yIHtcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW0gIWltcG9ydGFudDsgfVxuICAubXItc20tMixcbiAgLm14LXNtLTIge1xuICAgIG1hcmdpbi1yaWdodDogMC42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLXNtLTIsXG4gIC5teS1zbS0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW0gIWltcG9ydGFudDsgfVxuICAubWwtc20tMixcbiAgLm14LXNtLTIge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjZyZW0gIWltcG9ydGFudDsgfVxuICAubS1zbS0zIHtcbiAgICBtYXJnaW46IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC1zbS0zLFxuICAubXktc20tMyB7XG4gICAgbWFyZ2luLXRvcDogMS4ycmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLXNtLTMsXG4gIC5teC1zbS0zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi1zbS0zLFxuICAubXktc20tMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLXNtLTMsXG4gIC5teC1zbS0zIHtcbiAgICBtYXJnaW4tbGVmdDogMS4ycmVtICFpbXBvcnRhbnQ7IH1cbiAgLm0tc20tNCB7XG4gICAgbWFyZ2luOiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAubXQtc20tNCxcbiAgLm15LXNtLTQge1xuICAgIG1hcmdpbi10b3A6IDEuOHJlbSAhaW1wb3J0YW50OyB9XG4gIC5tci1zbS00LFxuICAubXgtc20tNCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAubWItc20tNCxcbiAgLm15LXNtLTQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuOHJlbSAhaW1wb3J0YW50OyB9XG4gIC5tbC1zbS00LFxuICAubXgtc20tNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuOHJlbSAhaW1wb3J0YW50OyB9XG4gIC5tLXNtLTUge1xuICAgIG1hcmdpbjogMy42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LXNtLTUsXG4gIC5teS1zbS01IHtcbiAgICBtYXJnaW4tdG9wOiAzLjZyZW0gIWltcG9ydGFudDsgfVxuICAubXItc20tNSxcbiAgLm14LXNtLTUge1xuICAgIG1hcmdpbi1yaWdodDogMy42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLXNtLTUsXG4gIC5teS1zbS01IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjZyZW0gIWltcG9ydGFudDsgfVxuICAubWwtc20tNSxcbiAgLm14LXNtLTUge1xuICAgIG1hcmdpbi1sZWZ0OiAzLjZyZW0gIWltcG9ydGFudDsgfVxuICAucC1zbS0wIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IH1cbiAgLnB0LXNtLTAsXG4gIC5weS1zbS0wIHtcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50OyB9XG4gIC5wci1zbS0wLFxuICAucHgtc20tMCB7XG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50OyB9XG4gIC5wYi1zbS0wLFxuICAucHktc20tMCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDsgfVxuICAucGwtc20tMCxcbiAgLnB4LXNtLTAge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50OyB9XG4gIC5wLXNtLTEge1xuICAgIHBhZGRpbmc6IDAuM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5wdC1zbS0xLFxuICAucHktc20tMSB7XG4gICAgcGFkZGluZy10b3A6IDAuM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5wci1zbS0xLFxuICAucHgtc20tMSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4zcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBiLXNtLTEsXG4gIC5weS1zbS0xIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBsLXNtLTEsXG4gIC5weC1zbS0xIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5wLXNtLTIge1xuICAgIHBhZGRpbmc6IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wdC1zbS0yLFxuICAucHktc20tMiB7XG4gICAgcGFkZGluZy10b3A6IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wci1zbS0yLFxuICAucHgtc20tMiB7XG4gICAgcGFkZGluZy1yaWdodDogMC42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBiLXNtLTIsXG4gIC5weS1zbS0yIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBsLXNtLTIsXG4gIC5weC1zbS0yIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wLXNtLTMge1xuICAgIHBhZGRpbmc6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wdC1zbS0zLFxuICAucHktc20tMyB7XG4gICAgcGFkZGluZy10b3A6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wci1zbS0zLFxuICAucHgtc20tMyB7XG4gICAgcGFkZGluZy1yaWdodDogMS4ycmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBiLXNtLTMsXG4gIC5weS1zbS0zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4ycmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBsLXNtLTMsXG4gIC5weC1zbS0zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wLXNtLTQge1xuICAgIHBhZGRpbmc6IDEuOHJlbSAhaW1wb3J0YW50OyB9XG4gIC5wdC1zbS00LFxuICAucHktc20tNCB7XG4gICAgcGFkZGluZy10b3A6IDEuOHJlbSAhaW1wb3J0YW50OyB9XG4gIC5wci1zbS00LFxuICAucHgtc20tNCB7XG4gICAgcGFkZGluZy1yaWdodDogMS44cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBiLXNtLTQsXG4gIC5weS1zbS00IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS44cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBsLXNtLTQsXG4gIC5weC1zbS00IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuOHJlbSAhaW1wb3J0YW50OyB9XG4gIC5wLXNtLTUge1xuICAgIHBhZGRpbmc6IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wdC1zbS01LFxuICAucHktc20tNSB7XG4gICAgcGFkZGluZy10b3A6IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wci1zbS01LFxuICAucHgtc20tNSB7XG4gICAgcGFkZGluZy1yaWdodDogMy42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBiLXNtLTUsXG4gIC5weS1zbS01IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnBsLXNtLTUsXG4gIC5weC1zbS01IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tLXNtLWF1dG8ge1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5tdC1zbS1hdXRvLFxuICAubXktc20tYXV0byB7XG4gICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5tci1zbS1hdXRvLFxuICAubXgtc20tYXV0byB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLm1iLXNtLWF1dG8sXG4gIC5teS1zbS1hdXRvIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLm1sLXNtLWF1dG8sXG4gIC5teC1zbS1hdXRvIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tLW1kLTAge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50OyB9XG4gIC5tdC1tZC0wLFxuICAubXktbWQtMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50OyB9XG4gIC5tci1tZC0wLFxuICAubXgtbWQtMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7IH1cbiAgLm1iLW1kLTAsXG4gIC5teS1tZC0wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbiAgLm1sLW1kLTAsXG4gIC5teC1tZC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50OyB9XG4gIC5tLW1kLTEge1xuICAgIG1hcmdpbjogMC4zcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LW1kLTEsXG4gIC5teS1tZC0xIHtcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAubXItbWQtMSxcbiAgLm14LW1kLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLW1kLTEsXG4gIC5teS1tZC0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAubWwtbWQtMSxcbiAgLm14LW1kLTEge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAubS1tZC0yIHtcbiAgICBtYXJnaW46IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC1tZC0yLFxuICAubXktbWQtMiB7XG4gICAgbWFyZ2luLXRvcDogMC42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLW1kLTIsXG4gIC5teC1tZC0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi1tZC0yLFxuICAubXktbWQtMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLW1kLTIsXG4gIC5teC1tZC0yIHtcbiAgICBtYXJnaW4tbGVmdDogMC42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm0tbWQtMyB7XG4gICAgbWFyZ2luOiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAubXQtbWQtMyxcbiAgLm15LW1kLTMge1xuICAgIG1hcmdpbi10b3A6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tci1tZC0zLFxuICAubXgtbWQtMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAubWItbWQtMyxcbiAgLm15LW1kLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tbC1tZC0zLFxuICAubXgtbWQtMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tLW1kLTQge1xuICAgIG1hcmdpbjogMS44cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LW1kLTQsXG4gIC5teS1tZC00IHtcbiAgICBtYXJnaW4tdG9wOiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAubXItbWQtNCxcbiAgLm14LW1kLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS44cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLW1kLTQsXG4gIC5teS1tZC00IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAubWwtbWQtNCxcbiAgLm14LW1kLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAubS1tZC01IHtcbiAgICBtYXJnaW46IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC1tZC01LFxuICAubXktbWQtNSB7XG4gICAgbWFyZ2luLXRvcDogMy42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLW1kLTUsXG4gIC5teC1tZC01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi1tZC01LFxuICAubXktbWQtNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLW1kLTUsXG4gIC5teC1tZC01IHtcbiAgICBtYXJnaW4tbGVmdDogMy42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAtbWQtMCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XG4gIC5wdC1tZC0wLFxuICAucHktbWQtMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDsgfVxuICAucHItbWQtMCxcbiAgLnB4LW1kLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDsgfVxuICAucGItbWQtMCxcbiAgLnB5LW1kLTAge1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbiAgLnBsLW1kLTAsXG4gIC5weC1tZC0wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDsgfVxuICAucC1tZC0xIHtcbiAgICBwYWRkaW5nOiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAucHQtbWQtMSxcbiAgLnB5LW1kLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAucHItbWQtMSxcbiAgLnB4LW1kLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi1tZC0xLFxuICAucHktbWQtMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC1tZC0xLFxuICAucHgtbWQtMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAucC1tZC0yIHtcbiAgICBwYWRkaW5nOiAwLjZyZW0gIWltcG9ydGFudDsgfVxuICAucHQtbWQtMixcbiAgLnB5LW1kLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjZyZW0gIWltcG9ydGFudDsgfVxuICAucHItbWQtMixcbiAgLnB4LW1kLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi1tZC0yLFxuICAucHktbWQtMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC1tZC0yLFxuICAucHgtbWQtMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjZyZW0gIWltcG9ydGFudDsgfVxuICAucC1tZC0zIHtcbiAgICBwYWRkaW5nOiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAucHQtbWQtMyxcbiAgLnB5LW1kLTMge1xuICAgIHBhZGRpbmctdG9wOiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAucHItbWQtMyxcbiAgLnB4LW1kLTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi1tZC0zLFxuICAucHktbWQtMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC1tZC0zLFxuICAucHgtbWQtMyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAucC1tZC00IHtcbiAgICBwYWRkaW5nOiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAucHQtbWQtNCxcbiAgLnB5LW1kLTQge1xuICAgIHBhZGRpbmctdG9wOiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAucHItbWQtNCxcbiAgLnB4LW1kLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuOHJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi1tZC00LFxuICAucHktbWQtNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuOHJlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC1tZC00LFxuICAucHgtbWQtNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAucC1tZC01IHtcbiAgICBwYWRkaW5nOiAzLjZyZW0gIWltcG9ydGFudDsgfVxuICAucHQtbWQtNSxcbiAgLnB5LW1kLTUge1xuICAgIHBhZGRpbmctdG9wOiAzLjZyZW0gIWltcG9ydGFudDsgfVxuICAucHItbWQtNSxcbiAgLnB4LW1kLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi1tZC01LFxuICAucHktbWQtNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC1tZC01LFxuICAucHgtbWQtNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzLjZyZW0gIWltcG9ydGFudDsgfVxuICAubS1tZC1hdXRvIHtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDsgfVxuICAubXQtbWQtYXV0byxcbiAgLm15LW1kLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDsgfVxuICAubXItbWQtYXV0byxcbiAgLm14LW1kLWF1dG8ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5tYi1tZC1hdXRvLFxuICAubXktbWQtYXV0byB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5tbC1tZC1hdXRvLFxuICAubXgtbWQtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubS1sZy0wIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDsgfVxuICAubXQtbGctMCxcbiAgLm15LWxnLTAge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgfVxuICAubXItbGctMCxcbiAgLm14LWxnLTAge1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50OyB9XG4gIC5tYi1sZy0wLFxuICAubXktbGctMCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XG4gIC5tbC1sZy0wLFxuICAubXgtbGctMCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDsgfVxuICAubS1sZy0xIHtcbiAgICBtYXJnaW46IDAuM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC1sZy0xLFxuICAubXktbGctMSB7XG4gICAgbWFyZ2luLXRvcDogMC4zcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLWxnLTEsXG4gIC5teC1sZy0xIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi1sZy0xLFxuICAubXktbGctMSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLWxnLTEsXG4gIC5teC1sZy0xIHtcbiAgICBtYXJnaW4tbGVmdDogMC4zcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm0tbGctMiB7XG4gICAgbWFyZ2luOiAwLjZyZW0gIWltcG9ydGFudDsgfVxuICAubXQtbGctMixcbiAgLm15LWxnLTIge1xuICAgIG1hcmdpbi10b3A6IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tci1sZy0yLFxuICAubXgtbGctMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW0gIWltcG9ydGFudDsgfVxuICAubWItbGctMixcbiAgLm15LWxnLTIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tbC1sZy0yLFxuICAubXgtbGctMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tLWxnLTMge1xuICAgIG1hcmdpbjogMS4ycmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LWxnLTMsXG4gIC5teS1sZy0zIHtcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAubXItbGctMyxcbiAgLm14LWxnLTMge1xuICAgIG1hcmdpbi1yaWdodDogMS4ycmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLWxnLTMsXG4gIC5teS1sZy0zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAubWwtbGctMyxcbiAgLm14LWxnLTMge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAubS1sZy00IHtcbiAgICBtYXJnaW46IDEuOHJlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC1sZy00LFxuICAubXktbGctNCB7XG4gICAgbWFyZ2luLXRvcDogMS44cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLWxnLTQsXG4gIC5teC1sZy00IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuOHJlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi1sZy00LFxuICAubXktbGctNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS44cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLWxnLTQsXG4gIC5teC1sZy00IHtcbiAgICBtYXJnaW4tbGVmdDogMS44cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm0tbGctNSB7XG4gICAgbWFyZ2luOiAzLjZyZW0gIWltcG9ydGFudDsgfVxuICAubXQtbGctNSxcbiAgLm15LWxnLTUge1xuICAgIG1hcmdpbi10b3A6IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tci1sZy01LFxuICAubXgtbGctNSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzLjZyZW0gIWltcG9ydGFudDsgfVxuICAubWItbGctNSxcbiAgLm15LWxnLTUge1xuICAgIG1hcmdpbi1ib3R0b206IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tbC1sZy01LFxuICAubXgtbGctNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wLWxnLTAge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgfVxuICAucHQtbGctMCxcbiAgLnB5LWxnLTAge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7IH1cbiAgLnByLWxnLTAsXG4gIC5weC1sZy0wIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7IH1cbiAgLnBiLWxnLTAsXG4gIC5weS1sZy0wIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XG4gIC5wbC1sZy0wLFxuICAucHgtbGctMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7IH1cbiAgLnAtbGctMSB7XG4gICAgcGFkZGluZzogMC4zcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnB0LWxnLTEsXG4gIC5weS1sZy0xIHtcbiAgICBwYWRkaW5nLXRvcDogMC4zcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnByLWxnLTEsXG4gIC5weC1sZy0xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAucGItbGctMSxcbiAgLnB5LWxnLTEge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAucGwtbGctMSxcbiAgLnB4LWxnLTEge1xuICAgIHBhZGRpbmctbGVmdDogMC4zcmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAtbGctMiB7XG4gICAgcGFkZGluZzogMC42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnB0LWxnLTIsXG4gIC5weS1sZy0yIHtcbiAgICBwYWRkaW5nLXRvcDogMC42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnByLWxnLTIsXG4gIC5weC1sZy0yIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjZyZW0gIWltcG9ydGFudDsgfVxuICAucGItbGctMixcbiAgLnB5LWxnLTIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjZyZW0gIWltcG9ydGFudDsgfVxuICAucGwtbGctMixcbiAgLnB4LWxnLTIge1xuICAgIHBhZGRpbmctbGVmdDogMC42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAtbGctMyB7XG4gICAgcGFkZGluZzogMS4ycmVtICFpbXBvcnRhbnQ7IH1cbiAgLnB0LWxnLTMsXG4gIC5weS1sZy0zIHtcbiAgICBwYWRkaW5nLXRvcDogMS4ycmVtICFpbXBvcnRhbnQ7IH1cbiAgLnByLWxnLTMsXG4gIC5weC1sZy0zIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAucGItbGctMyxcbiAgLnB5LWxnLTMge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAucGwtbGctMyxcbiAgLnB4LWxnLTMge1xuICAgIHBhZGRpbmctbGVmdDogMS4ycmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAtbGctNCB7XG4gICAgcGFkZGluZzogMS44cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnB0LWxnLTQsXG4gIC5weS1sZy00IHtcbiAgICBwYWRkaW5nLXRvcDogMS44cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnByLWxnLTQsXG4gIC5weC1sZy00IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAucGItbGctNCxcbiAgLnB5LWxnLTQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAucGwtbGctNCxcbiAgLnB4LWxnLTQge1xuICAgIHBhZGRpbmctbGVmdDogMS44cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAtbGctNSB7XG4gICAgcGFkZGluZzogMy42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnB0LWxnLTUsXG4gIC5weS1sZy01IHtcbiAgICBwYWRkaW5nLXRvcDogMy42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnByLWxnLTUsXG4gIC5weC1sZy01IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjZyZW0gIWltcG9ydGFudDsgfVxuICAucGItbGctNSxcbiAgLnB5LWxnLTUge1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjZyZW0gIWltcG9ydGFudDsgfVxuICAucGwtbGctNSxcbiAgLnB4LWxnLTUge1xuICAgIHBhZGRpbmctbGVmdDogMy42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm0tbGctYXV0byB7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLm10LWxnLWF1dG8sXG4gIC5teS1sZy1hdXRvIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7IH1cbiAgLm1yLWxnLWF1dG8sXG4gIC5teC1sZy1hdXRvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDsgfVxuICAubWItbGctYXV0byxcbiAgLm15LWxnLWF1dG8ge1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDsgfVxuICAubWwtbGctYXV0byxcbiAgLm14LWxnLWF1dG8ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5tLXhsLTAge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50OyB9XG4gIC5tdC14bC0wLFxuICAubXkteGwtMCB7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50OyB9XG4gIC5tci14bC0wLFxuICAubXgteGwtMCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7IH1cbiAgLm1iLXhsLTAsXG4gIC5teS14bC0wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbiAgLm1sLXhsLTAsXG4gIC5teC14bC0wIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50OyB9XG4gIC5tLXhsLTEge1xuICAgIG1hcmdpbjogMC4zcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LXhsLTEsXG4gIC5teS14bC0xIHtcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAubXIteGwtMSxcbiAgLm14LXhsLTEge1xuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLXhsLTEsXG4gIC5teS14bC0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAubWwteGwtMSxcbiAgLm14LXhsLTEge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAubS14bC0yIHtcbiAgICBtYXJnaW46IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC14bC0yLFxuICAubXkteGwtMiB7XG4gICAgbWFyZ2luLXRvcDogMC42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLXhsLTIsXG4gIC5teC14bC0yIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi14bC0yLFxuICAubXkteGwtMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLXhsLTIsXG4gIC5teC14bC0yIHtcbiAgICBtYXJnaW4tbGVmdDogMC42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm0teGwtMyB7XG4gICAgbWFyZ2luOiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAubXQteGwtMyxcbiAgLm15LXhsLTMge1xuICAgIG1hcmdpbi10b3A6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tci14bC0zLFxuICAubXgteGwtMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAubWIteGwtMyxcbiAgLm15LXhsLTMge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tbC14bC0zLFxuICAubXgteGwtMyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tLXhsLTQge1xuICAgIG1hcmdpbjogMS44cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm10LXhsLTQsXG4gIC5teS14bC00IHtcbiAgICBtYXJnaW4tdG9wOiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAubXIteGwtNCxcbiAgLm14LXhsLTQge1xuICAgIG1hcmdpbi1yaWdodDogMS44cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1iLXhsLTQsXG4gIC5teS14bC00IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAubWwteGwtNCxcbiAgLm14LXhsLTQge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAubS14bC01IHtcbiAgICBtYXJnaW46IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tdC14bC01LFxuICAubXkteGwtNSB7XG4gICAgbWFyZ2luLXRvcDogMy42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1yLXhsLTUsXG4gIC5teC14bC01IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5tYi14bC01LFxuICAubXkteGwtNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLm1sLXhsLTUsXG4gIC5teC14bC01IHtcbiAgICBtYXJnaW4tbGVmdDogMy42cmVtICFpbXBvcnRhbnQ7IH1cbiAgLnAteGwtMCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XG4gIC5wdC14bC0wLFxuICAucHkteGwtMCB7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDsgfVxuICAucHIteGwtMCxcbiAgLnB4LXhsLTAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDsgfVxuICAucGIteGwtMCxcbiAgLnB5LXhsLTAge1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbiAgLnBsLXhsLTAsXG4gIC5weC14bC0wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDsgfVxuICAucC14bC0xIHtcbiAgICBwYWRkaW5nOiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAucHQteGwtMSxcbiAgLnB5LXhsLTEge1xuICAgIHBhZGRpbmctdG9wOiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAucHIteGwtMSxcbiAgLnB4LXhsLTEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi14bC0xLFxuICAucHkteGwtMSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuM3JlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC14bC0xLFxuICAucHgteGwtMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjNyZW0gIWltcG9ydGFudDsgfVxuICAucC14bC0yIHtcbiAgICBwYWRkaW5nOiAwLjZyZW0gIWltcG9ydGFudDsgfVxuICAucHQteGwtMixcbiAgLnB5LXhsLTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjZyZW0gIWltcG9ydGFudDsgfVxuICAucHIteGwtMixcbiAgLnB4LXhsLTIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi14bC0yLFxuICAucHkteGwtMiB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC14bC0yLFxuICAucHgteGwtMiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjZyZW0gIWltcG9ydGFudDsgfVxuICAucC14bC0zIHtcbiAgICBwYWRkaW5nOiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAucHQteGwtMyxcbiAgLnB5LXhsLTMge1xuICAgIHBhZGRpbmctdG9wOiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAucHIteGwtMyxcbiAgLnB4LXhsLTMge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi14bC0zLFxuICAucHkteGwtMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuMnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC14bC0zLFxuICAucHgteGwtMyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjJyZW0gIWltcG9ydGFudDsgfVxuICAucC14bC00IHtcbiAgICBwYWRkaW5nOiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAucHQteGwtNCxcbiAgLnB5LXhsLTQge1xuICAgIHBhZGRpbmctdG9wOiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAucHIteGwtNCxcbiAgLnB4LXhsLTQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuOHJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi14bC00LFxuICAucHkteGwtNCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuOHJlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC14bC00LFxuICAucHgteGwtNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjhyZW0gIWltcG9ydGFudDsgfVxuICAucC14bC01IHtcbiAgICBwYWRkaW5nOiAzLjZyZW0gIWltcG9ydGFudDsgfVxuICAucHQteGwtNSxcbiAgLnB5LXhsLTUge1xuICAgIHBhZGRpbmctdG9wOiAzLjZyZW0gIWltcG9ydGFudDsgfVxuICAucHIteGwtNSxcbiAgLnB4LXhsLTUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYi14bC01LFxuICAucHkteGwtNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDMuNnJlbSAhaW1wb3J0YW50OyB9XG4gIC5wbC14bC01LFxuICAucHgteGwtNSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzLjZyZW0gIWltcG9ydGFudDsgfVxuICAubS14bC1hdXRvIHtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDsgfVxuICAubXQteGwtYXV0byxcbiAgLm15LXhsLWF1dG8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDsgfVxuICAubXIteGwtYXV0byxcbiAgLm14LXhsLWF1dG8ge1xuICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5tYi14bC1hdXRvLFxuICAubXkteGwtYXV0byB7XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50OyB9XG4gIC5tbC14bC1hdXRvLFxuICAubXgteGwtYXV0byB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDsgfSB9XG5cbi50ZXh0LW1vbm9zcGFjZSB7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlOyB9XG5cbi50ZXh0LWp1c3RpZnkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtbm93cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50OyB9XG5cbi50ZXh0LXRydW5jYXRlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDsgfVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC50ZXh0LXNtLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDsgfVxuICAudGV4dC1zbS1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDsgfVxuICAudGV4dC1zbS1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC50ZXh0LW1kLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDsgfVxuICAudGV4dC1tZC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDsgfVxuICAudGV4dC1tZC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC50ZXh0LWxnLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDsgfVxuICAudGV4dC1sZy1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDsgfVxuICAudGV4dC1sZy1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudGV4dC14bC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7IH1cbiAgLnRleHQteGwtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7IH1cbiAgLnRleHQteGwtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsgfSB9XG5cbi50ZXh0LWxvd2VyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDsgfVxuXG4udGV4dC11cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtY2FwaXRhbGl6ZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7IH1cblxuLmZvbnQtd2VpZ2h0LWxpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50OyB9XG5cbi5mb250LXdlaWdodC1ub3JtYWwge1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7IH1cblxuLmZvbnQtd2VpZ2h0LWJvbGQge1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7IH1cblxuLmZvbnQtaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyB9XG5cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50OyB9XG5cbmEudGV4dC1wcmltYXJ5OmhvdmVyLCBhLnRleHQtcHJpbWFyeTpmb2N1cyB7XG4gIGNvbG9yOiAjMzI0MDhmICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICM1NTYyYWQgIWltcG9ydGFudDsgfVxuXG5hLnRleHQtc2Vjb25kYXJ5OmhvdmVyLCBhLnRleHQtc2Vjb25kYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICM0MzRlOGMgIWltcG9ydGFudDsgfVxuXG4udGV4dC1zdWNjZXNzIHtcbiAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDsgfVxuXG5hLnRleHQtc3VjY2Vzczpob3ZlciwgYS50ZXh0LXN1Y2Nlc3M6Zm9jdXMge1xuICBjb2xvcjogIzFlN2UzNCAhaW1wb3J0YW50OyB9XG5cbi50ZXh0LWluZm8ge1xuICBjb2xvcjogI2NjYyAhaW1wb3J0YW50OyB9XG5cbmEudGV4dC1pbmZvOmhvdmVyLCBhLnRleHQtaW5mbzpmb2N1cyB7XG4gIGNvbG9yOiAjYjNiM2IzICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtd2FybmluZyB7XG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7IH1cblxuYS50ZXh0LXdhcm5pbmc6aG92ZXIsIGEudGV4dC13YXJuaW5nOmZvY3VzIHtcbiAgY29sb3I6ICNkMzllMDAgIWltcG9ydGFudDsgfVxuXG4udGV4dC1kYW5nZXIge1xuICBjb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50OyB9XG5cbmEudGV4dC1kYW5nZXI6aG92ZXIsIGEudGV4dC1kYW5nZXI6Zm9jdXMge1xuICBjb2xvcjogI2JkMjEzMCAhaW1wb3J0YW50OyB9XG5cbi50ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICNmM2YzZjMgIWltcG9ydGFudDsgfVxuXG5hLnRleHQtbGlnaHQ6aG92ZXIsIGEudGV4dC1saWdodDpmb2N1cyB7XG4gIGNvbG9yOiAjZGFkYWRhICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtZGFyayB7XG4gIGNvbG9yOiAjMTUxNTE1ICFpbXBvcnRhbnQ7IH1cblxuYS50ZXh0LWRhcms6aG92ZXIsIGEudGV4dC1kYXJrOmZvY3VzIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtYm9keSB7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtbXV0ZWQge1xuICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50OyB9XG5cbi50ZXh0LWJsYWNrLTUwIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50OyB9XG5cbi50ZXh0LXdoaXRlLTUwIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAhaW1wb3J0YW50OyB9XG5cbi50ZXh0LWhpZGUge1xuICBmb250OiAwLzAgYTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDsgfVxuXG4udmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDsgfVxuXG4uaW52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7IH1cblxuQG1lZGlhIHByaW50IHtcbiAgKixcbiAgKjo6YmVmb3JlLFxuICAqOjphZnRlciB7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgYTpub3QoLmJ0bikge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG4gIGFiYnJbdGl0bGVdOjphZnRlciB7XG4gICAgY29udGVudDogXCIgKFwiIGF0dHIodGl0bGUpIFwiKVwiOyB9XG4gIHByZSB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7IH1cbiAgcHJlLFxuICBibG9ja3F1b3RlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWRiNWJkO1xuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsgfVxuICB0aGVhZCB7XG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwOyB9XG4gIHRyLFxuICBpbWcge1xuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsgfVxuICBwLFxuICBoMixcbiAgaDMge1xuICAgIG9ycGhhbnM6IDM7XG4gICAgd2lkb3dzOiAzOyB9XG4gIGgyLFxuICBoMyB7XG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7IH1cbiAgQHBhZ2Uge1xuICAgIHNpemU6IGEzOyB9XG4gIGJvZHkge1xuICAgIG1pbi13aWR0aDogOTkycHggIWltcG9ydGFudDsgfVxuICAuY29udGFpbmVyIHtcbiAgICBtaW4td2lkdGg6IDk5MnB4ICFpbXBvcnRhbnQ7IH1cbiAgLm5hdmJhciB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuYmFkZ2Uge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7IH1cbiAgLnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7IH1cbiAgICAudGFibGUgdGQsXG4gICAgLnRhYmxlIHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDsgfVxuICAudGFibGUtYm9yZGVyZWQgdGgsXG4gIC50YWJsZS1ib3JkZXJlZCB0ZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50OyB9XG4gIC50YWJsZS1kYXJrIHtcbiAgICBjb2xvcjogaW5oZXJpdDsgfVxuICAgIC50YWJsZS1kYXJrIHRoLFxuICAgIC50YWJsZS1kYXJrIHRkLFxuICAgIC50YWJsZS1kYXJrIHRoZWFkIHRoLFxuICAgIC50YWJsZS1kYXJrIHRib2R5ICsgdGJvZHkge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2OyB9XG4gIC50YWJsZSAudGhlYWQtZGFyayB0aCB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2OyB9IH1cblxuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG5ib2R5ID4gKiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxuXG4uYmctcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmOyB9XG4gIC5iZy1wcmltYXJ5IGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyB9XG4gIC5iZy1wcmltYXJ5IGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsgfVxuICAuYmctcHJpbWFyeSBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyB9XG4gIC5iZy1wcmltYXJ5IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsgfVxuICAuYmctcHJpbWFyeSAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgY29sb3I6ICNmZmY7IH1cblxuLmJnLXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjZmZmOyB9XG4gIC5iZy1zZWNvbmRhcnkgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IH1cbiAgLmJnLXNlY29uZGFyeSBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IH1cbiAgLmJnLXNlY29uZGFyeSBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyB9XG4gIC5iZy1zZWNvbmRhcnkgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyB9XG4gIC5iZy1zZWNvbmRhcnkgLmlucHV0LWdyb3VwLXRleHQge1xuICAgIGNvbG9yOiAjZmZmOyB9XG5cbi5iZy1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmY7IH1cbiAgLmJnLXN1Y2Nlc3MgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IH1cbiAgLmJnLXN1Y2Nlc3MgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyB9XG4gIC5iZy1zdWNjZXNzIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IH1cbiAgLmJnLXN1Y2Nlc3MgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyB9XG4gIC5iZy1zdWNjZXNzIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICBjb2xvcjogI2ZmZjsgfVxuXG4uYmctaW5mbyB7XG4gIGNvbG9yOiAjMjEyNTI5OyB9XG4gIC5iZy1pbmZvIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgzMywgMzcsIDQxLCAwLjgpOyB9XG4gIC5iZy1pbmZvIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMzMsIDM3LCA0MSwgMC44KTsgfVxuICAuYmctaW5mbyBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgzMywgMzcsIDQxLCAwLjgpOyB9XG4gIC5iZy1pbmZvIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMzMsIDM3LCA0MSwgMC44KTsgfVxuICAuYmctaW5mbyAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgY29sb3I6ICMyMTI1Mjk7IH1cblxuLmJnLXdhcm5pbmcge1xuICBjb2xvcjogIzIxMjUyOTsgfVxuICAuYmctd2FybmluZyBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMzMsIDM3LCA0MSwgMC44KTsgfVxuICAuYmctd2FybmluZyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDMzLCAzNywgNDEsIDAuOCk7IH1cbiAgLmJnLXdhcm5pbmcgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMzMsIDM3LCA0MSwgMC44KTsgfVxuICAuYmctd2FybmluZyBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDMzLCAzNywgNDEsIDAuOCk7IH1cbiAgLmJnLXdhcm5pbmcgLmlucHV0LWdyb3VwLXRleHQge1xuICAgIGNvbG9yOiAjMjEyNTI5OyB9XG5cbi5iZy1kYW5nZXIge1xuICBjb2xvcjogI2ZmZjsgfVxuICAuYmctZGFuZ2VyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyB9XG4gIC5iZy1kYW5nZXIgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyB9XG4gIC5iZy1kYW5nZXIgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsgfVxuICAuYmctZGFuZ2VyIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsgfVxuICAuYmctZGFuZ2VyIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICBjb2xvcjogI2ZmZjsgfVxuXG4uYmctbGlnaHQge1xuICBjb2xvcjogIzIxMjUyOTsgfVxuICAuYmctbGlnaHQgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDMzLCAzNywgNDEsIDAuOCk7IH1cbiAgLmJnLWxpZ2h0IGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMzMsIDM3LCA0MSwgMC44KTsgfVxuICAuYmctbGlnaHQgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMzMsIDM3LCA0MSwgMC44KTsgfVxuICAuYmctbGlnaHQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgzMywgMzcsIDQxLCAwLjgpOyB9XG4gIC5iZy1saWdodCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgY29sb3I6ICMyMTI1Mjk7IH1cblxuLmJnLWRhcmsge1xuICBjb2xvcjogI2ZmZjsgfVxuICAuYmctZGFyayBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsgfVxuICAuYmctZGFyayBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IH1cbiAgLmJnLWRhcmsgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsgfVxuICAuYmctZGFyayBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IH1cbiAgLmJnLWRhcmsgLmlucHV0LWdyb3VwLXRleHQge1xuICAgIGNvbG9yOiAjZmZmOyB9XG5cbi5jb3ZlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7IH1cblxuLmluc2V0LXNoYWRvd2VkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0NXB4ICM1NTU7IH1cblxuLnNoYWRvd2VkIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzU1NTsgfVxuXG4uc2VjdGlvbi1hcXVhbWFyaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuc2VjdGlvbi1hcXVhbWFyaW5lOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29udGVudDogJyAnO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsIHJnYmEoNjMsIDgxLCAxODEsIDAuOSkgMCUsIHJnYmEoODUsIDk4LCAxNzMsIDAuOSkgMTAwJSk7IH1cblxuLnNlY3Rpb24tZGFyayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmM2YzZjM7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuICAuc2VjdGlvbi1kYXJrOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29udGVudDogJyAnO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjEsIDIxLCAyMSwgMC43NSk7IH1cblxuLnNlY3Rpb24tbGlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjMTUxNTE1O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IH1cbiAgLnNlY3Rpb24tbGlnaHQ6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb250ZW50OiAnICc7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDI0MywgMjQzLCAwLjc1KTsgfVxuXG4uc2VjdGlvbi1wYXJhbGxheCB7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxuXG4uYmctYXF1YW1hcmluZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMzBkZWcsIHJnYmEoODUsIDk4LCAxNzMsIDAuOSkgMCUsIHJnYmEoNjMsIDgxLCAxODEsIDAuOSkgNTAlLCByZ2JhKDYzLCA4MSwgMTgxLCAwLjk1KSAxMDAlKTtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5pbWctdGh1bWJuYWlsIHtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLmNhcm91c2VsIC5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDEwJSwgcmdiYSgyMSwgMjEsIDIxLCAwLjk1KSAxMDAlKTsgfVxuXG4uY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgLmNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBvcGFjaXR5OiAwLjg1OyB9XG5cbi5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIGJvdHRvbTogMHB4OyB9XG5cbi8qIEFuaW1hdGUgc3RhdGUgYmV0d2VlbiAubmF2YmFyIGFuZCAubmF2YmFyLW9udG9wICovXG4ubmF2YmFyIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNXMgZWFzZS1vdXQ7IH1cblxuLm5hdmJhci1vbnRvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IH1cblxuLyogQW5pbWF0ZSBvbiBlbnRyYW5jZSAqL1xuLmFuaW1hdGUtaW4tZG93biB7XG4gIHRyYW5zaXRpb246IGFsbCAxLjNzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG9wYWNpdHk6IDE7XG4gIHRvcDogMHB4OyB9XG4gIC5hbmltYXRlLWluLWRvd24ub3V0LW9mLXZpZXdwb3J0IHtcbiAgICB0b3A6IDQwcHg7XG4gICAgb3BhY2l0eTogMDsgfVxuXG4uYW5pbWF0ZS1pbi1sZWZ0IHtcbiAgdHJhbnNpdGlvbjogYWxsIDEuMHMgZWFzZS1vdXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMTtcbiAgbGVmdDogMCU7IH1cbiAgLmFuaW1hdGUtaW4tbGVmdC5vdXQtb2Ytdmlld3BvcnQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbGVmdDogLTUlOyB9XG5cbi5hbmltYXRlLWluLXJpZ2h0IHtcbiAgdHJhbnNpdGlvbjogYWxsIDEuMHMgZWFzZS1vdXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMTtcbiAgbGVmdDogMCU7IH1cbiAgLmFuaW1hdGUtaW4tcmlnaHQub3V0LW9mLXZpZXdwb3J0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGxlZnQ6IDUlOyB9XG4iXSwic291cmNlUm9vdCI6IiJ9 */";
class IndexComponent {
  constructor() {}
  ngOnInit() {}
}
_class = IndexComponent;
_class.ɵfac = function IndexComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-index"]],
  decls: 222,
  vars: 0,
  consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "icon", "href", "https://templates.pingendo.com/assets/Pingendo_favicon.ico"], ["name", "description", "content", "Free Bootstrap 4 Pingendo Aquamarine template for unique events."], ["name", "keywords", "content", "Pingendo conference event aquamarine free template bootstrap 4"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "type", "text/css"], [1, "text-center"], [1, "d-flex", "align-items-center", "section-aquamarine", "py-5", "cover", 2, "background-image", "url(\"assets/conference/cover.jpg\")"], [1, "container"], [1, "row"], [1, "col-lg-12", "text-white", "mt-5"], [1, "display-2", "d-none", "d-md-block"], [1, "display-4", "d-block", "d-md-none"], [1, ""], ["href", "#free-trial", 1, "btn", "btn-lg", "mt-4", "btn-outline-light"], [1, "d-block", "fa", "fa-angle-down", "pt-5", "fa-3x"], ["id", "schedule", 1, "section-parallax", "py-2"], [1, "container", "text-light"], [1, "col-md-12"], [1, "col-md-12", "mb-0"], [1, "text-danger", "pt-3"], [1, "col-md-6", "d-flex", "align-items-center"], [1, "text-dark", "text-left"], [1, "col-md-6"], ["src", "https://mapcuatuiv2.my.canva.site/images/2b9ffab7b4cb83e0fbdc9b9150be491d.png", 1, "d-block", "img-fluid", "mx-auto", "w-77"], [1, "py-5", 2, "background-image", "linear-gradient(to bottom, #5562ad, #5562ad)", "background-position", "top left", "background-size", "100%", "background-repeat", "repeat"], [1, "col-md-5", "d-flex", "align-items-center", "justify-content-end"], ["src", "assets/conference/71e6bf06581fc13f217c9a62af6b7f41.svg", 1, "d-block", "mx-auto", "h-75"], [1, "col-md-6", "d-flex"], [1, "col-md-6", "d-flex", "m-0", "p-2"], [1, "card", "rounded"], [1, "card-header"], [1, "fa", "fa-2x", "fa-refresh"], [1, "card-body"], [1, "text-dark"], [2, "font-weight", "normal"], [1, "col-md-6", "d-flex", "p-2"], [1, "fa", "fa-2x", "fa-search"], [1, "fa", "fa-2x", "fa-check-square-o"], [1, "fa", "fa-2x", "fa-file-text-o"], ["id", "price", 1, "py-5"], [1, "p-2", "text-danger"], [1, "col-md-12", "d-flex", "align-items-center", "justify-content-center", "flex-row-reverse"], ["href", "#free-trial", 1, "btn", "btn-primary", "btn-block"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "align-items-center", "d-flex"], [1, "fa", "mr-2", "fa-check-square", "text-success"], ["href", "#contact", 1, "btn", "btn-primary", "btn-block"], [1, "list-group-item", "d-flex", "align-items-center"], ["id", "free-trial", 1, "py-5"], ["id", "free-trial", 1, "text-primary"], [1, "full-width"], [1, "py-5"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/conference/people_2.jpg", 1, "d-block", "img-fluid", "w-100"], [1, "carousel-caption"], [1, "m-0"], [1, "carousel-item"], ["src", "assets/conference/people_5.jpg", 1, "d-block", "img-fluid", "w-100"], [1, "py-5", "text-center", "text-white", 2, "background-image", "linear-gradient(to bottom, #5271FF, rgba(0, 0, 0, .75)), url(\"https://static.pingendo.com/cover-bubble-dark.svg\")", "background-position", "center center, center center", "background-size", "cover, cover", "background-repeat", "repeat, repeat"], ["id", "contact", 1, "mx-auto", "col-md-10", "p-4"], [1, "text-light"], [1, "mb-4", "lead", "text-light"], [1, "form-row"], [1, "form-group", "col-md-4"], ["type", "text", "id", "form22", "placeholder", "T\u00EAn*", 1, "form-control"], ["type", "email", "id", "form23", "placeholder", "Th\u01B0 \u0111i\u1EC7n t\u1EED*", 1, "form-control"], ["type", "number", "id", "form24", "placeholder", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", 1, "form-control"], [1, "form-group"], ["type", "text", "id", "form25", "placeholder", "Ti\u00EAu \u0111\u1EC1", 1, "form-control"], ["id", "form26", "rows", "3", "placeholder", "N\u1ED9i dung", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
  template: function IndexComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "html")(1, "head");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "meta", 0)(3, "meta", 1)(4, "link", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Conference Aquamarine - Pingendo template");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "meta", 3)(8, "meta", 4)(9, "link", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "body", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "ngx-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "h1", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Map c\u1EE7a Tui");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h1", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Map c\u1EE7a tui");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "T\u1EA0O B\u1EA2N \u0110\u1ED2 S\u1EA2N PH\u1EA8M B\u1EA4T \u0110\u1ED8NG S\u1EA2N B\u00C1N/CHO THU\u00CA D\u00C0NH RI\u00CANG CHO B\u1EA0N CH\u1EC8 V\u1EDAI M\u1ED8T C\u00DA CLICK CHU\u1ED8T");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "D\u00F9ng mi\u1EC5n ph\u00ED t\u1EA1i \u0111\u00E2y");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16)(26, "div", 17)(27, "div", 9)(28, "div", 18)(29, "div", 9)(30, "div", 19)(31, "h2", 20)(32, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "C\u00D3 PH\u1EA2I B\u1EA0N \u0110ANG G\u1EB6P V\u1EA4N \u0110\u1EC0?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 9)(35, "div", 21)(36, "div", 9)(37, "div", 18)(38, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "D\u00F9 \u0111\u00E3 \u0111\u0103ng s\u1EA3n ph\u1EA9m th\u00F4ng tin s\u1EA3n ph\u1EA9m, b\u1EA1n v\u1EABn ph\u1EA3i t\u01B0 v\u1EA5n v\u00E0 chia s\u1EBB th\u00F4ng tin cho kh\u00E1ch h\u00E0ng v\u00EC h\u1ECD kh\u00F4ng mu\u1ED1n t\u00ECm ki\u1EBFm t\u1EEBng b\u00E0i \u0111\u0103ng.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "B\u1EA1n c\u00F3 r\u1EA5t nhi\u1EC1u s\u1EA3n ph\u1EA9m nh\u01B0ng thi\u1EBFu danh s\u00E1ch t\u1ED5ng h\u1EE3p m\u1ED9t c\u00E1ch tr\u1EF1c quan.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "D\u1EF1a tr\u00EAn nhu c\u1EA7u c\u1EE7a kh\u00E1ch h\u00E0ng trong vi\u1EC7c t\u00ECm ki\u1EBFm c\u00E1c s\u1EA3n ph\u1EA9m g\u1EA7n khu v\u1EF1c l\u00E0m vi\u1EC7c ho\u1EB7c h\u1ECDc t\u1EADp c\u1EE7a h\u1ECD t\u0103ng t\u1EF7 l\u1EC7 ch\u1ED1t \u0111\u01B0\u1EE3c s\u1EA3n ph\u1EA9m ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 25)(47, "div", 8)(48, "div", 9)(49, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 28)(52, "div", 9)(53, "div", 29)(54, "div", 30)(55, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 33)(58, "h4", 34)(59, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "T\u1EF1 \u0111\u1ED9ng c\u1EADp nh\u1EADt");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p", 34)(62, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Ph\u1EA7n m\u1EC1m t\u1EF1 \u0111\u1ED9ng qu\u00E9t trang c\u00E1 nh\u00E2n m\u1ED7i ng\u00E0y \u0111\u1EC3 c\u1EADp nh\u1EADt c\u00E1c b\u00E0i \u0111\u0103ng m\u1EDBi c\u1EE7a b\u1EA1n v\u00E0o b\u1EA3n \u0111\u1ED3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 36)(65, "div", 30)(66, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 33)(69, "h4")(70, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "T\u00ECm ki\u1EBFm theo b\u00E1n k\u00EDnh");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "p")(73, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "T\u1EEB v\u1ECB tr\u00ED kh\u00E1ch h\u00E0ng ch\u1ECDn, l\u1EF1a ch\u1ECDn hi\u1EC3n th\u1ECB c\u00E1c b\u1EA5t \u0111\u1ED9ng s\u1EA3n b\u00E1n/cho thu\u00EA theo b\u00E1n k\u00EDnh 2km, 5km, 10km");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 36)(76, "div", 30)(77, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 33)(80, "h4")(81, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Kh\u00F4ng tr\u00F9ng l\u1EB7p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "p")(84, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Ph\u1EA7n m\u1EC1m s\u1EBD t\u1EF1 \u0111\u1ED9ng l\u1ECDc v\u00E0 lo\u1EA1i b\u1ECF c\u00E1c b\u00E0i \u0111\u0103ng tr\u00F9ng l\u1EB7p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 36)(87, "div", 30)(88, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 33)(91, "h4")(92, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Danh s\u00E1ch s\u1EA3n ph\u1EA9m th\u00F4ng minh");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "p")(95, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "C\u00E1c s\u1EA3n ph\u1EA9m B\u0110S c\u00F9ng \u0111\u1ECBa ch\u1EC9 \u0111\u01B0\u1EE3c t\u1EF1 \u0111\u1ED9ng s\u1EAFp x\u1EBFp d\u1EC5 d\u00E0ng v\u00E0 tr\u1EF1c quan cho ng\u01B0\u1EDDi xem th\u00F4ng tin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 40)(98, "div", 8)(99, "div", 9)(100, "div", 18)(101, "div", 9)(102, "div", 18)(103, "h2", 41)(104, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "C\u00C1C G\u00D3I D\u1ECACH V\u1EE4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 9)(107, "div", 18)(108, "div", 9)(109, "div", 23)(110, "div", 9)(111, "div", 42)(112, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Mi\u1EC5n Ph\u00ED");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 9)(115, "div", 18)(116, "div", 9)(117, "div", 18)(118, "ul", 44)(119, "li", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](120, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "T\u1EF1 \u0111\u1ED9ng t\u1EA1o b\u1EA3n \u0111\u1ED3 t\u1EEB \u0111\u01B0\u1EDDng link b\u1EA1n cung c\u1EA5p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "li", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](123, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "T\u1EA1o danh m\u1EE5c t\u1ED1i \u0111a 10 s\u1EA3n ph\u1EA9m");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 23)(126, "div", 9)(127, "div", 18)(128, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "N\u00E2ng cao (50k/Th\u00E1ng)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 9)(131, "div", 18)(132, "div", 9)(133, "div", 18)(134, "ul", 44)(135, "li", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "T\u1EF1 \u0111\u1ED9ng t\u1EA1o b\u1EA3n \u0111\u1ED3 t\u1EEB \u0111\u01B0\u1EDDng link b\u1EA1n cung c\u1EA5p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "li", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Danh m\u1EE5c s\u1EA3n ph\u1EA9m kh\u00F4ng gi\u1EDBi h\u1EA1n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "li", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](142, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "T\u1EF1 \u0111\u1ED9ng c\u1EADp nh\u1EADt b\u00E0i \u0111\u0103ng m\u1EDBi v\u00E0o b\u1EA3n \u0111\u1ED3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "li", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Cho ph\u00E9p ch\u1EC9nh s\u1EEDa b\u00E0i vi\u1EBFt tr\u01B0\u1EDBc khi \u0111\u0103ng");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "li", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "T\u00F9y ch\u1ECDn c\u00E1c ki\u1EC3u b\u1EA3n \u0111\u1ED3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "li", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](151, "i", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "G\u1ECDi \u0111i\u1EC7n tho\u1EA1i, Email trong b\u1EA3n \u0111\u1ED3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 49)(154, "div", 8)(155, "div", 9)(156, "div", 18)(157, "div", 9)(158, "div", 18)(159, "div", 9)(160, "div", 18)(161, "h2", 50)(162, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "D\u00D9NG MI\u1EC4N PH\u00CD");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](165, "app-frontpage-trial", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](167, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "div", 52)(169, "div", 8)(170, "div", 9)(171, "div", 18)(172, "div", 53)(173, "ol", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](174, "li", 55)(175, "li", 56)(176, "li", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 58)(178, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](179, "img", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 61)(181, "h5", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "Carousel");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "with indicators");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](186, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 61)(188, "h5", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, "Carousel");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](191, "with indicators");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](193, "img", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "div", 61)(195, "h5", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, "Carousel");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](198, "with indicators");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 65)(200, "div", 8)(201, "div", 9)(202, "div", 66)(203, "h1", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "Li\u00EAn h\u1EC7 v\u1EDBi ch\u00FAng t\u00F4i");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "p", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, "H\u00E3y li\u00EAn h\u1EC7 v\u1EDBi ch\u00FAng t\u00F4i ngay h\u00F4m nay \u0111\u1EC3 nh\u1EADn \u0111\u01B0\u1EE3c ch\u0103m s\u00F3c ngay h\u00F4m nay nh\u00E9!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "form")(208, "div", 69)(209, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](210, "input", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](212, "input", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "div", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](214, "input", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](216, "input", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](218, "textarea", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](219, "button", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "G\u1EEDi");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](221, "ngx-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _frontpage_trial_frontpage_trial_component__WEBPACK_IMPORTED_MODULE_0__.FrontpageTrialComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
  styles: ["app-frontpage-trial[_ngcontent-%COMP%]{\n    padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbmRleC9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImFwcC1mcm9udHBhZ2UtdHJpYWx7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */", _c0, _c0]
});

/***/ }),

/***/ 3487:
/*!****************************************************************************************!*\
  !*** ./src/app/components/main/address-autocomplete/address-autocomplete.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressAutocompleteComponent: () => (/* binding */ AddressAutocompleteComponent)
/* harmony export */ });
/* harmony import */ var D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_interfaces_constant_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/constant.enum */ 4853);
/* harmony import */ var src_app_services_Util_general_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/Util/general-helper */ 8249);
/* harmony import */ var guid_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! guid-ts */ 4961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_map_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/map-api.service */ 3178);
/* harmony import */ var src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/map-state.service */ 6778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search-result/search-result.component */ 9823);
/* harmony import */ var _geo_added_item_list_geo_added_item_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../geo-added-item-list/geo-added-item-list.component */ 3341);
/* harmony import */ var _circle_tool_circle_tool_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../circle-tool/circle-tool.component */ 1214);
/* harmony import */ var _mesure_tool_mesure_tool_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mesure-tool/mesure-tool.component */ 3366);

var _class;













function AddressAutocompleteComponent_app_search_result_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-search-result", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("addedItem", function AddressAutocompleteComponent_app_search_result_8_Template_app_search_result_addedItem_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.addItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("result", option_r1);
  }
}
class AddressAutocompleteComponent {
  constructor(mapApiService, mapStateService) {
    this.mapApiService = mapApiService;
    this.mapStateService = mapStateService;
    this.searchValue = '';
  }
  ngOnInit() {
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  search(value) {
    var _this = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const filterValue = value.toLowerCase();
      var searchtext = `${filterValue}, thanh pho ho chi minh`;
      _this.filteredOptions = yield _this.mapApiService.geocode(searchtext);
      _this.filteredOptions.forEach(option => {
        option.realstateData = [{
          html: "",
          id: guid_ts__WEBPACK_IMPORTED_MODULE_3__.Guid.newGuid().toString(),
          address: option.address.label,
          description: "",
          images: [],
          title: src_app_interfaces_constant_enum__WEBPACK_IMPORTED_MODULE_1__.Constant.newPostTitle
        }];
        option.color = src_app_services_Util_general_helper__WEBPACK_IMPORTED_MODULE_2__.GeneralHelper.getRandomRGB(0.5);
      });
      return _this.filteredOptions;
    })();
  }
  clear() {
    this.searchValue = '';
    this.filteredOptions = [];
  }
  addItem(result) {
    if (this.mapStateService.checkItemExisting(result)) {
      return;
    }
    this.mapStateService.addNewItem(result);
    this.clear();
  }
}
_class = AddressAutocompleteComponent;
_class.ɵfac = function AddressAutocompleteComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_map_api_service__WEBPACK_IMPORTED_MODULE_4__.MapApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_5__.MapStateService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-address-autocomplete"]],
  decls: 9,
  vars: 3,
  consts: [[1, "main"], [3, "types"], [1, "form-group", "has-search"], ["type", "text", "placeholder", "Nh\u1EADp \u0111\u1ECBa ch\u1EC9 (vd: 26 \u0110inh B\u1ED9 L\u0129nh)", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "search-results-container"], [3, "result", "addedItem", 4, "ngFor", "ngForOf"], [3, "result", "addedItem"]],
  template: function AddressAutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-geo-added-item-list", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2)(3, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AddressAutocompleteComponent_Template_input_ngModelChange_3_listener($event) {
        return ctx.searchValue = $event;
      })("keydown.enter", function AddressAutocompleteComponent_Template_input_keydown_enter_3_listener() {
        return ctx.search(ctx.searchValue);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "app-circle-tool")(6, "app-mesure-tool");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, AddressAutocompleteComponent_app_search_result_8_Template, 1, 1, "app-search-result", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("types", "Office");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.searchValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.filteredOptions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__.SearchResultComponent, _geo_added_item_list_geo_added_item_list_component__WEBPACK_IMPORTED_MODULE_7__.GeoAddedItemListComponent, _circle_tool_circle_tool_component__WEBPACK_IMPORTED_MODULE_8__.CircleToolComponent, _mesure_tool_mesure_tool_component__WEBPACK_IMPORTED_MODULE_9__.MesureToolComponent],
  styles: ["\n\n\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding-left: 2.375rem;\n    border-width: thick !important;\n}\n\n.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 2;\n    display: block;\n    width: 2.375rem;\n    height: 2.375rem;\n    line-height: 2.375rem;\n    text-align: center;\n    pointer-events: none;\n    color: #aaa;\n}\n\n.search-results-container[_ngcontent-%COMP%] {\n    -ms-overflow-style: none;  \n\n    scrollbar-width: none;  \n\n    height: 20%;\n    overflow-y: scroll;\n}\n.search-results-container[_ngcontent-%COMP%]::-webkit-scrollbar { \n    display: none;  \n\n}\n\n.geoitem-container[_ngcontent-%COMP%]{\n    -ms-overflow-style: none;  \n\n    scrollbar-width: none;  \n\n    height: 15%;\n    overflow-y: scroll;\n}\n\n.geoitem-container[_ngcontent-%COMP%]::-webkit-scrollbar { \n    display: none;  \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL2FkZHJlc3MtYXV0b2NvbXBsZXRlL2FkZHJlc3MtYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRDQUE0Qzs7QUFFNUM7SUFDSSxzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0IsR0FBRywwQkFBMEI7SUFDckQscUJBQXFCLEdBQUcsWUFBWTtJQUNwQyxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhLEdBQUcsc0JBQXNCO0FBQzFDOztBQUVBO0lBQ0ksd0JBQXdCLEdBQUcsMEJBQTBCO0lBQ3JELHFCQUFxQixHQUFHLFlBQVk7SUFDcEMsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWEsR0FBRyxzQkFBc0I7QUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogQm9vdHN0cmFwIDQgdGV4dCBpbnB1dCB3aXRoIHNlYXJjaCBpY29uICovXHJcblxyXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMi4zNzVyZW07XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDIuMzc1cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjM3NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjM3NXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy1jb250YWluZXIge1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG4uc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7IFxyXG4gICAgZGlzcGxheTogbm9uZTsgIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXHJcbn1cclxuXHJcbi5nZW9pdGVtLWNvbnRhaW5lcntcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5nZW9pdGVtLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcclxuICAgIGRpc3BsYXk6IG5vbmU7ICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1214:
/*!**********************************************************************!*\
  !*** ./src/app/components/main/circle-tool/circle-tool.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CircleToolComponent: () => (/* binding */ CircleToolComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/map-state.service */ 6778);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
var _class;





class CircleToolComponent {
  constructor(mapStateService) {
    this.mapStateService = mapStateService;
    this.selectedRadius = '';
  }
  ngOnInit() {
    this.selectedRadius = this.mapStateService.stateObservable.value.distance.toString();
  }
  distanceChanged(value) {
    this.mapStateService.stateObservable.value.distance = Number(value);
    this.mapStateService.stateObservable.next(this.mapStateService.stateObservable.value);
  }
}
_class = CircleToolComponent;
_class.ɵfac = function CircleToolComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_0__.MapStateService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-circle-tool"]],
  decls: 4,
  vars: 2,
  consts: [["fxLayout", "column", "fxLayoutAlign", "space-between start"], ["color", "primary", 1, "tool-margin", 3, "checked", "disabled"]],
  template: function CircleToolComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content", 0)(2, "mat-slide-toggle", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u0110o kho\u1EA3ng c\u00E1ch ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", false)("disabled", false);
    }
  },
  dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__.MatSlideToggle],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3543:
/*!**************************************************************************************!*\
  !*** ./src/app/components/main/geo-added-home-list/geo-added-home-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeoAddedHomeListComponent: () => (/* binding */ GeoAddedHomeListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/map-state.service */ 6778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _geo_added_home_geo_added_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geo-added-home/geo-added-home.component */ 3228);
var _class;




function GeoAddedHomeListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeoAddedHomeListComponent_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const indexOfelement_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.selectedItem(indexOfelement_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-geo-added-home", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const indexOfelement_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1)("expanded", ctx_r0.selectedItemIndex == indexOfelement_r2)("agent", ctx_r0.agent);
  }
}
class GeoAddedHomeListComponent {
  constructor(mapstateService) {
    this.mapstateService = mapstateService;
    this.selectedItemIndex = -1;
  }
  ngOnDestroy() {
    this.subscripbe?.unsubscribe();
  }
  ngOnInit() {
    this.subscripbe = this.mapstateService.stateObservable.subscribe(state => {
      this.items = state.geoItems;
      this.agent = state.agent;
    });
  }
  selectedItem(index) {
    this.selectedItemIndex = index;
  }
}
_class = GeoAddedHomeListComponent;
_class.ɵfac = function GeoAddedHomeListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_0__.MapStateService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-geo-added-home-list"]],
  decls: 2,
  vars: 1,
  consts: [[1, "homelist-comtainer"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "item", "expanded", "agent"]],
  template: function GeoAddedHomeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GeoAddedHomeListComponent_div_1_Template, 2, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _geo_added_home_geo_added_home_component__WEBPACK_IMPORTED_MODULE_1__.GeoAddedHomeComponent],
  styles: [".homelist-comtainer[_ngcontent-%COMP%]{\n    overflow: scroll;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL2dlby1hZGRlZC1ob21lLWxpc3QvZ2VvLWFkZGVkLWhvbWUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVsaXN0LWNvbXRhaW5lcntcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3228:
/*!************************************************************************************************!*\
  !*** ./src/app/components/main/geo-added-home-list/geo-added-home/geo-added-home.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeoAddedHomeComponent: () => (/* binding */ GeoAddedHomeComponent)
/* harmony export */ });
/* harmony import */ var D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var src_app_interfaces_constant_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/constant.enum */ 4853);
/* harmony import */ var src_app_services_map_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/map-api.service */ 3178);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/web-api.service */ 1086);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _share_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/image-viewer/image-viewer.component */ 1076);

var _class;














function GeoAddedHomeComponent_app_image_viewer_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-image-viewer", 11);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("images", ctx_r0.item.realstateData[ctx_r0.selectedElementIndex].images)("height", "200");
  }
}
function GeoAddedHomeComponent_mat_button_toggle_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-button-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function GeoAddedHomeComponent_mat_button_toggle_16_Template_mat_button_toggle_change_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const indexOfelement_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.selectedElementIndex = indexOfelement_r3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const indexOfelement_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Ph\u00F2ng ", indexOfelement_r3 + 1, "");
  }
}
class GeoAddedHomeComponent {
  constructor(mapApiService, snackBar, webApiService, dialogRef) {
    this.mapApiService = mapApiService;
    this.snackBar = snackBar;
    this.webApiService = webApiService;
    this.dialogRef = dialogRef;
    this.expanded = false;
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.isLoadingLink = false;
    this.selectedElementIndex = 0;
    this.iframeElement = '';
    this.linkToMsg = '';
  }
  ngOnInit() {
    var _this = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.item) {
        return;
      }
      _this.linkToMsg = `tel:${_this.agent.phone}`;
    })();
  }
  loadReadStateData(realstateData, link) {
    var _this2 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (realstateData.title !== src_app_interfaces_constant_enum__WEBPACK_IMPORTED_MODULE_1__.Constant.newPostTitle || link === '') {
        return;
      }
      _this2.isLoadingLink = true;
      var metadata = yield _this2.webApiService.getMedataDataFromUrl(link);
      realstateData.html = link;
      realstateData.description = metadata.description;
      realstateData.title = metadata.title;
      realstateData.images = metadata.images;
      realstateData.id = metadata.id;
      _this2.isLoadingLink = false;
    })();
  }
  target() {
    if (!this.item) {
      return;
    }
    this.closed.emit();
    this.dialogRef.close();
    this.mapApiService.zoomToLocations([this.item], 16);
  }
  direction() {
    if (!this.item.address) {
      return;
    }
    window.open(`https://www.google.com/maps/search/?api=1&query=${this.item.realstateData[this.selectedElementIndex].address}`, '_blank');
  }
  back() {
    this.closed.emit();
    this.dialogRef.close();
  }
  share(link) {
    if (!link) {
      return;
    }
    window.open(link, '_blank');
  }
}
_class = GeoAddedHomeComponent;
_class.ɵfac = function GeoAddedHomeComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_map_api_service__WEBPACK_IMPORTED_MODULE_2__.MapApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_3__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-geo-added-home"]],
  viewQuery: function GeoAddedHomeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatAccordion, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    }
  },
  inputs: {
    item: "item",
    agent: "agent",
    expanded: "expanded"
  },
  outputs: {
    closed: "closed"
  },
  decls: 35,
  vars: 7,
  consts: [["fxLayout", "column", "fxLayoutAlign", "space-between start", 1, "dialog-container"], ["fxFlex", "90", "fxLayout", "column", "fxLayoutAlign", "start start", 1, "realstate-content"], [1, "lines"], ["class", "full-height full-width", 3, "images", "height", 4, "ngIf"], [3, "change", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-between end", "fxFlex", "10", 1, "full-width"], ["fxLayout", "row", "fxLayoutAlign", "start end"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [3, "href"], ["mat-mini-fab", "", "color", "primary"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "full-height", "full-width", 3, "images", "height"], [3, "change"]],
  template: function GeoAddedHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "p")(6, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u0110\u1ECBa ch\u1EC9:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 2)(10, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "M\u00F4 t\u1EA3:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, GeoAddedHomeComponent_app_image_viewer_13_Template, 1, 2, "app-image-viewer", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div")(15, "mat-button-toggle-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, GeoAddedHomeComponent_mat_button_toggle_16_Template, 2, 1, "mat-button-toggle", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 5)(18, "div", 6)(19, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GeoAddedHomeComponent_Template_button_click_19_listener() {
        return ctx.target();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " location_on");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GeoAddedHomeComponent_Template_button_click_22_listener() {
        return ctx.direction();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " directions");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "a", 8)(26, "button", 9)(27, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div")(30, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GeoAddedHomeComponent_Template_button_click_30_listener() {
        return ctx.share(ctx.item.realstateData[ctx.selectedElementIndex].html);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Xem th\u00EAm");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "share");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Ph\u00F2ng ", ctx.selectedElementIndex + 1, ": ", ctx.item.realstateData[ctx.selectedElementIndex].title, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.item.realstateData[ctx.selectedElementIndex].address, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.item.realstateData[ctx.selectedElementIndex].description, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.item.realstateData[ctx.selectedElementIndex].images == null ? null : ctx.item.realstateData[ctx.selectedElementIndex].images.length) !== null && tmp_3_0 !== undefined ? tmp_3_0 : 0 > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.item.realstateData);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx.linkToMsg, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__.MatButtonToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatMiniFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _share_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_4__.ImageViewerComponent],
  styles: [".dialog-container[_ngcontent-%COMP%]{\n    height: 100%;\n    width: 100%;\n    padding: 20px;\n}\n\n.realstate-content[_ngcontent-%COMP%]\n{\n    width: 70vw;\n    overflow: scroll;\n    -ms-overflow-style: none;\n    \n\n    scrollbar-width: none;\n    \n\n}\n\n.realstate-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n    \n\n}\n\nmat-button-toggle-group[_ngcontent-%COMP%]{\n    padding: 5px;\n}\n\nmat-button-toggle[_ngcontent-%COMP%]{\n    padding: 5px;\n}\n\n.lines[_ngcontent-%COMP%] {\n    white-space: pre-wrap;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL2dlby1hZGRlZC1ob21lLWxpc3QvZ2VvLWFkZGVkLWhvbWUvZ2VvLWFkZGVkLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7RUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnJlYWxzdGF0ZS1jb250ZW50XHJcbntcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwKyAqL1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gICAgLyogRmlyZWZveCAqL1xyXG59XHJcblxyXG4ucmVhbHN0YXRlLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xyXG59XHJcblxyXG5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxubWF0LWJ1dHRvbi10b2dnbGV7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5saW5lcyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3341:
/*!**************************************************************************************!*\
  !*** ./src/app/components/main/geo-added-item-list/geo-added-item-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeoAddedItemListComponent: () => (/* binding */ GeoAddedItemListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_map_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/map-api.service */ 3178);
/* harmony import */ var src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/map-state.service */ 6778);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
var _class;







function GeoAddedItemListComponent_div_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3)(1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeoAddedItemListComponent_div_0_span_1_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const geocodeAddedItem_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.target(geocodeAddedItem_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 5)(5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeoAddedItemListComponent_div_0_span_1_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const geocodeAddedItem_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.deleteItem(geocodeAddedItem_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const geocodeAddedItem_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.diplayText(geocodeAddedItem_r2));
  }
}
function GeoAddedItemListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GeoAddedItemListComponent_div_0_span_1_Template, 8, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.getList());
  }
}
class GeoAddedItemListComponent {
  constructor(mapApiService, mapStateService) {
    this.mapApiService = mapApiService;
    this.mapStateService = mapStateService;
  }
  ngOnInit() {}
  getList() {
    if (this.mapStateService.stateObservable.value.geoItems.length == 0) {
      return [];
    }
    return this.mapStateService.stateObservable.value.geoItems?.filter(a => this.types?.includes(a.type ?? ''));
  }
  diplayText(result) {
    return `Địa chỉ ${result.textId}: ${result?.address?.label?.split(',')[0]}`;
  }
  deleteItem(result) {
    this.mapStateService.removeItem(result);
  }
  target(item) {
    if (!item) {
      return;
    }
    this.mapApiService.zoomToLocations([item], 14);
  }
}
_class = GeoAddedItemListComponent;
_class.ɵfac = function GeoAddedItemListComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_map_api_service__WEBPACK_IMPORTED_MODULE_0__.MapApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_1__.MapStateService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-geo-added-item-list"]],
  inputs: {
    types: "types"
  },
  decls: 1,
  vars: 1,
  consts: [["fxLayout", "column", "class", "geoitem-container", 4, "ngIf"], ["fxLayout", "column", 1, "geoitem-container"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-raised-button", "", "color", "primary", "fxFlex", "90", "fxLayoutAlign", "start center", 1, "button-text", 3, "click"], ["fxFlex", "10", "fxLayout", "row", "fxLayoutAlign", "center center"], ["mat-mini-fab", "", "color", "warn", 3, "click"]],
  template: function GeoAddedItemListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, GeoAddedItemListComponent_div_0_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getList().length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatMiniFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
  styles: [".geoitem-container[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.button-text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL2dlby1hZGRlZC1pdGVtLWxpc3QvZ2VvLWFkZGVkLWl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5nZW9pdGVtLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmJ1dHRvbi10ZXh0e1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1490:
/*!************************************************************************************!*\
  !*** ./src/app/components/main/geocode-added-item/geocode-added-item.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeocodeAddedItemComponent: () => (/* binding */ GeocodeAddedItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_map_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/map-api.service */ 3178);
/* harmony import */ var src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/map-state.service */ 6778);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 8497);
var _class;







class GeocodeAddedItemComponent {
  constructor(mapApiService, mapStateService) {
    this.mapApiService = mapApiService;
    this.mapStateService = mapStateService;
    this.deletedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {}
  delete(item) {
    if (!item) {
      return;
    }
    this.mapStateService.removeItem(item);
    this.deletedItem.emit(item);
  }
  zoomIn(item) {
    if (!item) {
      return;
    }
    this.mapApiService.zoomToLocations([item], 14);
  }
}
_class = GeocodeAddedItemComponent;
_class.ɵfac = function GeocodeAddedItemComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_map_api_service__WEBPACK_IMPORTED_MODULE_0__.MapApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_1__.MapStateService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-geocode-added-item"]],
  inputs: {
    item: "item"
  },
  outputs: {
    deletedItem: "deletedItem"
  },
  decls: 10,
  vars: 2,
  consts: [["mat-button", "", 3, "click"]],
  template: function GeocodeAddedItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-actions")(7, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeocodeAddedItemComponent_Template_button_click_7_listener() {
        return ctx.delete(ctx.item);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.item == null ? null : ctx.item.type) === "Home" ? "home" : "business_center");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.item == null ? null : ctx.item.address == null ? null : ctx.item.address.label, "");
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader],
  styles: ["mat-card[_ngcontent-%COMP%]{\n    margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL2dlb2NvZGUtYWRkZWQtaXRlbS9nZW9jb2RlLWFkZGVkLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QiIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6094:
/*!************************************************************************!*\
  !*** ./src/app/components/main/login-dialog/login-dialog.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginDialogComponent: () => (/* binding */ LoginDialogComponent)
/* harmony export */ });
/* harmony import */ var D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/web-api.service */ 1086);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);

var _class;





class LoginDialogComponent {
  constructor(router, dialogRef, webApiService) {
    this.router = router;
    this.dialogRef = dialogRef;
    this.webApiService = webApiService;
    this.phone = '';
  }
  ngOnInit() {}
  newState() {
    var _this = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var result = yield _this.webApiService.createNewUserState();
      _this.router.navigate(['/main/setting', result.id]);
      _this.dialogRef.close();
    })();
  }
}
_class = LoginDialogComponent;
_class.ɵfac = function LoginDialogComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_1__.WebApiService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-login-dialog"]],
  decls: 6,
  vars: 0,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "click"]],
  template: function LoginDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "T\u1EA1o b\u1EA3n \u0111\u1ED3 m\u1EDBi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginDialogComponent_Template_button_click_4_listener() {
        return ctx.newState();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "T\u1EA1o b\u1EA3n \u0111\u1ED3 m\u1EDBi c\u1EE7a b\u1EA1n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7968:
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/map-state.service */ 6778);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/map.component */ 5026);
/* harmony import */ var _address_autocomplete_address_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address-autocomplete/address-autocomplete.component */ 3487);
var _class;






const _c0 = ["drawerHomeAddedItems"];
const _c1 = ["drawerAutoSearch"];
class MainComponent {
  constructor(mapstateService, snackBar, dialog) {
    this.mapstateService = mapstateService;
    this.snackBar = snackBar;
    this.dialog = dialog;
  }
  ngOnDestroy() {}
  ngOnInit() {
    this.snackBar.open("Trải nghiệm tốt hơn bằng cách mở trong trình duyệt!", "", {
      duration: 2000
    });
  }
}
_class = MainComponent;
_class.ɵfac = function MainComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_0__.MapStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["ngx-main"]],
  viewQuery: function MainComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.drawerHomeAddedItems = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.drawerAutoSearch = _t.first);
    }
  },
  decls: 2,
  vars: 0,
  template: function MainComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-address-autocomplete")(1, "app-map");
    }
  },
  dependencies: [_map_map_component__WEBPACK_IMPORTED_MODULE_1__.MapComponent, _address_autocomplete_address_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.AddressAutocompleteComponent],
  styles: ["\n\n\n\n\n\n\n\napp-address-autocomplete[_ngcontent-%COMP%]{\n    position: fixed;\n    z-index: 100;\n    min-width: 80%;\n    top: 10%;\n    left: 10px;\n    right: 10px;\n}\n\n.map-container[_ngcontent-%COMP%] {\n    width: 100% !important;\n    height: 100% !important;\n    border: 1px solid rgba(0, 0, 0, 0.5) !important;\n}\n\n.map-sidenav-search-bar[_ngcontent-%COMP%] {\n    width: 90% !important;\n    top: 20px !important;\n    position: unset; \n    position: fixed !important;\n    z-index: 10 !important;\n    height: -moz-fit-content !important;\n    height: fit-content !important;\n    background-color: transparent !important;\n    box-shadow: none !important;\n    border: 20px !important;\n}\n\n.map-sidenav-homeList[_ngcontent-%COMP%] {\n    max-width: 90%;\n    width: -moz-fit-content;\n    width: fit-content;\n    position: fixed;\n    \n\n    top: auto;\n    bottom: 10px;\n    height: -moz-fit-content;\n    height: fit-content;\n    \n\n    \n\n}\n\n.map-sidenav-agent[_ngcontent-%COMP%] {\n    width: 30%;\n    height: -moz-fit-content;\n    height: fit-content;\n    position: fixed;\n    top: 10px;\n    right: 10px !important;\n\n}\n\n.map-sidenav-controls[_ngcontent-%COMP%] {\n    width: -moz-fit-content;\n    width: fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    position: fixed;\n    left: 50%;\n    transform: translateX(-50%);\n    top: auto;\n    bottom: 10px;\n    background-color: transparent;\n    box-shadow: none !important\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osY0FBYztJQUNkLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLG1DQUE4QjtJQUE5Qiw4QkFBOEI7SUFDOUIsd0NBQXdDO0lBQ3hDLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxZQUFZO0lBQ1osd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFNBQVM7SUFDVCxzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBtYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuYXBwLWFkZHJlc3MtYXV0b2NvbXBsZXRle1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG5cclxuLm1hcC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXAtc2lkZW5hdi1zZWFyY2gtYmFyIHtcclxuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgIHRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHVuc2V0OyBcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hcC1zaWRlbmF2LWhvbWVMaXN0IHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogbGVmdDogMTBweDsgKi9cclxuICAgIHRvcDogYXV0bztcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cclxuICAgIC8qIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudCAqL1xyXG59XHJcblxyXG4ubWFwLXNpZGVuYXYtYWdlbnQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLm1hcC1zaWRlbmF2LWNvbnRyb2xzIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5026:
/*!******************************************************!*\
  !*** ./src/app/components/main/map/map.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapComponent: () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login-dialog/login-dialog.component */ 6094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_map_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/map-api.service */ 3178);
/* harmony import */ var src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/map-state.service */ 6778);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);

var _class;






const _c0 = ["map"];
class MapComponent {
  constructor(mapApiService, mapStateService, router, dialog) {
    this.mapApiService = mapApiService;
    this.mapStateService = mapStateService;
    this.router = router;
    this.dialog = dialog;
  }
  ngOnInit() {}
  ngAfterViewInit() {
    var _this = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.map && _this.mapDiv) {
        _this.map = _this.mapApiService.initMap(_this.mapDiv.nativeElement);
        _this.router.params.subscribe( /*#__PURE__*/function () {
          var _ref = (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (param) {
            if (!param['stateId']) {
              _this.dialog.open(_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_1__.LoginDialogComponent, {
                enterAnimationDuration: '200ms',
                exitAnimationDuration: '200ms'
              });
              return;
            }
            yield _this.mapStateService.reloadState(param['stateId']);
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    })();
  }
}
_class = MapComponent;
_class.ɵfac = function MapComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_map_api_service__WEBPACK_IMPORTED_MODULE_2__.MapApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_3__.MapStateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-map"]],
  viewQuery: function MapComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.mapDiv = _t.first);
    }
  },
  inputs: {
    setting: "setting"
  },
  decls: 2,
  vars: 0,
  consts: [["id", "map"], ["map", ""]],
  template: function MapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
    }
  },
  styles: ["#map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: -1000;\n}\n\n\n.map-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.map-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.map-sidenav[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\napp-realstate-side-view[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 100%;\n  top: 0;\n  position: fixed;\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL21hcC9tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogLTEwMDA7XHJcbn1cclxuXHJcblxyXG4ubWFwLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLm1hcC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXAtc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuYXBwLXJlYWxzdGF0ZS1zaWRlLXZpZXd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3366:
/*!**********************************************************************!*\
  !*** ./src/app/components/main/mesure-tool/mesure-tool.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MesureToolComponent: () => (/* binding */ MesureToolComponent)
/* harmony export */ });
/* harmony import */ var src_app_interfaces_map_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/map-state */ 279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/map-state.service */ 6778);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
var _class;






class MesureToolComponent {
  constructor(mapStateService) {
    this.mapStateService = mapStateService;
    this.type = src_app_interfaces_map_state__WEBPACK_IMPORTED_MODULE_0__.ToolMode.normal;
  }
  ngOnInit() {}
  change(value) {
    if (value == src_app_interfaces_map_state__WEBPACK_IMPORTED_MODULE_0__.ToolMode.normal) {
      this.type = src_app_interfaces_map_state__WEBPACK_IMPORTED_MODULE_0__.ToolMode.mesure;
    }
    if (value == src_app_interfaces_map_state__WEBPACK_IMPORTED_MODULE_0__.ToolMode.mesure) {
      this.type = src_app_interfaces_map_state__WEBPACK_IMPORTED_MODULE_0__.ToolMode.normal;
    }
    this.mapStateService.stateObservable.value.toolMode = this.type;
    this.mapStateService.stateObservable.next(this.mapStateService.stateObservable.value);
  }
}
_class = MesureToolComponent;
_class.ɵfac = function MesureToolComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_1__.MapStateService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-mesure-tool"]],
  decls: 4,
  vars: 2,
  consts: [["fxLayout", "column", "fxLayoutAlign", "space-between start"], ["color", "primary", 1, "tool-margin", 3, "checked", "disabled"]],
  template: function MesureToolComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-content", 0)(2, "mat-slide-toggle", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u0110o kho\u1EA3ng c\u00E1ch ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", false)("disabled", false);
    }
  },
  dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__.MatSlideToggle],
  styles: ["img[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.tool-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL21lc3VyZS10b29sL21lc3VyZS10b29sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi50b29sLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9823:
/*!**************************************************************************!*\
  !*** ./src/app/components/main/search-result/search-result.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResultComponent: () => (/* binding */ SearchResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 8497);
var _class;




class SearchResultComponent {
  constructor() {
    this.addedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  AddItem(result, type) {
    if (!result) {
      return;
    }
    switch (type) {
      case 'Home':
        result.type = type;
        this.addedItem.emit(result);
        break;
      case 'Office':
        result.type = type;
        this.addedItem.emit(result);
        break;
      default:
        break;
    }
  }
}
_class = SearchResultComponent;
_class.ɵfac = function SearchResultComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-search-result"]],
  inputs: {
    result: "result"
  },
  outputs: {
    addedItem: "addedItem"
  },
  decls: 4,
  vars: 1,
  consts: [["mat-button", ""], ["fxlayout", "row", "fxLayoutAlign", "start center", 3, "click"], ["fxFlex", "80", 1, "search-item"]],
  template: function SearchResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchResultComponent_Template_div_click_1_listener() {
        return ctx.AddItem(ctx.result, "Office");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.result == null ? null : ctx.result.address == null ? null : ctx.result.address.label, " ");
    }
  },
  dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent],
  styles: ["mat-card[_ngcontent-%COMP%]{\n    margin-bottom: 1px;\n}\n\n.search-item[_ngcontent-%COMP%]{\noverflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtaXRlbXtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5276:
/*!********************************************************************************************************!*\
  !*** ./src/app/components/setting-stepper/components/input-sheet-table/input-sheet-table.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputSheetTableComponent: () => (/* binding */ InputSheetTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var src_app_interfaces_constant_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interfaces/constant.enum */ 4853);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var guid_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! guid-ts */ 4961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _sheet_item_edit_sheet_item_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sheet-item-edit/sheet-item-edit.component */ 4677);
var _class;












function InputSheetTableComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3, 4)(7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputSheetTableComponent_div_0_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const element_r1 = restoredCtx.$implicit;
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.selectEdit(element_r1, _r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "S\u1EEDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputSheetTableComponent_div_0_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const element_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.deletedItem(element_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Xo\u00E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "app-sheet-item-edit", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("updatedOrPosted", function InputSheetTableComponent_div_0_Template_app_sheet_item_edit_updatedOrPosted_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.itemUpdated($event));
    })("deleted", function InputSheetTableComponent_div_0_Template_app_sheet_item_edit_deleted_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.deletedItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const element_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx_r0.expandedElement !== element_r1)("realstateData", element_r1);
  }
}
class InputSheetTableComponent {
  setDescribedByIds(ids) {}
  onContainerClick(event) {}
  writeValue(obj) {
    this.value = lodash__WEBPACK_IMPORTED_MODULE_1___default().cloneDeep(lodash__WEBPACK_IMPORTED_MODULE_1___default().orderBy(obj, ['id'], ['desc']));
    this.dataSource = this.value ?? [];
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  constructor() {
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.itemsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    // @ViewChild('target') target: ElementRef | undefined;
    this.id = "test id";
    this.placeholder = "";
    this.focused = false;
    this.empty = false;
    this.shouldLabelFloat = false;
    this.required = false;
    this.errorState = false;
    this.disabled = false;
    this.onChange = value => {};
    this.onTouched = value => {};
    this.value = [];
    this.dataSource = this.value ?? [];
    this.columnsToDisplay = ['title'];
    this.columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  }
  ngOnDestroy() {
    this.stateChanges.complete();
  }
  ngOnInit() {}
  selectEdit(element, target = null) {
    this.expandedElement = this.expandedElement === element ? null : element;
    var newData = this.updateElement(element);
    this.dataSource = newData;
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 200);
    }
  }
  addNew() {
    if (this.value?.filter(item => item.title.includes(src_app_interfaces_constant_enum__WEBPACK_IMPORTED_MODULE_0__.Constant.newPostTitle))?.length ?? 0 > 0) {
      return;
    }
    var newElement = {
      id: guid_ts__WEBPACK_IMPORTED_MODULE_2__.Guid.newGuid().toString(),
      address: "",
      description: "",
      images: [],
      title: src_app_interfaces_constant_enum__WEBPACK_IMPORTED_MODULE_0__.Constant.newPostTitle,
      html: ""
    };
    this.value?.push(newElement);
    this.selectEdit(newElement);
  }
  deletedItem(element) {
    this.value = this.value?.filter(item => item.id !== element.id) ?? [];
    this.dataSource = this.value;
    this.onChange(this.value);
    this.stateChanges.next();
    this.onTouched(this.value);
    this.itemsUpdated.emit();
  }
  itemUpdated(element) {
    if (!this.value) {
      return;
    }
    var newData = this.updateElement(element);
    this.value = newData;
    this.dataSource = newData;
    this.onChange(this.value);
    this.stateChanges.next();
    this.onTouched(this.value);
    this.itemsUpdated.emit();
  }
  updateElement(element) {
    if (!this.value) {
      return [];
    }
    var index = this.value?.findIndex(RealstateData => RealstateData.id === element.id);
    if (index == -1) {
      return this.value;
    }
    this.value[index] = element;
    var newData = [];
    newData.push(...this.value);
    return newData;
  }
}
_class = InputSheetTableComponent;
_class.ɵfac = function InputSheetTableComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-input-sheet-table"]],
  outputs: {
    itemsUpdated: "itemsUpdated"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: _class
  }])],
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "sheet-item-container"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "sheet-item-header"], ["fxLayout", "column", "fxLayoutAlign", "start start"], ["target", ""], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "full-width", 3, "hidden", "realstateData", "updatedOrPosted", "deleted"]],
  template: function InputSheetTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, InputSheetTableComponent_div_0_Template, 12, 3, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.value);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatMiniFabButton, _sheet_item_edit_sheet_item_edit_component__WEBPACK_IMPORTED_MODULE_3__.SheetItemEditComponent],
  styles: [".header-image[_ngcontent-%COMP%] {\n  \n\n  background-image: url('/assets/image/home.png');\n  background-size: cover;\n}\n\n.sheet-item-header[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n.sheet-item-container[_ngcontent-%COMP%]{\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5nLXN0ZXBwZXIvY29tcG9uZW50cy9pbnB1dC1zaGVldC10YWJsZS9pbnB1dC1zaGVldC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUZBQXlGO0VBQ3pGLCtDQUErQztFQUMvQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0RUFBNEU7RUFDNUUsYUFBYTtBQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pbWFnZSB7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7ICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlL2hvbWUucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnNoZWV0LWl0ZW0taGVhZGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2hlZXQtaXRlbS1jb250YWluZXJ7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('detailExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
      height: '0px',
      minHeight: '0'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
      height: '*'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
  }
});

/***/ }),

/***/ 6536:
/*!**************************************************************************************!*\
  !*** ./src/app/components/setting-stepper/components/new-item/new-item.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewItemComponent: () => (/* binding */ NewItemComponent)
/* harmony export */ });
/* harmony import */ var D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_interfaces_constant_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/interfaces/constant.enum */ 4853);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _posting_from_account_link_posting_from_account_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posting-from-account-link/posting-from-account-link.component */ 3275);
/* harmony import */ var guid_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! guid-ts */ 4961);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/web-api.service */ 1086);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 26);

var _class;













class NewItemComponent {
  constructor(dialog, webApiService) {
    this.dialog = dialog;
    this.webApiService = webApiService;
    this.link = '';
    this.itemposted = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.emptyElement = {
      id: guid_ts__WEBPACK_IMPORTED_MODULE_4__.Guid.newGuid().toString(),
      address: "",
      description: "",
      html: "",
      images: [],
      title: src_app_interfaces_constant_enum__WEBPACK_IMPORTED_MODULE_1__.Constant.newPostTitle
    };
    this.type = 'AccountLink';
  }
  ngOnInit() {
    this.reset();
  }
  reset() {
    this.element = lodash__WEBPACK_IMPORTED_MODULE_2___default().cloneDeep(this.emptyElement);
  }
  linkUpdated(link) {
    if (!link) {
      return;
    }
    if (link.includes("nhatot")) {
      this.type = 'ListingLink';
    }
    if (link.includes("www.chotot.com/user")) {
      this.type = 'AccountLink';
    }
  }
  fetchListingsFromUrl(link) {
    var _this = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!link) {
        return;
      }
      _this.linkUpdated(link);
      switch (_this.type) {
        case 'AccountLink':
          _this.openMultiplePostDialog(link);
          break;
        case 'ListingLink':
          _this.openSinglePostDialog(link);
          break;
        default:
          break;
      }
    })();
  }
  openMultiplePostDialog(link) {
    var _this2 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var listings = yield _this2.webApiService.getListingsFromAccountUrl(link);
      var dialogRef = _this2.dialog.open(_posting_from_account_link_posting_from_account_link_component__WEBPACK_IMPORTED_MODULE_3__.PostingFromAccountLinkComponent, {
        data: {
          title: "Đăng bài tự động qua link tài khoản",
          link: link,
          listings: listings
        },
        minWidth: "70vw"
      });
      dialogRef.afterClosed().subscribe(data => {
        _this2.itemposted.emit(data?.items ?? []);
      });
    })();
  }
  openSinglePostDialog(link) {
    var _this3 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const regex = /\/(\d+)\.htm/;
      var matches = link.match(regex);
      if (!matches) {
        return;
      }
      var listing = {
        images: [],
        listId: Number(matches[1]),
        title: "",
        url: link
      };
      var dialogRef = _this3.dialog.open(_posting_from_account_link_posting_from_account_link_component__WEBPACK_IMPORTED_MODULE_3__.PostingFromAccountLinkComponent, {
        data: {
          title: "Đăng bài tự động qua link bài viết",
          link: link,
          listings: [listing]
        },
        minWidth: "70vw"
      });
      dialogRef.afterClosed().subscribe(data => {
        _this3.itemposted.emit(data.items);
      });
    })();
  }
  multipleItemsPosted(elements) {
    this.itemposted.emit(elements);
    this.reset();
  }
  singleItemPosted(element) {
    this.itemposted.emit([element]);
    this.reset();
  }
}
_class = NewItemComponent;
_class.ɵfac = function NewItemComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_5__.WebApiService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-new-item"]],
  inputs: {
    link: "link"
  },
  outputs: {
    itemposted: "itemposted"
  },
  decls: 8,
  vars: 1,
  consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "full-width"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "full-width"], ["fxFlex", "100"], ["matInput", "", "placeholder", "Vui l\u00F2ng nh\u1EADp \u0111\u01B0\u1EDDng link t\u00E0i kho\u1EA3n ho\u1EB7c b\u00E0i vi\u1EBFt t\u1EA1i \u0111\u00E2y", "required", "", "rows", "1", 3, "ngModel", "ngModelChange", "change"], ["mat-raised-button", "", "color", "primary", "mat-button", "", 3, "click"]],
  template: function NewItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field")(4, "textarea", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function NewItemComponent_Template_textarea_ngModelChange_4_listener($event) {
        return ctx.link = $event;
      })("change", function NewItemComponent_Template_textarea_change_4_listener() {
        return ctx.linkUpdated(ctx.link);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "            ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NewItemComponent_Template_button_click_6_listener() {
        return ctx.fetchListingsFromUrl(ctx.link);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "X\u00E1c nh\u1EADn");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.link);
    }
  },
  dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput],
  styles: ["mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5nLXN0ZXBwZXIvY29tcG9uZW50cy9uZXctaXRlbS9uZXctaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3275:
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/setting-stepper/components/posting-from-account-link/posting-from-account-link.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostingFromAccountLinkComponent: () => (/* binding */ PostingFromAccountLinkComponent)
/* harmony export */ });
/* harmony import */ var D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var guid_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! guid-ts */ 4961);
/* harmony import */ var src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/web-api.service */ 1086);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/map-state.service */ 6778);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/database */ 3002);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _input_sheet_table_input_sheet_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-sheet-table/input-sheet-table.component */ 5276);

var _class;
















class PostingFromAccountLinkComponent {
  constructor(webApiService, _formBuilder, snackBar, mapStateService, db, data, dialogRef) {
    this.webApiService = webApiService;
    this._formBuilder = _formBuilder;
    this.snackBar = snackBar;
    this.mapStateService = mapStateService;
    this.db = db;
    this.data = data;
    this.dialogRef = dialogRef;
    this.numberOfAllowedListing = 10;
    this.itemsPosted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.listings = [];
    this.newListings = [];
    this.scannedListings = [];
    this.value = 0;
    this.fetchListingsFromUrlSpinner = false;
    this.scanSpinner = false;
    this.link = '';
    this.title = '';
    this.numberOfNewRequests = 0;
    this.numberOfOngoingRequests = 0;
    this.numberOfRequests = this.numberOfNewRequests + this.numberOfOngoingRequests;
    this.massPostingFormGroup = this._formBuilder.group({
      realstateDatas: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.link = _this.data.link;
      _this.title = _this.data.title;
      _this.listings = _this.data.listings;
      var currentreastates = _this.mapStateService.stateObservable.value.geoItems.map(item => item.realstateData).flat();
      _this.newListings = _this.filterNewListing(_this.listings, currentreastates);
      yield _this.scan(_this.newListings);
      _this.db.list('urlscanner', ref => ref.orderByChild("status").equalTo(0)).valueChanges().subscribe(value => {
        _this.numberOfNewRequests = value.length;
      });
      _this.db.list('urlscanner', ref => ref.orderByChild("status").equalTo(1)).valueChanges().subscribe(value => {
        _this.numberOfOngoingRequests = value.length;
      });
    })();
  }
  filterNewListing(input, allCurrent) {
    var allCurrentTitles = allCurrent.map(e => e.title);
    return input.filter(item => !allCurrentTitles.includes(item.title));
  }
  scan(listings) {
    var _this2 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.scanSpinner = true;
      _this2.value = 0;
      _this2.scannedListings = [];
      _this2.massPostingFormGroup.patchValue({
        realstateDatas: []
      });
      _this2.subscribeForDataFromUrls(listings);
    })();
  }
  subscribeForDataFromUrls(listings) {
    var _this3 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var urls = listings.map(listing => listing.url);
      var request = {
        key: "",
        urls: urls,
        status: 0,
        urlMetaResults: [],
        createdOn: null
      };
      var key = yield _this3.webApiService.submitRequestMedataDataFromUrls(request);
      var subscribe = _this3.db.object(`urlscanner/${key}`).valueChanges().subscribe(value => {
        if ((value?.urlMetaResults?.length ?? 0) == 0) {
          return;
        }
        var results = value?.urlMetaResults;
        _this3.scannedListings = results.map(result => {
          result.id = guid_ts__WEBPACK_IMPORTED_MODULE_1__.Guid.newGuid().toString();
          return result;
        });
        _this3.value = Math.round((_this3.scannedListings?.length ?? 0) / _this3.newListings.length * 100);
        if (_this3.scannedListings.length == _this3.newListings.length) {
          _this3.populateImages(_this3.scannedListings);
          _this3.massPostingFormGroup.patchValue({
            realstateDatas: _this3.scannedListings
          });
          _this3.scanSpinner = false;
          subscribe.unsubscribe();
        }
      });
    })();
  }
  populateImages(scannedListings) {
    scannedListings.forEach(scannedListing => {
      var images = this.newListings.find(listing => listing.url == scannedListing.html)?.images;
      if (images) {
        scannedListing.images = images;
      }
    });
  }
  postall() {
    var items = this.massPostingFormGroup.value.realstateDatas;
    if (!items) {
      return;
    }
    this.itemsPosted.emit(items);
    this.snackBar.open(`Đăng ${items.length} bài thành công!`, "", {
      duration: 2000
    });
    this.dialogRef.close({
      items: items
    });
    this.reset();
  }
  reset() {
    this.massPostingFormGroup.patchValue({
      realstateDatas: []
    });
    this.listings = [];
  }
}
_class = PostingFromAccountLinkComponent;
_class.ɵfac = function PostingFromAccountLinkComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_2__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_3__.MapStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_8__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-posting-from-account-link"]],
  inputs: {
    numberOfAllowedListing: "numberOfAllowedListing"
  },
  outputs: {
    itemsPosted: "itemsPosted"
  },
  decls: 17,
  vars: 8,
  consts: [["fxLayout", "row", "fxLayoutAlign", "space-between start"], ["mat-dialog-title", "", "fxFlex", "80"], ["mat-mini-fab", "", "color", "warn", "mat-dialog-close", ""], ["mat-dialog-content", "", "fxLayout", "column", "fxLayoutAlign", "start start"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "full-width", 3, "formGroup"], ["color", "primary", "mode", "determinate", 1, "example-margin", 3, "value"], ["formControlName", "realstateDatas", 1, "full-width"], ["fxLayout", "row", "fxLayoutAlign", "space-between end", "fxFlexOffset", "5", 1, "full-width"], ["mat-raised-button", "", "color", "accent", "mat-button", "", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", "mat-button", "", "mat-dialog-close", "", 3, "disabled", "click"]],
  template: function PostingFromAccountLinkComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 2)(4, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3)(7, "form", 4)(8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "mat-progress-bar", 5)(11, "app-input-sheet-table", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7)(13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostingFromAccountLinkComponent_Template_button_click_13_listener() {
        return ctx.scan(ctx.newListings);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " T\u1EA3i l\u1EA1i");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostingFromAccountLinkComponent_Template_button_click_15_listener() {
        return ctx.postall();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\u0110\u0103ng t\u1EA5t c\u1EA3 tin");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.massPostingFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("K\u1EBFt qu\u1EA3: T\u1ED5ng c\u1ED9ng ", ctx.listings.length, " b\u00E0i \u0111\u0103ng, ", ctx.newListings.length, " b\u00E0i m\u1EDBi");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.listings.length == 0)("disabled", ctx.newListings.length == 0 || ctx.scanSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", (ctx.massPostingFormGroup.value.realstateDatas == null ? null : ctx.massPostingFormGroup.value.realstateDatas.length) == 0);
    }
  },
  dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexOffsetDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatMiniFabButton, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogContent, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar, _input_sheet_table_input_sheet_table_component__WEBPACK_IMPORTED_MODULE_4__.InputSheetTableComponent],
  styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px 5px 5px 0 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5nLXN0ZXBwZXIvY29tcG9uZW50cy9wb3N0aW5nLWZyb20tYWNjb3VudC1saW5rL3Bvc3RpbmctZnJvbS1hY2NvdW50LWxpbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1wcm9ncmVzcy1iYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHggNXB4IDVweCAwICFpbXBvcnRhbnQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4677:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/setting-stepper/components/sheet-item-edit/sheet-item-edit.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SheetItemEditComponent: () => (/* binding */ SheetItemEditComponent)
/* harmony export */ });
/* harmony import */ var D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var guid_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! guid-ts */ 4961);
/* harmony import */ var src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/web-api.service */ 1086);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _share_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/image-uploader/image-uploader.component */ 4317);

var _class;














class SheetItemEditComponent {
  get realstateData() {
    return this._realstateData;
  }
  set realstateData(v) {
    this._realstateData = lodash__WEBPACK_IMPORTED_MODULE_1___default().cloneDeep(v);
    if (!this.realstateData) {
      return;
    }
    this.sheetItemEditForm.patchValue(this.realstateData);
    this.selectedImages = this.realstateData?.images ?? [];
  }
  constructor(_formBuilder, webApiService, snackBar) {
    this._formBuilder = _formBuilder;
    this.webApiService = webApiService;
    this.snackBar = snackBar;
    this.isNew = false;
    this.updatedOrPosted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.sheetItemEditForm = this._formBuilder.group({
      id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      html: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
    this.linkloading = false;
    this.imageIndex = 0;
    this.selectedImages = [];
  }
  ngOnInit() {
    if (!this.realstateData) {
      return;
    }
    this.sheetItemEditForm.patchValue(this.realstateData);
    this.selectedImages = this.realstateData.images;
  }
  fetchContentFromUrl(url) {
    var _this = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!url) {
        return;
      }
      _this.linkloading = true;
      var response = yield _this.webApiService.getMedataDataFromUrl(url);
      var data = {
        id: response.id,
        address: response.address,
        description: response.description,
        images: response.images,
        title: response.title,
        html: url
      };
      _this.sheetItemEditForm.patchValue(data);
      _this.selectedImages = response.images;
      _this.linkloading = false;
    })();
  }
  update() {
    var formValue = this.sheetItemEditForm.value;
    if (!formValue.address) {
      this.snackBar.open("Bạn chưa cập nhật địa chỉ!", "", {
        duration: 2000
      });
      return;
    }
    var value = {
      id: formValue.id ?? guid_ts__WEBPACK_IMPORTED_MODULE_2__.Guid.newGuid().toString(),
      title: formValue.title ?? '',
      address: formValue.address ?? '',
      description: formValue.description ?? '',
      images: this.selectedImages ?? [],
      html: formValue.html ?? ''
    };
    this.updatedOrPosted.emit(value);
    if (this.isNew) {
      this.snackBar.open("Đăng bài thành công!", "", {
        duration: 2000
      });
    } else {
      this.snackBar.open("Cập nhật thành công!", "", {
        duration: 2000
      });
    }
  }
  deleteItem() {
    var formValue = this.sheetItemEditForm.value;
    var value = {
      id: formValue.id ?? guid_ts__WEBPACK_IMPORTED_MODULE_2__.Guid.newGuid().toString(),
      title: formValue.title ?? '',
      address: formValue.address ?? '',
      description: formValue.description ?? '',
      images: this.selectedImages,
      html: formValue.html ?? ''
    };
    this.deleted.emit(value);
  }
  imagesUpdated(urls) {
    this.selectedImages = urls;
  }
}
_class = SheetItemEditComponent;
_class.ɵfac = function SheetItemEditComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_3__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-sheet-item-edit"]],
  inputs: {
    realstateData: "realstateData",
    isNew: "isNew"
  },
  outputs: {
    updatedOrPosted: "updatedOrPosted",
    deleted: "deleted"
  },
  decls: 29,
  vars: 8,
  consts: [[3, "formGroup"], ["fxLayout", "column"], ["matInput", "", "formControlName", "html", "placeholder", "T\u1EF1 \u0111\u1ED9ng nh\u1EADp n\u1ED9i dung b\u1EB1ng link b\u00E0i vi\u1EBFt", "required", "", "rows", "2", 3, "change"], ["html", ""], ["hidden", ""], ["matInput", "", "formControlName", "id", "placeholder", "Id", "required", ""], ["matInput", "", "formControlName", "address", "placeholder", "V\u00ED d\u1EE5: 26 \u0110inh B\u1ED9 L\u0129nh, B\u00ECnh Th\u1EA1nh", "required", ""], ["matInput", "", "formControlName", "title", "placeholder", "T\u1EF1a \u0111\u1EC1", "required", ""], [3, "diameter", "hidden"], ["matInput", "", "formControlName", "description", "placeholder", "M\u00F4 t\u1EA3", "required", "", "rows", "4", 3, "disabled"], [3, "inputImages", "imagesChanged"], ["mat-raised-button", "", "mat-button", "", 1, "button-front", 3, "click"]],
  template: function SheetItemEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "mat-form-field")(3, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Link b\u00E0i vi\u1EBFt:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "textarea", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SheetItemEditComponent_Template_textarea_change_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.fetchContentFromUrl(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 4)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field")(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\u0110\u1ECBa ch\u1EC9:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field")(16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Ti\u00EAu \u0111\u1EC1:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 7)(19, "mat-spinner", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-form-field")(21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "M\u00F4 t\u1EA3:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "textarea", 9)(24, "mat-spinner", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "app-image-uploader", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("imagesChanged", function SheetItemEditComponent_Template_app_image_uploader_imagesChanged_25_listener($event) {
        return ctx.imagesUpdated($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div")(27, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SheetItemEditComponent_Template_button_click_27_listener() {
        return ctx.update();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.sheetItemEditForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 30)("hidden", !ctx.linkloading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 30)("hidden", !ctx.linkloading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputImages", ctx.selectedImages);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.isNew ? "\u0110\u0103ng tin" : "C\u1EADp nh\u1EADt thay \u0111\u1ED5i");
    }
  },
  dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _share_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_4__.ImageUploaderComponent],
  styles: ["mat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.button-front[_ngcontent-%COMP%] {\n    left: 0\n}\n\n.button-end[_ngcontent-%COMP%] {\n    right: 0\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5nLXN0ZXBwZXIvY29tcG9uZW50cy9zaGVldC1pdGVtLWVkaXQvc2hlZXQtaXRlbS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLWZyb250IHtcclxuICAgIGxlZnQ6IDBcclxufVxyXG5cclxuLmJ1dHRvbi1lbmQge1xyXG4gICAgcmlnaHQ6IDBcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8425:
/*!*************************************************************************!*\
  !*** ./src/app/components/setting-stepper/setting-stepper.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingStepperComponent: () => (/* binding */ SettingStepperComponent)
/* harmony export */ });
/* harmony import */ var D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environment */ 2474);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_interfaces_constant_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces/constant.enum */ 4853);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/map-state.service */ 6778);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/web-api.service */ 1086);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _components_input_sheet_table_input_sheet_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/input-sheet-table/input-sheet-table.component */ 5276);
/* harmony import */ var _components_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-item/new-item.component */ 6536);

var _class;




















const _c0 = ["mapIframe"];
function SettingStepperComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "C\u00E0i \u0111\u1EB7t");
  }
}
function SettingStepperComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "Xem tr\u01B0\u1EDBc b\u1EA3n \u0111\u1ED3 c\u1EE7a b\u1EA1n");
  }
}
class SettingStepperComponent {
  constructor(_formBuilder, activatedRoute, router, mapStateService, sanitizer, webApiService, snackBar) {
    this._formBuilder = _formBuilder;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.mapStateService = mapStateService;
    this.sanitizer = sanitizer;
    this.webApiService = webApiService;
    this.snackBar = snackBar;
    this.realstateDatasInit = [];
    this.settingFormGroup = this._formBuilder.group({
      name: ['', null],
      phone: ['', null],
      link: ['', null],
      description: ['', null],
      image: ['', null],
      realstateDatas: [this.realstateDatasInit, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
    });
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl('main');
    this.imagesUploadInProgress = false;
    this.uploadedImageUrl = '';
  }
  ngOnInit() {
    var _this = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.activatedRoute.params.subscribe( /*#__PURE__*/function () {
        var _ref = (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
          _this.stateId = params['stateId'];
          if (!_this.stateId) {
            throw new Error('there is no phone in url param');
          }
          var state = yield _this.mapStateService.reloadState(_this.stateId);
          if (!state) {
            throw new Error('there is state');
          }
          _this.populatedUser(state);
          _this.mapUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(src_environment__WEBPACK_IMPORTED_MODULE_1__.UrlUtil.getMapUrlForUser(_this.stateId));
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  populatedUser(state) {
    var realstate = this.filteroutPostedItems(state.geoItems.map(item => item.realstateData).flat());
    this.settingFormGroup.patchValue({
      name: state.agent.name,
      phone: state.agent.phone,
      link: state.agent.link,
      description: state.agent.description,
      image: state.agent.image,
      realstateDatas: realstate
    });
  }
  itemposted(items) {
    var _this2 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var currentRealstateDatas = _this2.settingFormGroup.value.realstateDatas ?? [];
      items.forEach(item => {
        var index = currentRealstateDatas.findIndex(currentRealstateData => currentRealstateData.title == item.title);
        if (index == -1) {
          currentRealstateDatas?.push(item);
        } else {
          currentRealstateDatas[index] = item;
        }
      });
      if (!currentRealstateDatas) {
        return;
      }
      _this2.settingFormGroup.get('realstateDatas')?.setValue(_this2.filteroutPostedItems(currentRealstateDatas));
      yield _this2.save();
    })();
  }
  filteroutPostedItems(items) {
    return items.filter(r => !r.title.includes(src_app_interfaces_constant_enum__WEBPACK_IMPORTED_MODULE_3__.Constant.newPostTitle));
  }
  save() {
    var _this3 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.stateId) {
        throw new Error("No state Id");
      }
      yield _this3.extractAndSave(_this3.stateId);
      _this3.mapUrl = _this3.sanitizer.bypassSecurityTrustResourceUrl(src_environment__WEBPACK_IMPORTED_MODULE_1__.UrlUtil.getMapUrlForUser(_this3.stateId));
      _this3.mapIframe?.contentWindow?.location.reload();
    })();
  }
  extractAndSave(stateId) {
    var _this4 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var state = _this4.mapStateService.stateObservable.value;
      var newState = yield _this4.extractMapState(state);
      newState.geoCodeDatabase = _this4.mapStateService.stateObservable.getValue().geoCodeDatabase;
      _this4.mapStateService.stateObservable.next(newState);
      yield _this4.webApiService.saveUserStateById(stateId, newState);
    })();
  }
  extractMapState(state) {
    var _this5 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var items = _this5.settingFormGroup.value.realstateDatas ?? [];
      var agent = _this5.settingFormGroup.value;
      var newState = lodash__WEBPACK_IMPORTED_MODULE_2___default().cloneDeep(state);
      newState.agent = {
        name: agent.name ?? "",
        phone: agent.phone ?? "",
        description: "",
        image: "",
        link: agent.link ?? ""
      };
      newState.geoItems = yield _this5.mapStateService.mapToGeoItems(items);
      return newState;
    })();
  }
  publish() {
    this.router.navigate(['main', this.stateId ?? '']);
  }
}
_class = SettingStepperComponent;
_class.ɵfac = function SettingStepperComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_map_state_service__WEBPACK_IMPORTED_MODULE_4__.MapStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_5__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-setting-stepper"]],
  viewQuery: function SettingStepperComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatAccordion, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.mapIframe = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    }
  },
  decls: 46,
  vars: 3,
  consts: [["matStepLabel", ""], [3, "formGroup"], ["matInput", "", "formControlName", "name", "placeholder", "Tu\u1EA5n Ph\u1EA1m", "required", ""], ["matInput", "", "formControlName", "phone", "placeholder", "08xxxxxxxx", "type", "number"], ["matInput", "", "formControlName", "link", "placeholder", "https://www.chotot.com/user...", "type", "text"], ["link", ""], ["mat-raised-button", "", "color", "accent", 3, "click"], [3, "link", "itemposted"], ["formControlName", "realstateDatas", 3, "itemsUpdated"], ["mat-raised-button", "", "color", "primary", "matStepperNext", ""], ["fxLayoutAlign", "center center", 1, "step-container"], [1, "map-preview-iframe", 3, "src"], ["mapIframe", ""], ["mat-raised-button", "", "color", "primary", "matStepperPrevious", ""], ["mat-raised-button", "", "color", "primary", 3, "click"]],
  template: function SettingStepperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-stepper")(1, "mat-step");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SettingStepperComponent_ng_template_2_Template, 1, 0, "ng-template", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "form", 1)(4, "mat-accordion")(5, "mat-expansion-panel")(6, "mat-expansion-panel-header")(7, "mat-panel-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Th\u00F4ng tin c\u00E1 nh\u00E2n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "T\u00EAn");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-form-field")(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Link t\u00E0i kho\u1EA3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SettingStepperComponent_Template_button_click_22_listener() {
        ctx.save();
        return ctx.accordion == null ? null : ctx.accordion.closeAll();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "C\u1EADp nh\u1EADt thay \u0111\u1ED5i");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-expansion-panel")(25, "mat-expansion-panel-header")(26, "mat-panel-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, " \u0110\u0103ng b\u00E0i m\u1EDBi ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "app-new-item", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("itemposted", function SettingStepperComponent_Template_app_new_item_itemposted_28_listener($event) {
        return ctx.itemposted($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "mat-expansion-panel")(30, "mat-expansion-panel-header")(31, "mat-panel-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " Nh\u1EEFng b\u00E0i \u0111\u00E3 \u0111\u0103ng ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "app-input-sheet-table", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("itemsUpdated", function SettingStepperComponent_Template_app_input_sheet_table_itemsUpdated_33_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Ti\u1EBFp theo");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "mat-step")(37, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, SettingStepperComponent_ng_template_38_Template, 1, 0, "ng-template", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](39, "iframe", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div")(42, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Tr\u1EDF l\u1EA1i");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SettingStepperComponent_Template_button_click_44_listener() {
        return ctx.publish();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Ho\u00E0n t\u1EA5t");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.settingFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("link", _r1.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.mapUrl, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeResourceUrl"]);
    }
  },
  dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepLabel, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperNext, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperPrevious, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionPanelTitle, _components_input_sheet_table_input_sheet_table_component__WEBPACK_IMPORTED_MODULE_6__.InputSheetTableComponent, _components_new_item_new_item_component__WEBPACK_IMPORTED_MODULE_7__.NewItemComponent],
  styles: [".step-content-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  margin: 10px;\n}\n\n.map-preview-iframe[_ngcontent-%COMP%]{\n  width: 100%;\n  min-height: 70vh;\n  pointer-events: none;\n}\n\nmat-spinner[_ngcontent-%COMP%]{\n  margin: 10px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5nLXN0ZXBwZXIvc2V0dGluZy1zdGVwcGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXAtY29udGVudC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ubWFwLXByZXZpZXctaWZyYW1le1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDcwdmg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVye1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4317:
/*!*****************************************************************************!*\
  !*** ./src/app/components/share/image-uploader/image-uploader.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageUploaderComponent: () => (/* binding */ ImageUploaderComponent)
/* harmony export */ });
/* harmony import */ var D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/web-api.service */ 1086);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-viewer/image-viewer.component */ 1076);

var _class;








function ImageUploaderComponent_app_image_viewer_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-image-viewer", 8);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx_r1.uploadedImages);
  }
}
class ImageUploaderComponent {
  get inputImages() {
    return this._inputImages;
  }
  set inputImages(v) {
    this.uploadedImages = v ?? [];
    this._inputImages = v;
  }
  constructor(webApiService) {
    this.webApiService = webApiService;
    this.imagesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.uploadedImages = [];
    this.imagesUploadInProgress = false;
  }
  ngOnInit() {
    this.uploadedImages = this.inputImages ?? [];
  }
  onFileSelected(files) {
    var _this = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.imagesUploadInProgress = true;
      if (!files) {
        return;
      }
      var uploadedImages = yield _this.webApiService.saveImages(files);
      _this.uploadedImages = uploadedImages;
      _this.imagesUploadInProgress = false;
      _this.imagesChanged.emit(_this.uploadedImages);
    })();
  }
}
_class = ImageUploaderComponent;
_class.ɵfac = function ImageUploaderComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_web_api_service__WEBPACK_IMPORTED_MODULE_1__.WebApiService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-image-uploader"]],
  inputs: {
    inputImages: "inputImages"
  },
  outputs: {
    imagesChanged: "imagesChanged"
  },
  decls: 9,
  vars: 3,
  consts: [["fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["type", "button", "mat-raised-button", "", 3, "click"], [3, "diameter", "hidden"], ["hidden", "", "required", "", "type", "file", "multiple", "multiple", "accept", "image/png, image/gif, image/jpeg", 3, "change"], ["fileInput", ""], ["fxFlexOffset", "1", "fxLayout", "row", "fxLayoutAlign", "start center"], ["class", "full-width", 3, "images", 4, "ngIf"], [1, "full-width", 3, "images"]],
  template: function ImageUploaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ImageUploaderComponent_Template_button_click_2_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Th\u00EAm \u1EA3nh cho nh\u00E0 tr\u1ECD");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "mat-spinner", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ImageUploaderComponent_Template_input_change_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onFileSelected(_r0.files));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ImageUploaderComponent_app_image_viewer_8_Template, 1, 1, "app-image-viewer", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 40)("hidden", !ctx.imagesUploadInProgress);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uploadedImages.length > 0);
    }
  },
  dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexOffsetDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner, _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_2__.ImageViewerComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1076:
/*!*************************************************************************!*\
  !*** ./src/app/components/share/image-viewer/image-viewer.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageViewerComponent: () => (/* binding */ ImageViewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
var _class;



function ImageViewerComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 2);
  }
  if (rf & 2) {
    const image_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class ImageViewerComponent {
  set images(value) {
    this._images = value;
  }
  get images() {
    return this._images;
  }
  constructor() {
    this._images = [];
    this.width = 'auto';
    this.height = '400';
    this.selectedImageIndex = 0;
  }
  ngOnInit() {}
}
_class = ImageViewerComponent;
_class.ɵfac = function ImageViewerComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-image-viewer"]],
  inputs: {
    images: "images",
    width: "width",
    height: "height"
  },
  decls: 2,
  vars: 1,
  consts: [["fxLayout", "column", "fxLayoutAlign", "space-around center", 1, "image-container", "full-width"], ["class", "image", "onerror", "this.style.display='none'", 3, "src", 4, "ngFor", "ngForOf"], ["onerror", "this.style.display='none'", 1, "image", 3, "src"]],
  template: function ImageViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageViewerComponent_img_1_Template, 1, 1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective],
  styles: [".image-container[_ngcontent-%COMP%] {\n  width: 50vw;\n  height: auto;\n  background-color: black;\n}\n\nimg[_ngcontent-%COMP%] {\n  min-width: 30vw;\n  max-width: 50vw;\n  height: auto;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZS9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWluLXdpZHRoOiAzMHZ3O1xyXG4gICAgbWF4LXdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4853:
/*!*********************************************!*\
  !*** ./src/app/interfaces/constant.enum.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Constant: () => (/* binding */ Constant)
/* harmony export */ });
var Constant;
(function (Constant) {
  Constant["newPostTitle"] = "[B\u00E0i m\u1EDBi ch\u01B0a c\u00F3 ti\u00EAu \u0111\u1EC1]";
})(Constant || (Constant = {}));

/***/ }),

/***/ 6806:
/*!*****************************************************!*\
  !*** ./src/app/interfaces/interact-to-item.enum.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InteractToItem: () => (/* binding */ InteractToItem)
/* harmony export */ });
var InteractToItem;
(function (InteractToItem) {
  InteractToItem[InteractToItem["Remove"] = 0] = "Remove";
  InteractToItem[InteractToItem["Select"] = 1] = "Select";
})(InteractToItem || (InteractToItem = {}));

/***/ }),

/***/ 279:
/*!*****************************************!*\
  !*** ./src/app/interfaces/map-state.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyState: () => (/* binding */ EmptyState),
/* harmony export */   ToolMode: () => (/* binding */ ToolMode)
/* harmony export */ });
var ToolMode;
(function (ToolMode) {
  ToolMode[ToolMode["normal"] = 0] = "normal";
  ToolMode[ToolMode["mesure"] = 1] = "mesure";
})(ToolMode || (ToolMode = {}));
class EmptyState {
  constructor() {
    this.geoItems = [];
    this.geoCalculatingItems = [];
    this.geoRoutePairs = [];
    this.distance = 1000;
    this.toolMode = ToolMode.normal;
    this.agent = {};
    this.geoCodeDatabase = {};
  }
}

/***/ }),

/***/ 3375:
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeHtmlPipe: () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
var _class;


class SafeHtmlPipe {
  constructor(sanitized) {
    this.sanitized = sanitized;
  }
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
_class = SafeHtmlPipe;
_class.ɵfac = function SafeHtmlPipe_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
};
_class.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safeHtml",
  type: _class,
  pure: true
});

/***/ }),

/***/ 6655:
/*!************************************!*\
  !*** ./src/app/pipes/sort.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderByPipe: () => (/* binding */ OrderByPipe)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class OrderByPipe {
  constructor() {
    this.transform = lodash__WEBPACK_IMPORTED_MODULE_0__.orderBy;
  }
}
_class = OrderByPipe;
_class.ɵfac = function OrderByPipe_Factory(t) {
  return new (t || _class)();
};
_class.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "orderBy",
  type: _class,
  pure: true
});

/***/ }),

/***/ 8249:
/*!*************************************************!*\
  !*** ./src/app/services/Util/general-helper.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralHelper: () => (/* binding */ GeneralHelper)
/* harmony export */ });
class GeneralHelper {
  static getRandomRGB(opacity = 1) {
    // Generate random values between 0 and 255 for each component
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // Construct and return the RGB color string
    return {
      r: red,
      g: green,
      b: blue,
      a: opacity
    };
  }
  static toString(color) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  }
}

/***/ }),

/***/ 3178:
/*!*********************************************!*\
  !*** ./src/app/services/map-api.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapApiService: () => (/* binding */ MapApiService)
/* harmony export */ });
/* harmony import */ var _interfaces_interact_to_item_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/interact-to-item.enum */ 6806);
/* harmony import */ var _Util_general_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util/general-helper */ 8249);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class MapApiService {
  constructor() {
    this.normalGroup = new H.map.Group({
      zIndex: 0,
      data: {}
    });
    this.measureGroup = new H.map.Group({
      zIndex: 1,
      data: {}
    });
    this.alphabetDictionary = ["A", "B", "C", "D", "E", "F"];
    this.platform = new H.service.Platform({
      apikey: 'wQOFzJnltEfLDHulkvnkd26RgvFvmrDwGmr31xP1uhs'
    });
  }
  initMap(mapContainer) {
    this.defaultLayers = this.platform?.createDefaultLayers({
      lg: "vn"
    });
    this.map = new H.Map(mapContainer, this.defaultLayers.vector.normal.map, {
      center: {
        lat: 10.80814,
        lng: 106.70736
      },
      zoom: 11,
      pixelRatio: window.devicePixelRatio || 1
    });
    window.addEventListener('resize', () => this.map?.getViewPort().resize());
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, this.defaultLayers);
    this.setStyle();
    return this.map;
  }
  setStyle() {
    // get the vector provider from the base layer
    var provider = this.map?.getBaseLayer()?.getProvider();
    var style = new H.map.Style('/assets/map-styles/light.yaml');
    // set the style on the existing layer
    provider?.setStyle(style);
  }
  createVectorLayerMap(mapContainer) {
    var engineType = H.Map.EngineType['HARP'];
    var style = new H.map.render.harp.Style('assets/map-styles/timnhatromap.json');
    var service = this.platform?.getOMVService();
    var vectorLayer = service?.createLayer(style, {
      engineType,
      lg: "vn"
    });
    if (!vectorLayer) {
      return;
    }
    this.map = new H.Map(mapContainer, vectorLayer, {
      engineType: engineType,
      center: {
        lat: 10.80814,
        lng: 106.70736
      },
      zoom: 10,
      pixelRatio: window.devicePixelRatio || 1
    });
  }
  calculateRouteFromAtoB(origin, destimation) {
    if (!this.platform) {
      throw new Error("");
    }
    var router = this.platform.getRoutingService(undefined, 8),
      routeRequestParams = {
        routingMode: 'short',
        transportMode: 'car',
        origin: `${origin.position.lat},${origin.position.lng}`,
        destination: `${destimation.position.lat},${destimation.position.lng}`,
        return: 'polyline,travelSummary'
      };
    return new Promise((resolve, reject) => {
      router.calculateRoute(routeRequestParams, result => {
        var route = result.routes[0];
        resolve(route);
      }, reject);
    });
  }
  geocode(address) {
    var geocoder = this.platform?.getSearchService(),
      geocodingParameters = {
        q: address
      };
    return new Promise((resolve, reject) => {
      geocoder?.geocode(geocodingParameters, result => {
        var locations = result.items;
        resolve(locations.slice(0, 5));
      }, reject);
    });
  }
  calculateIsolineRoute(geocodeResult, distance) {
    var router = this.platform?.getRoutingService(undefined, 8),
      routeRequestParams = {
        'origin': `${geocodeResult.position.lat},${geocodeResult.position.lng}`,
        'range[type]': 'distance',
        'range[values]': distance,
        'transportMode': 'car',
        'routingMode': 'short'
      };
    return new Promise((resolve, reject) => {
      router?.calculateIsoline(routeRequestParams, result => {
        var route = result;
        resolve(route);
      }, reject);
    });
  }
  renderRouteShapesToMap(group, routes) {
    if (!this.map) {
      return;
    }
    this.clearAllBubble();
    var polylines = [];
    routes.forEach(route => {
      route.sections.forEach(section => {
        let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
        console.log(section);
        let polyline = new H.map.Polyline(linestring, {
          style: {
            lineWidth: 3,
            strokeColor: 'rgba(0, 128, 255, 0.7)'
          },
          data: {}
        });
        polylines.push(polyline);
        // this.renderRouteNoteMarker(linestring, section.travelSummary);
      });

      group?.addObjects(polylines);
      if (!group) {
        return;
      }
      this.map?.addObject(group);
    });
  }
  renderRouteNoteMarker(line, travelSummary) {
    var count = line.getPointCount();
    var point = line.extractPoint(Math.round(count / 2));
    this.openBubble(point, `${Math.round(travelSummary.length / 100) / 10} Km`);
  }
  openBubble(position, text) {
    var bubble = new H.ui.InfoBubble(position,
    // The FO property holds the province name.
    {
      content: text
    });
    this.ui?.addBubble(bubble);
    bubble.open();
  }
  clearAllBubble() {
    this.ui?.getBubbles().forEach(bu => this.ui?.removeBubble(bu));
    if (!this.map) {
      return;
    }
    this.ui = H.ui.UI.createDefault(this.map, this.defaultLayers);
  }
  renderLocationsToMap(group, geocodeResults, interactionCallBack) {
    if (!this.map) {
      return;
    }
    if (!group) {
      return;
    }
    group = new H.map.Group();
    geocodeResults.filter(geocodeResult => geocodeResult.type == 'Home').forEach(geocodeResult => {
      var marker = new H.map.Marker(geocodeResult.position);
      marker.addEventListener('tap', function (evt) {
        interactionCallBack(_interfaces_interact_to_item_enum__WEBPACK_IMPORTED_MODULE_0__.InteractToItem.Select, geocodeResult);
      }, false);
      marker.setIcon(new H.map.Icon('/assets/image/home.png'));
      group?.addObject(marker);
    });
    var offices = geocodeResults.filter(geocodeResult => geocodeResult.type == 'Office');
    for (let index = 0; index < offices.length; index++) {
      const geocodeResult = offices[index];
      var marker = new H.map.Marker(geocodeResult.position);
      marker.addEventListener('tap', function (evt) {
        interactionCallBack(_interfaces_interact_to_item_enum__WEBPACK_IMPORTED_MODULE_0__.InteractToItem.Select, geocodeResult);
      }, false);
      var alphabetCharacter = this.alphabetDictionary[index];
      geocodeResult.textId = alphabetCharacter;
      marker.setIcon(new H.map.Icon(`/assets/image/${alphabetCharacter}.png`));
      group?.addObject(marker);
    }
    ;
    // Add the locations group to the map
    this.map?.addObject(group);
  }
  renderCirclesToMap(group, geocodeResults, distance = 100, color = null) {
    if (!this.map) {
      return;
    }
    if (!group) {
      return;
    }
    geocodeResults.forEach(geocodeResult => {
      if (!geocodeResult.color) {
        geocodeResult.color = _Util_general_helper__WEBPACK_IMPORTED_MODULE_1__.GeneralHelper.getRandomRGB();
      }
      var colorborder = lodash__WEBPACK_IMPORTED_MODULE_2___default().cloneDeep(color !== null ? color : geocodeResult.color);
      colorborder.a = 0.8;
      var colorFill = lodash__WEBPACK_IMPORTED_MODULE_2___default().cloneDeep(color !== null ? color : geocodeResult.color);
      colorFill.a = 0.1;
      var styleOption = {
        lineWidth: 4,
        strokeColor: _Util_general_helper__WEBPACK_IMPORTED_MODULE_1__.GeneralHelper.toString(colorborder),
        fillColor: _Util_general_helper__WEBPACK_IMPORTED_MODULE_1__.GeneralHelper.toString(colorFill)
      };
      var style = new H.map.SpatialStyle(styleOption);
      group?.addObject(new H.map.Circle({
        lat: geocodeResult.position.lat,
        lng: geocodeResult.position.lng
      }, distance, {
        data: {},
        style: style
      }));
    });
    if (!group) {
      return;
    }
    this.map?.addObject(group);
  }
  zoomToLocations(locations, resolution = 11) {
    if (!this.map) {
      return;
    }
    if (locations.length == 0) {
      return;
    }
    var dummyGroup = new H.map.Group();
    for (var i = 0; i < locations.length; i += 1) {
      let location = locations[i];
      var marker = new H.map.Marker(location.position);
      dummyGroup.addObject(marker);
    }
    this.map?.getViewModel().setLookAtData({
      bounds: dummyGroup.getBoundingBox(),
      zoom: resolution
    });
  }
  onError(error) {
    alert('Can\'t reach the remote server');
  }
}
_class = MapApiService;
_class.ɵfac = function MapApiService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6778:
/*!***********************************************!*\
  !*** ./src/app/services/map-state.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapStateService: () => (/* binding */ MapStateService)
/* harmony export */ });
/* harmony import */ var D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _interfaces_interact_to_item_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/interact-to-item.enum */ 6806);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var _interfaces_map_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/map-state */ 279);
/* harmony import */ var _Util_general_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util/general-helper */ 8249);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_main_geo_added_home_list_geo_added_home_geo_added_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main/geo-added-home-list/geo-added-home/geo-added-home.component */ 3228);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ 121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _map_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map-api.service */ 3178);
/* harmony import */ var _web_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web-api.service */ 1086);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);

var _class;













class MapStateService {
  constructor(mapApiService, webApiService, meta, dialog, snackBar) {
    this.mapApiService = mapApiService;
    this.webApiService = webApiService;
    this.meta = meta;
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.routeDatabase = [];
    this.initState = {
      geoItems: [],
      geoCalculatingItems: [],
      geoRoutePairs: [],
      distance: 1000,
      toolMode: _interfaces_map_state__WEBPACK_IMPORTED_MODULE_2__.ToolMode.normal,
      agent: {},
      geoCodeDatabase: {}
    };
    this.stateObservable = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(this.initState);
    this.itemSelectedObservable = new rxjs__WEBPACK_IMPORTED_MODULE_10__.ReplaySubject(undefined);
    this.interactionCallBack = (type, item) => {
      switch (type) {
        case _interfaces_interact_to_item_enum__WEBPACK_IMPORTED_MODULE_1__.InteractToItem.Select:
          this.openItemDialog(item);
          break;
        default:
          break;
      }
    };
    this.stateObservable.subscribe(() => {
      this.rerenderMap();
    });
  }
  rerenderMap() {
    switch (this.stateObservable.value.toolMode) {
      case _interfaces_map_state__WEBPACK_IMPORTED_MODULE_2__.ToolMode.normal:
        this.onRerenderMapNormal();
        break;
      case _interfaces_map_state__WEBPACK_IMPORTED_MODULE_2__.ToolMode.mesure:
        this.onRerenderMapNormal();
        this.onRerenderMesureTool();
        break;
      default:
        break;
    }
  }
  onRerenderMapNormal() {
    this.mapApiService.measureGroup?.setVisibility(false);
    this.mapApiService.normalGroup?.setVisibility(true);
    this.mapApiService.clearAllBubble();
    var groupToRender = this.mapApiService.normalGroup;
    groupToRender?.removeAll();
    groupToRender?.setVisibility(true);
    this.mapApiService.renderLocationsToMap(groupToRender, this.stateObservable.value.geoItems, (type, item) => {
      this.openItemDialog(item);
    });
    var officeLists = this.stateObservable.value.geoItems.filter(item => item.type == 'Office');
    this.mapApiService.renderCirclesToMap(groupToRender, officeLists, this.stateObservable.value.distance);
  }
  onRerenderMesureTool() {
    var _this = this;
    this.mapApiService.measureGroup?.setVisibility(true);
    this.mapApiService.normalGroup?.setVisibility(true);
    var groupToRender = this.mapApiService.measureGroup;
    groupToRender?.removeAll();
    this.mapApiService.renderLocationsToMap(groupToRender, this.stateObservable.value.geoItems, /*#__PURE__*/function () {
      var _ref = (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (type, item) {
        if (_this.stateObservable.value.geoCalculatingItems.some(i => _this.compareLocation(i, item))) {
          return;
        }
        _this.stateObservable.value.geoCalculatingItems.push(item);
        var calculatingItems = _this.stateObservable.value.geoCalculatingItems;
        if (calculatingItems.length == 1) {
          groupToRender?.removeAll();
        }
        _this.mapApiService.renderCirclesToMap(groupToRender, calculatingItems, 100, {
          r: 17,
          g: 120,
          b: 100,
          a: 0.8
        });
        if (calculatingItems.length == 2) {
          var route = yield _this.getRoute(calculatingItems[0], calculatingItems[1]);
          _this.mapApiService.renderRouteShapesToMap(groupToRender, [route]);
          var route = yield _this.getRoute(calculatingItems[0], calculatingItems[1]);
          var travelSummary = route.sections[0].travelSummary;
          _this.snackBar.open(`${Math.round(travelSummary.length / 100) / 10} Km, ${Math.round(travelSummary.duration / 60)} Phút`, "", {
            duration: 3000
          });
          _this.stateObservable.value.geoCalculatingItems = [];
        }
      });
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  reloadState(stateId) {
    var _this2 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!stateId) {
        return null;
      }
      var state = yield _this2.webApiService.getStateById(stateId);
      if (!state) {
        return null;
      }
      _this2.updateMetaAndTitle(state.agent);
      _this2.stateObservable.next(state);
      return state;
    })();
  }
  updateMetaAndTitle(agent) {
    document.title = `Thông tin nhà trọ của ${agent.name}`;
    this.meta.addTag({
      property: "og:title",
      content: `Thông tin nhà trọ của ${agent.name}`
    });
    this.meta.addTag({
      property: "og:description",
      content: agent.description ?? ""
    });
    this.meta.addTag({
      property: "og:image",
      content: `${agent.image}`
    });
    this.meta.addTag({
      property: "og:url",
      content: `	http://146.190.84.59:8000/main/${agent.phone}`
    });
  }
  setAgent(agent) {
    this.stateObservable.value.agent = agent;
    this.stateObservable.next(this.stateObservable.value);
  }
  getGeoCodeResult(address, dosave) {
    var _this3 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.stateObservable.value.geoCodeDatabase[address]) {
        return _this3.stateObservable.value.geoCodeDatabase[address];
      }
      try {
        var apiResults = yield _this3.mapApiService.geocode(address);
        if (dosave) {
          _this3.stateObservable.value.geoCodeDatabase[address] = apiResults;
          _this3.stateObservable.next(_this3.stateObservable.value);
        }
        return apiResults;
      } catch (error) {
        console.error('could not find the adress');
        return [];
      }
    })();
  }
  getRoute(from, to) {
    var _this4 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.hasAlreadyExisted(from, to)) {
        var results = _this4.findExisting(from, to);
        return results[0].route;
      }
      var routeResult = yield _this4.mapApiService.calculateRouteFromAtoB(from, to);
      _this4.routeDatabase.push({
        from: from,
        to: to,
        route: routeResult
      });
      return routeResult;
    })();
  }
  addNewItem(item) {
    if (this.checkItemExisting(item)) {
      return;
    }
    var newItem = lodash__WEBPACK_IMPORTED_MODULE_4___default().cloneDeep(item);
    if (newItem.color === undefined) {
      var newRandomcolor = _Util_general_helper__WEBPACK_IMPORTED_MODULE_3__.GeneralHelper.getRandomRGB(0.5);
      newItem.color == newRandomcolor;
    }
    this.stateObservable.value.geoItems.push(newItem);
    this.stateObservable.next(this.stateObservable.value);
  }
  removeItem(item) {
    this.stateObservable.value.geoItems = this.stateObservable.value.geoItems.filter(value => !this.compareLocation(value, item));
    this.stateObservable.next(this.stateObservable.value);
  }
  openItemDialog(item) {
    if (!item || item.type === 'Office') {
      return;
    }
    let dialogRef = this.dialog.open(_components_main_geo_added_home_list_geo_added_home_geo_added_home_component__WEBPACK_IMPORTED_MODULE_5__.GeoAddedHomeComponent, {
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      height: '90vh'
    });
    let instance = dialogRef.componentInstance;
    instance.item = item;
    instance.agent = this.stateObservable.value.agent;
    instance.expanded = true;
  }
  checkItemExisting(item) {
    return this.stateObservable.value.geoItems.some(value => this.compareLocation(value, item));
  }
  mapToGeoItems(realstateData) {
    var _this5 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var dictionary = (0,underscore__WEBPACK_IMPORTED_MODULE_6__.groupBy)(realstateData, 'address');
      console.log(dictionary);
      var results = [];
      for (const [key, value] of Object.entries(dictionary)) {
        if (!key) {
          continue;
        }
        var geocodeResults = yield _this5.getGeoCodeResult(key, true);
        if (geocodeResults.length == 0) {
          continue;
        }
        var geoItem = {
          id: geocodeResults[0].id,
          address: {
            label: geocodeResults[0].address.label
          },
          position: geocodeResults[0].position,
          type: 'Home',
          realstateData: value,
          color: _Util_general_helper__WEBPACK_IMPORTED_MODULE_3__.GeneralHelper.getRandomRGB(1)
        };
        results.push(geoItem);
      }
      return results;
    })();
  }
  findExisting(from, to) {
    return this.routeDatabase.filter(routeData => {
      return this.compareLocation(routeData.from, from) && this.compareLocation(routeData.to, to);
    });
  }
  hasAlreadyExisted(from, to) {
    return this.routeDatabase.some(routeData => {
      return this.compareLocation(routeData.from, from) && this.compareLocation(routeData.to, to);
    });
  }
  compareLocation(A, B) {
    return A.address.label === B.address.label;
  }
}
_class = MapStateService;
_class.ɵfac = function MapStateService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_map_api_service__WEBPACK_IMPORTED_MODULE_7__.MapApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_web_api_service__WEBPACK_IMPORTED_MODULE_8__.WebApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1086:
/*!*********************************************!*\
  !*** ./src/app/services/web-api.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebApiService: () => (/* binding */ WebApiService)
/* harmony export */ });
/* harmony import */ var D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _interfaces_map_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/map-state */ 279);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1236);
/* harmony import */ var guid_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! guid-ts */ 4961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);

var _class;





class WebApiService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  createNewUserState(state = new _interfaces_map_state__WEBPACK_IMPORTED_MODULE_1__.EmptyState()) {
    var _this = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var dburl = `/api/state`;
      var res = yield _this.httpClient.post(dburl, {
        id: "",
        stateJson: JSON.stringify(state)
      }).toPromise();
      return {
        id: res.key,
        mapstate: res.object
      };
    })();
  }
  saveUserStateById(stateId, state) {
    var _this2 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        var dburl = `/api/state/${stateId}`;
        state.geoCodeDatabase = {};
        state.geoItems = _this2.populateGeoId(state?.geoItems);
        yield _this2.httpClient.put(dburl, {
          id: stateId,
          stateJson: JSON.stringify(state)
        }).toPromise();
      } catch (error) {
        console.log(error);
      }
      ;
    })();
  }
  getStateById(stateId) {
    var _this3 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var dburl = `/api/state/${stateId}`;
      var res = yield _this3.httpClient.get(dburl).toPromise();
      var state = {
        geoItems: res?.geoItems ?? [],
        geoCalculatingItems: res?.geoCalculatingItems ?? [],
        geoRoutePairs: res?.geoRoutePairs ?? [],
        distance: res?.distance ?? 1000,
        toolMode: res?.toolMode ?? _interfaces_map_state__WEBPACK_IMPORTED_MODULE_1__.ToolMode.normal,
        agent: res?.agent ?? {},
        geoCodeDatabase: res?.geoCodeDatabase ?? {}
      };
      return state;
    })();
  }
  populateGeoId(resGeoItems) {
    var geoItems = resGeoItems;
    if (!geoItems) {
      return [];
    }
    for (let index = 0; index < geoItems.length; index++) {
      geoItems[index].realstateData = this.populateRealstateId(geoItems[index].realstateData);
    }
    return geoItems;
  }
  populateRealstateId(resRealstateItems) {
    var items = resRealstateItems;
    if (!items) {
      return [];
    }
    for (let index = 0; index < items.length; index++) {
      items[index].id = items[index].id ?? guid_ts__WEBPACK_IMPORTED_MODULE_2__.Guid.newGuid().toString();
    }
    return items;
  }
  getMedataDataFromUrl(url) {
    var _this4 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(_this4.httpClient.get(`/api/url-scanner/metadata-from-url?url=${url}`));
        var casted = res;
        var formatedAddress = casted.address.replace(/(\r\n|\n|\r)/gm, "").replaceAll("/", " ");
        var data = {
          id: guid_ts__WEBPACK_IMPORTED_MODULE_2__.Guid.newGuid().toString(),
          address: formatedAddress,
          description: casted.description,
          images: casted.images,
          title: casted.title,
          html: url
        };
        return data;
      } catch (error) {
        console.error('getMedataDataFromUrl failed', error);
        throw error;
      }
    })();
  }
  submitRequestMedataDataFromUrls(request) {
    var _this5 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(_this5.httpClient.post(`/api/url-scanner/metadata-from-url`, request));
        return res.key;
      } catch (error) {
        console.error('submitRequestMedataDataFromUrl failed', error);
        throw error;
      }
    })();
  }
  getListingsFromAccountUrl(url) {
    var _this6 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(_this6.httpClient.get(`/api/url-scanner/listing-from-account?url=${url}`));
        return res;
      } catch (error) {
        console.error('getListingsFromAccountUrl failed', error);
        throw error;
      }
    })();
  }
  saveImage(file) {
    var _this7 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        var res = yield _this7.uploadImage(file);
        return res?.result.variants[0] ?? "";
      } catch (error) {
        throw new Error(`Failed to save image, error" ${JSON.stringify(error)}`);
      }
      ;
    })();
  }
  saveImages(files) {
    var _this8 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var results = [];
      try {
        for (const file of Array.from(files)) {
          var res = yield _this8.uploadImage(file);
          var url = res?.result.variants[0] ?? "";
          results.push(url);
        }
        return results;
      } catch (error) {
        throw new Error(`Failed to save image, error" ${JSON.stringify(error)}`);
      }
      ;
    })();
  }
  uploadImage(file) {
    var _this9 = this;
    return (0,D_Personal_Projects_rs_agent_helper_timnhatro_index_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!file) {
        alert('Please select an image file.');
        return null;
      }
      const formData = new FormData();
      formData.append('file', file);
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(_this9.httpClient.post('/api/images/upload', formData));
        return res;
      } catch (error) {
        console.error('Image upload failed:', error);
        throw error;
      }
    })();
  }
}
_class = WebApiService;
_class.ɵfac = function WebApiService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2474:
/*!****************************!*\
  !*** ./src/environment.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlUtil: () => (/* binding */ UrlUtil),
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
var _class;
class UrlUtil {
  static getDbUrlForUser(userphone) {
    return `${UrlUtil.database}${userphone}.json`;
  }
  static getMapUrlForUser(userphone) {
    return `${UrlUtil.base}${userphone}`;
  }
}
_class = UrlUtil;
_class.database = "https://rs-agent-map-default-rtdb.asia-southeast1.firebasedatabase.app/";
_class.base = "/main/";
const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDiOX_nO14W7ogetcKbRBcOYDfVE9tvr1A",
    authDomain: "rs-agent-map.firebaseapp.com",
    databaseURL: "https://rs-agent-map-urls.asia-southeast1.firebasedatabase.app/",
    projectId: "rs-agent-map",
    storageBucket: "rs-agent-map.appspot.com",
    messagingSenderId: "870407299470",
    appId: "1:870407299470:web:56d8d6655bc654d0e444df"
  }
};

/***/ }),

/***/ 6792:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 3574);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6792)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map