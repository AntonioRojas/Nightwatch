module.exports = {
    tags: ['iframe'],
	'Demo test iframe' : function (browser) {
    browser
      .windowMaximize()
      .url('file:///C:/nightwatch/Project/pages/iframeTest.html')
      .assert.containsText('body', 'Main PAGE out of the iframes')
      .frame('left', function(){
          browser
              .click('body a')
              .pause(100)
              .assert.containsText('body', 'Not found')
      })
      .frame(null)
      .assert.containsText('body', 'Main PAGE out of the iframes')
      .end();
  },
};