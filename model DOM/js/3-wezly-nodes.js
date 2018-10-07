
// najblizszy węzeł
//let pierwszyDiv = document.getElementById("parFirst").parentNode; 

//najblizszy element html
/*let pierwszyDiv = document.getElementById("parFirst").parentElement;*/

//aby dostac się do rodzica to :
/*let pierwszyDiv = document.getElementById("parFirst").parentElement.parentElement;

console.log(pierwszyDiv);*/

//let header = document.getElementsByTagName("header")[0].childNodes;

/*let header = document.getElementsByTagName("header")[0].children;*/

// wskaze pierwszy znacznik
/*let header = document.getElementsByTagName("header")[0].firstElementChild;*/

// wskaze ostatni znacznik
/*let header = document.getElementsByTagName("header")[0].lastElementChild;*/


let linki = document.querySelectorAll("#sectionFirst .link")[1];
//console.log(linki.previousElementSibling);

console.log(linki.nextElementSibling);


