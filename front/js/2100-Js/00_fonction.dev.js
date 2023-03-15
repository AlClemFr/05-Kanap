"use strict";

// o- teste panier 
// j- Mettre id Prix Couleur & Qt.
// j- laisser pour le moment product a voir si on remplace par kanap
//v- ok marche
function savePanier(panier) {
  //  clée , valeur
  // set créaction
  localStorage.setItem("panier", JSON.stringify(panier));
} //v- ok marche


function getPanier() {
  //  clée , valeur
  // get récupération
  var panier = localStorage.getItem("panier"); // console.log(panier);
  //j- on teste si tableau panier existe

  if (panier == null) {
    return [];
  } else {
    return JSON.parse(panier);
  }
} // o- original pas touche


if (false) {
  var _addPanier = function _addPanier(product) {
    var panier = getPanier(); // console.log(panier);
    //  j- recherche si product exist déjà dans tableau.

    var foundProduct = panier.find(function (p) {
      return p.id == product.id;
    });

    if (foundProduct != undefined) {
      foundProduct.quantity++;
    } else {
      product.quantity = 1;
      panier.push(product);
    }

    savePanier(panier);
  };
} // j- Teste 


function addPanier(product) {
  var panier = getPanier(); // console.log(panier);
  //  j- recherche si product exist déjà dans tableau.

  var foundProduct = panier.find(function (p) {
    return p.id == product.id;
  }); // console.log(foundProduct.color);

  if (foundProduct != undefined) {
    if (true) {
      // foundProduct.quantity++;
      // console.log("01: "); console.log(foundProduct.quantity);
      // console.log("02: "); console.log(product.quantity);
      // let poub00 = parseInt(foundProduct.quantity);
      // let poub10 = parseInt(product.quantity);
      // let poub30 = poub00 + poub10;
      foundProduct.quantity = product.quantity + foundProduct.quantity; // foundProduct.quantity = poub30.toString;
      // foundProduct.quantity = poub30;
      // console.log("03: "); console.log(product.quantity);
    }
  } else {
    // product.quantity = 0;
    panier.push(product);
  }

  savePanier(panier);
} // v- Suppresiion du produit du panier


function removeFromPanier(product) {
  var panier = getPanier();
  panier = panier.filter(function (p) {
    return p.id != product.id;
  });
  savePanier(panier);
} // v- Changer la quantité du produit dans le panier


function changeQuantityPanier(product, quantity) {
  console.log("Product : ", product, " Quantity: ", quantity);
  var panier = getPanier(); //  j- recherche si product existe déjà dans tableau.

  var foundProduct = panier.find(function (p) {
    return p.id == product.id;
  }); // let founColor = panier.find(c => c.id == product.id);

  if (foundProduct != undefined) {
    // foundProduct.quantity += quantity;
    foundProduct.quantity = quantity;
    console.log(foundProduct.quantity);

    if (foundProduct.quantity <= 0) {
      removeFromPanier(foundProduct);
    } else {
      savePanier(panier);
    }
  }
}

function getNumberProduct() {
  var panier = getPanier();
  var number = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = panier[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var product = _step.value;
      number += product.quantity;
      console.log(product.quantity);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return number;
} // j- pas utils dans ce projet


function getTotalPrice() {
  var panier = getPanier();
  var total = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = panier[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var product = _step2.value;
      total += product.quantity * product.price; // console.log(product.quantity);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return total;
} // j- teste import/export
// export niet 


function sayWelcom() {
  return "Welcom to WayToLearnX.com";
} // v- **************************************************************************
// v- Mes fonctions à moi


function fctVisu(validation_affichage, numero, information_a_affichager) {
  if (validation_affichage == true) {
    if (numero < 10) {
      console.log("0" + numero.toString() + ": ");
      console.log(information_a_affichager);
    } else {
      console.log(numero.toString() + ": ");
      console.log(information_a_affichager);
    }
  }
}

; // (val) => console.log(val);