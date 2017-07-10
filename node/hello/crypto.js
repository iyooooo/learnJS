'use strict'

const crypto = require('crypto');

const hash = crypto.createHash('md5');
// const hash = crypto.createHash('sha1');
// const hash = crypto.createHash('sha256');
// const hash = crypto.createHash('sha512');

hash.update('foo');
console.log(hash.digest('ball'));