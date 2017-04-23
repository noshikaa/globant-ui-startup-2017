



window.onload = function ()
{

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



  // CLEAR BUTTON CLICK EVENT
  document.getElementById("clearButton").addEventListener("click", function( event ) {
      clear();
    }, false);

    //SAVE BUTTON CLICK EVENT
  document.getElementById("saveButton").addEventListener("click", function( event ) {
      update();
    }, false);

    //TEXT BOX ORIGINAL VALUE REFRESHED ON PAGE LOAD
   database.read();
} 





class DB {
  constructor() {
  }

  //INDEXED DB  METHODS DEFINITION
         
  //GET TEXT FROM DATABASE AND REFRESH IT ON TEXTBOX
 read() 
 {
  
    var transaction = db.transaction(["text"]);
    var objectStore = transaction.objectStore("text");
    var request = objectStore.get("00");
            
    request.onerror = function(event) {
         alert("Unable to retrieve text from database!");
    };
            
    request.onsuccess = function(event) {
    // Do something with the request.result!
    if(request.result) {
         document.getElementById("textBox").value = request.result.text;
    }
               
         else {
            alert("text couldn't be found in database!");
         }
    };
  }


  //Update text value from textbox in DB
 update() {

  var transaction = db.transaction('text', 'readwrite');
  var store = transaction.objectStore('text');
  //var index = store.index('00');
 
    store.openCursor().onsuccess = function(event){
    var cursor = event.target.result;
    var updateData = cursor.value;
    updateData.text = document.getElementById("textBox").value;
    var request = cursor.update(updateData);
    request.onsuccess = function() {
          console.log('Text updated!');
        };
  };

}

//Clear texbox and text entry in DB
 clear() {

  var transaction = db.transaction('text', 'readwrite');
  var store = transaction.objectStore('text');
  //var index = store.index('00');
 
    store.openCursor().onsuccess = function(event){
    var cursor = event.target.result;
    var updateData = cursor.value;
    updateData.text = "";
    var request = cursor.update(updateData);
    request.onsuccess = function() {
          console.log('Text cleared!');
        };
   this.read();
  };

}
  
  
};

//We define the database from DB class
const database = new DB();




//INDEXED DB DEFINITION FOR BROWSER


//prefixes of implementation that we want to test
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
         
//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
         
if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of IndexedDB.")
}
         
const textData = [
      { id: "00", text: "" }
];
var db;
var request = window.indexedDB.open("textDatabase", 1);
         
request.onerror = function(event) {
     console.log("error: ");
};
         
request.onsuccess = function(event) {
      db = request.result;
      console.log("success: "+ db);
};
         
request.onupgradeneeded = function(event) {
     var db = event.target.result;
     var objectStore = db.createObjectStore("text", {keyPath: "id"});
            
     for (var i in textData) {
         objectStore.add(textData[i]);
      }
}






 //UNUSED, read all entries from DB        
function readAll() {
  
      var objectStore = db.transaction("employee").objectStore("employee");
            
      objectStore.openCursor().onsuccess = function(event) {
      var cursor = event.target.result;
               
      if (cursor) {
          alert("Name for id " + cursor.key + " is " + cursor.value.name + ", Age: " + cursor.value.age + ", Email: " + cursor.value.email);
          cursor.continue();
      }
               
      else {
          alert("No more entries!");
      }
  };
}

//UNUSED, add new entrie to DB
function add() {
     var request = db.transaction(["text"], "readwrite")
     .objectStore("text")
     .add({ id: "00", text: document.getElementById("textBox").value });
            
     request.onsuccess = function(event) {
         alert("text has been added to database.");
     };
            
     request.onerror = function(event) {
         alert("Unable to add text in database! ");
     }
}

//UNUSED, remove an entry in DB  
function remove() {
    var request = db.transaction(["text"], "readwrite")
    .objectStore("text")
    .delete("00");
            
    request.onsuccess = function(event) {
    alert("text entry has been removed from your database.");
    };
}




