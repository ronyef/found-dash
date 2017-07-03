import { FoundDashPage } from './app.po';

describe('found-dash App', () => {
  let page: FoundDashPage;

  beforeEach(() => {
    page = new FoundDashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
