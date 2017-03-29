/**
 * Created by Antonio on 3/27/2017.
 */
'use strict';

var timeOut = 5000;

module.exports = {
    url: 'https://login.salesforce.com/',
    elements: {
        username: {
            selector: '#username'
        },
        passwd: {
            selector: '#password'
        },
        submitLogin:{
            selector: '#Login'
        },
        checkUserLabel:{
            selector: '#userNavLabel'
        }
    },
    commands: [{
        setLoginAndCheckPass: function(userNameValue, passwdValue, userName) {
            this.setValue('@username', userNameValue);
            this.setValue('@passwd', passwdValue);
            this.click('@submitLogin');
            this.api.pause(timeOut);
            this.assert.containsText('#userNavLabel', userName);
            return this;
        },
        setLoginAndCheckFail: function(userNameValue, passwdValue, userName) {
            this.setValue('@username', userNameValue);
            this.setValue('@passwd', passwdValue);
            this.click('@submitLogin');
            this.api.pause(timeOut);
            this.assert.containsText('#error', 'Please check your username and password. If you still can\'t log in, contact your Salesforce administrator.');
            return this;
        }
    }]
};
