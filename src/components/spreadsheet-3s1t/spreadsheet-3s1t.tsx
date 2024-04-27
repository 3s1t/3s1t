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

  render() {
    console.log('Spreadsheet Render');
    return (
      <div>
        <h3>Hello from 3s1t</h3>
        <section>Table goes here</section>
      </div>
    );
  }
}
