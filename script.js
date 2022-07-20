const module = (() => {
    const gameboard = (() => {
        const board = document.querySelector(".gameboard");
        const reset = document.querySelector(".reset");
        let winnerAlert = document.querySelector(".announce-winner");
        let turn = 0;

        let firstPlayerDisplay = document.querySelector(".player1");
        let secondPlayerDisplay = document.querySelector(".player2"); 

        let players = ["Player 1", "Player 2"];

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

        // Set player names
        let playerNames = (() => {
            let firstPlayer = document.querySelector("#player1-name");
            let secondPlayer = document.querySelector("#player2-name");
            let firstPlayerSubmit = document.querySelector(".player1-btn");
            let secondPlayerSubmit = document.querySelector(".player2-btn");

            firstPlayerSubmit.addEventListener('click', () => {
                players[0] = firstPlayer.value;
                firstPlayer.value = "";
                firstPlayerDisplay.textContent = `${players[0]} (x's)`;
            });

            secondPlayerSubmit.addEventListener('click', () => {
                players[1] = secondPlayer.value;
                secondPlayer.value = "";
                secondPlayerDisplay.textContent = `${players[1]} (o's)`;
            })
        })();

        // Creates logic for the game
        const gameLogic = (() => {
            let winner = false;

            for (i = 0; i < squares.length; i++) {
                let move = document.createElement("div");
                move.className = "grid-square";
                move.id = i;

                board.appendChild(move);
                move.innerText = squares[i];

                // Updates the squares[] property at the correlated index of the square clicked
                move.addEventListener('click', (event) => {
                    if (squares[Number(move.id)] != "" || winner == true) {
                        return;
                    } else if (turn % 2 == 0) {
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

                // Resets the grid display and squares[]
                const resetGrid = (() => {
                    reset.addEventListener('click', () => {
                        squares = [
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
        
                        move.innerText = squares[Number(move.id)];
                        winnerAlert.textContent = "";
                        turn = 0;
                    });
                })();
            }

            // Check for a winner of the game
            const gameOver = () => {
                if (squares[0] == "x" && squares[1] == "x" && squares[2] == "x") {
                    winnerAlert.innerText = `${players[0]} Wins!`;
                    winner = true;
                } else if (squares[3] == "x" && squares[4] == "x" && squares[5] == "x") {
                    winnerAlert.innerText = `${players[0]} Wins!`;
                    winner = true;
                } else if (squares[6] == "x" && squares[7] == "x" && squares[8] == "x") {
                    winnerAlert.innerText = `${players[0]} Wins!`;
                    winner = true;
                } else if (squares[0] == "x" && squares[3] == "x" && squares[6] == "x") {
                    winnerAlert.innerText = `${players[0]} Wins!`;
                    winner = true;
                } else if (squares[1] == "x" && squares[4] == "x" && squares[7] == "x") {
                    winnerAlert.innerText = `${players[0]} Wins!`;
                    winner = true;
                } else if (squares[2] == "x" && squares[5] == "x" && squares[8] == "x") {
                    winnerAlert.innerText = `${players[0]} Wins!`;
                    winner = true;
                } else if (squares[0] == "x" && squares[4] == "x" && squares[8] == "x") {
                    winnerAlert.innerText = `${players[0]} Wins!`;
                    winner = true;
                } else if (squares[2] == "x" && squares[4] == "x" && squares[6] == "x") {
                    winnerAlert.innerText = `${players[0]} Wins!`;
                    winner = true;
                } else if (squares[0] == "o" && squares[1] == "o" && squares[2] == "o") {
                    winnerAlert.innerText = `${players[1]} Wins!`;
                    winner = true;
                } else if (squares[3] == "o" && squares[4] == "o" && squares[5] == "o") {
                    winnerAlert.innerText = `${players[1]} Wins!`;
                    winner = true;
                } else if (squares[6] == "o" && squares[7] == "o" && squares[8] == "o") {
                    winnerAlert.innerText = `${players[1]} Wins!`;
                    winner = true;
                } else if (squares[0] == "o" && squares[3] == "o" && squares[6] == "o") {
                    winnerAlert.innerText = `${players[1]} Wins!`;
                    winner = true;
                } else if (squares[1] == "o" && squares[4] == "o" && squares[7] == "o") {
                    winnerAlert.innerText = `${players[1]} Wins!`;
                    winner = true;
                } else if (squares[2] == "o" && squares[5] == "o" && squares[8] == "o") {
                    winnerAlert.innerText = `${players[1]} Wins!`;
                    winner = true;
                } else if (squares[0] == "o" && squares[4] == "o" && squares[8] == "o") {
                    winnerAlert.innerText = `${players[1]} Wins!`;
                    winner = true;
                } else if (squares[2] == "o" && squares[4] == "o" && squares[6] == "o") {
                    winnerAlert.innerText = `${players[1]} Wins!`;
                    winner = true;
                } else if (squares.includes("") == false) {
                    alert("Tie!");
                }
            };
        })();
    })();

    return {
        gameboard: gameboard,
    }
})();