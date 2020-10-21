
var positionbase = window.scrollY;

window.addEventListener("scroll", function() {
  var scollY = window.scrollY;
  if(scrollY < positionbase) {
    document.getElementById("myHeader").style.top = "0px";
  }else { 
    document.getElementById("myHeader").style.top = "-120px";
  }
  positionbase = scrollY;
});

