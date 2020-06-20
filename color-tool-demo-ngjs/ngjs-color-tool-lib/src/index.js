import * as angular from 'angular';

import { ColorHomeComponent } from './color-home.component';
import { ToolHeaderComponent } from './tool-header.component';
import { ItemListComponent } from './item-list.component';
import { ColorsService } from './colors.service';

angular.module('colorToolApp', [])
  .component('colorHome', ColorHomeComponent)
  .component('toolHeader', ToolHeaderComponent)
  .component('itemList', ItemListComponent)
  .service('colorsService', ColorsService);

console.log('loaded legacy ngjs');
