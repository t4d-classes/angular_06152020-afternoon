import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ColorHomeComponent } from './components/color-home/color-home.component';

@NgModule({
  // refer to Color Home component within any template within this module
  declarations: [ColorHomeComponent],
  imports: [
    CommonModule, ReactiveFormsModule,
  ],
  // allow us to use the component in template outside
  // of this module
  exports: [ ColorHomeComponent ],
})
export class ColorToolModule { }
