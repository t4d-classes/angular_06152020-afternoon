import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { MyuppercasePipe } from './pipes/myuppercase.pipe';
import { MyappendPipe } from './pipes/myappend.pipe';

@NgModule({
  // refer to Color Home component within any template within this module
  declarations: [ColorHomeComponent, MyuppercasePipe, MyappendPipe],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule,
  ],
  // allow us to use the component in template outside
  // of this module
  exports: [ ColorHomeComponent ],
})
export class ColorToolModule { }
