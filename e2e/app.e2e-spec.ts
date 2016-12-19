import { TamalPage } from './app.po';

describe('tamal App', function() {
  let page: TamalPage;

  beforeEach(() => {
    page = new TamalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
