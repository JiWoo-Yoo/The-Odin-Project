// console 화면 출력을 위한 작업
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Gameboard 객체 - 게임 보드 관리, 보드 상태 저장 및 업데이트
// IIFE로 생성 - 외부에서 메서드를 통해서만 접근 가능 / 모듈패턴 / 단일인스턴스생성
const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => gameboard;

    const setCell = (index, marker) => {
        if(gameboard[index] === "") {
            gameboard[index] = marker;
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        let gameboard = ["", "", "", "", "", "", "", "", ""];
    };

    return { getBoard, setCell, resetBoard };
})();

// factory function - 플레이어 객체를 생성해줌
const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}

// GameController 객체 - 게임 흐름 관리
// IIFE로 생성 - 외부에서 메서드를 통해서만 접근 가능 / 모듈패턴 / 단일인스턴스생성
const GameController = (() => {
    const player1 = createPlayer("Player 1", "O");
    const player2 = createPlayer("Player 2", "X");
    let currentPlayer = player1;
    let gameOver = false;

    const switchPlayer = () => {
        currentPlayer = (currentPlayer === player1) ? player2 : player1;
    }

    const getCurrentPlayer = () => currentPlayer;

    const checkWin = () => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        const board = Gameboard.getBoard();
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if(board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true;
            }
        }
        return false;
    }

    const checkDraw = () => {
        // 모든 cell이 찼으면 무승부
        return Gameboard.getBoard().every(cell => cell !== "");
    }

    const playRound = (index) => {
        if (gameOver) return;
        if (Gameboard.setCell(index, currentPlayer.mark)) {
            if(checkWin()) {
                console.log(`${currentPlayer.name} Wins!`);
                gameOver = true;
            } else if(checkDraw()) {
                console.log("Draw!");
                gameOver = true;
            } else {
                switchPlayer();
            }
            DisplayController.render();
        }
    };;

    const resetGame = () => {
        Gameboard.resetBoard();
        currentPlayer = player1;
        gameOver = false;
        console.log("Game reset.");
        DisplayController.render();
    };

    const isGameOver = () => {
        if (gameOver) return true;
        else return false;
    }

    return {playRound, resetGame, isGameOver, getCurrentPlayer};

})();

const DisplayController = (function() {
    const render = () => {
      const board = Gameboard.getBoard();
      console.log(`
        ${board[0] || " "} | ${board[1] || " "} | ${board[2] || " "}
        -----------
        ${board[3] || " "} | ${board[4] || " "} | ${board[5] || " "}
        -----------
        ${board[6] || " "} | ${board[7] || " "} | ${board[8] || " "}
      `);
    };
    return { render };
  })();

const askForMove = () => {
    rl.question(`Enter your move (1-9), ${GameController.getCurrentPlayer().name}: `, (answer) => {
      const index = parseInt(answer) - 1;
      if (!isNaN(index) && index >= 0 && index <= 8) {
        GameController.playRound(index);
        if (!GameController.isGameOver()) {
          askForMove();
        } else {
          rl.close();
        }
      } else {
        console.log("Invalid input! Please enter a number between 1 and 9.");
        askForMove();
      }
    });
  };

GameController.resetGame();
askForMove();
