
//v- Récupération lien courant.
let urlCourant = window.location.href;

//v- Récupération Id procduit dans le lien.
let urlCourantBis = new URL(urlCourant);
let id = urlCourantBis.searchParams.get("id");

//v- Récupération des datas associées à l'Id
let url = "http://localhost:3000/api/products/" + id;

//v- Récupération des inforamtions de l'article dans l'API
let Myfetch = fetch(url)
  .then(
    (responsive) => responsive.json()
      .then(
        (data) => {

          //o- if pour indentation
          if (true) {

            let total = "";

            //v- mise en place de nom de l'article
            document.querySelector('#title').innerHTML = data.name;

            //v- mise en place de la balise image avec l'image, son descriptif et son nom
            let altTxt = data.altTxt + ', ' + data.name;
            total = `
            <img src="` + data.imageUrl + `" alt= "` + altTxt + `"></img>`

            document.querySelector('.item__img').innerHTML = total;

            //v- mise en place du nom dans la balise h1      
            document.querySelector('#title2').innerHTML = data.name;

            //v- mise en place du prix dans la balise p
            //v- mettre en place la vigule, Fait OK     
            let poub = parseFloat(data.price);
            poub /= 10;
            console.log(poub);

            let price = poub.toString();

            document.querySelector('#price').innerHTML = price;

            //v- mise en place de la description de l'article  
            document.querySelector('#description').innerHTML = data.description;

            //v- mise en place de la liste des couleurs associées à l'article  
            let i = 0;
            total = "";
            let color = "";

            for (i; i < data.colors.length; i++) {
              color = data.colors[i];
              total += `<option value="` + color + `">` + color + `</option>`;
            }
            document.querySelector('#colors').innerHTML = total;
          }
        }
      )
      .catch((err) => console.log(`erreur: ` + err))
  );


//v- récupération des champs ou bouton à surveiller
const colors = document.getElementById('colors');
const quantity = document.getElementById('quantity');
const addToCard = document.getElementById('addToCart');


//v- surveillance de l'évenement "hors champs"
quantity.addEventListener('focusout', function () {

  if (quantity.value > 100 ||
    quantity.value < 0 ||
    quantity.value == "") {

    quantity.value = 0;
  }
}
);


// v- surveillance de l'évenement "clic" sur le bouton addtoCard
addToCard.addEventListener('click', function () {

  if (quantity.value <= 100 &
    quantity.value > 0) {

    let toto = id + "-" + colors.value;
    // v- Stockage ID+color, quantité dans le Local Storage
    addPanier({ id: toto, "quantity": parseInt(quantity.value) });
  }
}
);
