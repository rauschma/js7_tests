var assert = require('assert');
var grid = require('../../js7_code/javascript_1_code/grid');

assert.equal(grid.print(grid.create('O.......X')), 'O..\n...\n..X\n');
// Ignore '|' as separator
assert.equal(grid.print(grid.create('O..|...|..X')), 'O..\n...\n..X\n');

var g = grid.create();
assert.equal(grid.print(g), '...\n...\n...\n');

grid.setCell(g, 2, 0, grid.COLOR_X);
assert.equal(grid.print(g), '..X\n...\n...\n');
assert.equal(grid.getCell(g, 2, 0), grid.COLOR_X);
assert.equal(grid.getCell(g, 0, 0), grid.COLOR_NONE);

grid.setCell(g, 1, 0, grid.COLOR_O);
assert.equal(grid.print(g), '.OX\n...\n...\n');
assert.equal(grid.getCell(g, 1, 0), grid.COLOR_O);
assert.equal(grid.getCell(g, 0, 0), grid.COLOR_NONE);

assert.equal(grid.invertColor(grid.COLOR_O), grid.COLOR_X);
assert.equal(grid.invertColor(grid.COLOR_X), grid.COLOR_O);

// COLOR_NONE isn’t a color
assert.throws(function () { grid.invertColor(grid.COLOR_NONE) }, Error);