module.exports = {
    '@tags' : ['google'],
    'My first test case'(browser) {
        const mainQuary = 'Anush Ar'
        const mainQuaryInputSelector = 'input[name = "as_q"]'
        const languageDropdownOpenSelector = '#lr_button'

        browser
            .resizeWindow(1280, 1024)
            .url('https://www.google.com/advanced_search')
            .setValue(mainQuaryInputSelector, mainQuary)
            .pause(1000)

            // .click('span.recaptcha-checkbox.goog-inline-block.recaptcha-checkbox-unchecked.rc-anchor-checkbox') 
            // .waitForElementVisible('.search_period')
            .pause(1000)

            .saveScreenshot('tests_output/google.png')

            browser.end()
    }
};