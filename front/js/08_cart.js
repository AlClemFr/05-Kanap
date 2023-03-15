//v- *************************************************
//v- Déclaration des Fonctions 
//v-


//v- FONCTION ----------------------------------------
//v- Affichage des Articles choisies.
//v- Raff Visu & LocalStorage.
//v-
function VisuProd(iid_ccolor, iid, ccolor, nname, iimage, aaltTxt, pprice, qqté) {

  //v-repérage Id auquels on va rajouter les balises dans le DOM
  const ba_cart__items = document.getElementById('cart__items');

  //o- if pour indentation
  if (true) {

    //v- début creaction balise article 
    const ba_article = document.createElement("article");

    ba_article.className = "cart__item";
    let newAttr = document.createAttribute("data-id");
    newAttr.nodeValue = iid;
    ba_article.setAttributeNode(newAttr);

    newAttr = document.createAttribute("data-color");
    newAttr.nodeValue = ccolor;
    ba_article.setAttributeNode(newAttr);

    ba_cart__items.appendChild(ba_article);
    //v- fin creaction balise article --

    //o- if pour indentation
    if (true) {
      //v- début creaction balise div --
      const ba_div = document.createElement("div");

      ba_div.className = "cart__item__img";

      ba_article.appendChild(ba_div);
      //v- fin creaction balise div --

      //v- début creaction balise img --
      // <img src="` + i.imageUrl + `" alt= "` + altTxt + `"></img>`

      let name = nname;
      let imageUrl = iimage;
      let altTxt = aaltTxt;

      altTxt = altTxt + ', ' + name;

      const ba_image = document.createElement("img");
      ba_image.src = imageUrl;
      ba_image.alt = altTxt;

      ba_div.appendChild(ba_image);
      //v- fin creaction balise img --
    }

    //o- if pour Indentation
    if (true) {
      //v- début creaction balise div --
      let ba_div_cart__item__content = document.createElement("div");
      ba_div_cart__item__content.className = "cart__item__content";
      ba_article.appendChild(ba_div_cart__item__content);
      //v- fin creaction balise div --

      //o- if pour Indentation
      if (true) {
        //v- début creaction balise div --
        let ba_div_cart__item__content__description = document.createElement("div");
        ba_div_cart__item__content__description.className = "cart__item__content__description";
        ba_div_cart__item__content.appendChild(ba_div_cart__item__content__description);

        //o- if pour Indentation
        if (true) {
          let ba_h2 = document.createElement("h2");
          let name = nname;
          ba_h2.textContent = name;
          ba_div_cart__item__content__description.appendChild(ba_h2);

          let ba_p_couleur = document.createElement("p");
          ba_p_couleur.textContent = ccolor;
          ba_div_cart__item__content__description.appendChild(ba_p_couleur);

          let ba_p_prix = document.createElement("p");
          ba_p_prix.textContent = pprice + "€";
          ba_div_cart__item__content__description.appendChild(ba_p_prix);
        }
        //v- fin creaction balise div --
      }

      //o- if pour Indentation
      if (true) {
        //v- début creaction balise div --
        let ba_div_cart__item__content__settings = document.createElement("div");
        ba_div_cart__item__content__settings.className = "cart__item__content__settings";
        ba_div_cart__item__content.appendChild(ba_div_cart__item__content__settings);
        //v- fin creaction balise div --

        //o- if pour Indentation
        if (true) {
          //v- début creaction balise div --
          let ba_div_cart__item__content__settings__quantity = document.createElement("div");
          ba_div_cart__item__content__settings__quantity.className = "cart__item__content__settings__quantity";
          ba_div_cart__item__content__settings.appendChild(ba_div_cart__item__content__settings__quantity);

          let ba_p_qte = document.createElement("p");
          ba_p_qte.textContent = "Qté : ";
          ba_div_cart__item__content__settings__quantity.appendChild(ba_p_qte);

          let ba_input = document.createElement("input");
          ba_input.className = "itemQuantity";
          ba_input.id = iid_ccolor;

          ba_input.name = "itemQuantity";
          ba_input.type = "number";
          ba_input.min = "1";
          ba_input.max = "100";

          ba_input.value = qqté;

          ba_div_cart__item__content__settings__quantity.appendChild(ba_input);
          //v- fin creaction balise div --
        }

        //o- if pour Indentation
        if (true) {
          //v- Début creaction balise div --
          let ba_div_cart__item__content__settings__delete = document.createElement("div");
          ba_div_cart__item__content__settings__delete.className = "cart__item__content__settings__delete";
          ba_div_cart__item__content__settings.appendChild(ba_div_cart__item__content__settings__delete);
          //v- fin creaction balise div --

          //v- Début creaction balise p --
          let ba_p_delete = document.createElement("p");

          ba_p_delete.className = "deleteItem";
          ba_p_delete.id = iid_ccolor + "-" + "delete";
          ba_p_delete.textContent = "Supprimer";

          ba_div_cart__item__content__settings__delete.appendChild(ba_p_delete);
          //v- Fin creaction balise p --          
        }
      }
    }
  }
};


//v- FONCTION ----------------------------------------
//v- Modification de la Quantité de l'article.
//v- Raff Visu & LocalStorage.
//v-
function ItChange(iid_ccolor) {

  let itemQuantity = document.getElementById(iid_ccolor);

  itemQuantity.addEventListener('change', function () {

    if (itemQuantity.value > 100 ||
      itemQuantity.value < 1 ||
      itemQuantity.value == "") {

      itemQuantity.value = 1;
    }

    changeQuantityPanier({ id: iid_ccolor }, parseInt(itemQuantity.value));
    aff_nbreArticle_et_prixTotal();
    window.location.reload(); //v- Lance le raff. de la page.
  }
  );
};


//v- FONCTION ----------------------------------------
//v- Suppression de l'article de la page.
//v- Raff Visu & LocalStorage.
//v-
function ItDelete(iid_ccolor_ddelete) {

  let ddelete = document.getElementById(iid_ccolor_ddelete);

  ddelete.addEventListener('click', function () {

    let poub_id_color = iid_ccolor_ddelete.substr(0, iid_ccolor_ddelete.length - 7);
    removeFromPanier({ id: poub_id_color });
    window.location.reload(); //v- Lance le raff. de la page.
  }
  );
};


//v- FONCTION ----------------------------------------
//v- Raffraichissement Visu du nombre d'article et du prix total.
//v-
function aff_nbreArticle_et_prixTotal() {

  let i = 0;
  let Nbre_article = 0;
  let Total_price = 0;

  for (i; i < panier.length; i++) {
    // console.log(" Index: ", i, " Quantity : ", panier[i].quantity, " Prix: ", Ar_price[i]);
    Nbre_article = Nbre_article + panier[i].quantity;
    Total_price = Total_price + panier[i].quantity * Ar_price[i];
  }

  let ba_totalQuantity = document.getElementById('totalQuantity');
  let ba_totalPrice = document.getElementById('totalPrice');

  // console.log(ba_totalQuantity.textContent, " ", ba_totalPrice.textContent);
  // console.log(" Nbre Article: ", Nbre_article, " Total_price : ", Total_price);

  ba_totalQuantity.textContent = " " + Nbre_article;
  ba_totalPrice.textContent = Total_price / 10;
};


//v- FONCTION ----------------------------------------
//v- Créaction dans le DOM des articles.
//v- Créaction des Evenements associés aux articles.
//v-
function Créaction_Articles_Dans_Dom() {

  //o- teste si panier vide
  if (panier.length > 0) {

    // if (true) {
    for (i; i < panier.length; i++) {

      // vi- Récupération info dans le panier
      let poub_id_color = panier[i].id;
      let poub_id = poub_id_color.substr(0, 32);
      let poub_color = poub_id_color.substr(33, poub_id_color.length);
      let poub_qte = panier[i].quantity;
      let ii = i;

      // vi- Récupération info Id du serveur
      let poub_url = "http://localhost:3000/api/products/" + poub_id;

      if (true) {
        let Myfetch = fetch(poub_url)
          .then(
            (responsive) => responsive.json()
              .then(
                (data) => {

                  iid_ccolor = poub_id_color;
                  iid = poub_id;
                  ccolor = poub_color;

                  nname = data.name;
                  iimage = data.imageUrl;
                  aaltTxt = data.altTxt;
                  pprice = data.price;
                  qqté = poub_qte;

                  Ar_price[ii] = pprice;

                  //v- Creaction de la trame article
                  VisuProd(iid_ccolor, iid, ccolor, nname, iimage, aaltTxt, pprice / 10, qqté);

                  //v- It surveillance "Focus Out" champs Quantité
                  // iid_ccolor = "107fb5b75607497b96722bda5b504926-Blue";
                  ItChange(iid_ccolor);

                  //v- It surveillance "clic" sur texte suppression
                  // iid_ccolor_ddelete = "107fb5b75607497b96722bda5b504926-Blue-delete";
                  iid_ccolor_ddelete = iid_ccolor + "-delete";
                  ItDelete(iid_ccolor_ddelete);

                  if (ii = panier.length) {
                    aff_nbreArticle_et_prixTotal();
                  }
                }
              )
              .catch((err) => console.log(`erreur: ` + err))
          );
      }
    };

  } else {
    aff_nbreArticle_et_prixTotal();
  };
};


//v- FONCTION ----------------------------------------
//v- Gestion des Evenement des champs du formulaire de contact.
//v- Côntrole que les informations saisies sont cohérentes pour chaque champ.
//v- Créactions des Evénements associées à chaque champ.
//v-
function Ev_contact(bbalise, bbaliseErreur, rregex, mmessageErreur, ii) {

  const ccontact = document.getElementById(bbalise);
  const ccontactErrorMsg = document.getElementById(bbaliseErreur);
  const oorderErrorMsg = document.getElementById('orderErrorMsg');

  ccontact.addEventListener('focusout',
    function () {

      let message = ccontact.value;

      if (message.match(rregex)) {

        console.log("longueur: ", message.length);
        if (message.length != 0) {


          ar_contact[ii] = message;
          ar_contact[ii + 5] = true;
          // console.log(`OK la sauvegarde ${ii}: `, message, ` ${ii + 5}: `, ar_contact[ii + 5]);
        }

      } else {
        if ((message.length != 0)) {
          ccontactErrorMsg.textContent = mmessageErreur;
          ar_contact[ii + 5] = false;

        }
        // console.log(`Niet la sauvegarde ${ii}: `, message, ` ${ii + 5}: `, ar_contact[ii + 5]);
      }
    }
  );

  //vi- Reset du message d'erreur
  ccontact.addEventListener('focusin',
    function () {
      ccontactErrorMsg.textContent = " ";
      oorderErrorMsg.textContent = " ";
    }
  );
};


//v- FONCTION ----------------------------------------
//v- Gestion formulaire de contact.
//v- Scrutation et passage de paramètre a chaque champs.
//v-
function Gestion_Formulaire_De_Contact() {

  for (let ii = 0; ii < 5; ii++) {

    switch (ii) {
      case 0:
        bbalise = 'firstName';
        bbaliseErreur = 'firstNameErrorMsg';
        rregex = /^[a-zA-Zéèà\s-]*$/;
        mmessageErreur = "Seul les lettres a à z sont autorisé, en minuscule ou majuscule";
        break;

      case 1:
        bbalise = 'lastName';
        bbaliseErreur = 'lastNameErrorMsg';
        rregex = /^[a-zA-Z]*$/;
        mmessageErreur = "Seul les lettres a à z sont autorisé, en minuscule ou majuscule";
        break;

      case 2:
        bbalise = 'address';
        bbaliseErreur = 'addressErrorMsg';
        rregex = /([0-9]{1,3}) (.*)/;
        mmessageErreur = "Erreur dans le format. Exemple viable: 10 rue du Coral";
        break;

      case 3:
        bbalise = 'city';
        bbaliseErreur = 'cityErrorMsg';
        rregex = /([0-9]{5}) (.*)/;
        mmessageErreur = "Erreur dans le format. Exemple viable: 69570 Dardilly";
        break;

      case 4:
        bbalise = 'email';
        bbaliseErreur = 'emailErrorMsg';
        rregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        mmessageErreur = "Erreur dans le format. Exemple viable: xxxx@yyyyy.zzz";
        break;

      default:
      // console.log(`Finito`);
    };

    Ev_contact(bbalise, bbaliseErreur, rregex, mmessageErreur, ii);
  };
};


//v- FONCTION ----------------------------------------
//v- Gestion Attente orderId.
//v-
function Attente_OrderId() {
  let contact = {
    firstName: ar_contact[0], //"Toto",
    lastName: ar_contact[1],  //"Titi",
    address: ar_contact[2],   //"10 rue du pont",
    city: ar_contact[3],      //"lyon",
    email: ar_contact[4]      //"toto@titi.com"
  };
  console.log("contact: ", ar_contact);

  let productId = [];
  // let poub_id_color = "";
  // let poub_id = "";

  // let i = 0;

  for (let i = 0; i < panier.length; i++) {

    // vi- Récupération info dans le panier
    let poub_id_color = panier[i].id;
    let poub_id = poub_id_color.substr(0, 32);
    productId[i] = poub_id;
  };

  console.log("products: ", productId);

  // productId = ["107fb5b75607497b96722bda5b504926",
  //              "415b7cacb65d43b2b5c1ff70f3393ad1",
  //              "055743915a544fde83cfdfc904935ee7"];

  // console.log(cccontact);
  //o- voir fichier dans le répertoire ..Back/controllers/product.js
  let ContactProducts = {
    contact: contact,
    products: productId
  };

  fetch("http://localhost:3000/api/products/order", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify({ value: document.getElementById("value").value })
    // body: JSON.stringify(contact_products)
    body: JSON.stringify(ContactProducts)

    // console.log("01: ");
  })
    .then(function (res) {
      if (res.ok) {
        // console.log("02: ", res.ok);
        // console.log("03: ", res.json());
        // console.log("04: ", res.orderId);
        return res.json();
      }
    })
    .then(function (value) {
      // console.log(`04: ${value.orderId}`);
      setTimeout(function () { document.location.href = `./07_confirmation.html?orderId=${value.orderId}`; }, 5000);
    })
    .catch(function (err) {
      console.log(err);
    });
  // console.log(cccontact);

};


//v- FONCTION ----------------------------------------
//v- Gestion Bouton de commande.
//v- Contrôle que le panier n'est pas vide.
//v- Contrôle que les différents champs de saisie sont valides.
//v-
function Gestion_Bouton_Commande() {

  const oorder = document.getElementById('order');
  const oorderErrorMsg = document.getElementById('orderErrorMsg');

  // oorder.preventDefault();

  // oorder.addEventListener('onclick',
  //   function () {

  //     oorder.preventDefault();
  //   }
  // );


  oorder.addEventListener('click',
    function () {
      // oorder.preventDefault();

      let ook = false;
      ook = ar_contact[5] & ar_contact[6] & ar_contact[7] & ar_contact[8] & ar_contact[9];

      // console.log(ook, " ", ar_contact[5], " ", ar_contact[6], " ", ar_contact[7], " ", ar_contact[8], " ", ar_contact[9]);

      if (qqté != "") {
        if (ook == true) {

          oorderErrorMsg.textContent = "Dans un instant, vous allez être redirigé sur la page de confirmation de votre commande";


          Attente_OrderId();
          //j- mettre en place la créaction de l'objet
          //j- mettre en place l'envoie du post et aller sur la page de confirmation.

          if (false) {
            setTimeout(function () { document.location.href = "./08_confirmation.html"; }, 5000);
          };

          if (false) {
            //   setTimeout(function() {
            //     console.log("I'm here!")
            // }, 5000);
            // setTimeout('RedirectionJavascript()', 20000);
            // j- si numero de cde reçu alors aller a la page confirmation
            document.location.href = "./08_confirmation.html"
            // setTimeout(document.location.href = "./08_confirmation.html", 20000);
          };

        } else {
          oorderErrorMsg.textContent = "Un ou plusieurs champs ne sont pas validés !";
        };
      } else {
        oorderErrorMsg.textContent = "Aucun article n'est présent dans votre panier !";
      }
    }
  );
}

//v- FONCTION ----------------------------------------
//v- Gestion passage sur la page de confirmation.
//v-
// function page_confirmation() { document.location.href = "./08_confirmation.html"; };



//v- *************************************************
//v- Déclaration des Variables Globales.
//v-

let panier = getPanier();

let iid_ccolor = "";
let iid = "";
let ccolor = "";
let nname = "";
let iimage = "";
let aaltTxt = "";
let pprice = 0;
let qqté = "";


let i = 0;
let Ar_price = new Array();


let bbalise = '';
let bbaliseErreur = '';
let rregex = '';
let mmessageErreur = '';
let ar_contact = ["", "", "", "", "", false, false, false, false, false];


//v- *************************************************
//v- Début Programme
//v-
Créaction_Articles_Dans_Dom();
Gestion_Formulaire_De_Contact();
Gestion_Bouton_Commande();

