window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById("hello").className = "";
    }, 1000);
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
    loadJoke(config).then(function(response) {
        var obj = JSON.parse(response);
        /* Restart the color back to black */
        document.getElementById("joke").style.color = "#000000";
        document.getElementById("j-title").style.color = "#000000";

        if (config.url == 'http://api.icndb.com/jokes/random') {
            document.getElementById("joke").innerHTML = obj.value.joke;
            document.getElementById("j-title").innerHTML= "What a Joke!";
        } else if (config.url == "https://api.github.com/search/repositories?q='JavaScript'"){
            for (var i = 0; i < obj.items.length; i++) {
                document.getElementById("list").innerHTML += "<li>" + obj.items[i].full_name + "</li>";
            }
            document.getElementById("j-title").innerHTML= "Look at Right!";
            document.getElementById("joke").innerHTML = "------>";
        } else {
            document.getElementById("j-title").innerHTML= "This is what i've got";
            document.getElementById("joke").innerHTML = obj;            
        }
    }, function(error) {
        document.getElementById("joke").innerHTML = error;
        document.getElementById("joke").style.color = "#FF0000";
        document.getElementById("j-title").innerHTML = "Something went WRONG!";
        document.getElementById("j-title").style.color = "#FF0000";
    })
}

function totable(matrix) {
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
  document.getElementById("newTable").appendChild(table);
}

var matrix = [
    ['hola','como','te','va'],
    [1, 2, 3, 4],
    ['cada', 'array', 'es', 'una'],
    ['nueva', 'columna',',re','loco']
];  

totable(matrix);

function showme() {
    document.getElementById("newTable").className = "";
}

