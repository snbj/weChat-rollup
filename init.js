var config = require('./src/app.json');
var fs     = require('fs');
var path   = require('path');
//var co     = require('co');
//var OSS = require('ali-oss');
var source = './src/';
var dist   = './dist/';
var imgPath = 'images';
var opts   = {encoding: 'utf8'};

/* 阿里云 打包上传资源图 本地使用 简略图 减少包大小  优化显示体验
var client = new OSS({
  region: '',
  accessKeyId: '',
  accessKeySecret: '',
  bucket: ''
});
fs.readdir(imgPath, function(err, files) {
    files.forEach(function(item) {
        co(function* () {
            var name = imgPath+'/'+item;
            var result = yield client.put(name, name);
        }).catch(function (err) {
            console.log(err);
        });
    });
});  
*/

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
