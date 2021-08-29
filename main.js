
var reasons = [
    "Me",
    "Grandfather",
    "Grandmother",
    "Dad",
    "Mom",
    "Brother",
  
  ];
  var images = [
   "me.jpg",
    "grandfather.png",
    "grandmother.png",
    "dad.png",
    "mom.png",
    "brother.png"
  ];
  
  var i = 0;
  function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
                        document.getElementById("audio").play();
   
  }
  
  
  
  