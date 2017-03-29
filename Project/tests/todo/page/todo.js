'use strict';
module.exports = {
    url: 'http://todomvc.com/examples/angularjs/#/',
    elements: {
        headerH1: {
            selector: '#header h1'
        },
        newEntryTask: {
            selector: '#new-todo'
        },
        submitForm:{
            selector: '#todo-form'
        },
        checkListLabel:{
            selector: '#todo-list li div label'
        }
    },
    commands: [{
        setNewvalueAndCheck: function() {
            return this.setValue('@newEntryTask', 'My new task')
                .submitForm('@submitForm')
                .assert.containsText('@checkListLabel', 'My new task')
        }
    }]

};
