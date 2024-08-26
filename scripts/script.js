//Dropdown menu
//when button is selected, show navigation.
function showNav() {

  //NAV variables
  const navShowContents = document.querySelector("nav");
  const btnShowNavigation = document.getElementById("navBtn");

  if (navShowContents.style.display === "block") {
      navShowContents.style.display = "none";
      btnShowNavigation.innerHTML = "Menu"; 
      topFunction();      
  } else {
      navShowContents.style.display = "block"
      btnShowNavigation.innerHTML = "Hide";
  }
}// JavaScript Document

//Bcak To Top
//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 