// FOR LOOP

// przykład: for(let i=0; i<5; i++) {
// }      gdzie i to wyrażenie warunkowe
//pętla (czyli blok kodu, zaczyna sie od "for" ) daje mozliwosc wyswietlania numeracji po kolei
// i++ -> oznacza zwiększ o jeden kazde i jeden

//i zaczyna od 0, nastepnie warunek czy i jest mniejsze lub rowne od number (czyli 10) a nastepnie jesli true to zwiększ o jeden, czyli do jedynki etc... 

/*

let number = 10;
for (let i = 0; i <= number; i++) {
    console.log(i);
}

*/

// forEach LOOP

/*
let tablica = ["Ania", "Konrad", "Mateusz"];

tablica.forEach(function(element, index) {
    console.log(element);
})*/

//lub 

/*tablica.forEach(function(element, index) {
    console.log("Imie " + element + " znajduje sie pod indeksem " + index);
})*/

// lub 

// WHILE loop  sluzy bo powtarzajacych sie czynnosci
//   "++"   oznacza zwiększ o jeden
/*
let number = 10;
let index = 0;

while(number > 0) {
    console.log(index++);
}*/

//lub
// "--" zmniejsz o jeden 

/*let number = 10;

while(number > 0) {
    number--;
    console.log(number);
}*/

// lub pętla BREAK

/*
let number = 10;

while(number > 0) {
    number--;
    
    if (number > 5) {
    console.log(number);
        
        break;
    }
}
*/

// lub

/*let number = 10;

while(number > 0) {
    number--;
    
    if (number === 5) {
    console.log(number);
        
        break;
    }
}*/



let adam = {
    wiek: 1000,
    włosy: false,
    oczy: true,
    nazwisko: "Dou"};

/*for (let i in adam) {
    console.log(adam[i]);
}*/

//lub

for (let i in adam) {
    console.log("Klucz :" + i + " wartość: " + adam[i]);
}