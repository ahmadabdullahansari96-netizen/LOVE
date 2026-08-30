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
        image: "images/cat1.gif",
        question: "DO you love me? 🥺",
        subtitle: "Ahmad is all yours I love You Mama"
    },

    // STAGE 2
    {
        image: "images/cat2.gif",
        question: "Ek aur baar Soch lo! 😣",
        subtitle: "kyu aisa kar rahi ho 😭"
    },

    // STAGE 3
    {
        image: "images/cat3.gif",
        question: "Baby Man jao na! Kitna bhav khaogi 😭",
        subtitle: "bhut hot gya hai yaar 🥺"
    },

    // STAGE 4
    {
        image: "images/cat4.gif",
        question: "Last chance de do 🥺",
        subtitle: "Pleaseeee"
    },

    // STAGE 5 - SPECIAL SCREEN
    {
        image: "images/cat4.gif",
        question: "Itni jaldi Yes? 😳 Soch to lo!",
        subtitle: "Pakka sure ho na? 🥺"
    },

    // STAGE 6 - FINAL
    {
        image: "images/cat5.gif",
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

        if (currentStage === 0) {
        noBtn.style.display = "none";
    } else {
        noBtn.style.display = "block";
    }

    // NO button Stage 4 par bhaagega
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
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    noBtn.style.transform = `rotate(${Math.random() * 360}deg)`;
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
    else if(currentStage ===5){
        alert("Ary Madam Ji Sorrry Na Please Say Yesss !")
    }
    else if(currentStage === 6){
        alert("Ary Meri Angry Bird ji Yes kr do na !")
    }

    // Stage 4 par NO click practically possible nahi
    // kyunki button bhaagta rahega

    updateScreen();
});


// Stage 4 par mouse aate hi NO bhaagega
noBtn.addEventListener("mouseover", function () {
    if (currentStage === 4) {
        runAwayBtn();
    }
});


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
    else if (currentStage === 6) {
        window.location.href = "gallery.html";
        return;
    }

    updateScreen();

    // Final stage par buttons hide
    // if (currentStage === 6) {
    //     yesBtn.style.display = bl;
    //     noBtn.style.display = "none";
    // }
    // Final stage par buttons hide
});

updateScreen();
