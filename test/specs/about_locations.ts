describe('Verify Locations', function() {
    it('verify filter by', function() {
        browser.url('/contact/locations')
        
        const industrySelect = $('select[id="locations-industries"]')
        industrySelect.selectByVisibleText('Telecommunications')
        
        const capabilitySelect = $('select[id="locations-capabilities"]')
        capabilitySelect.selectByVisibleText('Electrical Design Engineering')
        
        const certificationSelect = $('select[id="locations-certifications"]')
        certificationSelect.selectByVisibleText('ISO 9001:2015')

        const regionSelect = $('select[id="locations-regions"]')
        regionSelect.selectByVisibleText('Asia')

        browser.pause(10000)

    });
});