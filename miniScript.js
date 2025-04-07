const allRiddles = [
    { question: "Aka bez dibena.", answer: "gredzens" },
    { question: "Panest var, izskaitīt nevar.", answer: "mati" },
    { question: "Kauls. bet tomēr zied.", answer: "nags" },
    { question: "Ziemu der, vasaru neder.", answer: "kažoks" },
    { question: "Zelta puķe krāsnī zied", answer: "uguns" },
    { question: "Citam kalpo, pats sevi tērē.", answer: "svece" },
    { question: "Plikpauris gaisā. ", answer: "mēness" },
    { question: "Viena kāja, desmit rokas.", answer: "koks" },
    { question: "Galva no dzelzs, kājas no koka.", answer: "āmurs" },
    { question: "Jo vairāk berž, jo vairāk puto.", answer: "ziepes" },
    { question: "Saimniece ar vienu aci.", answer: "atslēga" },
    { question: "Balts, bet ne salds, skrien, bet ne dzīvs. ", answer: "sniegs" },
    { question: "Otram kož, pats kliedz.", answer: "zāģis" },
    { question: "Mīksts kā spilvens, bet nav spilvens.", answer: "kaķis" },
    { question: "Abi gali balti, vidus zaļš.", answer: "gads" }


];

let currentRiddles = [];

function getRandomRiddles(count = 3) {
    const shuffled = [...allRiddles].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generateRiddles() {
    const riddlesContainer = document.getElementById("riddles");
    riddlesContainer.innerHTML = "";
    currentRiddles = getRandomRiddles();
    currentRiddles.forEach((riddle, index) => {
        const riddleDiv = document.createElement("div");
        const riddleP = document.createElement("p");
        const input = document.createElement("input");
        
        riddleP.textContent = riddle.question;
        input.type = "text";
        input.id = `answer${index}`;

        riddleDiv.appendChild(riddleP);
        riddleDiv.appendChild(input);
        riddlesContainer.appendChild(riddleDiv);
    });
}

function checkAnswers() {
    let correct = 0;
    currentRiddles.forEach((riddle, index) => {
        const userAnswer = document.getElementById(`answer${index}`).value.trim().toLowerCase();
        if (userAnswer === riddle.answer) {
            correct++;
        }
    });
    document.getElementById("result").innerText = `Jūs atbildējāt pareizi uz ${correct} no ${currentRiddles.length} mīklām.`;
}

function newGame() {
    generateRiddles();
    document.getElementById("result").innerText = "";
}

newGame();