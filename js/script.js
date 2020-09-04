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


// creo funzione timer
setTimeout (function(){
// creo array num ricordati
var arrayNumRicordati = [];
for (var i = 0; i < 5; i++) {
  var numRicordati = parseInt(prompt("Inserire un numero"));
  if (numCasuali.includes(numRicordati)){
    arrayNumRicordati.push(numRicordati);
console.log('I numeri memorizzati da te sono: ' + arrayNumRicordati + ' allora i numeri indovinati sono '+ arrayNumRicordati.length);
}else{
  alert("numero non ricordato!");
}
}

}, 30000);
