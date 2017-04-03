
window.addEventListener("load", function () {
    document.getElementById('tit').className = "hidden"
    document.getElementById("sub").addEventListener("click", loadtable);
}, false);

function loadtable() {
    document.getElementById('tab').innerHTML="";
    let fil = document.getElementById("fil").value
    let col = document.getElementById("col").value
    createArray(fil, col)
}

function createArray(fil, col) {
    var array = [];
    for (var i = 0; i < fil; i++) {
        array[i] = [];
        for (var j = 0; j < col; j++) {
            array[i][j] = (Math.random() * 100 | 0);
        }
    }
    createTable(array)
}
function createTable(array) {
    var table = document.getElementById("tab");
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    array.forEach(function (items) {
        var row = document.createElement("tr");
        items.forEach(function (item) {
            var cell = document.createElement("td");
            cell.textContent = item;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
    document.getElementById('tit').className = "visible";
}