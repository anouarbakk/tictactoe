let current = 'X';

function tic() {
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', function () {
            if (!this.textContent.trim()) {
                this.innerHTML = `<h1>${current}</h1>`;
                if (checkForWinner()) {
                    displayResult(`Player ${current} won!`);
                    clear();
                }
                 else if (checkIfFull()) {
                    displayResult("It's a draw!");
                    clear();
                }
                 else {
                    current = current === 'X' ? 'O' : 'X';
                }
            }
        });
    }
}

function gameBoard() {
    let container = document.createElement("div");
    container.id = "container"
    let n = [];
    for (let i = 0; i < 9; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "box";
        n.push(newDiv);
    }
    n.forEach(box => {
        container.appendChild(box);
    })
    cont = document.querySelector(".cont");
    cont.appendChild(container);
    return { n };
}

let game = gameBoard();

function createplayer(playerName) {
    let name = playerName;
    let wins = 0;
    const getWins = () => wins;
    const giveWins = () => wins++;
    return { name, getWins, giveWins };
}

function displayResult(message) {
    let result = document.querySelector(".result");
    result.textContent = message;
}

function checkForWinner() {
    let boxes = document.querySelectorAll(".box");
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
        let [a, b, c] = combination;
        if (boxes[a].innerHTML === `<h1>${current}</h1>` &&
            boxes[b].innerHTML === `<h1>${current}</h1>` &&
            boxes[c].innerHTML === `<h1>${current}</h1>`) {
            return true;
        }
    }
    return false;
}
function clear() {
        let boxes = document.querySelectorAll(".box");
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].innerHTML = "";
    }
}
function checkIfFull() {
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML === "") {
            return false;
        }
    }
    return true;
}

tic();
