var assert = require('assert');
var board4 = require('../../js7_ha/javascript_2_ha/board4');

testParsingAndCounts();
testMakeMove();
testComputeMove1();
testComputeMove2();

function testParsingAndCounts() {
    var board = new board4.Board();
    var boardStr = (
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        'X X X X O . .'
    );
    board.parseString(boardStr);
    assert.equal(board.toString(), boardStr);

    assert.equal(board._freeCellCount, 37);
    assert.ok(!board.isBoardFull());
    assert.ok(board.isGameOver());

    assert.deepEqual(board.getCounts(),
        {
            X: { '3': 0, '4': 1 },
            O: { '3': 0, '4': 0 }
        }
    );
}

function testMakeMove() {
    var board = new board4.Board();
    var before = (
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        'X X X . . . .'
    );
    var after = (
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        'X X X O . . .'
    );
    board.parseString(before);
    assert.equal(board.makeMove(3, board4.Color.YELLOW), 5);  // returns y coordinate
    assert.equal(board.toString(), after);
}

function testComputeMove1() {
    var board = new board4.Board();
    var boardStr = (
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        'X X X . . . .'
    );
    board.parseString(boardStr);
    var opts = { bestCol: -1 };
    board.computeMove('O', opts);
    assert.equal(opts.bestCol, 3);
}
function testComputeMove2() {
    var board = new board4.Board();
    var boardStr = (
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        '. . . . . . .\n' +
        'O . . X X . .\n'
    );
    board.parseString(boardStr);
    var opts = { bestCol: -1 };
    board.computeMove('O', opts);
    assert.ok(opts.bestCol === 2 || opts.bestCol === 5, 'bestCol: '+opts.bestCol);
}

