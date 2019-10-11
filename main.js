// sneglene laves som 'objekter', dvs. med flere properties/egenskaber
var snegl1 = {
    id: "a",
    navn: "Snegl 1",
    foto: "img/snegl1.png",
    x: -160,
    y: 100
};

var snegl2 = {
    id: "b",
    navn: "Snegl 2",
    foto: "img/snegl2.png",
    x:  -160,
    y: 300
};


var sek = 0;               // en tæller skla tælle hvor lang tid ræset har varet. strater selføgelig på 0.
var minSpring = 3;         // min antal pixels snegalene skal flytte sig pr. gang
var maxSpring = 15;        // max antal pixels (0minSpring), som sngelene må flytte sig pr. gang
var tidsinterval = 10;    // en variabel med hvor ofte sneglene skal flytte sig (100 = 100 miliskunders pause)
var finishLine = 730;      // det er sneglenes 'bagende' der måles på

// hvis du ændere i stylesheetet skla d med stor sandsyslighed også ændre i de forskellige variabler herover for at det hele matcher



window.onload = function () {
    // finder frem til div's 'raceway' i HTML-dokumentet for heri skal sneglene indsættes
    var racetrak = document.getElementById("raceway");

    // opretter ny div o razeway-div'en med snegl1's properties. sneglenes properties er defineret i variablerne øverste
    var s1 = document.createElement("div");
    s1.id = snegl1.id;
    s1.className = "snegle-container";
    s1.style.backgroundImage = "url('" + snegl1.foto + "')";
    s1.style.top = snegl1.y + "px";
    s1.style.left = snegl1.x + "px";
    racetrak.appendChild(s1);


    var s2 = document.createElement("div");
    s2.id = snegl2.id;
    s2.className = "snegle-container";
    s2.style.backgroundImage = "url('" + snegl2.foto + "')";
    s2.style.top = snegl2.y + "px";
    s2.style.left = snegl2.x + "px";
    racetrak.appendChild(s2);
}


function start() {
    document.getElementById('startknap').style.display = "none";
    afsted();
};

function afsted() {

    snegl1.x += spring();
    snegl2.x += spring();


    document.getElementById(snegl1.id).style.left = snegl1.x + "px";
    document.getElementById(snegl2.id).style.left = snegl2.x + "px";


    if (snegl1.x >= finishLine || snegl2.x >= finishLine) {

        if (snegl1.x > snegl2.x) {
            setTimeout("winner('" + snegl1.navn + "');", 1000);
        }
        else if (snegl2.x > snegl1.x) {
            setTimeout("winner('" + snegl2.navn + "');", 1000);
        }
        else {
            setTimeout("winner('');", 1000);
        }
    }
    else {
        setTimeout("afsted();", tidsinterval);
        sek = sek + 1;
    }
};


function winner(vinderen) {

    var tid = (sek * tidsinterval) / 1000;

    if (vinderen == "") {
        alert("ræset er slut - det blev uafgjort! det tog" + tid + "sekunder.");
    }
    else {
        alert("ræset blev vundet af " + vinderen + "!det tog" + tid + " sekunder");
    }

    window.location.reload();
};


function spring() {
    var randomStep = Math.round(Math.random() * maxSpring) + minSpring;
    return randomStep;
}