const riddles = [
    {
        question: "Es esmu viegls kā gaisma, bet nevaru būt redzams. Kas es esmu?",
        answer: "vējš"
    },
    {
        question: "Kas skrien, bet nekad neiet?",
        answer: "upe"
    },
    {
        question: "Kas vienmēr ir ar tevi, bet to nekad neredzi?",
        answer: "ēna"
    }
];


function loadRiddles() {
    const container = document.getElementById("riddles-container");
    container.innerHTML = "";  


    riddles.forEach((riddle, index) => {
        const riddleElement = document.createElement("div");
        riddleElement.classList.add("riddle");

        const questionLabel = document.createElement("label");
        questionLabel.innerText = riddle.question;

        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.id = `answer${index}`;  

        riddleElement.appendChild(questionLabel);
        riddleElement.appendChild(inputField);

        container.appendChild(riddleElement);
    });
}


function checkAnswers() {
    let correct = 0;

 
    riddles.forEach((riddle, index) => {
        const userAnswer = document.getElementById(`answer${index}`).value.trim().toLowerCase();
        if (userAnswer === riddle.answer) {
            correct++;
        }
    });

    
    let resultText = `Tu atbildēji pareizi uz ${correct} no ${riddles.length} mīklām!`;
    document.getElementById("result").innerText = resultText;
}


loadRiddles();