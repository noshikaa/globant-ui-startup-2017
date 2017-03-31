window.onload = function(){			
				document.getElementById("btnMat").addEventListener("click", createMatrix);
			}

let createMatrix = function(){
	let rows = document.getElementById("rows").value;
	let cols = document.getElementById("cols").value;
	let maxVal = document.getElementById("maxVal").value;	
	var arr = [];
	for(var i=0; i < rows; i++){      
    	arr.push([]);					// Creates an empty line
		arr[i].push( new Array(cols));		// Adds cols to the empty line
	    for(var j=0; j < cols; j++){	      
	        arr[i][j] = Math.round(Math.random() * maxVal);	  // Initializes
	    }
  	}
	console.log(arr);
	toTable(arr);

}

let toTable = function(arr){
	console.log("entro")
	//let arr = [[11111,2],[3,4], [5,6]];
	let table = document.getElementById("table");	
	for (var i = 0; i < arr.length; i++) {
		let row = document.createElement("tr");
		for (var j = 0; j < arr[1].length; j++) {
			let td = document.createElement("td");
			let data = document.createTextNode(arr[i][j]);
			td.appendChild(data);
			row.appendChild(td);
		}
		table.appendChild(row);
	}
}

