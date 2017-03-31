const config = {
  // url: "http://api.icndb.com/jokes/random",
  url: "",
  method: "GET",
  q: ""
};

function fadeIn() {
  document.getElementById("fade").style.opacity = 1;
}
window.onload = fadeIn;

function responsePromise(config) {
  config.url="http://api.icndb.com/jokes/random"
  return new Promise(function(resolve, reject) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(config.method, config.url, true);
    // xhttp.onreadystatechange = function() {
    //The correct way is to use .onload and not onreadystatechange
    // console.log(xhttp.status);
    // console.log(xhttp.readyState);
    xhttp.onload = function() {
      if (this.readyState == 4 && xhttp.status == 200) { // Typical action to be performed when the document is ready:
        resolve(xhttp.response);
        //  console.log(xhttp.response);
      } else {
        reject(Error(xhttp.statusText));
        // console.log(xhttp.statusText);
      }
    };
    xhttp.onerror = function() {
      reject(Error("Network Error"));
    };
    xhttp.send();
  });
}

function responseGit() {
  config.url = "https://api.github.com/search/repositories?q="
  config.q = document.getElementById("txtSearch").value;
  let xhttp = new XMLHttpRequest();
  xhttp.open(config.method, config.url + config.q, true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { // Typical action to be performed when the document is ready:
      let json = JSON.parse(xhttp.responseText);
      // console.log(json.items[29].full_name);
      console.log(json.items.length);
      //iterate through all json
      // for (let i in json) {
      //   console.log(json.items[i].full_name);
      //   document.getElementById('fade').innerHTML = json.items[i].full_name;
      // }
      document.getElementById("list").innerHTML = "";
      for (i = 0; i < json.items.length; i++) {
        //apend li
        let ul = document.getElementById("list");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(json.items[i].full_name));
        ul.appendChild(li);
        // document.getElementById("list").innerHTML = ul;
      }
    }
  };

  xhttp.send();
}

function promiseMe() {
  responsePromise(config).then(function(response) {
    // console.log("Success!", response);
    const getJoke = JSON.parse(response);
    document.getElementById("fade").innerHTML = getJoke.value.joke;
  }, function(error) {
    // console.error("Failed!", error);
    document.getElementById("fade").style.color = "#ff0000";
  });
}
