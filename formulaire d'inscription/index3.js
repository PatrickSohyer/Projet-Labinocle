var regexName = /^[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜç']{3,15}[\-']?[a-zA-ZéèÉÈôîêûÛÊÔÎùÙïöëüËÏÖÜç]{0,15}$/;
var regexPhone = /^[0-9]{9}$/;
var regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// console.log(regexName.test($("#lastName").val())); // test syntaxe regex ok

$("#submit").click(function() {

  if (!regexName.test($("#lastName").val())) {
    alert("Vous avez fait une erreur dans le nom.");
    $("#lastName").css("border", "solid red 1px");
  }

  if (!regexName.test($("#firstName").val())) {
    alert("Vous avez fait une erreur dans le prénom.");
    $("#firstName").css("border", "solid red 1px");
  }

  if (!regexPhone.test($("#phone").val())) {
    alert("Vous avez fait une erreur dans le numéro de téléphone.")
    $("#phone").css("border", "solid red 1px");
  }

  if (!regexMail.test($("#mail").val())) {
    alert("Vous avez fait une erreur dans l'addresse e-mail.")
    $("#mail").css("border", "solid red 1px");
  }

});
