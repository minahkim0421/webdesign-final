let arrayList = ['1. knit', '2. run', '3. swim', '4. pat your cat, if you have one', '5. clean your room', '6. read a book', '7. open the window and feel the breeze', '8. scream, silently.', '9. go to the gym', '10. call your friend', ' 11. play a guitar', '12. talk to yourself', '13. juggle with your cups', '14. play wordle', '15. dance like it is the last night on earth', '16. play tic-tac-toe by yourself', '17. draw something', '18. play a piano. garageband also counts.', '19. ride a bike', '20. dig', '21. sip a cup of coffee', '22. write a letter', '23. finish your journal', '24. listen to music', '25. dress up', '26. count the people on the street', '27. compose music', '28. sing like it is the last night on earth']

// randomly choosing a text output from arrayList
function randomText(id) {
  var element = document.querySelector(id);
  var randomIndex = Math.floor(Math.random() * arrayList.length);

  element.innerText = "( " + arrayList[randomIndex] + " )";
}

// random scattering of text (text style transformation)
function scatter(id) {
  var element = document.querySelector(id);

  element.style.letterSpacing = Math.random()*100 + "px";
  element.style.fontSize = Math.random()*100 + "px";

  //element.style.transform = `rotate(${Math.random()*180}deg)`;
}

// counting the time user spent on page
setInterval(incrementSeconds, 1000);
var seconds = 0;
var secondTracker = document.getElementById('seconds');

function incrementSeconds() {
  seconds += 1;
  secondTracker.innerText = seconds + " seconds.";
}

// displaying type input on screen, in the container box
function f() {
  var t = document.getElementById("inputtext").value;
  document.getElementById("outputtext").innerHTML = t;
}

// making collapsible button: borrowed from w3schools
var menu_content = document.getElementsByClassName("menu");
var i;

for (i = 0; i < menu_content.length; i++) {
  menu_content[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

