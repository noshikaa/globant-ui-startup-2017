

function makesectionappear()
{
    $("section").css("opacity","1");
  
}



function button1click()
{
    var config = {url:"http://api.icndb.com/jokes/random", mimetype:"text/plain; charset=x-user-defined"};
   // httpGet(config);
    serverrequesttext(config);
}








function serverrequesttext(config)
{
   $.ajax({
  url: config.url,
  beforeSend: function( xhr ) {
    xhr.overrideMimeType( config.mimetype );
  }
})
  .done(function( data ) {
    if ( console && console.log ) 
    {
      $("section").append( "<p>"+data+"</p>" );
      console.log( "Sample of data:", data );
    }
  });
}



function ajax(options)
{
  return new Promise(function (resolve, reject) {
    $.ajax(options).done(resolve).fail(reject);
  });
}




function httpGet(config) 
{
  

   
}

