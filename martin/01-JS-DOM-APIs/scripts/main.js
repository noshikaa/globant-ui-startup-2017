
    function go_to_index(){
      window.location.href = 
      "file:///home/steve/Desktop/bootcamp/globant-ui-startup-2017/martin/01-JS-DOM-APIs/index.html";
    }

    function loadXMLDoc(){

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

    
    function get (config) {
      //return a new promise
      return new Promise(
        function (resolve, reject) {
          //do the usual XHR stuff
          let xmlhttp = new XMLHttpRequest();
          xmlhttp.open('GET' , config.url);

          xmlhttp.onload = function () {
            //this is called even on 404 etc
            //so check the status
            if (xmlhttp.status === 200) {
              //resolve the promise with the response text
              resolve(xmlhttp.response);
            } 
            else {
              //otherwise reject with the status text
              //wich will hopefully be a meaningful error
              reject(Error(xmlhttp.statusText));
            }
          };
          //make the request
          xmlhttp.send();
        });
    }

    function reusable_AJAX() {
      let config = {url:"http://api.icndb.com/jokes/random"};

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
    //this is my function build it to "fadein", but i dont know how to manipulate velocity 
    //and timers for the face transition, so i will use CSS3 animations.
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