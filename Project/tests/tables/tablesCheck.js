module.exports = {
    'iterate a table on nightwatch': function(browser) {
        browser
            .windowMaximize()
            .url('https://www.w3schools.com/html/html_tables.asp')
            .assert.containsText('div.w3-example h3', 'HTML Table Example')
            .assert.containsText('#customers tbody:nth-child(1) tr:nth-child(1) th:nth-child(1)', 'Company')
            .assert.containsText('#customers tbody:nth-child(1) tr:nth-child(1) th:nth-child(2)', 'Contact')
            .assert.containsText('#customers tbody:nth-child(1) tr:nth-child(1) th:nth-child(3)', 'Country')
            .elements('css selector', '#customers tbody:nth-child(1) tr', function (elementsTR) {
                for (var tr = 1; tr < elementsTR.value.length;tr++) {
                    for (var i = 1; i < 4; i++) {
                        if (tr == 1) {
                            var elementCss = '#customers tbody:nth-child(1) tr:nth-child(' + (tr) + ') th:nth-child(' + (i) + ')';
                            browser.getText(elementCss, function (th) {
                                console.log('Table Title: ' + th.value);
                            });
                        }
                        else {
                            var elementCss = '#customers tbody:nth-child(1) tr:nth-child('+ (tr) +') td:nth-child(' + (i) + ')';
                            browser.getText(elementCss, function (td) {
                                console.log('Row: ' + td.value);
                            });
                        }

                    }
                }
            })
            browser.end()
    }
};