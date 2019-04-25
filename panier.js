$('.btnPay').click(function() { // ajout article sur le AJOUTER PANIER
  var $this = $(this);
  var $article = $(this).closest('article'),
    nom = $article.find('.h5').html(),
    description = $article.data('ref'),
    price = $article.data('price');
    console.log(price);

  $(function() {
        $('#cart>ul>li>.plus').click(function() {
          $('#ajout').html(function(i, val) {
            return ajout.value = val * 1 + 1;
          });
        });
      });
          $(function() {
        $('li>.minus').click(function() {
          $('#ajout').html(function(i, val) {
            if (ajout.value >1){
            return ajout.value = val * 1 - 1;
            }
            if (ajout.value = 1){
              return ajout.value = 1;
            }
          });
        });
      });
  console.log('nom, description, prix : ' + nom, description, price);
  var $li = $('<li data-price="' + price + '"></li>');
  $li.html(nom + '  Réf : ' + description + '  Prix :  ' + price + ' €' +  '<i class="minus fas fa-minus"></i>' + '<input id="ajout" type="text" value="1" size="1">' + '<i class="plus fas fa-plus"></i>' + '  <i class="deleted fas fa-trash-alt"></i>' + 'Sous total : ').appendTo($('#cart>ul'));

computePrice();

if (current = 1){
    $(this).unbind("click");
}

  $('#cart>ul>li>.deleted').click(function() { // Fonction sur la liste des articles
    $(this).parent().remove();
    var product = $(this).data('price');
    console.log('Prix à retirer ' + product);
    //2 chiffres après virgule
    computePrice();
  });





  /* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });
}


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

function sousTotal() { //Fonction pour calculer le prix total
  var sousTotalPrice = 0;
  $("#cart li").each(function(key, val) {
    var $product = $(val)
    sousTotalPrice += $product.data("price");
  });
  $(".pay").data("total", sousTotalPrice).children(".total").html(sousTotalPrice); // Permet d'afficher le total
};