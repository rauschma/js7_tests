var assert = require('assert');
var StrMap = require('../../js7_code/javascript_3_code/StrMap');

var sm = new StrMap();

sm.put('foo', 123);
assert.equal(sm.get('foo'), 123);
assert.ok(sm.hasKey('foo'));

assert.ok(!sm.hasKey('toString'));
assert.ok(!sm.hasKey('__proto__'));

sm.put('hasOwnProperty', 'abc');
assert.ok(sm.hasKey('hasOwnProperty'));

sm.put('__proto__', 'def');
assert.ok(sm.hasKey('__proto__'));
