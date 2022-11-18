const angleSigne = 30; // 360 deg / 12 signes = 30 deg / signe*
const choixSigne = document.querySelector('.choixSigne');
const cadreSoul = document.querySelector('.cadreSoul');
const soul = document.querySelector('.soul');

// calcul de l'angle par rapport au signe choisi

let tabSignes = 
[
    "Bélier", // 30°
    "Taureau" , // 60°
    "Gémeaux", // 90°
    "Cancer",
    "Lion",
    "Vierge",
    "Balance",
    "Scorpion",
    "Sagittaire",
    "Capricorne",
    "Verseau",
    "Poissons"  // en haut 0° ou 360°
];

// on construit le tableau des angles 30° par 30°
const angleSymbole = [];

for(a=30; a <= 360 ; a = a+ 30 ){ // a = angle
    console.log('a' +a );
    angleSymbole.push(a);
    console.log('angleSymbole = ' + angleSymbole);
};





function afficheSigne() {
    angleSigne.style.transform = `translate3d(-50%,-50%,0) rotateZ(${angleSymbole}deg)`;
};