// Problem Domain :

// Building the game logic for the game Minesweeper. The board is a rectangle and its length and height can be determined by the player. The mines are created at random.

function Block(row, column, mine, surroundingMines) {
    return {
        coordinates: row + '' + column,
        row: row,
        column: column,
        mine: true,
        surroundingMines: surroundingMines,
    }
}