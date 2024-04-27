import { Component, Prop, State, h } from '@stencil/core';

interface Column {
  prop: string;
  name: string;
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
  @Prop() data: string;

  handleInput(event: Event, rowIndex: number, propName: string) {
    console.log('Update Cell', { event, rowIndex, propName });
    const inputElement = event.target as HTMLInputElement;
    const updatedValue = inputElement.value;

    const updatedRows = this.rows.map((row, index) => {
      if (index === rowIndex) {
        return { ...row, [propName]: updatedValue };
      }
      return row;
    });

    this.rows = updatedRows;
  }

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
          {this.rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {this.columns.map(column => (
                <td key={`cell-${rowIndex}-${column.prop}`}>
                  <input type="text" value={row[column.prop]} onInput={(event: Event) => this.handleInput(event, rowIndex, column.prop)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  renderRawData() {
    return <pre>{this.data}</pre>;
  }

  render() {
    return (
      <div>
        <h3>Hello from 3s1t</h3>
        <button>
          <ion-icon name="add-circle-outline"></ion-icon>
          Add Row
        </button>
        <button>
          <ion-icon name="add-circle-outline"></ion-icon>
          Add Column
        </button>
        <h4>Spreadsheet</h4>
        <section>{this.renderTable()}</section>
        <h4>Data in Spreadsheet</h4>
        <section>{this.renderRawData()}</section>
      </div>
    );
  }
}
