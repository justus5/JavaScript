let tablica = ["Monika", "Ania", "Stefan"];
console.log(tablica);

tablica[0] = "Karolina";

/*//// gdy chcemy dodac dodatkowy element, unshift dodaje na początku; 
tablica.unshift ("Adam");

// gdy chcemy dodac dodatkowy element, push dodaje na koncu; 
tablica.push("Adam");

// gdy chcemy usunąć pierwszy element z tablicy
tablica.shift();

// gdy chcemy usunąć ostatni element z tablicy
tablica.pop();


// dodawanie elementu w srodku oraz usuwanie
// 1 - znajduje element pod indexem 
// 2 - usuwa dwa elementy ; 0 - nie rob nic, nie usuwaj

tablica.splice(1, 0, "Przemek");*/

// poda wartosc pod ktora znajdue sie dana wartosc wpisana w ""
//console.log(tablica.indexOf("Ania"));

// dodaje elementy
console.log(tablica.join(" + "));
