export function calculateWinner(board) {
    const possibleWineSquares = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];

    for (let i = 0; i < possibleWineSquares.length; i++) {
        const [a, b, c] = possibleWineSquares[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]
        }
    }
    return null;
}