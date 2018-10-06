// obiekty są zawsze wpisane w {} 
// gdy nadajemy cechy/wlasciwosci, wymieniamy je po przecinkach

let adam = {
    wiek: 1000,
    włosy: false,
    oczy: true,
    nazwisko: "Dou"
};

//console.log(adam.nazwisko, adam.wlosy);

//ES6

/*
class Osoba {
    constructor(imie, nazwisko) {
        this.name = imie;
        this.lastName = nazwisko;
        this.age;
    }
    printInfo() {
        let info = `Name: ${this.name}, last name: ${this.lastName}, wiek: ${this.age}`;
        console.log(info);
    }   
}

// aby dodac nowe wartosci to wpisujemy let X = new ..... ;

/*let mateusz = new Osoba("Mateusz", "Gorski");
mateusz.age = 30;
mateusz.printInfo();*/

/*
let mateusz = new Osoba("Mateusz", "Gorski");
mateusz.age = 30;
mateusz.kolorOczu = "zielony";
*/

// żeby wyswietlic sam kolor oczu
//console.log(mateusz.kolorOczu);


//zeby wyswietlic wszystkie wartosci dla mateusz to 

//console.log(mateusz);



// KOLEJNY PRZYKŁAD


class Osoba {
    constructor(imie, nazwisko, wiek, kolorOczu) {
        this.name = imie;
        this.lastName = nazwisko;
        this.age = wiek;
        this.eyeColor = kolorOczu;
    }
    printInfo() {
        let info = `Name: ${this.name}, last name: ${this.lastName}, wiek: ${this.age}`;
        console.log(info);
    }   
}

let lukasz = new Osoba("Łukasz", "Nowak", 50, "piwny");

console.log(lukasz.age, lukasz.eyeColor);
lukasz.printInfo();

