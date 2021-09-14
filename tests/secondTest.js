module.exports = {
    '@tags' : ['google'],
    "Google Advance Search Elon Musk"(browser){
        const mainQueryInputSelector = 'input[name="as_q"]';
        const mainQuery = 'Elon Musk';
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_en"]';
        const searchButton = 'input[value="Advanced Search"]';
        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .saveScreenshot('tests_output/google.png')
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(searchButton)
            .saveScreenshot('tests_output/language_dropdown.png')
    }
}