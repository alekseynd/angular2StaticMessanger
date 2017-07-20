import { StaticMessangerPage } from './app.po';

describe('static-messanger App', () => {
  let page: StaticMessangerPage;

  beforeEach(() => {
    page = new StaticMessangerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
