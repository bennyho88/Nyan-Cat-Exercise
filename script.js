

/* document.querySelector("#cat").addEventListener("click", nyanpicture);

function nyanpicture() {
    document.querySelector("#nyanimg")
}

*/ 

document.getElementById("cat").addEventListener("click", myMove );

function myMove() {
    
    var audio = new Audio("Nyan.mp3")
    
    var elem = document.getElementById("nyanimg");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos >= 100) {
        clearInterval(id);
        audio.play();
      } else {
        pos+= 0.1; 
        elem.style.top = pos + '%'; 
        elem.style.left = pos + '%'; 
      }
    }
  }

