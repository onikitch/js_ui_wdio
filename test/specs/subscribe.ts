describe('User', function() {
    it('can subscribe', function() {
        browser.url('/')
        const subscribeForm = $('div[class="pardotForm__wrap pardotForm__wrap--fadeIn"]')
        const email = `test${new Date().getTime() / 1000}@jabil.com`
        subscribeForm.$('input[name="businessEmail"]').setValue(email)
        subscribeForm.$('input[name="jobTitle"]').setValue('test_engineer')
        subscribeForm.$('input[name="industry"]').setValue('test_industry')
        subscribeForm.$('button[type="submit"]').click()
        browser.pause(10000)
    });
});