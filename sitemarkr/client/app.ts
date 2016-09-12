import 'reflect-metadata';
import 'zone.js/dist/zone';

import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import template from './app.html';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: template
})

class SiteMarkr {
    constructor(){}
}

bootstrap(SiteMarkr);
