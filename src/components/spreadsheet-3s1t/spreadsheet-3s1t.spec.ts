import { newSpecPage } from '@stencil/core/testing';
import { Spreadsheet3s1t } from './spreadsheet-3s1t';

describe('spreadsheet-3s1t', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Spreadsheet3s1t],
      html: '<spreadsheet-3s1t></spreadsheet-3s1t>',
    });
    expect(root).toEqualHtml(`
      <spreadsheet-3s1t>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </spreadsheet-3s1t>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Spreadsheet3s1t],
      html: `<spreadsheet-3s1t first="Stencil" last="'Don't call me a framework' JS"></spreadsheet-3s1t>`,
    });
    expect(root).toEqualHtml(`
      <spreadsheet-3s1t first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </spreadsheet-3s1t>
    `);
  });
});
