module.exports = {
    "My First Test"(browser){
        browser
            .url('https://www.google.com/')
            .useXpath()
            .waitForElementVisible('xpath', "//a[@class='gb_f' and @data-pid = 23]")
            .assert.containsText("//a[@class='gb_f' and @data-pid = 23]", "Gmail");           
    }
}