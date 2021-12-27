import {browser, by, element, WebElement} from 'protractor';

export class HomePage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/home');
  }

  async getListOfDevices(): Promise<WebElement[]> {
    return element.all(by.css('.device-row')).getWebElements();
  }
}
