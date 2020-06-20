import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { ReactiveFormsModule } from '@angular/forms';

import { ColorFormComponent } from 'color-tool-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, UpgradeModule, ReactiveFormsModule,
  ],
  entryComponents: [ ],
  providers: [],
})
export class AppModule {

  constructor(private upgrade: UpgradeModule) {
  }

  ngDoBootstrap() {

    angular.module('colorToolApp')
      .directive('colorForm', downgradeComponent({ component: ColorFormComponent }));

    this.upgrade.bootstrap(document.querySelector('app-root'), ['colorToolApp']);
  }

}
