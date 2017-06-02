import { AngularproPage } from './app.po';

describe('angularpro App', () => {
  let page: AngularproPage;

  beforeEach(() => {
    page = new AngularproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
