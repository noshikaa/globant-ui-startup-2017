



 document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

  //middle section is set to visible
  document.getElementById("middlesection").classList.remove('hiddensection');
  document.getElementById("middlesection").classList.add('visiblesection');

  //middle text is set to visible
  document.getElementById("middletext").classList.remove('hidden');
  document.getElementById("middletext").classList.add('visible');

  //we create the event for the Chuck Norris button click
  document.getElementById("chucknorrisbutton").addEventListener("click", chucknorrisbuttonclick);
  //we create the event for the search button
  document.getElementById("searchbutton").addEventListener("click", searchbuttonclick);

  });

  


function chucknorrisbuttonclick(){
  let config = {url:"http://api.icndb.com/jokes/random", mimetype:"text/plain; charset=x-user-defined"};


 document.getElementById("middlesection").innerHTML = "";

    get(config).then(function(response) {
  console.log("Success!", response);
    let obj = JSON.parse(response);

    var node = document.createElement("p");                   // creat <p> node
    var textnode = document.createTextNode(obj.value.joke);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    node.classList.add('black');
    document.getElementById("middlesection").appendChild(node);     
      
}, function(error) {
  console.error("Failed!", error);

    var node = document.createElement("p");                   // creat <p> node
    var textnode = document.createTextNode("Error!");         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    node.classList.add('red');
    document.getElementById("middlesection").appendChild(node);     
})
 
}


function searchbuttonclick(){
  let config = {url:"https://api.github.com/search/repositories?q=\""+document.getElementById('search').value+"\"", mimetype:"text/plain; charset=x-user-defined"};

   document.getElementById("middlesection").innerHTML = "";

    get(config).then(function(response) {
  console.log("Success!");
    let obj = JSON.parse(response);
     
    document.getElementById("resultlist").innerHTML = "";
    for (let index = 0; index < obj.items.length; ++index) {
    let value = obj.items[index].full_name;
    console.log(value);

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(value);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("resultlist").appendChild(node);     // Append <li> to <ul> with id="myList"
}
      
      
}, function(error) {

    var node = document.createElement("p");                   // creat <p> node
    var textnode = document.createTextNode("No result!");         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    node.classList.add('red');
    document.getElementById("middlesection").appendChild(node);     

})
 
}




function get(config) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', config.url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
       console.log( req.status);
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();

  });

}

  