import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Color } from './color';

@Component({
  selector: 'lib-color-form',
  template: `
    <form [formGroup]="colorForm">
      <div>
        <label>Name</label>
        <input type="text" formControlName="name">
      </div>
      <div>
        <label>Hexcode</label>
        <input type="text" formControlName="hexcode">
      </div>
      <button type="button" (click)="doSubmitColor()">{{buttonText}}</button>
    </form>
  `,
  styles: [
  ]
})
export class ColorFormComponent implements OnInit {

  @Input()
  buttonText = 'Submit Color';

  @Output()
  submitColor = new EventEmitter<any>();

  colorForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.colorForm = this.fb.group({
      name: '',
      hexcode: '',
    });
  }

  doSubmitColor() {
    this.submitColor.emit(this.colorForm.value);
  }

}
