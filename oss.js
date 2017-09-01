var fs  = require('fs');
var co  = require('co');
var OSS = require('ali-oss');
var imgPath = 'images';

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
