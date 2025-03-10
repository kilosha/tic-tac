let cells = document.querySelectorAll("#field td");

function start(cells) {
    let i = 0;

    cells.forEach(cell => cell.addEventListener("click", function step() {
        this.textContent = i % 2 ? "O" : "X";
        this.classList.add(i % 2 ? "O" : "X");
        i++;

        if (isVictory()) {
            setTimeout(function () {
                alert(`Победа ${cell.textContent}`);
                resetValues();
            }, 0);
        } else if (i === 9) {
            setTimeout(function () {
                alert(`Ничья`);
            }, 0);
        }

        this.removeEventListener('click', step);
    }));
}

function isVictory() {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let comb of combs) {
        if (
            cells[comb[0]].textContent === cells[comb[1]].textContent &&
            cells[comb[1]].textContent === cells[comb[2]].textContent &&
            cells[comb[0]].textContent
        ) {
            return true;
        }
    }

    return false;
}

function resetValues() {
    cells.forEach(cell => cell.textContent = "");
}

start(cells);