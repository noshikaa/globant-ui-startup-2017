window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById("hello").className = "";
    }, 1000);
});

function loadJoke() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        document.getElementById("joke").innerHTML = obj.value.joke;
        document.getElementById("j-title").innerHTML= "What a Joke!";
    }
  };
    xhttp.open("GET", "http://api.icndb.com/jokes/random", true);
    xhttp.send();
}

