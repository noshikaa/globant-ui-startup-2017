function go_to_index() {
    window.location.href =
        "file:///home/steve/Desktop/bootcamp/globant-ui-startup-2017/martin/01-JS-DOM-APIs/index.html";
}

function loadXMLDoc() {

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            myObj = JSON.parse(this.responseText);
            document.getElementById("joke").innerHTML = myObj.value.joke;
        }
    };
    xmlhttp.open("GET", "http://api.icndb.com/jokes/random", true);
    xmlhttp.send();
}


function get(config) {
    //return a new promise
    return new Promise(
        function(resolve, reject) {
            //do the usual XHR stuff
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open('GET', config.url);

            xmlhttp.onload = function() {
                //this is called even on 404 etc
                //so check the status
                if (xmlhttp.status === 200) {
                    //resolve the promise with the response text
                    resolve(xmlhttp.response);
                } else {
                    //otherwise reject with the status text
                    //wich will hopefully be a meaningful error
                    reject(Error(xmlhttp.statusText));
                }
            };
            //make the request
            xmlhttp.send();
        });
}

function promise_joke() {
    let config = { url: "http://api.icndb.com/jokes/random" };

    get(config)
        //if promise is resolved
        .then(
            function(response) {
                console.log("Success!, response");
                //make the parse of response
                let obj = JSON.parse(response);
                //change content with the .joke value
                document.getElementById("joke").innerHTML = obj.value.joke;
            })
        //or rejected
        .catch(
            function(error) {
                console.error("Failed!", error);
                //red color of warning
                document.getElementById("joke").innerHTML = "Error!";
                document.getElementById("joke").style.color = "red";
            }
        )
}

function load_9() {
    let config = { url: "https://api.github.com/search/repositories?q=JavaScript" };
    get(config)
        //if promise is resolved
        .then(
            function(response) {
                console.log("Success!, response");
                //make the parse of response
                let obj = JSON.parse(response);
                //run all the items array searching for full_name info
                const ul = document.getElementById("full_name_list");
                for (let i = 0; i < obj.items.length; i++) {
                    let li = document.createElement("li");
                    let value = li.appendChild(document.createTextNode(obj.items[i].full_name));
                    console.log(value);
                    ul.appendChild(li);
                    //this adds new 'li' to the 'ul' in the index.html
                }

            })
        //or rejected
        .catch(
            function(error) {
                console.error("Failed!", error);
            }
        )
}

function exercise_10() {
    //this is extracted from "how to => Filter List" by W3schools
    let input = document.getElementById("my_input");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("full_name_list");
    let li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
//the idea is that the matrix entered can be sorted or manipulated in a way we can extract the information
///about the table itself, like matrix.th give us the head of the table(or an array of it).
function insert_table(matrix) {
    let table = document.createElement("table");

}
/*this is an example of a table we want to create.
  <table>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </table>*/
//this is my function build it to "fadein", but i dont know how to manipulate velocity, speeds 
//and/or timers for the fade transition, so i will use CSS3 animations.

//fetch for delay and transition CCs3
/*function fadeIn(){
  let la = 0;
  while((la += 0.1) < 1){
    document.getElementById("fade_in").style.opacity = la;
  }
}*/
/*function fadeIn() {
   document.getElementById("joke").style.opacity = 1;
}*/