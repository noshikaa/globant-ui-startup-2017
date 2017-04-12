

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

  

  //we create the event for the matrix button button click
  document.getElementById("matrixbutton").addEventListener("click", matrixbuttonclick);
  
  });

function matrixbuttonclick()
{
    let matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

    insertmatrix(matrix);
}


function insertmatrix(matrix)
{
  let dimentions = [ matrix.length, matrix[0].length ]; // dimentions[0] -> Y, dimentions[1] -> X
  

  if((dimentions[0] == 0) || (dimentions[1] == 0)) return;
  else
  {
    
    newtable = document.createElement('table');
    // Create an empty <tr> element and add it to the 1st position of the table:
    newtable.insertRow(0);

    for ( let y=0; y<dimentions[0]; y++ ) 
    {
      let row = newtable.insertRow(y);
      for ( let x=0; x<dimentions[1]; x++ ) 
      {
         let cell = row.insertCell(x);
         cell.innerText = matrix[y][x];
      }
    }
   document.getElementById("matrix").appendChild(newtable);
  }


 
}