import { browser, ElementFinder, protractor } from 'protractor';
export class Utilities {

  public enterTextInElement(selector: ElementFinder, text: any) {
    const ec = protractor.ExpectedConditions;
    browser.wait(ec.visibilityOf(selector));
    selector.clear().then(() => {
      selector.sendKeys(text);
    });
  }

  public clickOnElement(selector: ElementFinder): void {
    const ec = protractor.ExpectedConditions;
    browser.wait(ec.elementToBeClickable(selector), 5000);
    selector.click();
  }

  public waitPageToLoad(url: string) {
    const ec = protractor.ExpectedConditions;
    return browser.wait(ec.urlContains(url), 5000);
  }

  public scrollDown() {
    browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
    browser.sleep(3000);
  }

  public numberOfRowsInTable(selector: ElementFinder) {
    const numberOfRows: number = selector.count();
    return numberOfRows;
  }
}