describe('User', function() {
    it('can subscribe', function() {
        browser.url('/')

        const email = 'test${new Date().getTime() / 1000@jabil.com}'
        $('input["name=businessEmail"]').setValue(email)

        $('input[name="jobTitle"]').setValue('test_engineer')
        $('input[name="industry"]').setValue('test_industry')
    });
});