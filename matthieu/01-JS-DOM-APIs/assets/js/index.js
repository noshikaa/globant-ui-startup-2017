

$( document ).ready(function() {
  $("section").css("opacity","1");
  $(".hidden").css("opacity","1");
});

https://api.github.com/search/repositories


function button1click()
{
  let config = {url:"http://api.icndb.com/jokes/random", mimetype:"text/plain; charset=x-user-defined"};
$("section").empty();

    get(config).then(function(response) {
  console.log("Success!", response);
    let obj = $.parseJSON(response);
      $("section").append( "<p>"+obj.value.joke+"</p>" );
      $("section").css("color","black");
      
}, function(error) {
  console.error("Failed!", error);
  $("section").append( "<p>Error!</p>" );
  $("section").css("color","red");

})
 
}


function button2click()
{
  let config = {url:"https://api.github.com/search/repositories?q=\""+$('#search').val()+"\"", mimetype:"text/plain; charset=x-user-defined"};
   $("section").empty();
   
    get(config).then(function(response) {
  console.log("Success!");
    let obj = $.parseJSON(response);
     //console.log(obj.items[0].full_name);
$("#list").empty();
for (let index = 0; index < obj.items.length; ++index) {
    let value = obj.items[index].full_name;
    console.log(value);
    $("#list").append("<li>"+value+"</li>");
}
      
      
}, function(error) {
  console.error("Failed!", error);
  $("section").append( "<p>No result!</p>" );
  $("section").css("color","black");

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

