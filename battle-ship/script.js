// ship factory function
const Ship = (length) => {
    let hits = 0;

    const hit = () => {
        hits++;
    }

    const isSunk = () => {
        return hits === length;
    }

    return {
        hit,
        isSunk,
        length,
    }
}

// Gameboard factory function
const Gameboard = () => {
    // 10 * 10 board
    let board = Array.from(Array(10), () => new Array(10).fill(null));

    const placeShip = () => {
    }
    const receiveAttack = (x, y) => {
        
    }
}

// Player factory function
const Player = () => {
    
}
