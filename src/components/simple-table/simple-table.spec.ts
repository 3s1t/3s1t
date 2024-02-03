import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './simple-table';

describe('simple-table', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<simple-table></simple-table>',
    });
    expect(root).toEqualHtml(`
      <simple-table>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </simple-table>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<simple-table first="Stencil" last="'Don't call me a framework' JS"></simple-table>`,
    });
    expect(root).toEqualHtml(`
      <simple-table first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </simple-table>
    `);
  });
});
