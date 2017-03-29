module.exports = {
    tags: ['todo_page'],
    'Shows todo items': function(client) {
        client
            .windowMaximize()
            .url('http://todomvc.com/examples/angularjs/#/')
            .waitForElementVisible('#header h1', 1000)
            .setValue('#new-todo', 'My new task')
            .submitForm('#todo-form')
            .assert.containsText('#todo-list li div label', 'My new task')
            //.assert.containsText('#todo-list li label', 'My new task')
            .end();
    },
    tags: ['todo_page'],
    'Strikes through completed items': function(client) {
        client
            .windowMaximize()
            .url('http://todomvc.com/examples/angularjs/#/')
            .waitForElementVisible('#header h1', 1000)
            .setValue('#new-todo', 'My new task')
            .submitForm('#todo-form')
            .click('#todo-list li:first-child .toggle')
            .assert.cssClassPresent('#todo-list li:first-child', 'completed')
            .end();
    },
    tags: ['todo_page'],
    'Shows how many items there are left': function(client) {
        client
            .windowMaximize()
            .url('http://todomvc.com/examples/angularjs/#/')
            .waitForElementVisible('#header h1', 1000)
            .setValue('#new-todo', 'My new task')
            .submitForm('#todo-form')
            .setValue('#new-todo', 'My other new task')
            .submitForm('#todo-form')
            .assert.containsText('#todo-count', '2 items left')
            .click('#todo-list li:first-child .toggle')
            .assert.containsText('#todo-count', '1 item left')
            .end();
    },
};