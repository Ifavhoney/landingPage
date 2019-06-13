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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _partials_body_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/body/body.component */ "./src/app/partials/body/body.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/meal-list/meal-list.component */ "./src/app/pages/meal-list/meal-list.component.ts");



// Component




var routes = [
    { path: 'home', component: _partials_body_body_component__WEBPACK_IMPORTED_MODULE_3__["BodyComponent"], data: { title: 'Home' } },
    { path: 'meal-list', component: _pages_meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_6__["MealListComponent"], data: { title: 'Meals Available' } },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], data: { title: 'Register' } },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], data: { title: 'Register' } },
    { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<flash-messages></flash-messages>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n<app-footer></app-footer>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/header/header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");
/* harmony import */ var _partials_body_body_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/body/body.component */ "./src/app/partials/body/body.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _pages_meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/meal-list/meal-list.component */ "./src/app/pages/meal-list/meal-list.component.ts");

//Modules




//Components







//Services


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _partials_body_body_component__WEBPACK_IMPORTED_MODULE_9__["BodyComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _pages_meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_13__["MealListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__["FlashMessagesModule"]
            ],
            providers: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__["FlashMessagesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-offset-4 col-md-4\">\r\n          <h1>Please Login</h1>\r\n          <form autocomplete=\"off\" (submit)=\"onLoginSubmit()\">\r\n              <fieldset class=\"form-group\">\r\n                  <label for=\"username\">Username:</label>\r\n                  <input type=\"text\" class=\"form-control\"\r\n                  [(ngModel)]=\"user.username\"\r\n                  name=\"username\" placeholder=\"Enter Username\"\r\n                  id=\"username\" required autofocus autocomplete=\"off\">\r\n              </fieldset>\r\n              <fieldset class=\"form-group\">\r\n                  <label for=\"password\">Password:</label>\r\n                  <input type=\"password\" class=\"form-control\"\r\n                  [(ngModel)]=\"user.password\"\r\n                  name=\"password\" placeholder=\"Enter Password\"\r\n                  id=\"password\" required autocomplete=\"off\">\r\n                  or\r\n                  <a routerLink=\"/register\">Register Here</a>\r\n              </fieldset>\r\n              <fieldset class=\"form-group text-right\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\">\r\n                <a routerLink=\"/home\">\r\n                    <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\">\r\n                </a>\r\n            </fieldset>\r\n          <br/>\r\n          <br/>\r\n          <br/>\r\n\r\n          </form>\r\n      </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.authService.authenticateUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeOut: 3000 });
                _this.router.navigate(['/home']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeOut: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/meal-list/meal-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/meal-list/meal-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lYWwtbGlzdC9tZWFsLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/meal-list/meal-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/meal-list/meal-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>{{ title }}</h1>\n\n    <table class=\"table table-bordered table-striped table-hover\">\n      <!-- Header Row-->\n      <tr>\n        <th class=\"text-centered\">Meal Name</th>\n      </tr>\n\n      <!-- Repeatable Template Row-->\n      <tr *ngFor=\"let meal1 of meals\">\n        <td class=\"text-center\">{{ meal1.meal }}</td>\n      </tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/meal-list/meal-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/meal-list/meal-list.component.ts ***!
  \********************************************************/
/*! exports provided: MealListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealListComponent", function() { return MealListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_meal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/meal.service */ "./src/app/services/meal.service.ts");






var MealListComponent = /** @class */ (function () {
    function MealListComponent(route, mealService, flashMessage, router) {
        this.route = route;
        this.mealService = mealService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    MealListComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
        this.meals = new Array();
        this.displayMealList();
    };
    MealListComponent.prototype.displayMealList = function () {
        var _this = this;
        this.mealService.getList().subscribe(function (data) {
            if (data.success) {
                console.log(data.mealList);
                _this.mealService = data.mealList;
            }
            else {
                _this.flashMessage.show('User must be logged-in', { cssClass: 'alert-danger', timeOut: 3000 });
            }
        });
    };
    MealListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meal-list',
            template: __webpack_require__(/*! ./meal-list.component.html */ "./src/app/pages/meal-list/meal-list.component.html"),
            styles: [__webpack_require__(/*! ./meal-list.component.css */ "./src/app/pages/meal-list/meal-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_meal_service__WEBPACK_IMPORTED_MODULE_4__["MealService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MealListComponent);
    return MealListComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\r\n  <div class=\"row\">\r\n      <div class=\"col-md-offset-4 col-md-4\">\r\n          <h1>Please Register</h1>\r\n          <form autocomplete=\"off\" (submit)=\"onRegisterSubmit()\">\r\n              <fieldset class=\"form-group\">\r\n                  <label for=\"username\">Username:</label>\r\n                  <input type=\"text\" class=\"form-control\"\r\n                  [(ngModel)]=\"user.username\"\r\n                  name=\"username\" placeholder=\"Enter Username\"\r\n                  id=\"username\" required autocomplete=\"off\">\r\n              </fieldset>\r\n              <fieldset class=\"form-group\">\r\n                  <label for=\"password\">Password:</label>\r\n                  <input type=\"password\" class=\"form-control\"\r\n                  [(ngModel)]=\"user.password\"\r\n                  name=\"password\" placeholder=\"Enter Password\"\r\n                  id=\"password\" required autocomplete=\"off\">\r\n              </fieldset>\r\n              <fieldset class=\"form-group\">\r\n                  <label for=\"email\">Email:</label>\r\n                  <input type=\"email\" class=\"form-control\"\r\n                  [(ngModel)]=\"user.email\"\r\n                  name=\"email\" placeholder=\"Enter Email\"\r\n                  id=\"email\" required autocomplete=\"off\">\r\n              </fieldset>\r\n              <fieldset class=\"form-group\">\r\n                  <label for=\"displayName\">Dispaly Name:</label>\r\n                  <input type=\"text\" class=\"form-control\"\r\n                  [(ngModel)]=\"user.displayName\"\r\n                  name=\"displayName\" placeholder=\"Enter Display Name\"\r\n                  id=\"displayName\" required autocomplete=\"off\">\r\n              </fieldset>\r\n              <fieldset class=\"form-group text-right\">\r\n                  <input type=\"submit\" class=\"btn btn-success\" value=\"Register\">\r\n                  <a routerLink=\"/home\">\r\n                      <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\">\r\n                  </a>\r\n              </fieldset>\r\n          </form>\r\n          <br/>\r\n          <br/>\r\n          <br/>\r\n      </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.authService.registerUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and may log in', { cssClass: 'alert-success', timeOut: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('A registration Error Occurred', { cssClass: 'alert-danger', timeOut: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/partials/body/body.component.css":
/*!**************************************************!*\
  !*** ./src/app/partials/body/body.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2JvZHkvYm9keS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/partials/body/body.component.html":
/*!***************************************************!*\
  !*** ./src/app/partials/body/body.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <!--Helping Students-->\r\n\r\n\r\n\r\n  <div class=\"features\">\r\n\r\n    <!--Features-->\r\n\r\n\r\n    <Section class=\"text-center\">\r\n\r\n      <br> <br> <br>\r\n      <h1>Features</h1>\r\n      <br>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col col-md-4 wow lightSpeedIn\" data-wow-delay=\"0.7s\">\r\n          <i class=\"fas fa-dollar-sign fa-5x\"></i>\r\n          <h5>\r\n            Economy\r\n          </h5>\r\n\r\n          <p class=\"text-center\">\r\n            <em>\r\n              Surveyed affordable for students\r\n            </em>\r\n          </p>\r\n\r\n        </div>\r\n\r\n        <div class=\"col col-md-4 wow animated zoomInDown\">\r\n          <i class=\" fa fa-battery-full fa-5x\" aria-hidden=\"true\"></i>\r\n\r\n          <h5>\r\n            Focus\r\n          </h5>\r\n\r\n          <p class=\"text-center\">\r\n            <em>\r\n              Worry-less about off-campus neccessaties\r\n            </em>\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"col col-md-3 wow rollIn delay-2s\">\r\n          <i class=\"fa fa-graduation-cap fa-5x\" aria-hidden=\"true\"></i>\r\n          <h5>\r\n            Private\r\n          </h5>\r\n          <p class=\"text-center\">\r\n            <em>\r\n              Ran by your community\r\n            </em>\r\n          </p>\r\n        </div>\r\n\r\n      </div>\r\n    </Section>\r\n\r\n\r\n    <br> <br> <br>\r\n\r\n  </div>\r\n\r\n  <div class=\"services\">\r\n\r\n    <hr />\r\n    <br> <br> <br>\r\n\r\n    <div class=\"text-right\">\r\n\r\n      <i class=\"fab fa-android fa-2x\" aria-hidden=\"true\"></i>\r\n      <i class=\"fab fa-apple fa-2x\" aria-hidden=\"true\"></i>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-4 wow bounceIn\" data-wow-delay=\" 0.4s\">\r\n        <img src=\"assets/Assets/img/Sprites/iphone.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"col col-md-6 wow rex-feature-responsive\" data-wow-delay=\"0.4s\">\r\n\r\n        <br> <br>\r\n        <div class=\" m-5\">\r\n\r\n          <h4>\r\n            R e s p o n s i v e\r\n          </h4>\r\n\r\n          <h6>\r\n            <em>\r\n\r\n              Combined with latest technology, and a great team <br>\r\n              The result\r\n              is a crazy <strong> Reliable </strong> app.\r\n            </em>\r\n\r\n          </h6>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n<!-- Products -->\r\n\r\n\r\n<div>\r\n\r\n\r\n  <br><br><br>\r\n\r\n  <div class=\"products\">\r\n\r\n    <hr />\r\n\r\n    <div class=\"services\">\r\n\r\n\r\n\r\n      <div class=\"container\">\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col col-md-3\">\r\n\r\n          </div>\r\n\r\n          <div class=\"col col-md-4 text-center wow fadeIn slower\" data-wow-delay=\"0.4s\">\r\n            <img class=\"img-responsive image-container-number1\" src=\"assets/Assets/img/Sprites/number1.png\" alt=\"\">\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row wow fadeInUp\" data-wow-delay=\"0.9s\">\r\n          <div class=\"col col-md-6 text-left\">\r\n            <h4>\r\n              Moving\r\n            </h4>\r\n\r\n            <h6>\r\n              <em>\r\n\r\n                We Help with getting you In, and out of your dorms\r\n                <br>\r\n                Don't know what to bring? We can help you! <br>\r\n                Together we can take care of the many factors <br>\r\n                & make your year a piece of cake :)\r\n\r\n\r\n              </em>\r\n\r\n            </h6>\r\n\r\n          </div>\r\n          <div class=\"col col-md-6 text-right\">\r\n\r\n            <img class=\"img-responsive image-container\" src=\"assets/Assets/img/Sprites/box.jpg\" alt=\"\">\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <br><br><br>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col col-md-4\">\r\n\r\n          </div>\r\n\r\n          <div class=\"col col-md-5 wow fadeIn slower\">\r\n            <img class=\"img-responsive image-container-number2\" src=\"assets/Assets/img/Sprites/number2.png\" alt=\"\">\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row wow fadeInUp\" data-wow-delay=\"0.9s\">\r\n\r\n          <div class=\"col col-md-4 \">\r\n\r\n            <img class=\"img-responsive image-container\" src=\"assets/Assets/img/Sprites/grocery.png\" alt=\"\">\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"col col-md-4 text-right p-5\">\r\n\r\n          </div>\r\n\r\n          <div class=\"col col-md-4 text-right\">\r\n\r\n\r\n            <h4>\r\n              Grocery\r\n            </h4>\r\n\r\n            <h6>\r\n              <em>\r\n\r\n\r\n\r\n                Rex offers <strong> Monthly </strong>to <strong>Bi-weekly </strong> grocery\r\n                <br>deliveries to\r\n                students living on\r\n                residence.\r\n                Wether you are vegetarian, or a fish addict, or plain hungry\r\n\r\n                we get you items by the <strong>BULK! </strong>\r\n\r\n\r\n              </em>\r\n\r\n            </h6>\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <br><br><br>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col col-md-4\">\r\n\r\n          </div>\r\n\r\n          <div class=\"col col-md-5 wow fadeIn slower\">\r\n            <img class=\"img-responsive image-container-number2\" src=\"assets/Assets/img/Sprites/number3.png\" alt=\"\">\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row wow fadeInUp\" data-wow-delay=\"0.9s\">\r\n\r\n          <div class=\"col col-md-6 text-left\">\r\n            <br><br><br>\r\n\r\n\r\n            <h4>\r\n              Eat In\r\n            </h4>\r\n\r\n            <h6>\r\n              <em>\r\n\r\n\r\n                Be delivered Caf food to wherever you are on Campus <br>\r\n                <strong> Just order </strong> - <strong>wait a couple</strong> - and <strong>Eat\r\n                  In!</strong>\r\n\r\n\r\n\r\n              </em>\r\n\r\n            </h6>\r\n\r\n\r\n          </div>\r\n          <div class=\"col col-md-5 text-right\">\r\n            <img class=\"img-responsive image-container\" src=\"assets/Assets/img/Sprites/timer.png\" alt=\"\">\r\n\r\n\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <br> <br> <br>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/partials/body/body.component.ts":
/*!*************************************************!*\
  !*** ./src/app/partials/body/body.component.ts ***!
  \*************************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/partials/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/partials/body/body.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/partials/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <nav class=\"navbar fixed-bottom navbar-light bg-light\">\r\n    <h4 style=\"font-weight:bold\">&copy; Jason Eddy N'Guessan</h4>\r\n    <div style=\"text-align: right;\">\r\n      <a href=\"https://www.linkedin.com/in/jasonguessan/\">\r\n        <i class=\"fab fa-linkedin-in fa-3x\" aria-hidden=\"true\"></i>\r\n      </a>\r\n      &ensp; &ensp;\r\n\r\n      <a href=\"https://github.com/Ifavhoney\">\r\n        <i class=\"fab fa-github-alt fa-3x \" style=\"color:rgb(27, 14, 14); \" aria-hidden=\"true\"></i>\r\n      </a>\r\n    </div>\r\n  </nav>\r\n</footer>\r\n<script>\r\n  new WOW().init();\r\n</script>"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wowjs/dist/wow.min */ "./node_modules/wowjs/dist/wow.min.js");
/* harmony import */ var wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__);



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        new wowjs_dist_wow_min__WEBPACK_IMPORTED_MODULE_2__["WOW"]().init();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/partials/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/partials/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/partials/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <div id=\"wrapper\">\r\n\r\n        <!--NavBar-->\r\n        <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\r\n            <a class=\"navbar-brand\" routerLink=\"#\">\r\n                <h1>COMPANY LOGO</h1>\r\n            </a>\r\n\r\n            <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\" aria-expanded=\"false\"\r\n                aria-label=\"Toggle navigation\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\r\n                <div class=\"navbar-nav mx-auto\">\r\n\r\n                    <ul class=\"navbar-nav  ml-auto mt-2 mt-lg-0 \">\r\n\r\n                        <li class=\"nav-item active\"> <a class=\"nav-link\" routerLink=\"/\"> <i class=\"fa fa-2x fa-home\"\r\n                                    aria-hidden=\"true\"></i> </a>\r\n                        </li>\r\n\r\n                        <li class=\"nav-item\"> <a class=\"nav-link\" routerLink=\"/\"> Home </a>\r\n                        </li>\r\n\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" routerLink=\"/Service\"> Service</a>\r\n                        </li>\r\n\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" routerLink=\"/AboutUs\">About Us</a>\r\n                        </li>\r\n\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"social-icons-header\">\r\n                    <a href=\"#\"><i class=\"fab fa-facebook-f\"></i> </a>\r\n                    <a href=\"#\"><i class=\"fab fa-instagram\"></i> </a>\r\n                    <a href=\"#\"><i class=\"fab fa-twitter\"></i> </a>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n\r\n        <div class=\"container p-5 m-5\">\r\n            <div class=\"row wow\" data-wow-delay=\"0.4s\">\r\n                <div class=\"col col-md-2 animated slideInLeft \">\r\n                    <h1>\r\n                        <em>This is</em>\r\n                    </h1>\r\n                </div>\r\n                <div class=\"col col-md-2\">\r\n                    <button type=\"button\" name=\"btn-1\" id=\"rex-btn\" class=\"btn btn-warning btn-lg\">\r\n                        <h1>Rex</h1>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/partials/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/partials/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/partials/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.endpoint = 'http://localhost:3000/api/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.endpoint + 'register', user, this.httpOptions);
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post(this.endpoint + 'login', user, this.httpOptions);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', 'Bearer ' + token);
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.user = null;
        localStorage.clear();
        return this.http.get(this.endpoint + 'logout', this.httpOptions);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/meal.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/meal.service.ts ***!
  \******************************************/
/*! exports provided: MealService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealService", function() { return MealService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MealService = /** @class */ (function () {
    function MealService(http) {
        this.http = http;
        this.endpoint = 'http://localhost:3000/api/meal-list/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
    }
    MealService.prototype.getList = function () {
        return this.http.get(this.endpoint, this.httpOptions);
    };
    MealService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MealService);
    return MealService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\landingPage_Angular\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map