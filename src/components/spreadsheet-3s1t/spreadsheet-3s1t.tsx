import { Component, State, h } from '@stencil/core';

interface Column {
  prop: string;
  name: string;
  cellTemplate?: any;
}

interface Item {
  name: string;
  details: string;
}

@Component({
  tag: 'spreadsheet-3s1t',
  styleUrl: 'spreadsheet-3s1t.css',
  shadow: true,
})
export class Spreadsheet3s1t {
  @State() columns: Column[] = [];
  @State() items: Item[] = [];

  connectedCallback() {
    console.log('Spreadsheet Connected');
    const columns = [
      { prop: 'name', name: 'First column' },
      {
        prop: 'details',
        name: 'Second column',
        cellTemplate: (createElement, props) => {
          return createElement(
            'div',
            {
              style: { backgroundColor: 'red' },
              class: { 'inner-cell': true },
            },
            props.model[props.prop] || '',
          );
        },
      },
    ];
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push({ name: 'New item', details: `Item ${i}` });
    }
    this.columns = columns;
    this.items = items;
  }

  render() {
    console.log("Spreadsheet Render")
    return (
      <div>
        <revo-grid class="grid-component" columns={this.columns} source={this.items}></revo-grid>
      </div>
    );
  }
}
