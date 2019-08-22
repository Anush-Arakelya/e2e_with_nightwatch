module.exports = {
    '@tags' : ['oneclickmoney'],
    'Header left first block'(browser) {
        const header = '#header-index'
        const leftBlockOfHeader = '#header-index > .left-blk-head'
        const rightBlockOfHeader = '.left-blk-head ~ .right-blk-head'
        const headerLeftBlockElements = '.left-blk-head-elm'
        const headerLeftBlockFirstElementImage = '.left-blk-head-elm:nth-child(1) > img'
        const headerLeftBlockFirstblobkMoneyCurrency = '.left-blk-head-elm:nth-child(1) > img ~ *'
        const headerLeftBlockFirstblobkMoney = '.left-blk-head-elm:nth-child(1) > img ~ *'
        const headerLeftBlockFirstblobkBottomText = '.left-blk-head-elm:nth-child(1) > img ~ *'

        browser
        .resizeWindow(1800, 1024)
        .url('https://oneclickmoney.ru/')
        .waitForElementVisible(header)
        .assert.visible(header, 'Page header is present')
        .assert.visible(leftBlockOfHeader, 'Page header contains left block')
        .assert.visible(headerLeftBlockFirstElementImage, 'header first block image is present')
        .assert.containsText(headerLeftBlockFirstblobkMoneyCurrency, "₽", 'header first block currency is correct')
        .assert.containsText(headerLeftBlockFirstblobkBottomText, "Средний займ за сегодня", 'header first block bottom text is correct')
        .assert.visible(rightBlockOfHeader, 'Page header contains right block')
        browser.expect.elements(headerLeftBlockElements).count.to.equal(3)
        browser.expect.element(headerLeftBlockFirstblobkMoney).text.to.not.equal('')
        browser.end()
    },
    'Header left second block'(browser) {
        const header = '#header-index'
        const headerLeftBlockSecondElementImage = '.left-blk-head-elm:nth-child(2) > img'
        const headerLeftBlockSecondblobkMoneyCurrency = '.left-blk-head-elm:nth-child(2) > img ~ *'
        const headerLeftBlockSecondblobkMoney = '.left-blk-head-elm:nth-child(2) > img ~ *'
        const headerLeftBlockSecondblobkBottomText = '.left-blk-head-elm:nth-child(2) > img ~ *'

        browser
        .resizeWindow(1800, 1024)
        .url('https://oneclickmoney.ru/')
        .waitForElementVisible(header)
        .assert.visible(headerLeftBlockSecondElementImage, 'header second blobk image is present')
        .assert.containsText(headerLeftBlockSecondblobkMoneyCurrency, "₽", 'header second blobks currency is correct')
        .assert.containsText(headerLeftBlockSecondblobkBottomText, "Cумма займов за сегодня", 'header second block bottom text is correct')
        browser.expect.element(headerLeftBlockSecondblobkMoney).text.to.not.equal('')
        browser.end()
        
    },
    'Header left third block'(browser) {
        const header = '#header-index'
        const headerLeftBlockThirdElementImage = '.left-blk-head-elm:nth-child(3) > img'
        const headerLeftBlockThirdblobkMoney = '.left-blk-head-elm:nth-child(3) > img ~ *'
        const headerLeftBlockThirdblobkBottomText = '.left-blk-head-elm:nth-child(3) > img ~ *'

        browser
        .resizeWindow(1800, 1024)
        .url('https://oneclickmoney.ru/')
        .waitForElementVisible(header)
        .assert.visible(headerLeftBlockThirdElementImage, 'header third blobk image is present')
        .assert.containsText(headerLeftBlockThirdblobkBottomText, "Число займов за сегодня", 'header third block bottom text is correct')
        browser.expect.element(headerLeftBlockThirdblobkMoney).text.to.not.equal('')
        browser.end()
        
    },
    'Header registration block'(browser) {
        const header = '#header-index'
        const RegistrationImage = '.reg-head-elm > img'
        const RegistarationLink = '.regestration-link > a'
        const LogInLink = '.login-link > a'

        browser
        .resizeWindow(1800, 1024)
        .url('https://oneclickmoney.ru/')
        .waitForElementVisible(header)
        .assert.visible(RegistrationImage, 'Registration image is present')
        .assert.visible(RegistarationLink, 'Registration link is present')
        .assert.containsText(RegistarationLink, "Регистрация", 'Registaration link text is correct')
        .assert.visible(LogInLink, 'Login link is present')
        .assert.containsText(LogInLink, "Вход", 'Login link text is correct')
        browser.expect.element(LogInLink).to.have.attribute('href').which.contains('signin')
        browser.expect.element(RegistarationLink).to.have.attribute('href')
            .which.contains('simple-registration/')
        browser.end()
        
    },
    'Header phone block'(browser) {
        const header = '#header-index'
        const phoneBlocPphoneNumber = '.number-right-head > a'
        const phoneBlockText = '.right-number-link-head > p'
        const phoneBlockLink = '.right-number-link-head button'

        browser
        .resizeWindow(1800, 1024)
        .url('https://oneclickmoney.ru/')
        .waitForElementVisible(header)
        .assert.visible(phoneBlocPphoneNumber, 'Phone number is present')
        .assert.containsText(phoneBlocPphoneNumber, "8 800 700 06 07", 'Phone number is correct')
        .assert.visible(phoneBlockText, 'Phone block text is present')
        .assert.containsText(phoneBlockText, "Круглосуточно", 'Phone block text is correct')
        .assert.visible(phoneBlockLink, 'Phone block link is present')
        .assert.containsText(phoneBlockLink, "Перезвоните мне", 'Phone block link text is correct')
        browser.expect.element(phoneBlocPphoneNumber).to.have.attribute('href')
            .which.contains('tel:88007000607')       
        browser.end()
        
    },
    'Policy Agreement Notification bar'(browser) {
        const header = '#header-index'
        const NotificationBar = '#cookie-notification-bar'
        const NotificationBarCancelButton = '#cookie-notification-bar span ~ a.close'
        const NotificationBarText = '#cookie-notification-bar span'
        const policyCookeFilesLink = '#cookie-notification-bar span > a'
       

        browser
        .resizeWindow(1800, 1024)
        .url('https://oneclickmoney.ru/')
        .waitForElementVisible(header)
        .assert.visible(NotificationBar, 'Policy Agreement Notification is present')
        .assert.visible(NotificationBarCancelButton, 'Policy Agreement Notification bar cancel button is present')
        .assert.visible(policyCookeFilesLink, 'Policy cooke files link is present')
        .assert.visible(NotificationBarText, 'Policy Agreement Notification text is visible')
        .assert.containsText(NotificationBarText, "Продолжая пользоваться сайтом oneclickmoney.ru, Вы соглашаетесь с нашей", 
            'Policy Agreement Notification text is correct')
        .assert.containsText(policyCookeFilesLink, "Политикой cookie-файлов", 'Policy cooke files link text is correct')
        browser.expect.element(policyCookeFilesLink).to.have.attribute('href').which.contains('#')
        browser.click(NotificationBarCancelButton)
        .assert.elementNotPresent(NotificationBar, 'After clicking Cancel button the bar disappear')       
        browser.end()
        
    }

};