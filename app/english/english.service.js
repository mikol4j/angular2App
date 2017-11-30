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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var EnglishService = /** @class */ (function () {
    function EnglishService(_http) {
        var _this = this;
        this._http = _http;
        this._englishUrl = 'api/english/english.json';
        this.getProducts().subscribe(function (retVal) { return _this.englishList = retVal; });
    }
    EnglishService.prototype.getProducts = function () {
        return this._http.get(this._englishUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.hadleError);
    };
    EnglishService.prototype.hadleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().errror || 'Server error');
    };
    EnglishService.prototype.getEnglish = function (ID) {
        return this.englishList.find(function (a) { return a.Id == ID; });
    };
    EnglishService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EnglishService);
    return EnglishService;
}());
exports.EnglishService = EnglishService;
//# sourceMappingURL=english.service.js.map