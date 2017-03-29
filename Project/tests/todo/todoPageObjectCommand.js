module.exports = {
    tags: ['todo_page'],
    'Shows todo items': function(browser) {
     var client = browser.page.todo();
        client.navigate()
        client.assert.visible('@headerH1')
        client.setNewvalueAndCheck();
        browser.end();
    }
};