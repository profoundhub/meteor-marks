import 'reflect-metadata';
import 'zone.js/dist/zone';

import { Component, template, bootstrap } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import template from './app.html';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.html',
})

class SiteMarkr {
    constructor() {}
}

bootstrap(SiteMarkr);
// platformBrowserDynamic().bootstrapModule(SiteMarkr);

// export class SiteMarkr {}
