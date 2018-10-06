//w tym przypadku nie mamy na sztywno ustalone zwracanego argumentu, w zależnosci co wpiszemy w nawiasach np. "Tomek", to nam to zwroci, jesli w "return" zadeklarujemy konkretna wartosc to wtedy funkcja nie zwroci nam "Tomek"

/*function wyswietlImie(imie) {
    return imie;
}

console.log(wyswietlImie("Tomek"));*/


/*function wyswietlImie(imie) {
    console.log(imie);
}

wyswietlImie("Andrzej");*/

// ES5 functions

//function dodaj(par1, par2, par3) {
//    let result = par1 + par2 + par3;
//    return result;
//}
//
//let sum = dodaj (1,2,3);
//console.log(sum);


// ES6 functions

// = jeden parametr

//let wyswietlImie = imie => imie;
//console.log(wyswietlImie("Ala"));

// = wiecej parametrow

//let wyswietlImie = (imie, imie2) => "Imie : " + imie + "imie2" + imie2;

  let wyswietlImie = (imie, imie2) => {
      return "Imie : " + imie + "imie2" + imie2;
  }

console.log(wyswietlImie("Ala", "Karol"));

