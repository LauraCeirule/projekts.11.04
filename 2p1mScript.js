const fakti = [
    {
        fakts: ["Spānijā 47 stāvu liels debesskrāpis, kurā nav lifta." , "Spāņu valsts himnai nav vārdu.", "Spānija ir vislielākā valsts Rietumeiropā un Eiropas Savienībā."],
        lieIndex:2
    },
    {
        fakts: ["Vatikāns ir mazākā neatkarīgā valsts pasaulē.", "Romiešu impērija atradās Itālijas teritorijā.", "Itālijas galvaspilsēta ir Venēcija."],
        lieIndex:2
    },
    {
        fakts: ["50% Grieķijas aizņem kalni.", "Grieķija ir viena no saulainākajām pilsētam.", "Grieķija tiek uzskatīta par Rietumu kultūras šūpuli"],
        lieIndex:0
    },
    {
        fakts: ["Horvātijaā ir vairāk nekā 1100 salu.",'Horvātijā tika filmēta filma "Troja"', "Horvātijas upēs un ezeros ir daudz foreļu, taču makšķerēšana ir aizliegta ar likumu." ],
        lieIndex:1
    },
    {
        fakts: ['Ļubļana no slovēņu valodas tulkojas kā "Mīlētā".',"Slovēnija ir viena no mazākajām Eiropas valstīm.", "Slovēnija ir valsts Rietumeiropā." ],
        lieIndex:2
    },
    {
        fakts: ["Portugālē oficiālā valsts valoda ir spāņu valoda.", "Portugālē pieņemtā oficiālā valūta ir eiro.", "Portugālē 96,87% no visiem iedzīvotājiem ir portugāļi."],
        lieIndex:0
    },
    {
        fakts: ["Taizeme tulkojumā nozīmē “brīvā zeme”.", "Visapmeklētāka Taizemes pilsēta ir Nontaburi","Siāmas kaķi cēlušies no Taizemes."],
        lieIndex:1
    },
    {
        fakts: ["Japānā ik gadu notiek vidēji 1500 zemestrīču.", "Japānā ir vairāk nekā 6800 salas", "Japāna ir 5. lielākā valsts pēc iedzīvotāju skaita."],
        lieIndex:2
    },
    {
        fakts: ["Ķīna tiek uzskatīta par senāko civilizāciju pasaulē.", "Svētku krāsa Ķīnā ir zaļa","Ķīnā ir vairāk cilvēku, kas runā angļu valodā, nekā ASV."],
        lieIndex:1
    },
    {
        fakts: ["Turcijā nav kalnu","Turki ļoti mīl tēju, tāpēc viņi izdzer apmēram 10 tases dienā.", "Stambulā satiekas divi kontinenti - Eiropa un Āzija."],
        lieIndex:0
    },

];

let speleTagad;

function saktSpeli() {
    const randomIndex = Math.floor(Math.random()*fakti.length);
    speleTagad = fakti[randomIndex];

    document.getElementById('fakts1').textContent = speleTagad.fakts[0];
    document.getElementById('fakts2').textContent = speleTagad.fakts[1];
    document.getElementById('fakts3').textContent = speleTagad.fakts[2];
    document.getElementById('rezultāts').textContent = '';
}

function parbaude(selectedIndex){
    if(selectedIndex-1===speleTagad.lieIndex){
        document.getElementById('rezultāts').textContent = "Pareizi, tu uzminēji!"
    }
    else{
        document.getElementById('rezultāts').textContent = "Nepareizi! Mēģini vēl vienu reizi."
    }
}

function attiestata(){
    saktSpeli();
}

saktSpeli();