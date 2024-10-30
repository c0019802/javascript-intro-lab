console.info("hello from the file");
document.getElementById("myHeading").innerHTML = "Lubna";
document.querySelector("nav ul li").setAttribute("class", "currentPage");
document.querySelector("nav ul li a").setAttribute("href", "http://www.google.co.uk");
let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);
for (let i = 0; i < colourButtons.length; i++) {
    colourButtons[i].addEventListener("click", changeColour);
}

function changeColour(ev) {
    console.info(ev.target.classlist[0]);
    let colourClass = ev.target.classlist[0] + "back";
    document.body.setAttribute("class", colourClass);
}



document.getElementById("myTestBtn").addEventListener("click", function() {
    console.info('Hi i was clicked');
  });

  //colour picker

let redBtn = document.querySelector(".red");
redBtn.addEventListener("click", function () {
    document.body.setAttribute("class", "redBack");
})

let greenBtn = document.querySelector(".green");
greenBtn.addEventListener("click", function () {
    document.body.setAttribute("class", "greenBack");
})

let blueBtn = document.querySelector(".blue");
blueBtn.addEventListener("click", function () {
    document.body.setAttribute("class", "blueBack");
})

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", function () {
    document.body.removeAttribute("class");
})


