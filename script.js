const module = (() => {
    const gameboard = (() => {
        const board = document.querySelector(".gameboard");

        const squares = {
            square1: "x",
            square2: "o",
            square3: "x",
            square4: "o",
            square5: "x",
            square6: "o",
            square7: "x",
            square8: "o",
            square9: "x",
        }

        for (i = 0; i < Object.keys(squares).length; i++) {
            let move = document.createElement("div");
            move.className = "grid-square";

            board.appendChild(move);
            move.innerText = Object.values(squares)[i];
        }
    })();

    return {
        gameboard: gameboard,
    }
})();