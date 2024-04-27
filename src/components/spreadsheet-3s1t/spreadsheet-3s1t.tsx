import { Component, State, h } from '@stencil/core';

interface Column {
  prop: string;
  name: string;
  cellTemplate?: (item: any) => any;
}

interface Row {
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
  @State() rows: Row[] = [
    { name: 'Item 1', details: 'Details of Item 1' },
    { name: 'Item 2', details: 'Details of Item 2' },
    { name: 'Item 3', details: 'Details of Item 3' },
  ];

  renderTable() {
    console.log('Render');
    console.log('Rows: ', this.rows);
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
          {this.rows.map((row, rowIndex) => (
            <tr>
              {this.columns.map(column => (
                <td>
                  <input
                    type="text"
                    value={row[column.prop]}
                    onInput={(event: any) => {
                      const updatedRow: Row = { ...row, [column.prop]: event.data };
                      const updatedRows = [
                        ...this.rows.slice(0, rowIndex), // rows before the edited row
                        updatedRow, // updated row
                        ...this.rows.slice(rowIndex + 1), // rows after the edited row
                      ];

                      this.rows = updatedRows;
                    }}
                  />
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
