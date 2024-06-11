const Gameboard = (() => {
    let gameboard = [null] * 9;
    
})();

const createPlayer = (name, mark) => {
    return {
        name,
        mark
    }
}

const Game = (() => {
    let players = [];

    const start = () => {
        players = [{}, {}];
    }
})();