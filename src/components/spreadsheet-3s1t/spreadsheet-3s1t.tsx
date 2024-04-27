import { Component, State, h } from '@stencil/core';

interface Column {
  prop: string;
  name: string;
  cellTemplate?: (item: any) => any;
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
  @State() columns: Column[] = [
    { prop: 'name', name: 'Name' },
    { prop: 'details', name: 'Details' },
  ];
  @State() items: Item[] = [
    { name: 'Item 1', details: 'Details of Item 1' },
    { name: 'Item 2', details: 'Details of Item 2' },
    { name: 'Item 3', details: 'Details of Item 3' },
  ];

  renderTable() {
    return (
      <table>
        <thead>
          <tr>
            {this.columns.map(column => (
              <th>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.items.map(item => (
            <tr>
              {this.columns.map(column => (
                <td>
                  <input type="text" value={item[column.prop]} onInput={(event: any) => (item[column.prop] = event.target.value)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    console.log('Spreadsheet Render');
    return (
      <div>
        <h3>Hello from 3s1t</h3>
        <section>{this.renderTable()}</section>
      </div>
    );
  }
}
