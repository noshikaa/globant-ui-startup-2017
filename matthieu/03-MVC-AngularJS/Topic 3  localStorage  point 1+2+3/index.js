


//DRAG AND DROP A FILE ON TEXTBOX FUNCTION

function handleFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      let files = evt.dataTransfer.files; // FileList object.
      // files is a FileList of File objects. List some properties.
      let reader = new FileReader();

      reader.readAsText(files[0]);

      reader.onload = (function(theFile) {
        return function(e) {
          let innerText = document.getElementById("textBox");
          innerText.innerHTML = e.target.result;
        };
      })(files[0]);
    }



    /*
     * the drag effect 
     * @param {any} evt 
     */

    
    function handleDragOver(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    }
    // Setup the dnd listeners.
    var dropZone = document.getElementById("textBox");
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);


//set localstorage
window.document.onload = function(){
localStorage.setItem("textBox", "");
};


//initial value of textBox
document.getElementById("textBox").value = localStorage.getItem("textBox");


// CLEAR BUTTON
document.getElementById("clearButton").addEventListener("click", function( event ) {
    localStorage.setItem("textBox", "");
    document.getElementById("textBox").value = localStorage.getItem("textBox");
  }, false);

  //SAVE BUTTON
document.getElementById("saveButton").addEventListener("click", function( event ) {
    localStorage.setItem("textBox", document.getElementById("textBox").value);
  }, false);
