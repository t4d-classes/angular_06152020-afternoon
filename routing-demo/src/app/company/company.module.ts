import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

import { CompanyRoutingModule } from './company-routing.module';

@NgModule({
  declarations: [AboutPageComponent, ContactPageComponent],
  imports: [
    CommonModule, CompanyRoutingModule
  ]
})
export class CompanyModule { }
