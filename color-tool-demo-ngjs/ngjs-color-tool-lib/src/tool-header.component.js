import template from './tool-header.component.html';

export const ToolHeaderComponent = {
  template,
  bindings: {
    headerText: '<',
  },
  controller: class {
    
    constructor() {
      if (!this.headerText) this.headerText = 'Tool Header';
    }
  }
};
