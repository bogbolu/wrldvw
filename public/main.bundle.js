webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_focus__ = __webpack_require__("../../../../angular2-focus/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_focus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_focus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_people_people_component__ = __webpack_require__("../../../../../src/app/components/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_companies_companies_component__ = __webpack_require__("../../../../../src/app/components/companies/companies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_places_places_component__ = __webpack_require__("../../../../../src/app/components/places/places.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_search_search_component__ = __webpack_require__("../../../../../src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_addpeople_addpeople_component__ = __webpack_require__("../../../../../src/app/components/addpeople/addpeople.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_addcompany_addcompany_component__ = __webpack_require__("../../../../../src/app/components/addcompany/addcompany.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_9__components_welcome_welcome_component__["a" /* WelcomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_15__components_search_search_component__["a" /* SearchComponent */] },
    { path: 'addpeople', component: __WEBPACK_IMPORTED_MODULE_23__components_addpeople_addpeople_component__["a" /* AddpeopleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addcompany', component: __WEBPACK_IMPORTED_MODULE_24__components_addcompany_addcompany_component__["a" /* AddcompanyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_people_people_component__["a" /* PeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_companies_companies_component__["a" /* CompaniesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_places_places_component__["a" /* PlacesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_addpeople_addpeople_component__["a" /* AddpeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_addcompany_addcompany_component__["a" /* AddcompanyComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdTabsModule */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular2_focus__["FocusModule"].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_22__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/addcompany/addcompany.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/addcompany/addcompany.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h1 style=\"text-align: center;\">Profile Details</h1>\n    <div style=\"width: 30%; margin:25px auto;\">\n        <form (submit)=\"onAddcompanySubmit()\">\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" maxlength=\"20\" name=\"fullName\" placeholder=\"Full Name\" required=true [(ngModel)]=\"fullName\">\n            </div>\n            <div class=\"form-group\">\n                <input id=\"locationTextField\" class=\"form-control\" type=\"text\" name=\"location\" placeholder=\"City\" required=true [(ngModel)]=\"location\">\n            </div>\n\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" name=\"image\" placeholder=\"image url\" required=true [(ngModel)]=\"image\">\n            </div>\n            <div class=\"form-group\">\n                <p><textarea class=\"form-control\" type=\"text\" wrap=\"hard\" rows=\"5\" maxlength=\"250\" name=\"overview\" placeholder=\"Overview\" [(ngModel)]=\"overview\"></textarea></p>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-lg btn-primary btn-block\">Submit</button>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/addcompany/addcompany.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddcompanyComponent = (function () {
    function AddcompanyComponent(authService, router, flashMessages, zone) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
        this.zone = zone;
        this.ngZone = zone;
    }
    AddcompanyComponent.prototype.ngOnInit = function () {
        this.init();
    };
    AddcompanyComponent.prototype.init = function () {
        var _this = this;
        var options = {
            types: ['(cities)']
        };
        var input = document.getElementById('locationTextField');
        this.autocomplete = new google.maps.places.Autocomplete(input, options);
        this.autocomplete.addListener('place_changed', function () {
            _this.ngZone.run(function () {
                var place = _this.autocomplete.getPlace();
                var addressComponents = place.address_components;
                if (addressComponents == undefined) {
                    _this.flashMessages.show("Please input place exactly.", { cssClass: 'alert-danger', timeOut: 3000 });
                    return;
                }
                if (addressComponents.length == undefined) {
                    _this.flashMessages.show("Please input place exactly.", { cssClass: 'alert-danger', timeOut: 3000 });
                    return;
                }
                var arrayLength = addressComponents.length;
                var city = '';
                var state = '';
                var country = '';
                for (var i = 0; i < arrayLength; i++) {
                    var addressComponent = addressComponents[i];
                    var types = addressComponent.types;
                    var typesArrayLength = types.length;
                    for (var j = 0; j < typesArrayLength; j++) {
                        var type = types[j];
                        if (type == 'locality') {
                            city = addressComponent.long_name;
                        }
                        if (type == 'administrative_area_level_1') {
                            state = addressComponent.long_name;
                        }
                        if (type == 'country') {
                            country = addressComponent.long_name;
                        }
                    }
                }
                _this.location = city + ', ' + state + ', ' + country;
            });
        });
    };
    AddcompanyComponent.prototype.onAddcompanySubmit = function () {
        var _this = this;
        var company = {
            fullName: this.fullName,
            location: this.location,
            image: this.image,
            overview: this.overview
        };
        this.authService.addCompany(company).subscribe(function (data) {
            if (data.success) {
                _this.flashMessages.show(data.msg, {
                    cssClass: 'alert-success',
                    timeOut: 5000
                });
                _this.router.navigate(['search']);
            }
            else {
                _this.flashMessages.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeOut: 5000
                });
                _this.router.navigate(['addpeople']);
            }
        });
    };
    return AddcompanyComponent;
}());
AddcompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addcompany',
        template: __webpack_require__("../../../../../src/app/components/addcompany/addcompany.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/addcompany/addcompany.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object])
], AddcompanyComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=addcompany.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/addpeople/addpeople.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/addpeople/addpeople.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h1 style=\"text-align: center;\">Profile Details</h1>\n    <div style=\"width: 30%; margin:25px auto;\">\n        <form (submit)=\"onAddpeopleSibmit()\">\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" maxlength=\"20\" name=\"firstName\" placeholder=\"First Name\" required=true [(ngModel)]=\"firstName\">\n            </div>\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" maxlength=\"20\" name=\"lastName\" placeholder=\"Last Name\" required=true [(ngModel)]=\"lastName\">\n            </div>\n            <div class=\"form-group\">\n                <input id=\"locationTextField\" class=\"form-control\" type=\"text\" name=\"locationPrevious\" placeholder=\"City\" required=true>\n            </div>\n\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" name=\"image\" placeholder=\"image url\" required=true [(ngModel)]=\"image\">\n            </div>\n            <div class=\"form-group\">\n                <p><textarea class=\"form-control\" type=\"text\" wrap=\"hard\" rows=\"5\" maxlength=\"250\" name=\"overview\" placeholder=\"Overview\" [(ngModel)]=\"overview\"></textarea></p>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-lg btn-primary btn-block\">Submit</button>\n            </div>\n            <input id=\"location-city\" type=\"hidden\" name=\"city\" [(ngModel)]=\"city\">\n            <input id=\"location-state\" type=\"hidden\" name=\"state\" [(ngModel)]=\"state\">\n            <input id=\"location-country\" type=\"hidden\" name=\"country\" [(ngModel)]=\"country\">\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/addpeople/addpeople.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpeopleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddpeopleComponent = (function () {
    function AddpeopleComponent(authService, router, flashMessages, zone) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
        this.zone = zone;
        this.ngZone = zone;
    }
    AddpeopleComponent.prototype.ngOnInit = function () {
        this.init();
    };
    AddpeopleComponent.prototype.init = function () {
        var _this = this;
        var options = {
            types: ['(cities)']
        };
        var input = document.getElementById('locationTextField');
        this.autocomplete = new google.maps.places.Autocomplete(input, options);
        this.autocomplete.addListener('place_changed', function () {
            _this.ngZone.run(function () {
                var place = _this.autocomplete.getPlace();
                var addressComponents = place.address_components;
                if (addressComponents == undefined) {
                    _this.flashMessages.show("Please input place exactly.", { cssClass: 'alert-danger', timeOut: 3000 });
                    return;
                }
                if (addressComponents.length == undefined) {
                    _this.flashMessages.show("Please input place exactly.", { cssClass: 'alert-danger', timeOut: 3000 });
                    return;
                }
                var arrayLength = addressComponents.length;
                var city = '';
                var state = '';
                var country = '';
                for (var i = 0; i < arrayLength; i++) {
                    var addressComponent = addressComponents[i];
                    var types = addressComponent.types;
                    var typesArrayLength = types.length;
                    for (var j = 0; j < typesArrayLength; j++) {
                        var type = types[j];
                        if (type == 'locality') {
                            city = addressComponent.long_name;
                        }
                        if (type == 'administrative_area_level_1') {
                            state = addressComponent.long_name;
                        }
                        if (type == 'country') {
                            country = addressComponent.long_name;
                        }
                    }
                }
                _this.city = city;
                _this.state = state;
                _this.country = country;
            });
        });
    };
    AddpeopleComponent.prototype.onAddpeopleSibmit = function () {
        var _this = this;
        var people = {
            firstName: this.firstName,
            lastName: this.lastName,
            image: this.image,
            city: this.city,
            state: this.state,
            country: this.country,
            overview: this.overview
        };
        this.authService.addPeople(people).subscribe(function (data) {
            if (data.success) {
                _this.flashMessages.show(data.msg, {
                    cssClass: 'alert-success',
                    timeOut: 5000
                });
                _this.router.navigate(['search']);
            }
            else {
                _this.flashMessages.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeOut: 5000
                });
                _this.router.navigate(['addpeople']);
            }
        });
    };
    return AddpeopleComponent;
}());
AddpeopleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addpeople',
        template: __webpack_require__("../../../../../src/app/components/addpeople/addpeople.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/addpeople/addpeople.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object])
], AddpeopleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=addpeople.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/companies/companies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/companies/companies.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 class=\"text-center\">Search Results for \"{{searchKeyword}}\"</h3>\n  <div class=\"line\"></div>\n  <h3 class=\"text-center\">Term Owners</h3>\n  <div class=\"line\"></div>\n  <div *ngIf=\"noPersonMatch\">\n    <p class=\"searchTitle\">There are no individuals whose name contains the words \"{{searchKeyword}}\".</p>\n  </div>\n  <div *ngIf=\"!noPersonMatch\">\n    <p class=\"searchTitle\">There are <strong>{{searchCount}}</strong> people whose name contains the words <strong>\"{{searchKeyword}}\"</strong>.</p>\n    <table class=\"table table-hover \">\n      <thead>\n        <tr>\n          <th>Global Rank</th>\n          <th>Company Name</th>\n          <th>Location</th>\n          <th>ID</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let result of searchResults; let i = index; \">\n          <td>{{i+1}}</td>\n          <td>{{result.fullname}}</td>\n          <td>{{result.location}}</td>\n          <td>{{result.id}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/companies/companies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompaniesComponent = (function () {
    function CompaniesComponent() {
    }
    CompaniesComponent.prototype.ngOnInit = function () {
    };
    CompaniesComponent.prototype.setActiveIndex = function (index) {
        this.activeIndex = index;
        this.parentComp.activeTabIndex = index;
    };
    return CompaniesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompaniesComponent.prototype, "searchKeyword", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompaniesComponent.prototype, "searchResults", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompaniesComponent.prototype, "searchCount", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompaniesComponent.prototype, "noPersonMatch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompaniesComponent.prototype, "activeIndex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CompaniesComponent.prototype, "parentComp", void 0);
CompaniesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-companies',
        template: __webpack_require__("../../../../../src/app/components/companies/companies.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/companies/companies.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CompaniesComponent);

//# sourceMappingURL=companies.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 600px;\n}\n#landing-header {\n  z-index: 1;\n  position: relative;\n  text-align: center;\n  padding-top: 30vh;\n}\n\n#landing-header h1 {\n  color: #fff;\n  font-size:35px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"landing-header\">\n      <h1>Welcome to WRLDVW</h1>\n      <input class=\"form-control\" placeholder=\"Search people, companies, and places\" (click)=\"gotoSearch()\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.gotoSearch = function () {
        this.router.navigate(['search']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h1 style=\"text-align: center\">Login</h1>\n    <div style=\"width: 30%; margin: 25px auto;\">\n        <form (submit)=\"onLoginSubmit()\">\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"username\" [(ngModel)]=\"username\">\n            </div>\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"password\">\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-lg btn-primary btn-block\">Login</button>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessages) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessages.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeOut: 5000
                });
                _this.router.navigate(['welcome']);
                _this.authService.setLoggedUsername();
            }
            else {
                _this.flashMessages.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeOut: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-title {\n  margin-top: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a [routerLink] = \"['/']\" class=\"navbar-brand\">WRLDVW</a>\n        <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-collapse collapse\" id=\"navbar-main\">\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"!authService.loggedIn()\"[routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a  [routerLink] = \"['/login']\">Login</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a  [routerLink] = \"['/register']\">Sign Up</a></li>\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n        </ul>\n        <p *ngIf=\"authService.loggedIn()\" class=\"login-title navbar-right\">\n          Signed In As {{authService.loggedUsername}}\n        </p>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessages) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.authService.setLoggedUsername();
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessages.show('You are logged out', {
            cssClass: 'alert-success',
            timeOut: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/people/people.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!noPersonMatch\">\n  <h3 class=\"text-center\">Search Results for \"{{searchKeyword}}\"</h3>\n  <div class=\"line\"></div>\n  <h3 class=\"text-center\">Term Owners</h3>\n  <div class=\"line\"></div>\n  <div *ngIf=\"noPersonMatch\">\n    <p class=\"searchTitle\">There are no individuals whose name contains the words \"{{searchKeyword}}\".</p>\n  </div>\n  <div *ngIf=\"!noPersonMatch\">\n    <p class=\"searchTitle\">There are <strong>{{searchCount}}</strong> people whose name contains the words <strong>\"{{searchKeyword}}\"</strong>.</p>\n    <table class=\"table table-hover \">\n      <thead>\n        <tr>\n          <th>Global Rank</th>\n          <th>Full Name</th>\n          <th>City</th>\n          <th>ID</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let result of searchResults; let i = index; \">\n          <td>{{i+1}}</td>\n          <td>{{result.fullname}}</td>\n          <td>{{result.city}}</td>\n          <td>{{result.id}}</td>\n        </tr>\n      </tbody>\n    </table>\n  <div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeopleComponent = (function () {
    function PeopleComponent() {
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    PeopleComponent.prototype.setActiveIndex = function (index) {
        this.activeIndex = index;
        this.parentComp.activeTabIndex = index;
    };
    return PeopleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeopleComponent.prototype, "searchKeyword", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeopleComponent.prototype, "searchResults", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeopleComponent.prototype, "searchCount", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeopleComponent.prototype, "noPersonMatch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeopleComponent.prototype, "activeIndex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeopleComponent.prototype, "parentComp", void 0);
PeopleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-people',
        template: __webpack_require__("../../../../../src/app/components/people/people.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/people/people.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PeopleComponent);

//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/places/places.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/places/places.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 class=\"text-center\">Search Results for \"{{searchKeyword}}\"</h3>\n  <div class=\"line\"></div>\n  <h3 class=\"text-center\">Term Owners</h3>\n  <div class=\"line\"></div>\n  <div class=\"btn-bar\">\n    <button [ngClass]=\"activeIndex == 0 ? 'active-btn-bar-button' : 'btn-bar-button'\" class=\"btn\" (click)=\"setActiveIndex(0)\">Person</button>\n    <button [ngClass]=\"activeIndex == 1 ? 'active-btn-bar-button' : 'btn-bar-button'\" class=\"btn\" (click)=\"setActiveIndex(1)\">Companies</button>\n  </div>\n  <div *ngIf=\"noPersonMatch\">\n    <p class=\"searchTitle\">There are no individuals whose name contains the words \"{{searchKeyword}}\".</p>\n  </div>\n  <div *ngIf=\"!noPersonMatch\">\n    <p class=\"searchTitle\">There are <strong>{{searchCount}}</strong> people whose name contains the words <strong>\"{{searchKeyword}}\"</strong>.</p>\n    <table class=\"table table-hover \">\n      <thead>\n        <tr>\n          <th>Global Rank</th>\n          <th>Full Name</th>\n          <th>City</th>\n          <th>ID</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let result of searchResults; let i = index; \">\n          <td>{{i+1}}</td>\n          <td>{{result.fullname}}</td>\n          <td>{{result.city}}</td>\n          <td>{{result.id}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/places/places.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlacesComponent = (function () {
    function PlacesComponent() {
    }
    PlacesComponent.prototype.ngOnInit = function () {
    };
    PlacesComponent.prototype.setActiveIndex = function (index) {
        this.activeIndex = index;
        this.parentComp.activeTabIndex = index;
    };
    return PlacesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PlacesComponent.prototype, "searchKeyword", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PlacesComponent.prototype, "searchResults", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PlacesComponent.prototype, "searchCount", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PlacesComponent.prototype, "noPersonMatch", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PlacesComponent.prototype, "activeIndex", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PlacesComponent.prototype, "parentComp", void 0);
PlacesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-places',
        template: __webpack_require__("../../../../../src/app/components/places/places.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/places/places.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PlacesComponent);

//# sourceMappingURL=places.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h1 style=\"text-align: center\">Sign Up</h1>\n    <div style=\"width: 30%; margin: 25px auto;\">\n        <form (submit)=\"onRegisterSubmit()\">\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"username\" [(ngModel)]=\"username\">\n            </div>\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"password\">\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-lg btn-primary btn-block\">Join Today</button>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeOut: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeOut: 4000 });
                _this.router.navigate(['/welcome']);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeOut: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n  width: 500px;\n  height: 45px;\n}\n\n.tab-button-bar {\n  margin-top: 10px;\n}\n\n.tab-button {\n  padding: 10px;\n  margin-right: 10px;\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: bold;\n  cursor:pointer;\n\n  border-bottom: 3px solid white;\n  color: white;\n}\n\n.active-tab-button {\n  padding: 10px;\n  margin-right: 10px;\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: bold;\n  cursor:pointer;\n\n  border-bottom: 3px solid #1294f8;\n  color: #1294f8;\n}\n\n.hide {\n  display: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<input [ngClass]=\"activeTabIndex == 0 ? '': 'hide'\" class=\"form-control\" (ngModelChange)=\"onSearch($event)\" [(ngModel)]=\"searchKeyword\" focus=\"true\">\n<input [ngClass]=\"activeTabIndex == 1 ? '': 'hide'\" class=\"form-control\" (ngModelChange)=\"onSearch($event)\" [(ngModel)]=\"searchKeyword\" focus=\"true\">\n<input [ngClass]=\"activeTabIndex == 2 ? '': 'hide'\" id=\"locationTextField\" class=\"form-control\" type=\"text\" name=\"locationPrevious\" placeholder=\"City\" required=true focus=\"true\">\n\n<div class=\"tab-button-bar\">\n  <a [ngClass]=\"activeTabIndex == 0 ? 'active-tab-button' : 'tab-button'\" (click)=\"setActiveTab(0)\">Person</a>\n  <a [ngClass]=\"activeTabIndex == 1 ? 'active-tab-button' : 'tab-button'\" (click)=\"setActiveTab(1)\">Companies</a>\n  <a [ngClass]=\"activeTabIndex == 2 ? 'active-tab-button' : 'tab-button'\" (click)=\"setActiveTab(2)\">Places</a>\n</div>\n\n<app-people *ngIf=\"activeTabIndex == 0 ? true : false\"\n  [searchKeyword]=\"searchKeyword\" [searchResults]=\"searchResultsPeople\" [searchCount]=\"searchCountPeople\" [noPersonMatch]=\"noPersonMatchPeople\" [activeIndex]=\"activeTabIndex\" [parentComp]=\"this\">\n</app-people>\n<app-companies *ngIf=\"activeTabIndex == 1 ? true : false\"\n  [searchKeyword]=\"searchKeyword\" [searchResults]=\"searchResultsCompanies\" [searchCount]=\"searchCountCompanies\" [noPersonMatch]=\"noPersonMatchCompanies\" [activeIndex]=\"activeTabIndex\" [parentComp]=\"this\">\n</app-companies>\n<app-places *ngIf=\"activeTabIndex == 2 ? true : false\"\n  [searchKeyword]=\"searchKeywordPlaces\" [searchResults]=\"searchResultsPlaces\" [searchCount]=\"searchCountPlaces\" [noPersonMatch]=\"noPersonMatchPlaces\" [activeIndex]=\"activeTabIndex\" [parentComp]=\"this\">\n</app-places>\n"

/***/ }),

/***/ "../../../../../src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(flashMessagesService, searchService, route, zone) {
        this.flashMessagesService = flashMessagesService;
        this.searchService = searchService;
        this.route = route;
        this.zone = zone;
        this.searchKeywordPlaces = "";
        this.searchResultsPeople = [];
        this.searchResultsCompanies = [];
        this.searchResultsPlaces = [];
        this.noPersonMatchPeople = true;
        this.noPersonMatchCompanies = true;
        this.noPersonMatchPlaces = true;
        this.activeTabIndex = 0;
        this.init = this.init.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onSearchPlaces = this.onSearchPlaces.bind(this);
        this.ngZone = zone;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.searchKeyword = params['keyword'];
        });
        this.onSearchCompanies('');
        this.init();
    };
    SearchComponent.prototype.ngOnDestroy = function () {
    };
    SearchComponent.prototype.setActiveTab = function (index) {
        this.activeTabIndex = index;
    };
    SearchComponent.prototype.onSearch = function (val) {
        var _this = this;
        this.searchKeyword = val;
        console.log(this.searchKeyword);
        this.searchResultsPeople = [];
        this.searchCountPeople = 0;
        this.noPersonMatchPeople = true;
        this.searchService.search(this.searchKeyword).subscribe(function (data) {
            if (data.success) {
                _this.noPersonMatchPeople = data.noPersonMatch;
                if (_this.noPersonMatchPeople) {
                }
                else {
                    _this.searchCountPeople = data.people.length;
                    for (var i = 0; i < data.people.length; i++) {
                        var people = data.people[i];
                        _this.searchResultsPeople.push({
                            id: people._id,
                            fullname: people.fullName,
                            city: people.location.city + ', ' + people.location.state + ', ' + people.location.country
                        });
                    }
                }
            }
            else {
                _this.flashMessagesService.show(data.message, { cssClass: 'alert-danger', timeOut: 3000 });
            }
        });
    };
    SearchComponent.prototype.onSearchCompanies = function (keyword) {
        var _this = this;
        this.searchResultsCompanies = [];
        this.searchCountCompanies = 0;
        this.noPersonMatchCompanies = true;
        this.searchService.searchCompanies(this.searchKeyword).subscribe(function (data) {
            if (data.success) {
                _this.noPersonMatchCompanies = data.noPersonMatch;
                if (_this.noPersonMatchCompanies) {
                }
                else {
                    _this.searchCountCompanies = data.companies.length;
                    for (var i = 0; i < data.companies.length; i++) {
                        var company = data.companies[i];
                        _this.searchResultsCompanies.push({
                            id: company._id,
                            fullname: company.fullName,
                            location: company.location
                        });
                    }
                }
            }
            else {
                _this.flashMessagesService.show(data.message, { cssClass: 'alert-danger', timeOut: 3000 });
            }
        });
    };
    SearchComponent.prototype.onSearchPlaces = function (city, state, country) {
        var _this = this;
        this.searchKeywordPlaces = city + ', ' + state + ', ' + country;
        console.log(this.searchKeywordPlaces);
        if (city == undefined || state == undefined || country == undefined) {
            this.flashMessagesService.show("Please input place exactly.", { cssClass: 'alert-danger', timeOut: 3000 });
            return;
        }
        this.searchResultsPlaces = [];
        this.searchCountPlaces = 0;
        this.noPersonMatchPlaces = true;
        this.searchService.searchPlaces({ city: city, state: state, country: country }).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.noPersonMatchPlaces = data.noPersonMatch;
                if (_this.noPersonMatchPlaces) {
                }
                else {
                    _this.searchCountPlaces = data.people.length;
                    for (var i = 0; i < data.people.length; i++) {
                        var people = data.people[i];
                        _this.searchResultsPlaces.push({
                            id: people._id,
                            fullname: people.fullName,
                            city: people.location.city + ', ' + people.location.state + ', ' + people.location.country
                        });
                    }
                }
            }
            else {
                _this.flashMessagesService.show(data.message, { cssClass: 'alert-danger', timeOut: 3000 });
            }
        });
    };
    SearchComponent.prototype.init = function () {
        var _this = this;
        var options = {
            types: ['(cities)']
        };
        var input = document.getElementById('locationTextField');
        this.autocomplete = new google.maps.places.Autocomplete(input, options);
        this.autocomplete.addListener('place_changed', function () {
            _this.ngZone.run(function () {
                var place = _this.autocomplete.getPlace();
                var addressComponents = place.address_components;
                if (addressComponents == undefined || addressComponents.length == undefined) {
                    _this.flashMessagesService.show("Please input place exactly.", { cssClass: 'alert-danger', timeOut: 3000 });
                    return;
                }
                var arrayLength = addressComponents.length;
                var city = '';
                var state = '';
                var country = '';
                for (var i = 0; i < arrayLength; i++) {
                    var addressComponent = addressComponents[i];
                    var types = addressComponent.types;
                    var typesArrayLength = types.length;
                    for (var j = 0; j < typesArrayLength; j++) {
                        var type = types[j];
                        if (type == 'locality') {
                            city = addressComponent.long_name;
                        }
                        if (type == 'administrative_area_level_1') {
                            state = addressComponent.long_name;
                        }
                        if (type == 'country') {
                            country = addressComponent.long_name;
                        }
                    }
                }
                _this.onSearchPlaces(city, state, country);
            });
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/components/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object])
], SearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 600px;\n}\n#landing-header {\n  z-index: 1;\n  position: relative;\n  text-align: center;\n  padding-top: 30vh;\n}\n\n#landing-header h1 {\n  color: #fff;\n  font-size:35px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"landing-header\">\n    <h1>Welcome to WRLDVW</h1>\n\n    <a class=\"btn btn-primary\" (click)=\"onCreatePerson()\">Create Person Profile</a>\n    <a class=\"btn btn-primary\" (click)=\"onCreateCompany()\">Create Company Profile</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = (function () {
    function WelcomeComponent(router) {
        this.router = router;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent.prototype.onCreatePerson = function () {
        this.router.navigate(['addpeople']);
    };
    WelcomeComponent.prototype.onCreateCompany = function () {
        this.router.navigate(['addcompany']);
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/components/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], WelcomeComponent);

var _a;
//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.loggedUsername = '';
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addPeople = function (people) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('people', people, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addCompany = function (company) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('companies', company, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.setLoggedUsername = function () {
        var user = localStorage.getItem('user');
        var userObj = JSON.parse(user);
        if (userObj == null || userObj == undefined)
            this.loggedUsername = '';
        else
            this.loggedUsername = userObj.username;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.search = function (keyword) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('people/', { search: { search: keyword } })
            .map(function (res) { return res.json(); });
    };
    SearchService.prototype.searchCompanies = function (keyword) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('companies/', { search: { search: keyword } })
            .map(function (res) { return res.json(); });
    };
    SearchService.prototype.searchPlaces = function (keyword) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('people/places', { search: keyword })
            .map(function (res) { return res.json(); });
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map