const module = (() => {
    const gameboard = (() => {
        const board = document.querySelector(".gameboard");

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
                squares.splice(Number(move.id), 1, "x");
                move.innerText = Object.values(squares)[Number(move.id)];
                console.log(squares);
            });
        }
    })();

    return {
        gameboard: gameboard,
    }
})();