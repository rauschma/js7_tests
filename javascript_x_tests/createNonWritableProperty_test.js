var assert = require('assert');
var create = require('../../js7_code/javascript_2_code/createNonWritableProperty');

var obj = create();

assert.equal(obj.foo, 123);
obj.foo = 456;
assert.equal(obj.foo, 456);


assert.equal(obj.bar, 'abc');

// writable === false?
obj.bar = 'def';
assert.equal(obj.bar, 'abc');

// enumerable === true?
assert.ok(Object.keys(obj).indexOf('bar') >= 0);
