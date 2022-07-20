const module = (() => {
    const gameboard = (() => {
        const board = document.querySelector(".gameboard");
        let turn = 0;

        let squares = [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ]

        for (i = 0; i < Object.keys(squares).length; i++) {
            let move = document.createElement("div");
            move.className = "grid-square";
            move.id = i;

            board.appendChild(move);
            move.innerText = Object.keys(squares)[i];

            // Updates the squares[] property at the correlated index of the square clicked
            move.addEventListener('click', (event) => {
                if (turn % 2 == 0) {
                    squares.splice(Number(move.id), 1, "x");
                    move.innerText = Object.values(squares)[Number(move.id)];
                    turn++;
                    console.log(squares)
                } else {
                    squares.splice(Number(move.id), 1, "o");
                    move.innerText = Object.values(squares)[Number(move.id)];
                    turn++;
                    console.log(squares)
                }
            });
        }

        return squares;
    })();

    const player = (name) => {
        return name;
    }

    const player1 = player('ben');
    const player2 = player('sam');

    return {
        gameboard: gameboard,
    }
})();