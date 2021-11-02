// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function saveContact() {
  if (typeof Storage !== "undefined") {
    // Store
    let setContact = [];
    setContact[0] = document.getElementById("fullname").value;
    localStorage.setItem("contact_server", JSON.stringify(setContact));

    setContact[1] = document.getElementById("email").value;
    localStorage.setItem("contact_server", JSON.stringify(setContact));

    setContact[2] = document.getElementById("phone").value;
    localStorage.setItem("contact_server", JSON.stringify(setContact));

    setContact[3] = document.getElementById("nationality").value;
    localStorage.setItem("contact_server", JSON.stringify(setContact));

    setContact[4] = document.getElementById("message").value;
    localStorage.setItem("contact_server", JSON.stringify(setContact));
  }
}

function getContact() {
  // Retrieve
  let getContact = JSON.parse(localStorage.getItem("contact_server"));
  document.getElementById("fullname-localServer").innerHTML = getContact[0];
  document.getElementById("email-localServer").innerHTML = getContact[1];
  document.getElementById("phone-localServer").innerHTML = getContact[2];
  document.getElementById("nationality-localServer").innerHTML = getContact[3];
  document.getElementById("msg-localServer").innerHTML = getContact[4];
}
