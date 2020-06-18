import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Color } from '../../models/Color';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = 'Color Tool';

  colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ];

  colorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private colorsSvc: ColorsService,
  ) { }

  ngOnInit(): void {
    this.refreshColors();

    this.colorForm = this.fb.group({
      name: '',
      hexcode: '',
    });
  }

  refreshColors() {
    this.colorsSvc.allColors().subscribe(colors => {
      this.colors = colors;
    });
  }

  addColor() {
    this.colorsSvc.appendColor(this.colorForm.value).subscribe(() => {
      this.refreshColors();
    });
  }

  deleteColor(colorId: number) {
    this.colorsSvc.removeColor(colorId).subscribe(() => {
      this.refreshColors();
    });
  }

}
