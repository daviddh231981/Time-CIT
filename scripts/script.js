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