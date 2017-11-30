"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./products/product.service");
var english_service_1 = require("./english/english.service");
var auth_service_1 = require("./auth.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.pageTitle = "Acme Product Managment";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            template: "   \n        <nav class='navbar navbar-default'>\n        <div class='container-fluid'>\n        <a class='navbar-brand'> {{pageTitle}}</a>\n        <ul class='nav navbar-nav'>\n        <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n        <li><a [routerLink]=\"['/products']\">Product list</a></li>\n        <li><a [routerLink]=\"['/english']\">English</a></li>\n        <li><a [routerLink]=\"['/warehouse']\" *ngIf=\"auth.authenticated()\">Warehouse</a></li>\n        <li class=\"navbar\"><a (click)=\"auth.login()\" *ngIf=\"!auth.authenticated()\">Log In</a></li>\n        <li class=\"navbar\"><a (click)=\"auth.logout()\" *ngIf=\"auth.authenticated()\">Log Out</a></li>\n        </ul>\n        </div>\n        </nav>   \n        <div class='container'>\n        <router-outlet></router-outlet>\n        </div>\n    ",
            providers: [product_service_1.ProductService, english_service_1.EnglishService]
        }),
        __metadata("design:paramtypes", [auth_service_1.Auth])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map