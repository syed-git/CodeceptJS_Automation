const Helper = require('@codeceptjs/helper');
const world = require('../world.js')
const pageFactory = require('../page_factory.js')

class PageInteractionHelper extends Helper {

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

  async navigateTo(url) {
    const { page } = this.helpers.Playwright;
    await page.goto(url);
  }

  async clickOn(selector) {
    const { page } = this.helpers.Playwright;
    selector = await this.getSelector(selector);
    await page.click(selector);
  }

  async enterText(selector, text) {
    const { page } = this.helpers.Playwright;
    selector = await this.getSelector(selector);
    await page.type(selector, text);
  }

  async getSelector(selector) {
    const selectorPage = await pageFactory[world.currentPage];
    return selectorPage[selector];
  }
}

module.exports = PageInteractionHelper;
