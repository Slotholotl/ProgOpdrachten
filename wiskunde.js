function berekenInhoud(lengte, hoogte, diepte) {
    return lengte * hoogte * diepte;
}
let kubusInhoud = berekenInhoud(10, 5, 10);
console.log(kubusInhoud);


function cil(diameter, hoogte1) {
    let p2i = Math.PI; 
    let radius = diameter / 2;  
    return Math.pow(radius, 2) * p2i * hoogte1;  
}

let inhoudKu = cil(40, 80);
console.log(inhoudKu);  


function drieHoek(lengte2, hoogte2) {
    return Math.sqrt(Math.pow(lengte2, 2) + Math.pow(hoogte2, 2)); 
}

let remi = drieHoek(40, 80);
console.log(remi);  


function berekenGemiddelde(g1, g2, g3, g4, g5, g6, g7) {
    let som = g1 + g2 + g3 + g4 + g5 + g6 + g7;
    let resultaat = som / 7;
    return resultaat;
}
let gemiddelde = berekenGemiddelde(10, 20, 30, 40, 50, 60, 70);
console.log(gemiddelde);
