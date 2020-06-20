export class ColorsService {

  constructor() {
    this._colors = [
      { id: 1, name: 'red', hexcode: 'ff0000' },
      { id: 2, name: 'green', hexcode: '00ff00' },
      { id: 3, name: 'blue', hexcode: '00ff00' },
    ];
  }

  allColors() {
    return this._colors.concat();
  }

  appendColor(color) {
    this._colors = this._colors.concat({
      ...color,
      id: Math.max(...this._colors.map(c => c.id), 0) + 1,
    });
    return this;
  }

  removeColor(colorId) {
    this._colors = this._colors.filter(c => c.id !== colorId);
    return this;
  }
}
