// Problem Domain :

// Building the game logic for the game Minesweeper. The board is a rectangle and its length and height can be determined by the player. The mines are created at random.

function Block(row, column, mine, surroundingMines) {
    return {
        blockCoordinates: row + '' + column,
        row: row,
        column: column,
        mine: mine,
        surroundingMines: surroundingMines,
    }
}

function MinesweeperBoard(height, width, howManyMines) {
    let board = {};

    for (let row = 0; row < width; row++) {
        for (let column = 0; column < height; column++) {
            board[row + '' + column] = Block(row, column, false, 0);
        }
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createMinesRandomly(board, howManyMines) {
    let mineCoordinates = [];
    
    for (let i = 0; i < howManyMines; i++) {
        let rowCoordinate = getRandomInteger(0, width);
        let columnCoordinate = getRandomInteger(0, height);
        let block = rowCoordinate + '' + columnCoordinate;

        while (mineCoordinates.includes(block)) { // Still O(n^2) but can be optimized
            rowCoordinate = getRandomInteger(0, width);
            columnCoordinate = getRandomInteger(0, height);
            block = rowCoordinate + '' + columnCoordinate;
        }

        mineCoordinates.push(block);
        board[block].mine = true;
    }

    return board;
}