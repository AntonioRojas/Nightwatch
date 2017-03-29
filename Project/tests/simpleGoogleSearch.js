module.exports = {

	before : function(done) {
    console.log('*********Before all tests**********');
	},

	beforeEach : function() {
    console.log('----------Before each test------------');
	},

	afterEach : function(done) {
    console.log('+++++++++++After each test++++++++++++++');
	done();
	},

    tags: ['test'],
	'Demo test My blog' : function (browser) {
    browser
      .windowMaximize()
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'blog-antonio-rojas.blogspot.com')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Antonio Rojas, bienvenidos a mi pagina personal.')
	  .click("#rso div div div:nth-child(1) div h3 a", function(response){
        console.log(response.status);
	  })
	  .pause(100)
      .waitForElementVisible('#header h1', 1000000)
      .end();
  },
};