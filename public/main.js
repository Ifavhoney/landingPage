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



var routes = [];
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

module.exports = "<app-header></app-header>\r\n\r\n\r\n<app-body></app-body>\r\n<app-footer></app-footer>"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/header/header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");
/* harmony import */ var _partials_body_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/body/body.component */ "./src/app/partials/body/body.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _partials_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _partials_body_body_component__WEBPACK_IMPORTED_MODULE_7__["BodyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<div class=\"container\">\n\n  <!--Helping Students-->\n\n\n\n  <div class=\"features\">\n\n    <!--Features-->\n\n\n    <Section class=\"text-center\">\n\n      <br> <br> <br>\n      <h1>Features</h1>\n      <br>\n\n      <div class=\"row\">\n        <div class=\"col col-md-4 wow lightSpeedIn\" data-wow-delay=\"0.7s\">\n          <i class=\"fas fa-dollar-sign fa-5x\"></i>\n          <h5>\n            Economy\n          </h5>\n\n          <p class=\"text-center\">\n            <em>\n              Surveyed affordable for students\n            </em>\n          </p>\n\n        </div>\n\n        <div class=\"col col-md-4 wow animated zoomInDown\">\n          <i class=\" fa fa-battery-full fa-5x\" aria-hidden=\"true\"></i>\n\n          <h5>\n            Focus\n          </h5>\n\n          <p class=\"text-center\">\n            <em>\n              Worry-less about off-campus neccessaties\n            </em>\n          </p>\n        </div>\n\n        <div class=\"col col-md-3 wow rollIn delay-2s\">\n          <i class=\"fa fa-graduation-cap fa-5x\" aria-hidden=\"true\"></i>\n          <h5>\n            Private\n          </h5>\n          <p class=\"text-center\">\n            <em>\n              Ran by your community\n            </em>\n          </p>\n        </div>\n\n      </div>\n    </Section>\n\n\n    <br> <br> <br>\n\n  </div>\n\n  <div class=\"services\">\n\n    <hr />\n    <br> <br> <br>\n\n    <div class=\"text-right\">\n\n      <i class=\"fab fa-android fa-2x\" aria-hidden=\"true\"></i>\n      <i class=\"fab fa-apple fa-2x\" aria-hidden=\"true\"></i>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col col-md-4 wow bounceIn\" data-wow-delay=\" 0.4s\">\n        <img src=\"assets/Assets/img/Sprites/iphone.png\" alt=\"\">\n      </div>\n      <div class=\"col col-md-6 wow rex-feature-responsive\" data-wow-delay=\"0.4s\">\n\n        <br> <br>\n        <div class=\" m-5\">\n\n          <h4>\n            R e s p o n s i v e\n          </h4>\n\n          <h6>\n            <em>\n\n              Combined with latest technology, and a great team <br>\n              The result\n              is a crazy <strong> Reliable </strong> app.\n            </em>\n\n          </h6>\n\n        </div>\n      </div>\n\n    </div>\n\n\n  </div>\n</div>\n<!-- Products -->\n\n\n<div>\n\n\n  <br><br><br>\n\n  <div class=\"products\">\n\n    <hr />\n\n    <div class=\"services\">\n\n\n\n      <div class=\"container\">\n\n\n        <div class=\"row\">\n          <div class=\"col col-md-3\">\n\n          </div>\n\n          <div class=\"col col-md-4 text-center wow fadeIn slower\" data-wow-delay=\"0.4s\">\n            <img class=\"img-responsive image-container-number1\" src=\"assets/Assets/img/Sprites/number1.png\" alt=\"\">\n\n          </div>\n        </div>\n\n        <div class=\"row wow fadeInUp\" data-wow-delay=\"0.9s\">\n          <div class=\"col col-md-6 text-left\">\n            <h4>\n              Moving\n            </h4>\n\n            <h6>\n              <em>\n\n                We Help with getting you In, and out of your dorms\n                <br>\n                Don't know what to bring? We can help you! <br>\n                Together we can take care of the many factors <br>\n                & make your year a piece of cake :)\n\n\n              </em>\n\n            </h6>\n\n          </div>\n          <div class=\"col col-md-6 text-right\">\n\n            <img class=\"img-responsive image-container\" src=\"assets/Assets/img/Sprites/box.jpg\" alt=\"\">\n\n          </div>\n\n        </div>\n        <br><br><br>\n\n\n        <div class=\"row\">\n          <div class=\"col col-md-4\">\n\n          </div>\n\n          <div class=\"col col-md-5 wow fadeIn slower\">\n            <img class=\"img-responsive image-container-number2\" src=\"assets/Assets/img/Sprites/number2.png\" alt=\"\">\n\n          </div>\n        </div>\n\n        <div class=\"row wow fadeInUp\" data-wow-delay=\"0.9s\">\n\n          <div class=\"col col-md-4 \">\n\n            <img class=\"img-responsive image-container\" src=\"assets/Assets/img/Sprites/grocery.png\" alt=\"\">\n\n\n          </div>\n\n          <div class=\"col col-md-4 text-right p-5\">\n\n          </div>\n\n          <div class=\"col col-md-4 text-right\">\n\n\n            <h4>\n              Grocery\n            </h4>\n\n            <h6>\n              <em>\n\n\n\n                Rex offers <strong> Monthly </strong>to <strong>Bi-weekly </strong> grocery\n                <br>deliveries to\n                students living on\n                residence.\n                Wether you are vegetarian, or a fish addict, or plain hungry\n\n                we get you items by the <strong>BULK! </strong>\n\n\n              </em>\n\n            </h6>\n\n\n          </div>\n\n        </div>\n\n        <br><br><br>\n\n        <div class=\"row\">\n          <div class=\"col col-md-4\">\n\n          </div>\n\n          <div class=\"col col-md-5 wow fadeIn slower\">\n            <img class=\"img-responsive image-container-number2\" src=\"assets/Assets/img/Sprites/number3.png\" alt=\"\">\n\n          </div>\n        </div>\n\n        <div class=\"row wow fadeInUp\" data-wow-delay=\"0.9s\">\n\n          <div class=\"col col-md-6 text-left\">\n            <br><br><br>\n\n\n            <h4>\n              Eat In\n            </h4>\n\n            <h6>\n              <em>\n\n\n                Be delivered Caf food to wherever you are on Campus <br>\n                <strong> Just order </strong> - <strong>wait a couple</strong> - and <strong>Eat\n                  In!</strong>\n\n\n\n              </em>\n\n            </h6>\n\n\n          </div>\n          <div class=\"col col-md-5 text-right\">\n            <img class=\"img-responsive image-container\" src=\"assets/Assets/img/Sprites/timer.png\" alt=\"\">\n\n\n\n\n          </div>\n\n        </div>\n\n\n      </div>\n\n      <br> <br> <br>\n\n    </div>\n\n  </div>\n</div>"

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

module.exports = "<body>\r\n    <div id=\"wrapper\">\r\n\r\n        <!--NavBar-->\r\n        <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\r\n            <a class=\"navbar-brand\" href=\"#\">COMPANY LOGO</a>\r\n\r\n            <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\" aria-expanded=\"false\"\r\n                aria-label=\"Toggle navigation\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\r\n                <div class=\"navbar-nav mx-auto\">\r\n\r\n                    <ul class=\"navbar-nav  ml-auto mt-2 mt-lg-0 \">\r\n\r\n                        <li class=\"nav-item active\"> <a class=\"nav-link\" href=\"/\"> <i class=\"fa fa-2x fa-home\"\r\n                                    aria-hidden=\"true\"></i> </a>\r\n                        </li>\r\n\r\n                        <li class=\"nav-item\"> <a class=\"nav-link\" href=\"/\"> Home </a>\r\n                        </li>\r\n\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"/Service\"> Service</a>\r\n                        </li>\r\n\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"/AboutUs\">About Us</a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n\r\n                <div class=\"social-icons-header\">\r\n                    <a href=\"#\"><i class=\"fab fa-facebook-f\"></i> </a>\r\n                    <a href=\"#\"><i class=\"fab fa-instagram\"></i> </a>\r\n                    <a href=\"#\"><i class=\"fab fa-twitter\"></i> </a>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n\r\n        <div class=\"container p-5 m-5\">\r\n            <div class=\"row wow\" data-wow-delay=\"0.4s\">\r\n                <div class=\"col col-md-2 animated slideInLeft \">\r\n                    <h1>\r\n                        <em>This is</em>\r\n                    </h1>\r\n                </div>\r\n                <div class=\"col col-md-2\">\r\n                    <button type=\"button\" name=\"btn-1\" id=\"rex-btn\" class=\"btn btn-warning btn-lg\"\r\n                        (click)=\"animate('#rex-btn', 'bounceInDown')\">\r\n                        <h1>Rex</h1>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

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