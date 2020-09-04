// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

// creo alert num casuali
var numCasuali = numRandom();
alert(numCasuali);
// creo funzione numeri casuali da 1 a 100
function numRandom(){
  var arrayRandom = [];
  for (var i = 0; i < 5; i++) {
    var numero = Math.floor((Math.random() * 10) + 1);
    arrayRandom.push(numero);
  }
  return arrayRandom;

}
