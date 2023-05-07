const Helper = require('@codeceptjs/helper');
const assert =  require('node:assert');
const world = require('../world');
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

}

module.exports = PageValidationsHelper;
