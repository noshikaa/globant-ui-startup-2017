window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById("hello").className = "";
    }, 1000);
    document.getElementById("promises").addEventListener('click', some);
    document.getElementById("table").addEventListener('click', matrixGenerate);
});

function loadJoke(config) {
    /*Return a new promise*/
    return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.open(config.method, config.url, config.async);
        
        xhttp.onload = function() {
            if (xhttp.status == 200) {
                resolve(xhttp.response);
            } else {
                reject(Error(xhttp.statusText));   
            }
        };

        /* Handle network error */
        xhttp.onerror = function() {
            reject(Error("Network Error"));
        };

        /* Make the request */
        xhttp.send();
    });
}

function some() {
    var dir = document.getElementById("url").value;
    var config = {
        method: 'GET',
        url: dir,
        async: true,
        param: null
    };
    var id_text = "joke";
    var id_title = "j-title";
    var text = document.getElementById(id_text);
    var title = document.getElementById(id_title);

    loadJoke(config).
    then(function(response) {
        var obj = JSON.parse(response);
        /* Reset color */
        if (hasClass("content", "red")) {
            removeClass("content", "red");
            addClass("content", "black");
        }
        if (config.url == 'http://api.icndb.com/jokes/random') {
            title.innerHTML = "What a Joke!";
            text.innerHTML = obj.value.joke;
        } else if (config.url == "https://api.github.com/search/repositories?q='JavaScript'"){
            for (var i = 0; i < obj.items.length; i++) {
                document.getElementById("list").innerHTML += "<li>" + obj.items[i].full_name + "</li>";
            }
            title.innerHTML = "Look at Right!";
            text.innerHTML = "------>";
        } else {
            title.innerHTML = "This is what i've got";
            text.innerHTML = obj;            
        }
    },
    function(error) {
        text.innerHTML = error;
        title.innerHTML = "Something went WRONG!";
        if (hasClass("content", "black")) {
            removeClass("content", "black");
        }
        addClass("content","red");
    })
}

function rand(max) {
    return Math.floor((Math.random() * max) + 1)
}

function matrixGenerate() {
    var cols = rand(7);
    var rows = rand(7);
    var matrix = [];
    var temp;
    for (var i=0; i<rows; i++) {
    temp = [];
        for (var j=0; j<cols; j++) {
            temp.push(rand(100));
        }
        matrix.push(temp);
    }
    totable(matrix);
}

function totable(matrix) {
    var newTable = document.getElementById("newTable");
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    matrix.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
    });

    tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    if (newTable.innerHTML != "") {
        newTable.innerHTML = "";
    }
    newTable.appendChild(table);
    removeClass("newTable", "hide");
}


/* Class Functions */

function addClass(idobj, classname) {
    document.getElementById(idobj).className = classname;
}

function removeClass(idobj, classname) {
    var obj = document.getElementById(idobj);
    obj.classList.remove(classname);
}

function hasClass(idobj, classname) {
    var obj = document.getElementById(idobj);
    return obj.classList.contains(classname);    
}