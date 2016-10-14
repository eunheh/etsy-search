//total number of items in data = Results number
var numberResult = data.count
$(".resultCount").html(`(${numberResult} Results)`);

var title = data.results[0].title;
var shop = data.results[0].Shop.shop_name;
var price = data.results[0].price;
var url = data.results[0].url;
var picture = data.results[0].Images[0].url_170x135;

//NEEDED ON EACH BOARD
//four visible arguments: images => image, title, shop => shop name, price
//links to its designated item page
//when you hover over the image, it gives you a heart & hamburger

// //it's a 4 by 4 = 16 squares

function renderBox (item) {
  return ` <div class ="item">
  <img class="picture" src="${item.Images[0].url_170x135}">
  <div class='title'> ${item.title}</div>
  <div class="shop"> ${item.Shop.shop_name}</div>
  <div class="price"> $${item.price}</div>
  <a class="link" href="${item.url}">
  </div>
  `;
};

var spacesHTML = "";
for (var i = 0; i < data.results.length; i++) {
  var newHTML = renderBox(data.results[i]);
  spacesHTML = spacesHTML + newHTML;
}

$(".items").html(spacesHTML);
