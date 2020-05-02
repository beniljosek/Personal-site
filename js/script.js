window.onresize = autoResizeDiv;
autoResizeDiv();
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
var x=document.getElementsByClassName("clr");
var l=x.length
var y=document.getElementsByClassName("btclr");
console.log(x);
console.log(l);
function myFunction() {
  if (window.pageYOffset > sticky) {
    
    header.classList.add("stick");
    for(var i=0;i<l;i++){
      if(i<3)
      y[i].style.backgroundColor="black";
      x[i].style.color="black";
      
    }
   
    
  } else {
    header.classList.remove("stick");
    for(var i=0;i<l;i++){
      if(i<3)
      y[i].style.backgroundColor="white";
      x[i].style.color="white"
    }
    
    
      
    
    
    
  }
}

function autoResizeDiv() {
  document.getElementById('main').style.height = window.innerHeight + 'px';
}

