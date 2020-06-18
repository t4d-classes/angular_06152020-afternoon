import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { FormDemoComponent } from './components/form-demo/form-demo.component';



@NgModule({
  declarations: [ToolHeaderComponent, PipeDemoComponent, EllipsisPipe, FormDemoComponent],
  imports: [
    CommonModule, ReactiveFormsModule,
  ],
  exports: [ToolHeaderComponent, PipeDemoComponent, EllipsisPipe, FormDemoComponent],
})
export class SharedModule { }
