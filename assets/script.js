const next1Button = document.getElementById("next1");
const next2Button = document.getElementById("next2");
const next3Button = document.getElementById("next3");
const next4Button = document.getElementById("next4");

const prev1Button = document.getElementById("prev1");
const prev2Button = document.getElementById("prev2");
const prev3Button = document.getElementById("prev3");
const prev4Button = document.getElementById("prev4");

const slideShowNode1 = document.getElementById("slideShow1");
const slideShowNode2 = document.getElementById("slideShow2");
const slideShowNode3 = document.getElementById("slideShow3");
const slideShowNode4 = document.getElementById("slideShow4");

let counterTesla = 0;
let counterBmw = 0;
let counterNissan = 0;
let counterBugatti = 0;

const arrayBmw = [
    "assets/image/bmw/bmw_main.jpg",
    "assets/image/bmw/bmw_side.jpg",
    "assets/image/bmw/bmw_front.jpg",
    "assets/image/bmw/bmw_interior.jpg",
];

const arrayTesla = [
    "assets/image/tesla/tesla_main.jpg", 
    "assets/image/tesla/tesla_s_back.jpg", 
    "assets/image/tesla/tesla_s_front.jpg", 
    "assets/image/tesla/tesla_s_interior.jpg"
];

const arrayBugatti = [
    "assets/image/bugatti/bugatti_main.jpg",
    "assets/image/bugatti/bugatti_front.jpg",
    "assets/image/bugatti/bugatti_top.jpg",
    "assets/image/bugatti/bugatti_back.jpg",
    "assets/image/bugatti/bugatti_interior.jpg",
];

const arrayNissan = [
    "assets/image/nissan/nissan_main.jpg",
    "assets/image/nissan/nissan_front.jpg",
    "assets/image/nissan/nissan_interior.jpg",
    "assets/image/nissan/nissan_back.jpg",
];

function nextSlideShow1() {
    counterTesla++;
    if(counterTesla === arrayTesla.length) {
        counterTesla = 0;
    }

    slideShowNode1.setAttribute("src", arrayTesla[counterTesla]);
}

function prevSlideShow1() {
    counterTesla--;
    if(counterTesla === -1) {
        counterTesla = arrayTesla.length - 1;
    }

    slideShowNode1.setAttribute("src", arrayTesla[counterTesla]);
}

function nextSlideShow2() {
    counterBmw++;
    if(counterBmw === arrayBmw.length) {
        counterBmw = 0;
    }

    slideShowNode2.setAttribute("src", arrayBmw[counterBmw]);
}

function prevSlideShow2() {
    counterBmw--;
    if(counterBmw === -1) {
        counterBmw = arrayBmw.length - 1;
    }

    slideShowNode2.setAttribute("src", arrayBmw[counterBmw]);
}

function nextSlideShow3() {
    counterNissan++;
    if(counterNissan === arrayNissan.length) {
        counterNissan = 0;
    }

    slideShowNode3.setAttribute("src", arrayNissan[counterNissan]);
}

function prevSlideShow3() {
    counterNissan--;
    if(counterNissan === -1) {
        counterNissan = arrayNissan.length - 1;
    }

    slideShowNode3.setAttribute("src", arrayNissan[counterNissan]);
}

function nextSlideShow4() {
    counterBugatti++;
    if(counterBugatti === arrayBugatti.length) {
        counterBugatti = 0;
    }

    slideShowNode4.setAttribute("src", arrayBugatti[counterBugatti]);
}

function prevSlideShow4() {
    counterBugatti--;
    if(counterBugatti === -1) {
        counterBugatti = arrayBugatti.length - 1;
    }

    slideShowNode4.setAttribute("src", arrayBugatti[counterBugatti]);
}

next1Button.addEventListener("click", nextSlideShow1);
next2Button.addEventListener("click", nextSlideShow2);
next3Button.addEventListener("click", nextSlideShow3);
next4Button.addEventListener("click", nextSlideShow4);

prev1Button.addEventListener("click", prevSlideShow1);
prev2Button.addEventListener("click", prevSlideShow2);
prev3Button.addEventListener("click", prevSlideShow3);
prev4Button.addEventListener("click", prevSlideShow4);