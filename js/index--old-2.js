// Vanilla JS Implementation of jQuery in Kevin Powell's YouTube Video
// GRMA https://stackoverflow.com/questions/53539461/how-do-i-use-vanilla-javascript-to-write-a-toggle-function-i-wrote-in-jquery //

const elementClicked1 = document.getElementById("bilingual_icon-valery_quote");
const elementYouWantToShow1 = document.getElementById("valery_quote--francais");
const elementYouWantToHide1 = document.getElementById("valery_quote--english");

// Show Valery Quote In French when Bilingual Icon is clicked.  

elementClicked1.addEventListener("click", ()=>{
  elementClicked1.classList.toggle("rotate_180")
  elementYouWantToShow1.classList.toggle("bilingual_text--toggle");
  console.log("French quote toggled.");
  elementYouWantToHide1.classList.toggle("bilingual_text--toggle");
  console.log("English quote toggled.");
});

const elementClicked2 = document.getElementById("bilingual_icon-hello");
const elementYouWantToShow2 = document.getElementById("hi--gaeilge");
const elementYouWantToHide2 = document.getElementById("hi--english");

// Show Valery Quote In French when Bilingual Icon is clicked.  

elementClicked2.addEventListener("click", ()=>{
  elementClicked2.classList.toggle("rotate_180")
  elementYouWantToShow2.classList.toggle("bilingual_text--toggle");
  console.log("English hi toggled.");
  elementYouWantToHide2.classList.toggle("bilingual_text--toggle");
  console.log("Irish hi toggled.");
});
