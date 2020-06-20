import template from './color-home.component.html';


class ColorHomeComponentController {
    
  constructor(colorsSvc) {
    this.colorsSvc = colorsSvc;
  }

  $onInit() {
    this.headerText = 'Color Tool';
    this.colors = this.colorsSvc.allColors();
  }

  colorContent(color) {
    return color.name + ' - ' + color.hexcode;
  }

  colorKey(color) {
    return color.id;
  }

  addColor(color) {
    console.log('add color: ', color);
    this.colors = this.colorsSvc.appendColor(color).allColors();
  }

  deleteColor(colorId) {
    console.log(colorId);
    this.colors = this.colorsSvc.removeColor(colorId).allColors();
  }

}

ColorHomeComponentController.$inject = [ 'colorsService' ];

export const ColorHomeComponent = {
  template,
  controller: ColorHomeComponentController,
};
