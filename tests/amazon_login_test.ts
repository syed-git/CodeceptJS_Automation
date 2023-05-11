import world from '../world'

Feature('Check Amazon login functionality');

Scenario('Check Valid Login',  async ({ I }) => {
    await I.navigateTo('https://www.amazon.in/')
    await I.see('Hello, sign in')
    world.currentPage = 'Sign In'
    await I.clickOn('signInButton')
    await I.see("By continuing, you agree to Amazon's")
    await I.enterText('emailAddress', 'syed.zubair4929@gmail.com')
    await I.clickOn('continueButton')
    await I.enterText('password', 'Sy@Ed4#4')
    await I.clickOn('signIn')
    await I.see('Amazon miniTV')
    world.currentPage = 'Amazon Home Page'
    await I.seeElementContains('amazonMiniTv', 'Amazon miniTV', true)
    await I.seeElementExist('returnAndOrders')
    await I.clickOn('menuOption')
    await I.clickOn('singOut')
});
