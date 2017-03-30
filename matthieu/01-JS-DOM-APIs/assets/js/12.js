

/*

 nouveauDiv = document.createElement("div");
  nouveauDiv.innerHTML = "<h1>Salutations !</h1>";

  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  mon_div = document.getElementById("org_div1");
  document.body.insertBefore(nouveauDiv, mon_div);

  */

  /*

  function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

*/

function button1click()
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
  let htmltable = "";

  if((dimentions[0] == 0) || (dimentions[1] == 0)) return;
  else
  {
    newtable = document.createElement("table");
    
    htmltable += "<table border=\"1\">";

      for ( let y=0; y<dimentions[0]; y++ ) 
      {
        htmltable += "<tr>";
        for ( let x=0; x<dimentions[1]; x++ ) 
        { 
            htmltable += "<th>";
            htmltable += matrix[y][x];
            htmltable += "</th>";
        }
        htmltable += "</tr>";
      }
      htmltable += "</table>";
  }

  




  newtable.innerHTML = htmltable;

  // ajoute l'élément qui vient d'être créé et son contenu au DOM
  section = document.getElementById("sec");
  document.body.insertBefore(newtable, section);
 
}