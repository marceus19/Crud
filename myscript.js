document.addEventListener('DOMContentLoaded', (event) => {
  var uidV, snameV, mnameV, lnameV, addressV, emailV;

  function readFom() {
    uidV = document.getElementById("uniqueid").value;
    snameV = document.getElementById("surname").value;
    mnameV = document.getElementById("midname").value;
    lnameV = document.getElementById("lastname").value;
    addressV = document.getElementById("address").value;
    emailV = document.getElementById("email").value;
    console.log(uidV, snameV, mnameV, lnameV, addressV, emailV);
  }

  document.getElementById("insert").onclick = function () {
    readFom();

    firebase
      .database()
      .ref("student/" + uidV)
      .set({
        uniqueid: uidV,
        surname: snameV,
        midname: mnameV,
        lastname: lnameV,
        address: addressV,
        email: emailV,
      });
    alert("Data Inserted");
    document.getElementById("uniqueid").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("midname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
  };

  document.getElementById("read").onclick = function () {
    readFom();

    firebase
      .database()
      .ref("student/" + uidV)
      .on("value", function (snap) {
        document.getElementById("uniqueid").value = snap.val().uniqueid;
        document.getElementById("surname").value = snap.val().surname;
        document.getElementById("midname").value = snap.val().midname;
        document.getElementById("lastname").value = snap.val().lastname;
        document.getElementById("address").value = snap.val().address;
        document.getElementById("email").value = snap.val().email;
      });
  };

  document.getElementById("update").onclick = function () {
    readFom();

    firebase
      .database()
      .ref("student/" + uidV)
      .update({
        surname: snameV,
        midname: mnameV,
        lastname: lnameV,
        address: addressV,
        email: emailV,
      });
    alert("Data Updated");
    document.getElementById("uniqueid").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("midname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
  };

  document.getElementById("delete").onclick = function () {
    readFom();

    firebase
      .database()
      .ref("student/" + uidV)
      .remove();
    alert("Data Deleted");
    document.getElementById("uniqueid").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("midname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
  };
});
