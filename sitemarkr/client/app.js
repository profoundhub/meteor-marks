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
require('reflect-metadata');
require('zone.js/dist/zone');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_html_1 = require('./app.html');
var SiteMarkr = (function () {
    function SiteMarkr() {
    }
    SiteMarkr = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            template: app_html_1.default
        }), 
        __metadata('design:paramtypes', [])
    ], SiteMarkr);
    return SiteMarkr;
}());
platform_browser_dynamic_1.bootstrap(SiteMarkr);
//# sourceMappingURL=app.js.map