import { RoutesAngular2Page } from './app.po';

describe('routes-angular2 App', () => {
  let page: RoutesAngular2Page;

  beforeEach(() => {
    page = new RoutesAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
