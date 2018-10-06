let randomNumber = Math.round(Math.random() * 10);

console.log(randomNumber);


// modulo 

if (randomNumber % 2 == 0) {
    console.log("Wynik z modulo " + randomNumber % 2);
    console.log("Liczba parzysta");
} else {
    console.log("Wynik z modulo " + randomNumber % 2);
    console.log("Liczba nieparzysta");
}