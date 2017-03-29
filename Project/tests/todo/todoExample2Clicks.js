module.exports = {
    tags: ['todo_page'],
    'Double clicking allows you to edit the task': function (client) {
        client
            .windowMaximize()
            .url('http://todomvc.com/examples/angularjs/#/')
            .waitForElementVisible('#header h1', 1000)
            .setValue('#new-todo', 'My new task')
            .submitForm('#todo-form')
            .execute(function() {
                var evt = document.createEvent('MouseEvents');
                evt.initMouseEvent('dblclick',true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                document.getElementById('todo-list').children[0].children[0].children[1].dispatchEvent(evt);
            })
            .keys(['\uE011', '\uE008','\uE010','\uE017'])
            .pause(1000)
            .keys(['\uE008'])
            .keys(['My other new task', '\uE006'])
            .pause(1000)
            .end();
    },
}
