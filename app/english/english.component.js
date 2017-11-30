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
var router_1 = require("@angular/router");
var english_service_1 = require("./english.service");
var EnglishComponent = /** @class */ (function () {
    function EnglishComponent(_route, _router, _englishService) {
        this._route = _route;
        this._router = _router;
        this._englishService = _englishService;
        this.pageTitle = 'Product Detail';
        this.id = 0;
    }
    EnglishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._englishService.getProducts().subscribe(function (retVal) { return _this.englishArray = retVal; }, function (error) { return _this.errorMessage = error; });
    };
    EnglishComponent.prototype.onBack = function () {
        this._router.navigate(['/english']);
    };
    EnglishComponent.prototype.check = function (element) {
        if (element.answer.includes(element.result))
            return true;
        return false;
    };
    EnglishComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/english/english.html',
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, english_service_1.EnglishService])
    ], EnglishComponent);
    return EnglishComponent;
}());
exports.EnglishComponent = EnglishComponent;
//# sourceMappingURL=english.component.js.map