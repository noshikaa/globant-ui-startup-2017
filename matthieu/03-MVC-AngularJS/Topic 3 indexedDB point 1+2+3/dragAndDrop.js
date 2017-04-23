
  function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.
    // files is a FileList of File objects. List some properties.
    var read = new FileReader();

    //at the end of the file load, we put the text value in textbox
    read.onloadend = function(){
       document.getElementById("textBox").value = read.result;
    }

    //in case we have multiple files
    for (var i = 0, f; f = files[i]; i++) {
    read.readAsBinaryString(f);
    }
    
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  // Setup the dnd listeners.
  var dropZone = document.getElementById('textBox');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);