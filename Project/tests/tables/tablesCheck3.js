var assert = require('assert');

function checkHeaders(headerValue) {
    if (headerValue=='Company' || headerValue=='Contact' || headerValue=='Country') {
        console.log('Table Header: ' + headerValue + ' was found');
        assert(true);
    }
    else{
        console.log('The following header was not found ' + headerValue);
        assert(false);
    }
    return this;
}

function checkRows(tdValue){
    if (tdValue=='Centro comercial Moctezuma'){
        rowCompanyExists = true;
    }
    if (tdValue=='Francisco Chang'){
        rowContact = true;
    }
    if (tdValue=='Mexico'){
        rowCountry = true;
    }
}


module.exports = {
    'Iterate a table on nightwatch': function(browser) {
        browser
            .windowMaximize()
            .url('https://www.w3schools.com/html/html_tables.asp')
            .assert.containsText('div.w3-example h3', 'HTML Table Example')
            .elements('css selector', '#customers tbody:nth-child(1) tr', function (elementsTR) {
                rowCompanyExists = false;
                rowContact = false;
                rowCountry = false;
                for (var tr = 1; tr < elementsTR.value.length; tr++) {
                    for (var i = 1; i < 4; i++) {
                        if (tr == 1) {
                            var elementCss = '#customers tbody:nth-child(1) tr:nth-child(' + (tr) + ') th:nth-child(' + (i) + ')';
                            browser.getText(elementCss, function (th) {
                                checkHeaders(th.value)
                            });
                        }
                        else {
                            var elementCss = '#customers tbody:nth-child(1) tr:nth-child('+ (tr) +') td:nth-child(' + (i) + ')';
                            browser.getText(elementCss, function(td) {
                                checkRows(td.value);
                            });
                        }
                    }
                }
                browser.perform(function() {
                    console.log("Centro comercial Moctezuma : " + rowCompanyExists);
                    console.log("Francisco Chang : " + rowContact);
                    console.log("Mexico : " + rowCountry);
                    if (rowCompanyExists && rowContact && rowCountry){
                        console.log('Centro comercial Moctezuma/Francisco Chang/Mexico: were found');
                        assert(true);
                    }
                    else{
                        console.log('Centro comercial Moctezuma/Francisco Chang/Mexico: were NOT found');
                        assert(false);
                    }
                });
            });
        browser.end();
    }
};