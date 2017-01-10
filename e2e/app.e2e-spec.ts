import { QuickstartVgPage } from './app.po';

describe('quickstart-vg App', function() {
  let page: QuickstartVgPage;

  beforeEach(() => {
    page = new QuickstartVgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
