import { FirebaseexamplePage } from './app.po';

describe('firebaseexample App', () => {
  let page: FirebaseexamplePage;

  beforeEach(() => {
    page = new FirebaseexamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
