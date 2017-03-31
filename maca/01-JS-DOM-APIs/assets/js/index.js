let config = {
					"method": "",
					"url": "",
					"q": "", 
				}



window.onload = function(){			
			document.getElementById('hidden').style.opacity = 1;
			document.getElementById("btn").addEventListener("click", getJoke2);
			document.getElementById("btn2").addEventListener("click", getNames);
		}

getJoke = function(){
		let req = new XMLHttpRequest();
		req.open('GET', "http://api.icndb.com/jokes/random", true);
		req.onload = function () {
	        	if(req.readyState === XMLHttpRequest.DONE && req.status === 200) {
	        		let jsonResp = JSON.parse(req.responseText);
	        		document.getElementById('hidden').innerHTML = jsonResp.value.joke;
	        		document.getElementById('hidden').style.background = "red"		            
	        }
	    };
		req.send();
};

promiseFunct = function(config){
	let prom = new Promise(function(resolve, reject){
		let req = new XMLHttpRequest();
		req.open(config.method, config.url);
		req.onload = function(){
			if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
				resolve(req.response)
			}
			else{
				reject(Error(req.statusText));
			}
		};

		 // Handle network errors
		req.onerror = function() {
			reject(Error("Network Error"));
		};

		req.send();
	});

	return prom;
};

getJoke2 = function(){
	config.method = "GET";
	config.url = "http://api.icndb.com/jokes/random";
	promiseFunct(config)
		.then(function(response){			
			let jsonResp = JSON.parse(response);
			document.getElementById('hidden').innerHTML = jsonResp.value.joke;
	        document.getElementById('hidden').style.background = "#66ffcc";
		})
		.catch(function(error) {
			console.error("Failed!", error);
			document.getElementById('hidden').innerHTML = "ERROR!";
	        document.getElementById('hidden').style.background = "red";
		})
};

getNames = function(){	
	config.method = "GET";
	config.q = document.getElementById('q').value;
	config.url = "https://api.github.com/search/repositories?q="+config.q;
	promiseFunct(config)
	.then(function(response){
		list = document.getElementById('list');
		respJson = JSON.parse(response);
		for (var obj in respJson.items){
			let li = document.createElement("li");
			let text = document.createTextNode(respJson.items[obj].full_name);
			li.appendChild(text);
			list.appendChild(li);
        /*    list.innerHTML += "<li>" + respJson.items[obj].full_name + "</li> <br>";*/
            }
        list.style.borderColor = "#33bbff";
  		list.style.borderStyle = "dashed"; 
	})
	.catch(function(error) {
		console.error("Failed!", error);	  				
  	})		
					
};

