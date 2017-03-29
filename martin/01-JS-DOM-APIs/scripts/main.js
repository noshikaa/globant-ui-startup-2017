
    function go_to_index(){
      window.location.href = 
      "file:///home/steve/Desktop/bootcamp/globant-ui-startup-2017/martin/01-JS-DOM-APIs/index.html";
    }

    function loadXMLDoc(){

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("joke").innerHTML =
          this.responseText;
        }
      };
      xmlhttp.open("GET", "http://api.icndb.com/jokes/random", true);
      xmlhttp.send();
    }
    //this is my function build it to "fadein", but i dont know how to manipulate velocity 
    //and timers for the face transition, so i will use CSS3 animations.
    /*function fadeIn(){
      let la = 0;
      while((la += 0.1) < 1){
        document.getElementById("fade_in").style.opacity = la;
      }
    }*/