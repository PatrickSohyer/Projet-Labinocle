

var regexName = /^[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ']{2,15}[- ']?[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜ]{0,15}$/;
var regexPhone = /^[0-9]{9}$/;
var regexDate = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
var regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// console.log(regexName.test($("#lastName").val())); // test syntaxe regex ok


// Si utilisation d'un formulaire à la place de la div dans le html, il cherche à renvoyer des données, ce qui est impossible, du coup le refresh de la page bloque la continuité de la fonction. Donc pour que ça fonctionne avec un formulaire (ici), il faut empêcher de rafraîchir la page avec preventDefault(); exemple : $("#submit).submit(function(e) { e.preventDefault(); });
$("#submit").click(function() {

  if (!regexName.test($("#lastName").val())) {
    alert("Vous avez fait une erreur dans le nom.");
    $("#lastName").css("border", "solid red 1px");
  }

else if (!regexName.test($("#firstName").val())) {
    alert("Vous avez fait une erreur dans le prénom.");
    $("#firstName").css("border", "solid red 1px");
  }

else if (!regexDate.test($("#date").val())) {
    alert("Vous avez fait une erreur dans la date de naissance.")
    $("#date").css("border", "solid red 1px");
  }

else if (!regexName.test($("#origin").val())) {
    alert("Vous avez fait une erreur dans le lieu de naissance.")
    $("#origin").css("border", "solid red 1px");
  }

else if (!regexName.test($("#job").val())) {
    alert("Vous avez fait une erreur dans l'emploi.");
    $("#job").css("border", "solid red 1px");
  }

  else if (!regexName.test($("#cie").val())) {
    alert("Vous avez fait une erreur dans le nom de la société.");
    $("#cie").css("border", "solid red 1px");
  }  else {
$("#register_form").hide();
$("#submit").hide();

var lastName = $("#lastName").val();
var firstName = $("#firstName").val();
var origin = $("#origin").val();
// Méthode pour transformer la date réceptionnée par l'ordi en format américain et l'afficher en format français.
var date = $("#date").val();
var event = new Date(date);
var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
var frenchDate = event.toLocaleDateString("fr-FR", options);

var work = $("#job").val();
var job = (work.toLowerCase());

var cie = $("#cie").val();

alert(firstName + " " + lastName + ", né le " + frenchDate + " à " + origin + ", actuellement " + job + " à " + cie + ".");

}

//
// alert($("#firstName").val() + $("#lastName").val() + $("#date").val() + $("#origin").val() + "actuellement" + $("#job").val() + "à" + $("#cie").val());

});
