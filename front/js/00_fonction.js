// o- teste panier 

// j- Mettre id Prix Couleur & Qt.
// j- laisser pour le moment product a voir si on remplace par kanap

//v- ok marche
function savePanier(panier) {
  //  clée , valeur
  // set créaction
  localStorage.setItem("panier", JSON.stringify(panier));
}

//v- ok marche
function getPanier() {
  //  clée , valeur
  // get récupération
  let panier = localStorage.getItem("panier");
  // console.log(panier);

  //j- on teste si tableau panier existe
  if (panier == null) {
    return [];
  } else {
    return JSON.parse(panier);
  }
}

// o- original pas touche
if (false) {
  function addPanier(product) {
    let panier = getPanier();
    // console.log(panier);

    //  j- recherche si product exist déjà dans tableau.
    let foundProduct = panier.find(p => p.id == product.id);

    if (foundProduct != undefined) {
      foundProduct.quantity++;
    } else {
      product.quantity = 1;
      panier.push(product);
    }
    savePanier(panier);
  }
}

// j- Teste 
function addPanier(product) {
  let panier = getPanier();
  // console.log(panier);

  //  j- recherche si product exist déjà dans tableau.
  let foundProduct = panier.find(p => p.id == product.id);

  // console.log(foundProduct.color);

  if (foundProduct != undefined) {

    if (true) {
      // foundProduct.quantity++;
      // console.log("01: "); console.log(foundProduct.quantity);
      // console.log("02: "); console.log(product.quantity);

      // let poub00 = parseInt(foundProduct.quantity);
      // let poub10 = parseInt(product.quantity);
      // let poub30 = poub00 + poub10;

      foundProduct.quantity = product.quantity + foundProduct.quantity;
      // foundProduct.quantity = poub30.toString;
      // foundProduct.quantity = poub30;


      // console.log("03: "); console.log(product.quantity);
    }

  } else {
    // product.quantity = 0;
    panier.push(product);
  }
  savePanier(panier);
}


// v- Suppresiion du produit du panier
function removeFromPanier(product) {
  let panier = getPanier();

  panier = panier.filter(p => p.id != product.id);
  savePanier(panier);
}


// v- Changer la quantité du produit dans le panier
function changeQuantityPanier(product, quantity) {
  console.log("Product : ", product, " Quantity: ", quantity);
  let panier = getPanier();

  //  j- recherche si product existe déjà dans tableau.
  let foundProduct = panier.find(p => p.id == product.id);
  // let founColor = panier.find(c => c.id == product.id);

  if (foundProduct != undefined) {
    // foundProduct.quantity += quantity;
    foundProduct.quantity = quantity;
    console.log(foundProduct.quantity)
    if (foundProduct.quantity <= 0) {
      removeFromPanier(foundProduct);
    } else {
      savePanier(panier);
    }
  }
}


function getNumberProduct() {
  let panier = getPanier();
  let number = 0;
  for (let product of panier) {
    number += product.quantity;
    console.log(product.quantity);
  }
  return number;
}

// j- pas utils dans ce projet
function getTotalPrice() {
  let panier = getPanier();
  let total = 0;
  for (let product of panier) {
    total += product.quantity * product.price;
    // console.log(product.quantity);
  }
  return total;
}




// j- teste import/export
// export niet 
function sayWelcom() {
  return "Welcom to WayToLearnX.com";
}


// v- **************************************************************************
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

};



// (val) => console.log(val);