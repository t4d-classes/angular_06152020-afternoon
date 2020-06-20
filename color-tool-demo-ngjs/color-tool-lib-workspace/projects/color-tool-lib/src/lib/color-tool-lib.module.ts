import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ColorFormComponent } from './color-form.component';

@NgModule({
  declarations: [ColorFormComponent],
  imports: [
    ReactiveFormsModule,
  ],
  entryComponents: [ ColorFormComponent ],
  exports: [ColorFormComponent]
})
export class ColorToolLibModule { }
