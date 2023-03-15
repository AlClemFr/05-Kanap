"use strict";

var url = "http://localhost:3000/api/products/";
var Myfetch = fetch(url).then(function (responsive) {
  return responsive.json().then(function (data) {
    //o- if pour indentation
    if (true) {
      //v- repérage Id auquels on va rajouter les balises dans le DOM
      var id_items = document.getElementById('items');
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;
          //v- créaction balise a------------------------------------------
          var balise_a = document.createElement("a");
          balise_a.href = "./09_product.html?id=".concat(i._id); //v- creaction balise article -----------------------------------

          var balise_article = document.createElement("article");
          balise_a.appendChild(balise_article); //o- if pour indentation

          if (true) {
            //v- creaction balise img -------------------------------------
            altTxt = i.altTxt + ', ' + i.name;
            var balise_image = document.createElement("img");
            balise_image.src = i.imageUrl;
            balise_image.alt = altTxt;
            balise_article.appendChild(balise_image); //v- creaction balise h3 --------------------------------------

            var balise_h3 = document.createElement("h3");
            balise_h3.className = i.name;
            balise_h3.textContent = i.name;
            balise_article.appendChild(balise_h3); //v- creaction balise p ---------------------------------------

            var balise_p = document.createElement("p");
            balise_p.textContent = i.description;
            balise_article.appendChild(balise_p);
          }

          id_items.appendChild(balise_a);
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
    }
  })["catch"](function (err) {
    return console.log("erreur: " + err);
  });
});