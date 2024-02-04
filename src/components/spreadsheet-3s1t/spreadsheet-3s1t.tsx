import { Component, h } from '@stencil/core';
@Component({
  tag: 'spreadsheet-3s1t',
  styleUrl: 'spreadsheet-3s1t.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Luke</td>
            <td>bob@example.com</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
