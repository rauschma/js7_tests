var assert = require('assert');
var grid = require('../../js7_code/javascript_1_code/grid');
var st = require('../../js7_ha/javascript_1_ha/searchtree');

assert.deepEqual(st.computeStats(grid.create('XXX|...|...')), {
    X: { '3': 1, '2': 0 },
    O: { '3': 0, '2': 0 },
    freeCount: 6
});
assert.deepEqual(st.computeStats(grid.create('O..|.O.|..O')), {
    X: { '3': 0, '2': 0 },
    O: { '3': 1, '2': 0 },
    freeCount: 6
});
assert.deepEqual(st.computeStats(grid.create('OO.|O..|...')), {
    X: { '3': 0, '2': 0 },
    O: { '3': 0, '2': 2 },
    freeCount: 6
});

// function rateGrid(g, color, {depth,bestCoord})
var bestCoord = {};
st.rateGrid(grid.create('X..|OO.|...'), grid.COLOR_X, { bestCoord: bestCoord });
assert.deepEqual(bestCoord, { x: 2, y: 1 });

