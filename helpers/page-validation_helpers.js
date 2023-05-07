const Helper = require('@codeceptjs/helper');
const assert =  require('node:assert');
const world = require('../world');
const pageFactory = require('../page_factory.js');
const { truncate } = require('node:fs');
class PageValidationsHelper extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  async seeTitleContains(expTitle, extMatch) {
    const { page } = this.helpers.Playwright;
    const pageTitle = await page.title();
    console.log(pageTitle)
    if (extMatch) {
      assert.strictEqual(expTitle, pageTitle);
    } else {
      assert.equal(expTitle, pageTitle);
    }
    world.currentPage = pageTitle;
  }

  async validateElementExist(selector) {
    const { page } = this.helpers.Playwright;
    selector = await this.getSelector(selector);
    const elementExists = await page.$$(selector);
    if (elementExists.length > 0) {
      return true;
    }
    return false
  }

  async seeElementExist(selector) {
    const { page } = this.helpers.Playwright;
    selector = await this.getSelector(selector);
    const elementExists = await this.validateElementExist(selector);
    if (!elementExists) {
      throw new Error(`element with selector: ${selector} does not exist on the page.`);
    }
  }

  async seeElementContains(selector, expectedText, exactMatch = false) {
    const { page } = this.helpers.Playwright;
    selector = await this.getSelector(selector);
    const elementText = page.locator(selector).textContent();
    if (exactMatch) {
      assert.strictEqual(expectedText, elementText);
    } else {
      assert.equal(expectedText, elementText);
    }
  }

  async getSelector(selector) {
    const selectorPage = await pageFactory[world.currentPage];
    return selectorPage[selector];
  }
}

module.exports = PageValidationsHelper;
