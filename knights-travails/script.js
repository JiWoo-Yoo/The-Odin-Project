const Knight = () => {
    let position = [null, null];

    const setPosition = (newPosition) => {
        position = newPosition;
    }

    const getPosition = () => position;

    const getPossibleMoves = () => {
        const moveOffset = [(-2, -1), (-1, -2), (1, -2), (2, -1), (2, 1), (1, 2), (-1, 2), (-2, 1)];

        const nowPosition = getPosition();

        const moves = [];
        moveOffset.forEach(([dx, dy]) => {
            const newX = nowPosition[0] + dx;
            const newY = nowPosition[1] + dy;
            moves.push((newX, newY));
        });
        return moves;
    }
    return {
        getPossibleMoves,
        setPosition,
        getPosition,
    }
}

const ChessBoard = (() => {
    let board = [];

    const initBoard = () => {
        for (let i = 0; i < 8; i++) {
            let row = [];
            for (let j = 0; j < 8; j++) {
                row.push(null);
            }
            board.push(row);
        }
    }

    const isMoveValid = (position) => {
        const [x, y] = position;
        return x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y] === null;
    }

    const getPossibleMovesInBoard = (knight) => {
        const possibleMoves = knight.getPossibleMoves();
        return possibleMoves.filter((move) => isMoveValid(move));
    }

    // a지점에서 b지점까지 최소 moves로 이동
    // 최단거리 문제로, BFS를 사용함
    const knightMoves = (start, end, knight) => {
        if(!isMoveValid(start) || !isMoveValid(end)) {
            console.log("Invalid start or end position!");
            return false;
        }
        // queue를 이용한 BFS
        let queue = [[start, [start]]];
        let visited = new Set();
        visited.add(start);
        
        while (queue.lenght > 0) {
            let [now, path] = queue.shift();
            let [x, y] = now;

            if(x === end[0] && y === end[1]) {
                console.log(`you made it in ${path.lenght} moves! Here's your path: `);
                return path;
            }

            knight.setPosition(now);
            const possibleMoves = getPossibleMovesInBoard(knight);

            possibleMoves.forEach(move => {
                if (!visited.has(move)) {
                    visited.add(move);
                    queue.push([move, path.concat([move])]);
                }
            });
        }
        return null;
    }

    const moveKnight = (knight, newPosition) => {
        if (isMoveValid(newPosition)) {
            const [oldX, oldY] = knight.getPosition();
            board[oldX][oldY] = null;
            const [newX, newY] = newPosition;
            board[newX][newY] = knight;
            knight.setPosition(newPosition);
            return true;
        }
        return false;
    }

    const printBoard = () => {
        console.log(board.map(row => row.map(cell => (cell === null ? '.' : cell)).join(' ')).join('\n'));
    };

    return {
        initBoard,
        isMoveValid,
        knightMoves,
        printBoard,
        getPossibleMovesInBoard,
        moveKnight
    }
})();

const knight = Knight();
const chessBoard = ChessBoard;
chessBoard.initBoard();
knight.setPosition([0, 0]);