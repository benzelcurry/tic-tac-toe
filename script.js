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

        const gameLogic = (() => {
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
                        move.innerText = squares[Number(move.id)];
                        turn++;
                        gameOver();
                    } else {
                        squares.splice(Number(move.id), 1, "o");
                        move.innerText = squares[Number(move.id)];
                        turn++;
                        gameOver();
                    }
                });
            }

            // Check for a winner of the game
            const gameOver = (() => {
                if (squares[0] == "x" && squares[1] == "x" && squares[2] == "x") {
                    alert("Player 1 Wins!");
                } else if (squares[3] == "x" && squares[4] == "x" && squares[5] == "x") {
                    alert("Player 1 Wins!");
                } else if (Object.values(squares)[6] == "x" && Object.values(squares)[7] == "x" && Object.values(squares)[8] == "x") {
                    alert("Player 1 Wins!");
                } else if (squares[0] == "x" && squares[4] == "x" && squares[8] == "x") {
                    alert("Player 1 Wins!");
                } else if (squares[2] == "x" && squares[4] == "x" && squares[6] == "x") {
                    alert("Player 1 Wins!");
                } else if (squares[0] == "o" && squares[1] == "o" && squares[2] == "o") {
                    alert("Player 2 Wins!");
                } else if (squares[3] == "o" && squares[4] == "o" && squares[5] == "o") {
                    alert("Player 2 Wins!");
                } else if (squares[6] == "o" && squares[7] == "o" && squares[8] == "o") {
                    alert("Player 2 Wins!");
                } else if (squares[0] == "o" && squares[4] == "o" && squares[8] == "o") {
                    alert("Player 2 Wins!");
                } else if (squares[2] == "o" && squares[4] == "o" && squares[6] == "o") {
                    alert("Player 2 Wins!");
                }
            });
        })();

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