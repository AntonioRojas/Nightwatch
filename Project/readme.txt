webStorm IDE configruation to run nightwatch
go to Run > Edit Configurations > Defaults > Node.js
node parameters C:\nightwatch\Project\nightwatch.js -t
application parameters -c C:\nightwatch\Project\nightwatch.json

to run nightwatch
node nightwatch --tag=<tagname> --tag=<tagname2>
node nightwatch -t test/sample.js

to install gulp
npm install gulp-cli -g
npm install gulp -D
touch gulpfile.js
gulp --help

then npm init

to run gulp
gulp nightwatch