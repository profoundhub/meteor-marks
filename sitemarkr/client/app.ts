import 'reflect-metadata';
import 'zone.js/dist/zone';

import { Component } from '@angular/core';
// import { bootstrap } from '@angular/platform-browser-dynamic';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.html',
})

class SiteMarkr {
    constructor() {}
}

// bootstrap(SiteMarkr);
platformBrowserDynamic().bootstrapModule(SiteMarkr);
