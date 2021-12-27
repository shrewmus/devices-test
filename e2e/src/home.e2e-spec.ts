import {HomePage} from './home.po';

describe('home page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should have a four devices on a home page', async () => {
    await page.navigateTo();
    expect((await page.getListOfDevices()).length).toEqual(5);
  });
});
