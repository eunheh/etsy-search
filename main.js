//total number of items in data and place results on page
var number = data.count;
var numberResult = number.toLocaleString('en')
$(".resultCount").html(`(${numberResult} Results)`);

//NEEDED ON EACH Box
//four visible arguments: images => image, title, shop => shop name, price,
//links to its designated item page
//a heart & hamburger show upon hoverage over the item

var title = data.results[0].title;
var shop = data.results[0].Shop.shop_name;
var price = data.results[0].price;
var url = data.results[0].url;
var picture = data.results[0].Images[0].url_170x135;

function renderBox (item) {
  return ` <div class ="item"><a class="link" href="${item.url}">
  <img class="picture" src="${item.Images[0].url_170x135}">
  <img class="heart" src="./assets/heart.png">
  <img class="hamburger" src="./assets/hamburger.png">
  <div class='title'> ${item.title}</div>
  <div class="shop"> ${item.Shop.shop_name}</div>
  <div class="price"> $${item.price}</div>
  </a></div>  `;
};

//i < data.results.length (for it to loop over all the data)
var spacesHTML = "";
for (var i = 0; i < 16; i++) {
  var newHTML = renderBox(data.results[i]);
  spacesHTML = spacesHTML + newHTML;
}

$(".items").html(spacesHTML);

//to place the "looking for" sentence onto HTML
$(".lookingFor").html(`Looking for shops?  <span class="blueFont"> CardsandMoorebyTerri, CardsByKooper, CardsByLela. See more.</span>`)
