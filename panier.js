var lunettes1 = 0;
var lunettes2 = 0;
var lunettes3 = 0;

$("#panier").hide();
$("#commande1").hide();
$("#commande2").hide();
$("#commande3").hide();

$("#btn1").click(function() {
lunettes1++;
});

$("#btn2").click(function() {
lunettes2++;
});


// Afficher la modal panier

$("#pay").click(function() {
  $("#panier").show();
if (lunettes1 >= 1) {
$("#commande1").show();
}

if (lunettes2 >= 1) {
  $("#commande2").show();
}
});
