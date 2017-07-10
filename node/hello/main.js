'use strict';
var fs = require('fs');

fs.readFile('../sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('readFile' + data);
    }
});

fs.writeFile('../sample.txt', 'a', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok' );
    }
});

function test (resolve, reject) {
    fs.readFile('../banner.jpg', function (err, data) {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
}

new Promise(test).then(function (result) {
    fs.writeFile('bannerCopy.jpg', result, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('图片写入成功ok');
        }
    });
}).catch(function (reason) {
    console.log('失败：' + reason);
});

fs.stat('../banner.jpg', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        console.log('isFile: ' + stat.isFile());
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            console.log('size: ' + stat.size);
            console.log('birth time: ' + stat.birthtime);
            console.log('modified time: ' + stat.mtime);
        }
    }
});