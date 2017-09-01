var config = require('./src/app.json');
var fs     = require('fs');
var path   = require('path');
var source = './src/';
var dist   = './dist/';
var opts   = {encoding: 'utf8'};


var comboCode = 'import "' + source + 'app.js' + '";', tmpFiles=[];
config.pages.map(function(page, index) {
    page = page + '.js';
    var _page = source + path.dirname(page) + '/_' + path.basename(page);
    var content = fs.readFileSync(source + page, opts).replace(/(^|[\s\n,;])Page\(/gm, function(mat) {
        return mat.replace('Page', '__page(' + index + ')');
    });
    fs.writeFileSync(_page, content, opts);
    comboCode += '\nimport "' + _page + '";';
    fs.writeFileSync(dist + page, 'getApp().__run(' + index + ');', opts);
    tmpFiles.push(_page);
});

fs.writeFileSync('./combo.js', comboCode, opts);
console.log(tmpFiles.join(' '));
