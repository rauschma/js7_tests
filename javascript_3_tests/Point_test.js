var assert = require('assert');
var Point = require('../../js7_code/javascript_3_code/Point');

var p = new Point(3, 4);
assert.equal(p.x, 3);
assert.equal(p.y, 4);
assert.equal(p.toString(), 'Point(3, 4)')

var p = new Point(3);
assert.equal(p.x, 3);
assert.equal(p.y, 0);
assert.equal(p.toString(), 'Point(3, 0)')

var p = new Point();
assert.equal(p.x, 0);
assert.equal(p.y, 0);
assert.equal(p.toString(), 'Point(0, 0)')
