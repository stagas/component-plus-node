
var assert = require('assert');

require('../');

var each = require('each');

var result = '';

each(['Hello,', ' world!'], function(el){
  result += el;
});

assert('Hello, world!' == result);

console.log('OK');
