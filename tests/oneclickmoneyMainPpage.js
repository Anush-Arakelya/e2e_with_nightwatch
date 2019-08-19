module.exports = {
    '@tags' : ['oneclickmoney'],
    'page header'(browser) {
        const header = '#header-index'
        const leftBlockOfHeader = '#header-index > .left-blk-head'
        const rightBlockOfHeader = '.left-blk-head ~ .right-blk-head'
        const headerLeftBlockElements = '.left-blk-head-elm'
        const headerLeftBlockFirstElementImage = '.left-blk-head-elm:nth-child(1) > img'
        const headerLeftBlockFirstblobkMoneyCurrency = '.left-blk-head-elm:nth-child(1) > img ~ .wr-bnm span'
        const headerLeftBlockFirstblobkMoney = '.left-blk-head-elm:nth-child(1) > img ~ .wr-bnm p'
        const headerLeftBlockFirstblobkBottomText = '.left-blk-head-elm:nth-child(1) > img ~ .wr-bnm .desc-head-m'

        browser
        .resizeWindow(1280, 1024)
        .url('https://oneclickmoney.ru/')
        .assert.visible(header, 'Page header is present')
        .assert.visible(leftBlockOfHeader, 'Page header contains left block')
        .assert.visible(headerLeftBlockFirstElementImage, 'header left blobks first element image is present')
        .assert.containsText(headerLeftBlockFirstblobkMoney, "11500", 'header left blobks first element top text is correct')
        .assert.containsText(headerLeftBlockFirstblobkMoneyCurrency, "₽", 'header left blobks first element currency is correct')
        .assert.containsText(headerLeftBlockFirstblobkBottomText, "Средний займ за сегодня", 'header left blobks first element bottom text is correct')
        .assert.visible(rightBlockOfHeader, 'Page header contains right block')
        .expect.elements(headerLeftBlockElements).count.to.equal(3)
        
    }
    

};