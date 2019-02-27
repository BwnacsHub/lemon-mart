import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root mat-toolbar .mat-h2')).getText() as Promise<string>;
  }
}
