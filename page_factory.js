const signInPage = require('./pages/sign_in_selectors')
const amazonHomePage = require('./pages/amazon_home_page_selectors')

module.exports; pageFactory = {
    'Sign In': signInPage,
    'Amazon Home Page': amazonHomePage
}

module.exports = pageFactory;