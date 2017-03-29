module.exports = {

    tags: ['test'],
	'Demo login to SFDC' : function (browser) {
    browser
      .windowMaximize()
      .url('https://login.salesforce.com/')
      .waitForElementVisible('body', 1000)
      .setValue('#username', 'email@domain.com')
      .setValue('#password', 'xxxxx')
      .click('#Login')
      .pause(1000)
      .assert.containsText('#userNavLabel', 'Antonio Rojas')
      .end();
  },
};
