const huidigeDag = new Date().getDay(); // 0 = zondag, 1 = maandag, ..., 6 = zaterdag

console.log(huidigeDag >= 1 && huidigeDag <= 5 ? "Ik moet naar school" : "Lekker uitslapen!");
