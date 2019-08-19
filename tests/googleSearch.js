module.exports = {
    '@tags' : ['google'],
    'Google advanced search'(browser) {
        const mainQuary = 'Anush Ar'
        const mainQuaryInputSelector = 'input[name = "as_q"]'
        const languageDropdownOpenSelector = '#lr_button'
        const languageDropdownSelectValue = 'li[value = "lang_hy"]'
        const lastUpdateDropdownSelector = '#as_qdr_button'
        const lastUpdateDropdownSelectedValue = 'li[value = "d"]'
        const submitButtonSelector = '.dUBGpe[type = "submit"]'

        browser
            .resizeWindow(1280, 1024)
            .url('https://www.google.com/advanced_search')
            .setValue(mainQuaryInputSelector, mainQuary)
            .click(languageDropdownOpenSelector) 
            .click(languageDropdownSelectValue) 
            .click(lastUpdateDropdownSelector) 
            .click(lastUpdateDropdownSelectedValue) 
            .click(submitButtonSelector) 
            .assert.urlContains('as_q=Anush+Ar', 'quary is Anush Ar')
            .assert.urlContains('lang_hy', 'langauage is armenian')
            .assert.urlContains('as_qdr=d', 'time period is last day')
            .saveScreenshot('tests_output/google.png')
            browser.end()
    }

    
};