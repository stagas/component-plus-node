
/**
 * Example.
 */

require('./');

var each = require('each');

var result = '';

each(['Hello,', ' world!'], function(el){
  result += el;
});

console.log(result); // => Hello, world!
