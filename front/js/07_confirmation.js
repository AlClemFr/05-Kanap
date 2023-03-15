//v- Récupération lien courant.
let urlCourant = window.location.href;
// console.log(urlCourant);
// fctVisu(true, 2, urlCourant);

//v- Récupération Id procduit dans le lien.
let urlCourantBis = new URL(urlCourant);
let orderId = urlCourantBis.searchParams.get("orderId");
// fctVisu(true, 3, orderId);

//v- Affichage de orerId.
let oorderId = document.getElementById('orderId');
oorderId.textContent = orderId;
