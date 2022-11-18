function validateForm() {
  var username = document.forms["loginEmail"]["email"].value;
  var password = document.forms["loginEmail"]["senha"].value;


  if ((username == "223835@facens.br") && (password == "bruna_antunes")) {
    window.location.href = '../main/home/home.html';
    return false;
  }
  else {
    alert("Não foi possível fazer Login. Cheque as credenciais e tente novamente!");
  }

}