/*

document.getElementById("cat").addEventListener("click", myMove );

function myMove() {
    document.body.style.backgroundImage = "url('background.png')";
    var audio = new Audio("Nyan.mp3")
    audio.play();
    
    var elem = document.getElementById("nyanimg");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos >= 100) {
        clearInterval(id);
        
      } else {
        pos+= 0.1; 
        elem.style.top = pos + '%'; 
        elem.style.left = pos + '%'; 
        
      }
    }

  }
*/

  document.getElementById("cat").addEventListener("click", myMove);

  function myMove() {
    document.getElementById("cat").style.display = "none";
    var backgroundI = document.body.style.backgroundImage = "url('background.png')";
    var audio = new Audio("Nyan.mp3");
    audio.play();

    var elem = document.getElementById("nyanimg");
    var pos = 0;
    var id = setInterval(frame, 10);
   
    function frame() {
      if (pos >= 100) {
        clearInterval(id);

        audio.pause();
        document.getElementById("background-image").style.backgroundImage = "none";
        document.getElementById("cat").style.display = "block";
     
      } else {
        pos+= 0.1;
        elem.style.top = pos + "%";
        elem.style.left = pos + "%";
       
      }
    }
    
    
  }

