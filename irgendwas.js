
function Summe() {

  var Eingabe  = parseFloat (document.getElementById('Eingabe').value);
  var Eingabe2  = parseFloat (document.getElementById('Eingabe2').value);

  var Ergebnis = Eingabe + Eingabe2;
  document.getElementById("Ausgabe").innerHTML = Ergebnis;
}
function Differenz() {

  var Eingabe3  = parseFloat (document.getElementById('Eingabe3').value);
  var Eingabe4  = parseFloat (document.getElementById('Eingabe4').value);

  var Ergebnis = Eingabe3 - Eingabe4;
  document.getElementById("Ausgabe").innerHTML = Ergebnis;
}
function Produkt() {

  var Eingabe5  = parseFloat (document.getElementById('Eingabe5').value);
  var Eingabe6  = parseFloat (document.getElementById('Eingabe6').value);

  var Ergebnis = Eingabe5 * Eingabe6;
  document.getElementById("Ausgabe").innerHTML = Ergebnis;
}
function Quotient() {

  var Eingabe7  = parseFloat (document.getElementById('Eingabe7').value);
  var Eingabe8  = parseFloat (document.getElementById('Eingabe8').value);

  var Ergebnis = Eingabe7 / Eingabe8;
  document.getElementById("Ausgabe").innerHTML = Ergebnis;
}
