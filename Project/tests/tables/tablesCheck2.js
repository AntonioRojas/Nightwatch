var assert = require('assert');

function checkRows(tdValue) {
    return console.log(tdValue);
}


module.exports = {
    'iterate a table on nightwatch': function(browser) {
        browser
            .windowMaximize()
            .url('https://www.w3schools.com/html/html_tables.asp')
            .assert.containsText('div.w3-example h3', 'HTML Table Example')
            .elements('css selector', '#customers tbody:nth-child(1) tr', function (elementsTR) {
                for (var tr = 1; tr < elementsTR.value.length;tr++) {
                    for (var i = 1; i < 4; i++) {
                        if (tr == 1) {
                            var elementCss = '#customers tbody:nth-child(1) tr:nth-child(' + (tr) + ') th:nth-child(' + (i) + ')';
                            browser.getText(elementCss, function (td) {
                                if (td.value=='Company' || td.value=='Contact' || td.value=='Country') {
                                    console.log('Table Header: ' + td.value + ' was found');
                                    assert(true);
                                }
                                else{
                                    console.log('The following header was not found ' + td.value);
                                    assert(false);
                                }

                            });
                        }
                        else {
                            var elementCss = '#customers tbody:nth-child(1) tr:nth-child('+ (tr) +') td:nth-child(' + (i) + ')';
                            browser.getText(elementCss, function (td){
                                checkRows(td.value);
                            });
                        }

                    }
                }
            });
            browser.end()
    }
};