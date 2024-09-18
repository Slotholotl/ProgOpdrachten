const vandaag = new Date();
const huidigeDag = vandaag.getDay(); // 0 = zondag 1 = maandag ect.

if (huidigeDag === 0) {
    console.log("Vandaag is het zondag, lekker uitslapen!");
} else if (huidigeDag === 6) {
    console.log("Vandaag is het zaterdag, lekker uitslapen!");
} else { // omdat zaterdag en zondag al een 
    console.log("Ik moet naar school");
}