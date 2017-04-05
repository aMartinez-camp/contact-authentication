import { AuthenticationAppPage } from './app.po';

describe('authentication-app App', () => {
  let page: AuthenticationAppPage;

  beforeEach(() => {
    page = new AuthenticationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
