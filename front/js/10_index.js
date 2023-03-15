
let url = "http://localhost:3000/api/products/";

let Myfetch = fetch(url)
  .then(
    (responsive) => responsive.json()
      .then(
        (data) => {

          //o- if pour indentation
          if (true) {
            //v- repérage Id auquels on va rajouter les balises dans le DOM
            const id_items = document.getElementById('items');

            for (let i of data) {
              //v- créaction balise a------------------------------------------
              const balise_a = document.createElement("a");
              balise_a.href = `./09_product.html?id=${i._id}`;

              //v- creaction balise article -----------------------------------
              const balise_article = document.createElement("article");
              balise_a.appendChild(balise_article);

              //o- if pour indentation
              if (true) {
                //v- creaction balise img -------------------------------------
                altTxt = i.altTxt + ', ' + i.name;

                const balise_image = document.createElement("img");
                balise_image.src = i.imageUrl;
                balise_image.alt = altTxt;
                balise_article.appendChild(balise_image);

                //v- creaction balise h3 --------------------------------------
                const balise_h3 = document.createElement("h3");
                balise_h3.className = i.name;
                balise_h3.textContent = i.name;
                balise_article.appendChild(balise_h3);

                //v- creaction balise p ---------------------------------------
                const balise_p = document.createElement("p");
                balise_p.textContent = i.description;
                balise_article.appendChild(balise_p);
              }

              id_items.appendChild(balise_a);
            }
          }
        }
      )
      .catch((err) => console.log(`erreur: ` + err))
  );



