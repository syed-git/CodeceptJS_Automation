import world from '../world'

Feature('Check Amazon login functionality');

Scenario('Check Valid Login',  async ({ I }) => {
    await I.navigateTo('https://www.amazon.in/')
    await I.see('Hello, sign in')
    world.currentPage = 'Sign In'
    await I.clickOn('signInButton')
    await I.see('Enter mobile phone number or email')
    await I.enterText('emailAddress', 'syed.zubair4929@gmail.com')
    await I.clickOn('continueButton')
    await I.enterText('password', 'Sy@Ed4#4')
    await I.clickOn('signIn')
    await I.see('Amazon miniTV')
    world.currentPage = 'Amazon Home Page'
    const isExists = await I.validateElementExist('returnAndOrders')
    console.log(isExists)
    await I.clickOn('menuOption')
    await I.clickOn('singOut')
    await I.see('Sign in')
});
