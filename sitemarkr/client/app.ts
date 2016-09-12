import 'reflect-metadata';
import 'zone.js/dist/zone';

import { Component } from '@angular/core';
// import { bootstrap } from '@angular/platform-browser-dynamic';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrap } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app.module';
import template from './app.html';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: template
})

export class Sitemarkr {
    // constructor() {
    // }
}

// bootstrap(Sitemarkr);

// platformBrowserDynamic().bootstrapModule(Sitemarkr);
platformBrowserDynamic().bootstrapModule(Sitemarkr);
