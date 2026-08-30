const mainImage = document.getElementById("mainImage");
const question = document.getElementById("question");
const subtitle = document.getElementById("subtitle");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const stages = [
// STAGE 0
{
image: "cat0.gif",
question: "Lets Start Janawww",
subtitle: "Please click on Yes"
},

// STAGE 1
{
    image: "cat1.gif",
    question: "DO you love me? 🥺",
    subtitle: "Ahmad is all yours"
},

// STAGE 2
{
    image: "cat2.gif",
    question: "Ek aur baar Soch lo! 😣",
    subtitle: "kyu aisa kar rahi ho 😭"
},

// STAGE 3
{
    image: "cat3.gif",
    question: "Baby Man jao na! Kitna bhav khaogi 😭",
    subtitle: "bhut hot gya hai yaar 🥺"
},

// STAGE 4
{
    image: "cat4.gif",
    question: "Last chance de do 🥺",
    subtitle: "Pleaseeee"
},

// STAGE 5 - SPECIAL SCREEN
{
    image: "cat5.gif",
    question: "Itni jaldi Yes? 😳 Soch to lo!",
    subtitle: "Pakka sure ho na? 🥺"
},

// STAGE 6 - FINAL
{
    image: "cat6.gif",
    question: "Hehe, I knew it! Love you a lot 😘",
    subtitle: "Love You Soo Much please Never Leave Me . Aage chalein Mam G "
}


];

let currentStage = 0;

// =========================
// SCREEN UPDATE
// =========================

function updateScreen() {

const stage = stages[currentStage];

mainImage.src = stage.image;
question.textContent = stage.question;
subtitle.textContent = stage.subtitle;


// =========================
// NO BUTTON SHOW / HIDE
// =========================

if (currentStage === 0) {
    noBtn.style.display = "none";
} else {
    noBtn.style.display = "block";
}


// =========================
// STAGE 4 PAR NO BHAAGEGA
// =========================

if (currentStage === 4) {

    noBtn.style.position = "absolute";

    runAwayBtn();

} else {

    noBtn.style.position = "static";

    noBtn.style.left = "";
    noBtn.style.top = "";
    noBtn.style.transform = "";
}


}

// =========================
// NO BUTTON BHAAGNA
// =========================

function runAwayBtn() {

const maxX =
    window.innerWidth - noBtn.offsetWidth - 20;

const maxY =
    window.innerHeight - noBtn.offsetHeight - 20;


const x =
    Math.max(10, Math.random() * maxX);

const y =
    Math.max(10, Math.random() * maxY);


noBtn.style.left = x + "px";
noBtn.style.top = y + "px";

noBtn.style.transform =
    `rotate(${Math.random() * 360}deg)`;


}

// =========================
// NO BUTTON CLICK
// =========================

noBtn.addEventListener("click", function () {

// Stage 1 → 2
if (currentStage === 1) {
    currentStage = 2;
}

// Stage 2 → 3
else if (currentStage === 2) {
    currentStage = 3;
}

// Stage 3 → 4
else if (currentStage === 3) {
    currentStage = 4;
}

// Stage 5
else if (currentStage === 5) {
    alert("Ary Madam Ji Sorrry Na Please Say Yesss !");
}

// Stage 6
else if (currentStage === 6) {
    alert("Ary Meri Angry Bird ji Yes kr do na !");
}

updateScreen();


});

// =========================
// DESKTOP MOUSE
// =========================

noBtn.addEventListener("mouseover", function () {

if (currentStage === 4) {
    runAwayBtn();
}


});

// =========================
// MOBILE TOUCH SUPPORT
// =========================

// Button kitni jaldi dobara move kar sakta hai
let lastMoveTime = 0;

const moveCooldown = 150;

// =========================
// TOUCH POSITION CHECK
// =========================

function checkTouchOverNoButton(touch) {

if (currentStage !== 4) {
    return;
}


const rect = noBtn.getBoundingClientRect();


const touchX = touch.clientX;
const touchY = touch.clientY;


const isOverButton =
    touchX >= rect.left &&
    touchX <= rect.right &&
    touchY >= rect.top &&
    touchY <= rect.bottom;


if (isOverButton) {

    const now = Date.now();


    // Too many movements ko prevent karega
    if (now - lastMoveTime < moveCooldown) {
        return;
    }


    lastMoveTime = now;


    // Click ke baghair button bhaag jayega
    runAwayBtn();
}


}

// =========================
// MOBILE TOUCH START
// =========================

document.addEventListener("touchstart", function (event) {

if (currentStage !== 4) {
    return;
}


const touch = event.touches[0];


checkTouchOverNoButton(touch);


}, { passive: true });

// =========================
// MOBILE TOUCH MOVE
// =========================

document.addEventListener("touchmove", function (event) {

if (currentStage !== 4) {
    return;
}


const touch = event.touches[0];


checkTouchOverNoButton(touch);


}, { passive: true });

// =========================
// YES BUTTON CLICK
// =========================

yesBtn.addEventListener("click", function () {

// Stage 0 → Stage 1
if (currentStage === 0) {
    currentStage = 1;
}

// Stage 1 → SPECIAL STAGE 5
else if (currentStage === 1) {
    currentStage = 5;
}

// Stage 5 → FINAL STAGE 6
else if (currentStage === 5) {
    currentStage = 6;
}

// Stage 2, 3, 4 → FINAL
else if (currentStage >= 2 && currentStage <= 4) {
    currentStage = 6;
}

// Final stage → Gallery
else if (currentStage === 6) {
    window.location.href = "gallery.html";
    return;
}


updateScreen();


});

// =========================
// INITIAL SCREEN
// =========================

updateScreen();
