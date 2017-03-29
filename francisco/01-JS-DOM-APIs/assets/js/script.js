$(document).ready(function(){

  $("#hidden").css("opacity","1");
  $("#hwSection").css("opacity","1");


$("#btn").click(function(){
  var config = { url  : 'http://api.icndb.com/jokes/random' }

  getResponse(config);


});


});

function getResponse (config) {
  return new Promise(function(resolve,request){
    let req = new XMLHttpRequest();
    req.open("GET",config.url);
    req.onload = function() {
      if(req.status === 200){
        resolve(req.response);
      } else {
        reject(new Error(req.statusMsg));
      }
    };

    req.onerror = function() {
      reject(new Error("Network error"));
    };

    req.send();
  });
}
