import template from './item-list.component.html';

export const ItemListComponent = {
  template,
  bindings: {
    items: '<',
    itemContent: '<',
    itemKey: '<',
    onRemoveItem: '&',
  },
  controller: class { },
};
