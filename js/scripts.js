$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    alert("Name you entered is " + name);

  });

});