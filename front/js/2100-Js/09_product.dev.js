"use strict";

//v- Récupération lien courant.
var urlCourant = window.location.href; //v- Récupération Id procduit dans le lien.

var urlCourantBis = new URL(urlCourant);
var id = urlCourantBis.searchParams.get("id"); //v- Récupération des datas associées à l'Id

var url = "http://localhost:3000/api/products/" + id; //v- Récupération des inforamtions de l'article dans l'API

var Myfetch = fetch(url).then(function (responsive) {
  return responsive.json().then(function (data) {
    //o- if pour indentation
    if (true) {
      var total = ""; //v- mise en place de nom de l'article

      document.querySelector('#title').innerHTML = data.name; //v- mise en place de la balise image avec l'image, son descriptif et son nom

      var altTxt = data.altTxt + ', ' + data.name;
      total = "\n            <img src=\"" + data.imageUrl + "\" alt= \"" + altTxt + "\"></img>";
      document.querySelector('.item__img').innerHTML = total; //v- mise en place du nom dans la balise h1      

      document.querySelector('#title2').innerHTML = data.name; //v- mise en place du prix dans la balise p
      //v- mettre en place la vigule, Fait OK     

      var poub = parseFloat(data.price);
      poub /= 10;
      console.log(poub);
      var price = poub.toString();
      document.querySelector('#price').innerHTML = price; //v- mise en place de la description de l'article  

      document.querySelector('#description').innerHTML = data.description; //v- mise en place de la liste des couleurs associées à l'article  

      var i = 0;
      total = "";
      var color = "";

      for (i; i < data.colors.length; i++) {
        color = data.colors[i];
        total += "<option value=\"" + color + "\">" + color + "</option>";
      }

      document.querySelector('#colors').innerHTML = total;
    }
  })["catch"](function (err) {
    return console.log("erreur: " + err);
  });
}); //v- récupération des champs ou bouton à surveiller

var colors = document.getElementById('colors');
var quantity = document.getElementById('quantity');
var addToCard = document.getElementById('addToCart'); //v- surveillance de l'évenement "hors champs"

quantity.addEventListener('focusout', function () {
  if (quantity.value > 100 || quantity.value < 0 || quantity.value == "") {
    quantity.value = 0;
  }
}); // v- surveillance de l'évenement "clic" sur le bouton addtoCard

addToCard.addEventListener('click', function () {
  if (quantity.value <= 100 & quantity.value > 0) {
    var toto = id + "-" + colors.value; // v- Stockage ID+color, quantité dans le Local Storage

    addPanier({
      id: toto,
      "quantity": parseInt(quantity.value)
    });
  }
});