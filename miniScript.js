const visasMiklas = [
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

let miklasTagad = [];

function randomMiklas(count = 3) {
    const sajauktas = [...visasMiklas].sort(() => 0.5 - Math.random());
    return sajauktas.slice(0, count);
}

function velMiklas() {
    const mikluBloks = document.getElementById("miklas");
    mikluBloks.innerHTML = "";
    miklasTagad = randomMiklas();
    miklasTagad.forEach((riddle, index) => {
        const miklasDiv = document.createElement("div");
        const miklasP = document.createElement("p");
        const input = document.createElement("input");
        
        miklasP.textContent = riddle.question;
        input.type = "text";
        input.id = `answer${index}`;
        input.placeholder="Ievadiet tekstu..."

        miklasDiv.appendChild(miklasP);
        miklasDiv.appendChild(input);
        mikluBloks.appendChild(miklasDiv);
    });
}

function parbaudi() {
    let correct = 0;
    miklasTagad.forEach((riddle, index) => {
        const lietotajaAtbilde = document.getElementById(`answer${index}`).value.trim().toLowerCase();
        if (lietotajaAtbilde === riddle.answer) {
            correct++;
        }
    });
    document.getElementById("rezultats").innerText = `Jūs atbildējāt pareizi uz ${correct} no ${miklasTagad.length} mīklām.`;
}

function jaunaSpele() {
    velMiklas();
    document.getElementById("rezultats").innerText = "";
}

jaunaSpele();