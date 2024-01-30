var numSelected = null;
var tileSelected = null;

var errors = 0

var board = [
    "2-5--9--4",
    "------3-7",
    "7--856-1-",
    "45-7-----",
    "--9---1--",
    "-----2-85",
    "-2-418--6",
    "6-8------",
    "1--2--7-8"
]

var solution = [
    "215379864",
    "986124357",
    "734856219",
    "452781693",
    "869543172",
    "371692485",
    "527418936",
    "648937521",
    "193265748"
]

window.onload = function() {
    setup();
}

function setup() {
    for (let i = 1; i<=9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("beginning-tile");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("row-line")
            }
            if (c == 2 || c == 5) {
                tile.classList.add("column-line")
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected")
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        let coordinates = this.id.split("-");
        let r = parseInt(coordinates[0]);
        let c = parseInt(coordinates[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}