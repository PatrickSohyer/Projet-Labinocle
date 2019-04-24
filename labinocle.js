$('a').click(function() { // ajout article sur le AJOUTER PANIER
  var $this = $(this);
  var $article = $(this).closest('article'),
    nom = $article.find('h1').html(),
    description = $article.find('p').html(),
    price = $article.data('price');
  console.log('nom, description, prix : ' + nom, description, price);
  var $li = $('<li data-price="' + price + '"></li>');
  $li.html(nom + price + '€ -' + description + '<i class="fas fa-trash-alt"></i>').appendTo($('#cart>ul'));
  computePrice();

  $('#cart>ul>li>i').click(function() { // Fonction sur la liste des articles
var li = ('i').parent('li');
    $(i).remove();
    var product = $(this).data('price');
    console.log('Prix à retirer ' + product);
    //2 chiffres après virgule
    computePrice();
  });
});

$("#pay").click(function() {
  var price = $('.pay').data("total");
  if (price == undefined) {
    price = 0.00;
  }
  alert("Votre commande est de " + price + "€ !");
});

function computePrice() { //Fonction pour calculer le prix total
  var totalPrice = 0;
  $("#cart li").each(function(key, val) {
    var $product = $(val)
    totalPrice += $product.data("price");
  });
  $(".pay").data("total", totalPrice).children(".total").html(totalPrice); // Permet d'afficher le total
};
