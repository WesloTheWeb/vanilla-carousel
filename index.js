const slideOne =
    "https://static1.squarespace.com/static/5a67952ff9a61e4381d21698/t/5e8357fadd5ef64df67d0420/1585666043846/1.jpg";
const slideTwo =
    "https://static1.squarespace.com/static/5a67952ff9a61e4381d21698/t/5e83580799fce657f5d7693c/1585666067743/2.jpg";
const slideThree =
    "https://static1.squarespace.com/static/5a67952ff9a61e4381d21698/t/5e835809539b7e45e837b2d1/1585666060124/3.jpg";
const slideFour =
    "https://static1.squarespace.com/static/5a67952ff9a61e4381d21698/t/5e83580ce3cece7299201708/1585666067786/4.jpg";
const slideFive =
    "https://static1.squarespace.com/static/5a67952ff9a61e4381d21698/t/5e835811e3cece729920176a/1585666067538/5.jpg";
const slideSix =
    "https://static1.squarespace.com/static/5a67952ff9a61e4381d21698/t/5e835814dd5ef64df67d0a75/1585666072979/6.jpg";

const images = [slideOne, slideTwo, slideThree, slideFour, slideFive, slideSix];
const displaySlide = document.getElementById("slide-image");
const url = `https://static1.squarespace.com/static/5a67952ff9a61e4381d21698/t/`;

const firstIndictatorBtn = document.getElementById("indicator1");
const currentImage = document.getElementById("current-image");

const moveSlide = (image) => { };
const rightClick = (e) => {
    // return console.log("right click");
    displaySlide.src = slideTwo;
    for (let i = 0; i < images.length; i++) { }
};

const leftClick = (e) => {
    // return console.log("right click");
    displaySlide.src = slideSix;
};

/*
- have our right click move to next image
- innerHTML

*/

const fowardButton = document
    .getElementById("right")
    .addEventListener("click", rightClick);

const baclBittpm = document
    .getElementById("left")
    .addEventListener("click", leftClick);
