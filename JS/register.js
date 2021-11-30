

document.getElementById("registrationForm").addEventListener('submit', validateAll);

function validateAll(event) {

  let anyError = false;

  if (document.getElementById("validationCustomUsername").value.length == 0) {
    anyError = true;
    document.getElementById("error-nwl1").innerHTML = "Please choose a username";
    document.getElementById("error-nwl1").style.display = "";

  }
  else {
    document.getElementById("error-nwl1").style.display = "none"
  }

  if (document.getElementById("validationCustomPassword").value.length == 0) {
    anyError = true;
    document.getElementById("error-nwl2").innerHTML = "Please choose a password";
    document.getElementById("error-nwl2").style.display = "";

  } else if (document.getElementById("validationCustomPassword").value.length <= 7) {
    anyError = true;
    document.getElementById("error-nwl2").innerHTML = "Password must be at least 8 symbols long";
    document.getElementById("error-nwl2").style.display = "";

  }
  else {
    document.getElementById("error-nwl2").style.display = "none"
  }

  if (document.getElementById("validationRetypePassword").value.length == 0) {
    anyError = true;
    document.getElementById("error-nwl3").innerHTML = "Please retype password";
    document.getElementById("error-nwl3").style.display = "";
  }

  else if (document.getElementById("validationCustomPassword").value != document.getElementById("validationRetypePassword").value) {
    anyError = true;
    document.getElementById("error-nwl3").innerHTML = "Password must match";
    document.getElementById("error-nwl3").style.display = "";

  }
  else {
    document.getElementById("error-nwl3").style.display = "none"
  }

  if (document.getElementById("validationCustomFirstName").value.length == 0) {
    anyError = true;
    document.getElementById("error-nwl4").innerHTML = "Please write your name";
    document.getElementById("error-nwl4").style.display = "";

  }
  else {
    document.getElementById("error-nwl4").style.display = "none"
  }

  if (document.getElementById("validationCountry").value == "") {
    anyError = true;
    document.getElementById("error-nwl5").innerHTML = "Please select a country";
    document.getElementById("error-nwl5").style.display = "";

  }
  else {
    document.getElementById("error-nwl5").style.display = "none"
  }

  if (document.getElementById("invalidCheck").checked != true) {
    anyError = true;
    document.getElementById("error-nwl6").innerHTML = "You must agree before submitting";
    document.getElementById("error-nwl6").style.display = "";

  }
  else {
    document.getElementById("error-nwl6").style.display = "none"
  }

  if (anyError) {
    event.preventDefault()
    event.stopPropagation()
  }
}
