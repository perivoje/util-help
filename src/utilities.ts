import {browser, ElementFinder, protractor} from 'protractor';
export class Utilities {
    
    public sayHelloTo(name: string): string {
      return `🦄 Hello ${name} !`;
    }

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
  }