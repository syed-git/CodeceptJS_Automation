
Feature('login');

Scenario('Check Invalid Login',  async ({ I }) => {
    await I.navigateTo('https://www.saucedemo.com/')
    await I.seeTitleContains('Swag Labs', true)
    await I.enterText('userName', 'abcde')
    await I.enterText('password', 'syed')
    await I.clickOn('loginButton')
    await I.see('Epic sadface: Username and password do not match any user in this service')
});

Scenario('Check Valid Login',  async ({ I }) => {
    await I.navigateTo('https://www.saucedemo.com/')
    await I.seeTitleContains('Swag Labs', true)
    await I.enterText('userName', 'standard_user')
    await I.enterText('password', 'secret_sauce')
    await I.clickOn('loginButton')
    await I.see('Swag Labs')
    await I.clickOn('menuOption')
    await I.clickOn('logout')
    await I.see('Swag Labs')
});