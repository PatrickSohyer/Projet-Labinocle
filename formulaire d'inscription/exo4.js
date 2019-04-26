/* Pour vérifier que la confirmation du mot de passe correspond au premier mot de passe. Les alert sont ici facultatives. */

function checkPassword(){
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  if (password == "") {
    document.getElementById("password").style.border="solid 1px red";
    document.getElementById("confirmPassword").style.border="solid 1px red";
    alert("Veuillez entrer votre mot de passe dans le premier champs !");
  } else if (confirmPassword == "") {
    document.getElementById("password").style.border="solid 1px green";
    document.getElementById("confirmPassword").style.border="solid 1px red";
    alert("Veuillez entrer votre mot de passe dans le second champs !");
  } else if (password != confirmPassword) {
    document.getElementById("confirmPassword").style.border="solid 1px red";
    alert("Confirmation du mot de passe invalide");
  } else {
    document.getElementById("password").style.border="solid 1px green";
    document.getElementById("confirmPassword").style.border="solid 1px green";
    alert("YEAH");
  }
}
