"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var product_list_component_1 = require("./products/product-list.component");
var english_component_1 = require("./english/english.component");
var product_filter_pipe_1 = require("./products/product-filter.pipe");
var star_component_1 = require("./shared/star.component");
var product_detail_component_1 = require("./products/product-detail.component");
var welcome_component_1 = require("./home/welcome.component");
var product_guard_service_1 = require("./products/product-guard.service");
var angular2_jwt_1 = require("angular2-jwt");
var auth_service_1 = require("./auth.service");
var warehouse_component_1 = require("./warehouse/warehouse.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'products', component: product_list_component_1.ProductListComponent },
                    { path: 'english', component: english_component_1.EnglishComponent },
                    { path: 'product/:id',
                        canActivate: [product_guard_service_1.ProductDetailGuard],
                        component: product_detail_component_1.ProductDetailComponent },
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: 'warehouse', component: warehouse_component_1.WarehouseComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
                ])],
            declarations: [app_component_1.AppComponent, product_list_component_1.ProductListComponent, product_filter_pipe_1.ProductFilterPipe, star_component_1.StarComponent,
                product_detail_component_1.ProductDetailComponent, welcome_component_1.WelcomeComponent, warehouse_component_1.WarehouseComponent, english_component_1.EnglishComponent],
            providers: [product_guard_service_1.ProductDetailGuard, angular2_jwt_1.AUTH_PROVIDERS, auth_service_1.Auth],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map