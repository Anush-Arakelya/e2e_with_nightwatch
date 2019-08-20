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
        .resizeWindow(1280, 1024)
        .url('https://oneclickmoney.ru/')
        .waitForElementVisible(header)
        .assert.visible(header, 'Page header is present')
        .assert.visible(leftBlockOfHeader, 'Page header contains left block')
        .assert.visible(headerLeftBlockFirstElementImage, 'header first block image is present')
        .assert.containsText(headerLeftBlockFirstblobkMoneyCurrency, "₽", 'header first block currency is correct')
        .assert.containsText(headerLeftBlockFirstblobkBottomText, "Средний займ за сегодня", 'header first block bottom text is correct')
        .assert.visible(rightBlockOfHeader, 'Page header contains right block')
        .expect.elements(headerLeftBlockElements).count.to.equal(3)
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
        .resizeWindow(1280, 1024)
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
        .resizeWindow(1280, 1024)
        .url('https://oneclickmoney.ru/')
        .waitForElementVisible(header)
        .assert.visible(headerLeftBlockThirdElementImage, 'header third blobk image is present')
        .assert.containsText(headerLeftBlockThirdblobkBottomText, "Число займов за сегодня", 'header third block bottom text is correct')
        browser.expect.element(headerLeftBlockThirdblobkMoney).text.to.not.equal('')
        browser.end()
        
    },
    

};