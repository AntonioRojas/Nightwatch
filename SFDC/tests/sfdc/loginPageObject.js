module.exports = {
    tags: ['test'],
	'Login Pass to SFDC' : function (browser) {
        var client = browser.page.loginPage();
        client.navigate();
        client.setLoginAndCheckPass('user@domain.com', 'xxxxxxPass', 'Antonio Rojas');
        browser.end();
    },
    tags: ['negative'],
    'Login Fail to SFDC' : function (browser) {
        var client = browser.page.loginPage();
        client.navigate();
        client.setLoginAndCheckFail('user@domain.com', 'xxxFail', 'Antonio Rojas');
        browser.end();
    },
};
