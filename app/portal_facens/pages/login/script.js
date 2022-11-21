function validateForm() {
  var username = document.forms["loginEmail"]["email"].value;
  var password = document.forms["loginEmail"]["senha"].value;


  if ((username == "223635@facens.br") && (password == "bruna_antunes")) {
    window.location.href = '../main/home/home.html';
    return false;
  }
  else if((username == "222545@facens.br") && (password == "diego_isaquiel")){
    window.location.href = '../main/second-student-page/second-student-page.html';
    return false;
  }
  else {
    alert("Não foi possível fazer Login. Cheque as credenciais e tente novamente!");
  }

}