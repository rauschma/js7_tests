var assert = require('assert');
var isObject = require('../../js7_code/javascript_1_code/isObject');

assert.equal(isObject({}), true);
assert.equal(isObject(Object.create(null)), true);
assert.equal(isObject(function () {}), true);
assert.equal(isObject([]), true);

assert.equal(isObject(null), false);
assert.equal(isObject(undefined), false);
assert.equal(isObject(true), false);
assert.equal(isObject('abc'), false);
assert.equal(isObject(123), false);
