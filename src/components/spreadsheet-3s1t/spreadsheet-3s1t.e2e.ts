import { newE2EPage } from '@stencil/core/testing';

describe('spreadsheet-3s1t', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<spreadsheet-3s1t></spreadsheet-3s1t>');
    const element = await page.find('spreadsheet-3s1t');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<spreadsheet-3s1t></spreadsheet-3s1t>');
    const component = await page.find('spreadsheet-3s1t');
    const element = await page.find('spreadsheet-3s1t >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
