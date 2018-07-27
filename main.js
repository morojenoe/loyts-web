(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_explore_explore_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/explore/explore.component */ "./src/app/components/explore/explore.component.ts");
/* harmony import */ var _components_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat-room/chat-room.component */ "./src/app/components/chat-room/chat-room.component.ts");
/* harmony import */ var _components_my_application_my_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/my-application/my-application.component */ "./src/app/components/my-application/my-application.component.ts");
/* harmony import */ var _components_my_application_create_application_create_application_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/my-application/create-application/create-application.component */ "./src/app/components/my-application/create-application/create-application.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'explore', component: _components_explore_explore_component__WEBPACK_IMPORTED_MODULE_2__["ExploreComponent"] },
    { path: 'application', component: _components_my_application_my_application_component__WEBPACK_IMPORTED_MODULE_4__["MyApplicationComponent"] },
    { path: 'application/create', component: _components_my_application_create_application_create_application_component__WEBPACK_IMPORTED_MODULE_5__["CreateApplicationComponent"] },
    { path: 'chat-room', component: _components_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_3__["ChatRoomComponent"] },
    { path: '', redirectTo: '/explore', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n  <span>Loyts</span>\n  <button\n    mat-icon-button\n    [matMenuTriggerFor]=\"authService.isLoggedIn()? menuLoggedIn : menuLoggedOut\"\n  >\n    <mat-icon [color]=\"authService.isLoggedIn()? 'primary' : null\">account_circle</mat-icon>\n  </button>\n</mat-toolbar>\n<mat-menu #menuLoggedOut=\"matMenu\">\n  <!-- <ng-template matMenuContent> -->\n    <a routerLink=\"/login\" mat-menu-item>Login</a>\n    <a routerLink=\"/register\" mat-menu-item >Sign Up</a>\n  <!-- </ng-template> -->\n</mat-menu>\n<mat-menu #menuLoggedIn=\"matMenu\">\n  <!-- <ng-template matMenuContent> -->\n    <button mat-menu-item (click)=\"logout()\">Logout</button>\n  <!-- </ng-template> -->\n</mat-menu>\n\n<nav\n  mat-tab-nav-bar\n  mat-stretch-tabs\n  *ngIf=\"authService.isLoggedIn()\"\n>\n  <a\n    mat-tab-link\n    *ngFor=\"let component of components\"\n    (click)=\"activeComponent = component.title\"\n    [routerLink]=\"component.routerLink\"\n    routerLinkActive #rla=\"routerLinkActive\"\n    [active]=\"rla.isActive\"\n  >\n    {{ component.title }}\n  </a>\n</nav>\n  \n<div fxLayout=\"column\">\n  <div fxFlexOffset=\"20px\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <div fxFlex.gt-xs=\"600px\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-family: 'Satisfy'; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Navigation = /** @class */ (function () {
    function Navigation() {
    }
    return Navigation;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.components = [
            { title: 'Explore', routerLink: '/explore' },
            { title: 'Application', routerLink: '/application' },
            { title: 'Chat Room', routerLink: '/chat-room' },
        ];
    }
    AppComponent.prototype.logout = function () {
        this.authService.signOut();
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_explore_explore_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/explore/explore.component */ "./src/app/components/explore/explore.component.ts");
/* harmony import */ var _components_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/chat-room/chat-room.component */ "./src/app/components/chat-room/chat-room.component.ts");
/* harmony import */ var _components_my_application_my_application_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/my-application/my-application.component */ "./src/app/components/my-application/my-application.component.ts");
/* harmony import */ var _components_my_application_create_application_create_application_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/my-application/create-application/create-application.component */ "./src/app/components/my-application/create-application/create-application.component.ts");
/* harmony import */ var _shared_record_voice_record_voice_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/record-voice/record-voice.component */ "./src/app/shared/record-voice/record-voice.component.ts");
/* harmony import */ var _shared_input_tags_input_tags_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/input-tags/input-tags.component */ "./src/app/shared/input-tags/input-tags.component.ts");
/* harmony import */ var _shared_input_language_input_language_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/input-language/input-language.component */ "./src/app/shared/input-language/input-language.component.ts");
/* harmony import */ var _shared_player_player_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/player/player.component */ "./src/app/shared/player/player.component.ts");
/* harmony import */ var _shared_application_application_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/application/application.component */ "./src/app/shared/application/application.component.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./services/in-memory-data.service */ "./src/app/services/in-memory-data.service.ts");
/* harmony import */ var _shared_create_proposal_create_proposal_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/create-proposal/create-proposal.component */ "./src/app/shared/create-proposal/create-proposal.component.ts");
/* harmony import */ var _shared_proposal_proposal_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shared/proposal/proposal.component */ "./src/app/shared/proposal/proposal.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_27__["AppComponent"],
                _components_explore_explore_component__WEBPACK_IMPORTED_MODULE_28__["ExploreComponent"],
                _components_chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_29__["ChatRoomComponent"],
                _components_my_application_my_application_component__WEBPACK_IMPORTED_MODULE_30__["MyApplicationComponent"],
                _components_my_application_create_application_create_application_component__WEBPACK_IMPORTED_MODULE_31__["CreateApplicationComponent"],
                _shared_record_voice_record_voice_component__WEBPACK_IMPORTED_MODULE_32__["RecordVoiceComponent"],
                _shared_input_tags_input_tags_component__WEBPACK_IMPORTED_MODULE_33__["InputTagsComponent"],
                _shared_input_language_input_language_component__WEBPACK_IMPORTED_MODULE_34__["InputLanguageComponent"],
                _shared_player_player_component__WEBPACK_IMPORTED_MODULE_35__["PlayerComponent"],
                _shared_application_application_component__WEBPACK_IMPORTED_MODULE_36__["ApplicationComponent"],
                _shared_create_proposal_create_proposal_component__WEBPACK_IMPORTED_MODULE_39__["CreateProposalComponent"],
                _shared_proposal_proposal_component__WEBPACK_IMPORTED_MODULE_40__["ProposalComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_41__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_42__["RegisterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_37__["HttpClientInMemoryWebApiModule"].forRoot(_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_38__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_27__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat-room/chat-room.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/chat-room/chat-room.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <p class=\"mat-body-1\">\n    There're no rooms yet.\n    <a mat-button color=\"accent\" routerLink=\"/application\">create your application</a>\n    or\n    <a mat-button color=\"accent\" routerLink=\"/explore\">propose yourself</a>.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/chat-room/chat-room.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/chat-room/chat-room.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/chat-room/chat-room.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chat-room/chat-room.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomComponent", function() { return ChatRoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatRoomComponent = /** @class */ (function () {
    function ChatRoomComponent() {
    }
    ChatRoomComponent.prototype.ngOnInit = function () {
    };
    ChatRoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-room',
            template: __webpack_require__(/*! ./chat-room.component.html */ "./src/app/components/chat-room/chat-room.component.html"),
            styles: [__webpack_require__(/*! ./chat-room.component.scss */ "./src/app/components/chat-room/chat-room.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatRoomComponent);
    return ChatRoomComponent;
}());



/***/ }),

/***/ "./src/app/components/explore/explore.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/explore/explore.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"30px\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Tag search</mat-label>\n    <input\n      #filterInput\n      matInput\n      (keyup)=\"filter(filterInput.value)\"\n      maxLength=\"50\"\n    >\n    <mat-hint align=\"end\">{{filterInput.value.length}} / 50</mat-hint>\n    <mat-icon matSuffix>search</mat-icon>\n  </mat-form-field>\n\n  <mat-divider fxFlexFill></mat-divider>\n  \n  <div fxLayout=\"column\" fxLayoutGap=\"5px\" fxLayoutAlign=\"center\" fxFlexFill>\n    <ng-container *ngFor=\"let application of applications$ | async; let i = index\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n        <div fxFlex.xs=\"96vw\">\n          <app-application\n            [application]=\"application\"\n            [proposal]=\"findProposal(application.id)\"\n          >\n          </app-application>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n  <div *ngIf=\"(applications$ | async)?.length === 0\"\n    fxLayout=\"row\"\n    fxLayoutAlign=\"center center\"\n    fxLayoutGap=\"10px\"\n  >\n    <p>\n      Nothing found for:\n    </p>\n    <mat-chip-list>\n      <mat-chip>{{filterInput.value}}</mat-chip>\n    </mat-chip-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/explore/explore.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/explore/explore.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/explore/explore.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/explore/explore.component.ts ***!
  \*********************************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_application_application_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/application/application.component */ "./src/app/shared/application/application.component.ts");
/* harmony import */ var _shared_player_player_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/player/player-state */ "./src/app/shared/player/player-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ExploreComponent = /** @class */ (function () {
    function ExploreComponent(applicationService) {
        this.applicationService = applicationService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ExploreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.applications$ = this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.applicationService.filterApplications(term); }));
        this.applicationService.getProposals().subscribe(function (proposals) { return _this.proposals = proposals; });
    };
    ExploreComponent.prototype.findProposal = function (applicationId) {
        var proposal = this.proposals.find(function (prop) { return prop.applicationId === applicationId; });
        if (proposal) {
            return proposal;
        }
        return undefined;
    };
    ExploreComponent.prototype.isAlreadyApplied = function (applicationId) {
        return this.proposals.findIndex(function (proposal) { return proposal.applicationId === applicationId; }) !== -1;
    };
    ExploreComponent.prototype.filter = function (value) {
        this.searchTerms.next(value);
    };
    ExploreComponent.prototype.initVoiceRecording = function (applicationId) {
        if (this.creatingProposalForAppId && this.creatingProposalForAppId === applicationId) {
            this.creatingProposalForAppId = undefined;
        }
        else {
            this.creatingProposalForAppId = applicationId;
        }
    };
    ExploreComponent.prototype.changePlayerState = function (appId, playerState) {
        var _this = this;
        if (this.playingApplicationId !== undefined && this.playingApplicationId !== appId) {
            var appComponent = this.applicationComponents.find(function (app) { return app.application.id === _this.playingApplicationId; });
            this.playingApplicationId = undefined;
            if (appComponent !== undefined) {
                appComponent.stopPlaying();
            }
        }
        if (playerState === _shared_player_player_state__WEBPACK_IMPORTED_MODULE_5__["PlayerState"].Playing) {
            this.playingApplicationId = appId;
        }
        else {
            this.playingApplicationId = undefined;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_shared_application_application_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ExploreComponent.prototype, "applicationComponents", void 0);
    ExploreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__(/*! ./explore.component.html */ "./src/app/components/explore/explore.component.html"),
            styles: [__webpack_require__(/*! ./explore.component.scss */ "./src/app/components/explore/explore.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"])),
        __metadata("design:paramtypes", [Object])
    ], ExploreComponent);
    return ExploreComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"form-margin\">\n  <div class=\"mat-title\" fxFlexAlign=\"center\">Login</div>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div fxLayout=\"column\">\n      <mat-form-field\n        fxFlexFill\n        fxFlexAlign=\"center\"\n      >\n        <mat-error>{{emailErrorMessage}}</mat-error>\n        <input\n          matInput\n          type=\"email\"\n          placeholder=\"Email\"\n          formControlName=\"emailFormControl\"\n        >\n      </mat-form-field>\n      <mat-form-field\n        fxFlexFill\n        fxFlexAlign=\"center\"\n        hintLabel=\"Minimum 6 symbols\"\n      >\n        <mat-error>{{passwordErrorMessage}}</mat-error>\n        <input\n          matInput\n          maxLength=\"50\"\n          type=\"password\"\n          placeholder=\"Password\"\n          formControlName=\"passwordFormControl\"\n        >\n      </mat-form-field>\n      <button\n        mat-raised-button\n        type=\"submit\"\n        fxFlexOffset=\"20px\"\n        [disabled]=\"loginForm.invalid\"\n      >\n        Login\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-margin {\n  margin: 25px; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
            ]),
            passwordFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50),
            ]),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            var email = this.loginForm.get('emailFormControl').value;
            var password = this.loginForm.get('passwordFormControl').value;
            this.authService.signInWithEmail(email, password).subscribe(function (error) {
                if (!error) {
                    _this.router.navigate(['/']);
                }
                else {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    switch (errorCode) {
                        case 'auth/invalid-email': ;
                        case 'auth/user-disabled': ;
                        case 'auth/user-not-found': {
                            _this.loginForm.get('emailFormControl').setErrors({
                                error: true,
                            });
                            _this.emailErrorMessage = errorMessage;
                            break;
                        }
                        case 'auth/wrong-password': {
                            _this.loginForm.get('passwordFormControl').setErrors({
                                error: true,
                            });
                            _this.passwordErrorMessage = errorMessage;
                            break;
                        }
                        default: {
                            console.log('unexpected error: ', errorMessage, ', error_code: ', errorCode);
                        }
                    }
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/my-application/create-application/create-application.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components/my-application/create-application/create-application.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"15px\">\n  <div class=\"mat-subheading-1 title-margin\" fxFlexAlign=\"center\">\n    You've not created an application yet or have done it more than 2 hours ago.\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n    <mat-vertical-stepper fxFlex=\"100vw\" linear (selectionChange)=\"selectionChange($event)\">\n      <mat-step label=\"Record Application\" [completed]=\"application.audio\">\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n          <mat-accordion>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  What should be in your application\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <div class=\"mat-body-1\">\n                  In your application try to emphasize your goals and what kind of person you are looking for.\n              </div>\n              <mat-accordion>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      Example 1\n                    </mat-panel-title>\n                  </mat-expansion-panel-header>\n                  <div class=\"mat-body-1\">\n                    Hi! My name is Lin Lin. I'm from China. On the next week, I'm going to visit Paris,\n                    so I'm looking for someone from this town or who were there to talk about must visit places.\n                  </div>\n                </mat-expansion-panel>\n                <mat-expansion-panel>\n                  <mat-expansion-panel-header>\n                    <mat-panel-title>\n                      Example 2\n                    </mat-panel-title>\n                  </mat-expansion-panel-header>\n                  <div class=\"mat-body-1\">\n                    Hi there! My name is Mark. I want to talk to someone who loves football as I am.\n                    If you watch La Liga and root for FC Barcelona, let's root for together!\n                  </div>\n                </mat-expansion-panel>\n              </mat-accordion>\n            </mat-expansion-panel>\n          </mat-accordion>\n          <app-record-voice (recordedVoice)=\"recordedVoice($event)\"></app-record-voice>\n        </div>\n        <div class=\"stepper-buttons\" *ngIf=\"application.audio\">\n          <button mat-raised-button color=\"primary\" matStepperNext>\n            Next\n          </button>\n        </div>\n      </mat-step>\n      <mat-step label=\"Choose the Language\" [completed]=\"application.language\">\n        <app-input-language (changeLanguage)=\"changeLanguage($event)\"></app-input-language>\n        <div class=\"stepper-buttons\" fxLayoutGap=\"10px\">\n          <button mat-raised-button color=\"warn\" matStepperPrevious>Back</button>\n          <button\n            mat-raised-button\n            color=\"primary\"\n            matStepperNext\n            [disabled]=\"!application.language\"\n          >\n            Next\n          </button>\n        </div>\n      </mat-step>\n      <mat-step label=\"Choose Tags\">\n        <app-input-tags (tagsChanged)=\"tagsChanged($event)\"></app-input-tags>\n        <div class=\"stepper-buttons\" fxLayoutGap=\"10px\">\n          <button mat-raised-button color=\"warn\" matStepperPrevious>Back</button>\n          <button mat-raised-button color=\"primary\" matStepperNext>Next</button>\n        </div>\n      </mat-step>\n      <mat-step label=\"Publish\">\n        <div fxLayout=\"row\">\n          <div fxFlex.xs=\"nogrow\" class=\"step-wrapper\">\n            <app-application [application]=\"application\"></app-application>\n          </div>\n        </div>\n        <div class=\"stepper-buttons\" fxLayoutGap=\"10px\">\n          <button mat-raised-button color=\"warn\" matStepperPrevious>Back</button>\n          <button mat-raised-button color=\"primary\" (click)=\"publish()\">Publish</button>\n        </div>\n      </mat-step>\n    </mat-vertical-stepper>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/my-application/create-application/create-application.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/components/my-application/create-application/create-application.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stepper-buttons {\n  margin-top: 10px; }\n\n.title-margin {\n  margin-left: 15px;\n  margin-right: 15px; }\n\n.step-wrapper {\n  min-width: 0px; }\n\n.vertical-stepper-wrapper {\n  min-width: 0px; }\n"

/***/ }),

/***/ "./src/app/components/my-application/create-application/create-application.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/my-application/create-application/create-application.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CreateApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateApplicationComponent", function() { return CreateApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var _models_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/application */ "./src/app/models/application.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CreateApplicationComponent = /** @class */ (function () {
    function CreateApplicationComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.application = new _models_application__WEBPACK_IMPORTED_MODULE_3__["Application"]();
    }
    CreateApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getMyApplication().subscribe(function (application) {
            if (application) {
                _this.router.navigate(['/application']);
            }
        });
    };
    CreateApplicationComponent.prototype.changeLanguage = function (language) {
        this.application.language = language;
    };
    CreateApplicationComponent.prototype.tagsChanged = function (tags) {
        this.application.tags = tags;
    };
    CreateApplicationComponent.prototype.recordedVoice = function (audio) {
        this.application.audio = audio;
    };
    CreateApplicationComponent.prototype.selectionChange = function (event) {
        if (event.selectedIndex === 3) {
            this.application.time = new Date(Date.now());
        }
    };
    CreateApplicationComponent.prototype.publish = function () {
        var _this = this;
        this.application.time = new Date(Date.now());
        this.appService.addApplication(this.application).subscribe(function (application) {
            _this.router.navigate(['/application']);
        });
    };
    CreateApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-application',
            template: __webpack_require__(/*! ./create-application.component.html */ "./src/app/components/my-application/create-application/create-application.component.html"),
            styles: [__webpack_require__(/*! ./create-application.component.scss */ "./src/app/components/my-application/create-application/create-application.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreateApplicationComponent);
    return CreateApplicationComponent;
}());



/***/ }),

/***/ "./src/app/components/my-application/my-application.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/my-application/my-application.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"application\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n    <div fxFlex.xs=\"96vw\">\n      <app-application [application]=\"application\"></app-application>\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/my-application/my-application.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/my-application/my-application.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/my-application/my-application.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/my-application/my-application.component.ts ***!
  \***********************************************************************/
/*! exports provided: MyApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyApplicationComponent", function() { return MyApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/application.service */ "./src/app/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MyApplicationComponent = /** @class */ (function () {
    function MyApplicationComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    MyApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getMyApplication().subscribe(function (application) {
            if (!application) {
                _this.router.navigate(['/application/create']);
            }
            else {
                _this.application = application;
            }
        });
    };
    MyApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-application',
            template: __webpack_require__(/*! ./my-application.component.html */ "./src/app/components/my-application/my-application.component.html"),
            styles: [__webpack_require__(/*! ./my-application.component.scss */ "./src/app/components/my-application/my-application.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MyApplicationComponent);
    return MyApplicationComponent;
}());



/***/ }),

/***/ "./src/app/components/register/passwords.validator.ts":
/*!************************************************************!*\
  !*** ./src/app/components/register/passwords.validator.ts ***!
  \************************************************************/
/*! exports provided: PasswordsValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordsValidator", function() { return PasswordsValidator; });
var PasswordsValidator = /** @class */ (function () {
    function PasswordsValidator() {
    }
    PasswordsValidator.validate = function (control) {
        var password = control.get('passwordFormControl').value;
        var confirmPassword = control.get('passwordAgainFormControl').value;
        if (password !== confirmPassword) {
            control.get('passwordAgainFormControl').setErrors({ MatchPassword: true });
        }
        return null;
    };
    return PasswordsValidator;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"form-margin\">\n  <div class=\"mat-title\" fxFlexAlign=\"center\">Create an Account</div>\n  <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\n    <div fxLayout=\"column\">\n      <mat-form-field\n        fxFlexFill\n        fxFlexAlign=\"center\"\n      >\n        <mat-error>{{emailError}}</mat-error>\n        <input\n          matInput\n          type=\"email\"\n          placeholder=\"Email\"\n          formControlName=\"emailFormControl\"\n        >\n      </mat-form-field>\n      <div\n        fxLayout=\"row\"\n        fxLayoutAlign=\"center center\"\n        fxLayoutGap=\"25px\"\n        formGroupName=\"passwordsGroup\"\n      >\n        <mat-form-field\n          fxFlex=\"grow\"\n          hintLabel=\"Minimum 6 symbols\"\n        >\n          <mat-error>{{passwordError}}</mat-error>\n          <input\n            #pass\n            matInput\n            maxLength=\"50\"\n            type=\"password\"\n            placeholder=\"Password\"\n            formControlName=\"passwordFormControl\"\n          >\n        </mat-form-field>\n        <mat-form-field\n          fxFlex=\"grow\"\n          hintLabel=\"Passwords identical\"\n        >\n          <mat-error>Passwords don't match</mat-error>\n          <input\n            matInput\n            maxLength=\"50\"\n            type=\"password\"\n            placeholder=\"Password again\"\n            formControlName=\"passwordAgainFormControl\"\n          >\n        </mat-form-field>\n      </div>\n      <button\n        mat-raised-button\n        fxFlexOffset=\"20px\"\n        type=\"submit\"\n        [disabled]=\"registrationForm.invalid\"\n      >\n        Sign Up\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _passwords_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passwords.validator */ "./src/app/components/register/passwords.validator.ts");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.validatorsForPass = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50),
        ];
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            emailFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
            ]),
            passwordsGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                passwordFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.validatorsForPass),
                passwordAgainFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            }, _passwords_validator__WEBPACK_IMPORTED_MODULE_2__["PasswordsValidator"].validate),
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.registrationForm.valid) {
            var email = this.registrationForm.get('emailFormControl').value;
            var password = this.registrationForm.get('passwordsGroup.passwordFormControl').value;
            this.authService.signUpWithEmail(email, password).subscribe(function (error) {
                if (!error) {
                    _this.router.navigate(['/explore']);
                }
                else {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    switch (errorCode) {
                        case 'auth/email-already-in-use': ;
                        case 'auth/invalid-email': {
                            _this.registrationForm.get('emailFormControl').setErrors({
                                error: errorMessage,
                            });
                            _this.emailError = errorMessage;
                            break;
                        }
                        case 'auth/weak-password': {
                            _this.registrationForm.get('passwordsGroup.passwordFormControl').setErrors({
                                weakPassword: true,
                            });
                            _this.passwordError = errorMessage;
                            break;
                        }
                        default: {
                            console.log(error);
                        }
                    }
                }
            });
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.afAuth.user.subscribe(function (user) { return _this.user = user; });
    }
    AuthService.prototype.signInWithEmail = function (email, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function () { return null; })
            .catch(function (error) { return error; }));
    };
    AuthService.prototype.isLoggedIn = function () {
        return Boolean(this.user);
    };
    AuthService.prototype.signUpWithEmail = function (email, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function () { return null; })
            .catch(function (error) { return error; }));
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/models/application.ts":
/*!***************************************!*\
  !*** ./src/app/models/application.ts ***!
  \***************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
var Application = /** @class */ (function () {
    function Application(id, language, tags, time, countProposals, audio) {
        if (id === void 0) { id = null; }
        if (language === void 0) { language = null; }
        if (tags === void 0) { tags = null; }
        if (time === void 0) { time = null; }
        if (countProposals === void 0) { countProposals = null; }
        if (audio === void 0) { audio = null; }
        this.id = id;
        this.language = language;
        this.tags = tags;
        this.time = time;
        this.countProposals = countProposals;
        this.audio = audio;
    }
    return Application;
}());



/***/ }),

/***/ "./src/app/models/proposal.ts":
/*!************************************!*\
  !*** ./src/app/models/proposal.ts ***!
  \************************************/
/*! exports provided: Proposal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proposal", function() { return Proposal; });
var Proposal = /** @class */ (function () {
    function Proposal() {
    }
    return Proposal;
}());



/***/ }),

/***/ "./src/app/services/application.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/application.service.ts ***!
  \*************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplicationService = /** @class */ (function () {
    function ApplicationService(http) {
        this.http = http;
        this.applicationUrl = '/api/applications';
    }
    ApplicationService.prototype.getApplications = function () {
        return this.http.get(this.applicationUrl);
    };
    ApplicationService.prototype.filterApplications = function (filterValue) {
        if (!filterValue.trim()) {
            return this.getApplications();
        }
        return this.http.get(this.applicationUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (applications) {
            return applications.filter(function (app) {
                return (app.tags.findIndex(function (tag) { return tag === filterValue; }) !== -1 ||
                    app.language === filterValue);
            });
        }));
    };
    ApplicationService.prototype.getProposals = function () {
        var url = "/api/proposals";
        return this.http.get(url);
    };
    ApplicationService.prototype.addProposal = function (proposal) {
        return this.http.post('/api/proposals', proposal);
    };
    ApplicationService.prototype.getMyApplication = function () {
        return this.getApplications().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (applications) { return applications[10]; }));
    };
    ApplicationService.prototype.addApplication = function (application) {
        return this.http.post(this.applicationUrl, application);
    };
    ApplicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "./src/app/services/in-memory-data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/in-memory-data.service.ts ***!
  \****************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _models_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/application */ "./src/app/models/application.ts");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");


var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var appDate = new Date(Date.now());
        var applications = [
            new _models_application__WEBPACK_IMPORTED_MODULE_0__["Application"](1, 'english', ['music', 'rock', 'alternative'], appDate, 3, null),
            new _models_application__WEBPACK_IMPORTED_MODULE_0__["Application"](2, 'english', ['sport', 'football', 'FIFA World Cup 2018', 'disappointment', 'prediction'], Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subMinutes"])(appDate, 2), 5, null),
            new _models_application__WEBPACK_IMPORTED_MODULE_0__["Application"](3, 'english', ['hollywood walk of fame'], Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subMinutes"])(appDate, 10), 22, null),
            new _models_application__WEBPACK_IMPORTED_MODULE_0__["Application"](4, 'chinese', ['culture', 'street food'], Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subMinutes"])(appDate, 30), 59, null),
            new _models_application__WEBPACK_IMPORTED_MODULE_0__["Application"](5, 'french', ['paris', 'attraction', 'landmark'], Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subMinutes"])(appDate, 59), 31, null),
            new _models_application__WEBPACK_IMPORTED_MODULE_0__["Application"](6, 'french', [], Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subMinutes"])(appDate, 60), 18, null),
            new _models_application__WEBPACK_IMPORTED_MODULE_0__["Application"](7, 'german', [], Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subMinutes"])(appDate, 80), 3, null),
            new _models_application__WEBPACK_IMPORTED_MODULE_0__["Application"](8, 'german', ['politics', 'election'], Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subMinutes"])(appDate, 100), 11, null),
            new _models_application__WEBPACK_IMPORTED_MODULE_0__["Application"](9, 'chinese', ['tell me about shanghai'], Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subMinutes"])(appDate, 120), 15, null),
            new _models_application__WEBPACK_IMPORTED_MODULE_0__["Application"](10, 'french', ['everything'], Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subMinutes"])(appDate, 28), 66, null),
        ];
        var proposals = [
            {
                id: 1,
                applicationId: 1,
                audio: undefined,
            },
            {
                id: 2,
                applicationId: 3,
                audio: undefined,
            },
            {
                id: 3,
                applicationId: 8,
                audio: undefined,
            },
        ];
        return { applications: applications, proposals: proposals };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/services/voice-recorder.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/voice-recorder.service.ts ***!
  \****************************************************/
/*! exports provided: VoiceRecorderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceRecorderService", function() { return VoiceRecorderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VoiceRecorderService = /** @class */ (function () {
    function VoiceRecorderService() {
    }
    VoiceRecorderService.prototype.start = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    };
    VoiceRecorderService.prototype.stop = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('audio');
    };
    VoiceRecorderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], VoiceRecorderService);
    return VoiceRecorderService;
}());



/***/ }),

/***/ "./src/app/shared/application/application.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/application/application.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"application-container\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n  <mat-card fxFlex.gt-xs=\"600px\" fxFlex.xs=\"grow\">\n    <div fxLayout=\"column\" fxLayoutGap=\"20px\">\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start\">\n        <div fxFlexAlign=\"center\" fxFlex=\"{{playerState != PlayerState.Playing? 'none' : 'grow'}}\">\n          <app-player\n            (changeState)=\"changePlayerState($event)\"\n            [color]=\"proposal? 'primary' : null\"\n          >\n          </app-player>\n        </div>\n        <ng-container *ngIf=\"playerState != PlayerState.Playing\">\n          <div class=\"tag-list\" fxFlex.gt-xs=\"grow\" fxFlexAlign=\"center\">\n            <mat-chip-list>\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <mat-chip fxFlex=\"none\">{{ application.language }}</mat-chip>\n                <mat-chip fxFlex=\"none\" *ngFor=\"let tag of application.tags\">\n                  {{ tag }}\n                </mat-chip>\n              </div>\n            </mat-chip-list>\n          </div>\n          <div fxFlex=\"nogrow\" fxHide.xs>\n            <mat-divider fxFlexFill [inset]=\"true\" [vertical]=\"true\"></mat-divider>\n          </div>\n          <div fxFlex=\"0 0 57px\" fxFlexAlign=\"center\" fxHide.xs>\n            <div\n              fxLayout=\"row\"\n              fxLayoutAlign=\"center center\"\n              fxLayoutGap=\"5px\"\n              matTooltip=\"Created {{elapsedTime()}} ago\"\n            >\n              <div class=\"mat-caption\">\n                {{elapsedTime()}}\n              </div>\n              <mat-icon>timelapse</mat-icon>\n            </div>\n          </div>\n          <div fxFlex=\"nogrow\" fxHide.xs>\n              <mat-divider fxFlexFill [inset]=\"true\" [vertical]=\"true\"></mat-divider>\n            </div>\n          <div fxFlex.gt-xs=\"0 0 66px\" fxFlexAlign=\"center\" fxHide.xs>\n            <div\n              fxLayout=\"row\"\n              fxLayoutAlign=\"center\"\n              fxLayoutGap=\"5px\"\n              matTooltip=\"{{numberOfProposals(application.countProposals)}} people created proposal for this application\"\n            >\n              <div class=\"mat-body-2\">\n                {{numberOfProposals(application.countProposals)}}\n              </div>\n              <mat-icon>face</mat-icon>\n            </div>\n          </div>\n          <div fxFlex=\"nogrow\">\n            <mat-divider fxFlexFill [inset]=\"true\" [vertical]=\"true\"></mat-divider>\n          </div>\n          <div fxFlex=\"none\" fxFlexAlign=\"center\">\n            <button\n              *ngIf=\"!isProposalDialogOpen\"\n              mat-icon-button\n              (click)=\"openProposalDialog(application.id)\"\n            >\n              <mat-icon [color]=\"proposal? 'primary' : null\">arrow_drop_down</mat-icon>\n            </button>\n            <button\n              *ngIf=\"isProposalDialogOpen\"\n              mat-icon-button\n              (click)=\"closeProposalDialog()\"\n            >\n              <mat-icon [color]=\"proposal? 'primary' : null\">arrow_drop_up</mat-icon>\n            </button>\n          </div>\n        </ng-container>\n      </div>\n  \n      <ng-container *ngIf=\"isProposalDialogOpen\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxHide.gt-xs=\"true\">\n          <div fxFlex=\"grow\" fxFlexAlign=\"center\">\n            <div\n              fxLayout=\"row\"\n              fxLayoutAlign=\"center center\"\n              fxLayoutGap=\"5px\"\n              matTooltip=\"Created {{elapsedTime()}} ago\"\n            >\n              <div class=\"mat-caption\">\n                {{elapsedTime()}}\n              </div>\n              <mat-icon>timelapse</mat-icon>\n            </div>\n          </div>\n          <div fxFlex=\"nogrow\">\n            <mat-divider fxFlexFill [inset]=\"true\" [vertical]=\"true\"></mat-divider>\n          </div>\n          <div fxFlex=\"grow\" fxFlexAlign=\"center\">\n            <div\n              fxLayout=\"row\"\n              fxLayoutAlign=\"center\"\n              fxLayoutGap=\"5px\"\n              matTooltip=\"{{numberOfProposals(application.countProposals)}} people created proposal for this application\"\n            >\n              <div class=\"mat-body-2\">\n                {{numberOfProposals(application.countProposals)}}\n              </div>\n              <mat-icon>face</mat-icon>\n            </div>\n          </div>\n        </div>\n        <mat-divider [inset]=\"true\"></mat-divider>\n        <ng-container *ngIf=\"!proposal\">\n          <app-create-proposal\n            [applicationId]=\"application.id\"\n            (close)=\"createdProposal($event)\"\n          >\n          </app-create-proposal>\n        </ng-container>\n        <ng-container *ngIf=\"proposal\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"start\">\n            <div class=\"mat-title\" fxFlexAlign=\"center\">Your Proposal</div>\n            <app-player [showTimeline]=\"true\"></app-player>\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/application/application.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/application/application.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tag-list {\n  overflow-x: auto;\n  overflow-y: hidden;\n  min-width: 0; }\n\n.application-container .mat-card {\n  padding: 15px; }\n"

/***/ }),

/***/ "./src/app/shared/application/application.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/application/application.component.ts ***!
  \*************************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/player.component */ "./src/app/shared/player/player.component.ts");
/* harmony import */ var _models_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/application */ "./src/app/models/application.ts");
/* harmony import */ var _player_player_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player/player-state */ "./src/app/shared/player/player-state.ts");
/* harmony import */ var _models_proposal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/proposal */ "./src/app/models/proposal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent() {
        this.PlayerState = _player_player_state__WEBPACK_IMPORTED_MODULE_4__["PlayerState"];
        this.playerState = _player_player_state__WEBPACK_IMPORTED_MODULE_4__["PlayerState"].NotStarted;
        this.changePlayer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isProposalDialogOpen = false;
    }
    ApplicationComponent.prototype.ngOnInit = function () {
    };
    ApplicationComponent.prototype.openProposalDialog = function () {
        this.isProposalDialogOpen = true;
    };
    ApplicationComponent.prototype.closeProposalDialog = function () {
        this.isProposalDialogOpen = false;
    };
    ApplicationComponent.prototype.createdProposal = function (proposal) {
        if (!proposal) {
            this.closeProposalDialog();
        }
        else {
            this.proposal = proposal;
        }
    };
    ApplicationComponent.prototype.changePlayerState = function (playerState) {
        this.playerState = playerState;
        this.changePlayer.emit(playerState);
    };
    ApplicationComponent.prototype.elapsedTime = function () {
        var time = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInMinutes"])(new Date(Date.now()), this.application.time);
        if (time < 45) {
            return time + " m";
        }
        if (time < 75) {
            return "1 h";
        }
        if (time < 105) {
            return '1.5 h';
        }
        return '2 h';
    };
    ApplicationComponent.prototype.numberOfProposals = function (proposalsCount) {
        if (proposalsCount < 5) {
            return '< 5';
        }
        if (proposalsCount < 10) {
            return '5-10';
        }
        if (proposalsCount < 20) {
            return '10-20';
        }
        return '20-50';
    };
    ApplicationComponent.prototype.stopPlaying = function () {
        this.playerComponent.stop();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_player_player_component__WEBPACK_IMPORTED_MODULE_2__["PlayerComponent"]),
        __metadata("design:type", Object)
    ], ApplicationComponent.prototype, "playerComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_application__WEBPACK_IMPORTED_MODULE_3__["Application"])
    ], ApplicationComponent.prototype, "application", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_proposal__WEBPACK_IMPORTED_MODULE_5__["Proposal"])
    ], ApplicationComponent.prototype, "proposal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ApplicationComponent.prototype, "changePlayer", void 0);
    ApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application',
            template: __webpack_require__(/*! ./application.component.html */ "./src/app/shared/application/application.component.html"),
            styles: [__webpack_require__(/*! ./application.component.scss */ "./src/app/shared/application/application.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "./src/app/shared/create-proposal/create-proposal.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/create-proposal/create-proposal.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"20px\">\n  <div\n    *ngIf=\"!proposalMessage\"\n    fxFlexAlign=\"center\"\n    class=\"mat-title\"\n  >\n    Record Your Proposal\n  </div>\n  <div\n    *ngIf=\"proposalMessage\"\n    fxFlexAlign=\"center\"\n    class=\"mat-title\"\n  >\n    Your Proposal\n  </div>\n  <app-record-voice (recordedVoice)=\"setRecordedProposal($event)\"></app-record-voice>\n  <div fxLayout=\"row\" fxLayoutGap=\"10px\" *ngIf=\"proposalMessage\">\n    <button\n      fxFlex=\"50%\"\n      mat-raised-button\n      color=\"warn\"\n      (click)=\"discardProposal()\"\n    >\n      Discard\n    </button>\n    <button\n      fxFlex=\"50%\"\n      mat-raised-button\n      color=\"primary\"\n      (click)=\"submitProposal()\"\n    >\n      Submit\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/create-proposal/create-proposal.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/create-proposal/create-proposal.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/create-proposal/create-proposal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/create-proposal/create-proposal.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProposalComponent", function() { return CreateProposalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/application.service */ "./src/app/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CreateProposalComponent = /** @class */ (function () {
    function CreateProposalComponent(applicationService) {
        this.applicationService = applicationService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CreateProposalComponent.prototype.ngOnInit = function () {
    };
    CreateProposalComponent.prototype.setRecordedProposal = function (voice) {
        this.proposalMessage = voice;
    };
    CreateProposalComponent.prototype.discardProposal = function () {
        this.proposalMessage = undefined;
        this.close.emit(null);
    };
    CreateProposalComponent.prototype.submitProposal = function () {
        var _this = this;
        var proposal = {
            id: Math.floor(Math.random() * 1000),
            applicationId: this.applicationId,
            audio: this.proposalMessage,
        };
        this.applicationService.addProposal(proposal).subscribe(function (prop) {
            _this.proposalMessage = undefined;
            _this.close.emit(prop);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CreateProposalComponent.prototype, "applicationId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateProposalComponent.prototype, "close", void 0);
    CreateProposalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-proposal',
            template: __webpack_require__(/*! ./create-proposal.component.html */ "./src/app/shared/create-proposal/create-proposal.component.html"),
            styles: [__webpack_require__(/*! ./create-proposal.component.scss */ "./src/app/shared/create-proposal/create-proposal.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"])),
        __metadata("design:paramtypes", [Object])
    ], CreateProposalComponent);
    return CreateProposalComponent;
}());



/***/ }),

/***/ "./src/app/shared/input-language/input-language.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/input-language/input-language.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n  <mat-form-field fxFlexFill>\n    <mat-select\n      placeholder=\"Select the language you've spoken\"\n      (selectionChange)=\"selectionChanged($event)\"\n    >\n      <mat-option *ngFor=\"let lang of langs\" value={{lang.name}}>\n        {{ lang.name }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/input-language/input-language.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/input-language/input-language.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/input-language/input-language.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/input-language/input-language.component.ts ***!
  \*******************************************************************/
/*! exports provided: InputLanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputLanguageComponent", function() { return InputLanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cospired_i18n_iso_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cospired/i18n-iso-languages */ "./node_modules/@cospired/i18n-iso-languages/index.js");
/* harmony import */ var _cospired_i18n_iso_languages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cospired_i18n_iso_languages__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Language = /** @class */ (function () {
    function Language() {
    }
    return Language;
}());
var InputLanguageComponent = /** @class */ (function () {
    function InputLanguageComponent() {
        this.changeLanguage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InputLanguageComponent.prototype.ngOnInit = function () {
        Object(_cospired_i18n_iso_languages__WEBPACK_IMPORTED_MODULE_1__["registerLocale"])(__webpack_require__(/*! @cospired/i18n-iso-languages/langs/en.json */ "./node_modules/@cospired/i18n-iso-languages/langs/en.json"));
        var languages = Object(_cospired_i18n_iso_languages__WEBPACK_IMPORTED_MODULE_1__["getNames"])('en');
        this.langs = Object.keys(languages).map(function (lang) { return ({
            code: lang,
            name: languages[lang]
        }); });
    };
    InputLanguageComponent.prototype.selectionChanged = function (event) {
        this.changeLanguage.emit(event.value.toLowerCase());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InputLanguageComponent.prototype, "changeLanguage", void 0);
    InputLanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-language',
            template: __webpack_require__(/*! ./input-language.component.html */ "./src/app/shared/input-language/input-language.component.html"),
            styles: [__webpack_require__(/*! ./input-language.component.scss */ "./src/app/shared/input-language/input-language.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputLanguageComponent);
    return InputLanguageComponent;
}());



/***/ }),

/***/ "./src/app/shared/input-tags/input-tags.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/input-tags/input-tags.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n  <mat-form-field fxFlexFill>\n    <mat-chip-list #chipList>\n      <mat-chip\n        *ngFor=\"let tag of tags\"\n        removable\n        (removed)=\"remove(tag)\"\n      >\n        {{tag}}\n        <mat-icon matChipRemove>cancel</mat-icon>\n      </mat-chip>\n      <input\n        #input\n        matInput\n        [readonly]=\"tags.length >= 5\"\n        placeholder=\"Tags\"\n        [maxLength]=\"maxTagLength\"\n        [matChipInputFor]=\"chipList\"\n        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n        (matChipInputTokenEnd)=\"add($event)\"\n      />\n    </mat-chip-list>\n    <mat-hint align=\"start\">{{tags.length}}/{{maxTagCount}} tags</mat-hint>\n    <mat-hint align=\"end\">{{input.value?.length || 0}}/{{maxTagLength}}</mat-hint>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/input-tags/input-tags.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/input-tags/input-tags.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/input-tags/input-tags.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/input-tags/input-tags.component.ts ***!
  \***********************************************************/
/*! exports provided: InputTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTagsComponent", function() { return InputTagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputTagsComponent = /** @class */ (function () {
    function InputTagsComponent() {
        this.maxTagLength = 50;
        this.maxTagCount = 5;
        this.tags = [];
        this.tagsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
    }
    InputTagsComponent.prototype.ngOnInit = function () {
    };
    InputTagsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.tags.push(value.trim().toLowerCase());
            this.tagsChanged.emit(this.tags);
        }
        if (input) {
            input.value = '';
        }
    };
    InputTagsComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
            this.tagsChanged.emit(this.tags);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InputTagsComponent.prototype, "tags", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InputTagsComponent.prototype, "tagsChanged", void 0);
    InputTagsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-tags',
            template: __webpack_require__(/*! ./input-tags.component.html */ "./src/app/shared/input-tags/input-tags.component.html"),
            styles: [__webpack_require__(/*! ./input-tags.component.scss */ "./src/app/shared/input-tags/input-tags.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputTagsComponent);
    return InputTagsComponent;
}());



/***/ }),

/***/ "./src/app/shared/player/player-state.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/player/player-state.ts ***!
  \***********************************************/
/*! exports provided: PlayerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerState", function() { return PlayerState; });
var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["NotStarted"] = 0] = "NotStarted";
    PlayerState[PlayerState["Playing"] = 1] = "Playing";
    PlayerState[PlayerState["Finished"] = 2] = "Finished";
})(PlayerState || (PlayerState = {}));


/***/ }),

/***/ "./src/app/shared/player/player.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/player/player.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\">\n  <ng-container [ngSwitch]=\"state\">\n    <button\n      *ngSwitchCase=\"State.NotStarted\"\n      mat-icon-button\n      (click)=\"play()\"\n    >\n      <div class=\"icon\">\n        <mat-icon [inline]=\"true\" [color]=\"color\">play_circle_outline</mat-icon>\n      </div>\n    </button>\n    <button\n      *ngSwitchCase=\"State.Playing\"\n      mat-icon-button\n      disableRipple\n      (click)=\"stop()\"\n    >\n      <div class=\"icon\">\n        <mat-icon inline [color]=\"color\">stop</mat-icon>\n      </div>\n    </button>\n  </ng-container>\n\n  <div fxFlex=\"grow\" *ngIf=\"showTimeline || state === State.Playing\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\">\n      <mat-progress-bar color=\"accent\" mode=\"determinate\" [value]=\"time/30*100\"></mat-progress-bar>\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        {{time}}s / {{duration}}s\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/player/player.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/player/player.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  font-size: 48px;\n  height: 48px;\n  width: 48px;\n  line-height: 48px; }\n"

/***/ }),

/***/ "./src/app/shared/player/player.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/player/player.component.ts ***!
  \***************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _player_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player-state */ "./src/app/shared/player/player-state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
        this.State = _player_state__WEBPACK_IMPORTED_MODULE_3__["PlayerState"];
        this.duration = 30;
        this.showTimeline = false;
        this.state = this.State.NotStarted;
        this.time = 0;
        this.changeState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PlayerComponent.prototype.ngOnInit = function () {
        this.changeState.emit(this.state);
    };
    PlayerComponent.prototype.subscribeToTimer = function () {
        var _this = this;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(this.duration + 1)).subscribe(function (value) { return _this.time = value; }, function (err) { }, function () { return _this.stop(); });
    };
    PlayerComponent.prototype.play = function () {
        this.state = this.State.Playing;
        this.changeState.emit(this.state);
        this.subscribeToTimer();
    };
    PlayerComponent.prototype.stop = function () {
        this.state = this.State.NotStarted;
        this.time = 0;
        this.changeState.emit(this.state);
        this.timer.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PlayerComponent.prototype, "duration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PlayerComponent.prototype, "showTimeline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PlayerComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlayerComponent.prototype, "changeState", void 0);
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/shared/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/shared/player/player.component.scss")]
        })
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/shared/proposal/proposal.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/proposal/proposal.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  proposal works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/proposal/proposal.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/proposal/proposal.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/proposal/proposal.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/proposal/proposal.component.ts ***!
  \*******************************************************/
/*! exports provided: ProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalComponent", function() { return ProposalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProposalComponent = /** @class */ (function () {
    function ProposalComponent() {
    }
    ProposalComponent.prototype.ngOnInit = function () {
    };
    ProposalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proposal',
            template: __webpack_require__(/*! ./proposal.component.html */ "./src/app/shared/proposal/proposal.component.html"),
            styles: [__webpack_require__(/*! ./proposal.component.scss */ "./src/app/shared/proposal/proposal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProposalComponent);
    return ProposalComponent;
}());



/***/ }),

/***/ "./src/app/shared/record-voice/record-voice.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/record-voice/record-voice.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container [ngSwitch]=\"state\">\n  <div\n    *ngSwitchCase=\"State.NotStarted\"\n    fxLayout=\"row\"\n  >\n    <button fxFlexFill color=\"accent\" mat-raised-button (click)=\"startRecording()\">\n      <mat-icon>mic</mat-icon>\n      Click To Record the Voice\n    </button>\n  </div>\n\n  <ng-container *ngSwitchCase=\"State.Started\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"20px\">\n      <div fxFlexFill>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\">\n          <div class=\"icon\">\n            <mat-icon inline>record_voice_over</mat-icon>\n          </div>\n          <div fxFlex=\"grow\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n              <mat-progress-bar color=\"accent\" mode=\"determinate\" [value]=\"time/30*100\"></mat-progress-bar>\n              <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                {{time}}s / {{maxDuration}}s\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      \n      <button\n        fxFlexFill\n        mat-raised-button\n        color=\"accent\"\n        (click)=\"finishRecording()\"\n        >\n          Stop Recording\n        </button>\n    </div>\n  </ng-container>\n  \n  <ng-container *ngSwitchCase=\"State.Finished\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"20px\">\n      <div fxFlexFill>\n        <app-player [showTimeline]=\"true\"></app-player>\n      </div>\n      <button fxFlexFill color=\"accent\" mat-raised-button (click)=\"startRecording()\">\n        Rerecord Message\n      </button>\n    </div>\n  </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/shared/record-voice/record-voice.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/record-voice/record-voice.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  font-size: 48px; }\n"

/***/ }),

/***/ "./src/app/shared/record-voice/record-voice.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/record-voice/record-voice.component.ts ***!
  \***************************************************************/
/*! exports provided: RecordVoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordVoiceComponent", function() { return RecordVoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_voice_recorder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/voice-recorder.service */ "./src/app/services/voice-recorder.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecordingState;
(function (RecordingState) {
    RecordingState[RecordingState["NotStarted"] = 0] = "NotStarted";
    RecordingState[RecordingState["Started"] = 1] = "Started";
    RecordingState[RecordingState["Finished"] = 2] = "Finished";
    RecordingState[RecordingState["Playing"] = 3] = "Playing";
})(RecordingState || (RecordingState = {}));
var RecordVoiceComponent = /** @class */ (function () {
    function RecordVoiceComponent(voiceRecorderService) {
        this.voiceRecorderService = voiceRecorderService;
        this.State = RecordingState;
        this.maxDuration = 30;
        this.recordedVoice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.state = this.State.NotStarted;
        this.time = null;
    }
    RecordVoiceComponent.prototype.ngOnInit = function () {
    };
    RecordVoiceComponent.prototype.subscribeToTimer = function () {
        var _this = this;
        this.timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(this.maxDuration + 1)).subscribe(function (value) { return _this.time = value; }, function (err) { }, function () { return _this.finishRecording(); });
    };
    RecordVoiceComponent.prototype.startRecording = function () {
        var _this = this;
        this.voiceRecorderService.start().subscribe(function (start) {
            if (start) {
                _this.state = _this.State.Started;
                _this.recordedVoice.emit(undefined);
                _this.subscribeToTimer();
            }
        });
    };
    RecordVoiceComponent.prototype.finishRecording = function () {
        var _this = this;
        this.voiceRecorderService.stop().subscribe(function (audio) {
            _this.state = _this.State.Finished;
            _this.timer.unsubscribe();
            _this.recordedVoice.emit(audio);
        });
    };
    RecordVoiceComponent.prototype.playApplication = function () {
        this.state = this.State.Playing;
        this.subscribeToTimer();
    };
    RecordVoiceComponent.prototype.stopPlayingApplication = function () {
        this.state = this.State.Finished;
        this.timer.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RecordVoiceComponent.prototype, "maxDuration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RecordVoiceComponent.prototype, "recordedVoice", void 0);
    RecordVoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-record-voice',
            template: __webpack_require__(/*! ./record-voice.component.html */ "./src/app/shared/record-voice/record-voice.component.html"),
            styles: [__webpack_require__(/*! ./record-voice.component.scss */ "./src/app/shared/record-voice/record-voice.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_voice_recorder_service__WEBPACK_IMPORTED_MODULE_3__["VoiceRecorderService"]])
    ], RecordVoiceComponent);
    return RecordVoiceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCkT5K4_8eZQbqDm9LfSCPQpNG7p3o0hSY',
        authDomain: 'loyts-37bcb.firebaseapp.com',
        databaseURL: 'https://loyts-37bcb.firebaseio.com',
        projectId: 'loyts-37bcb',
        storageBucket: 'loyts-37bcb.appspot.com',
        messagingSenderId: '162500754565'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dima/Projects/loyts/loyts-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map