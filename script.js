$(document).ready(function(){
  $("#contactForm").submit(function(e){
    e.preventDefault();
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();

    if(name === "" || email === "" || message === ""){
      alert("Please fill all fields.");
    } else {
      $("#contactForm").fadeOut(300, function(){
        $(this).html("<h4 class='text-center'>Thank you, " + name + "! Your message has been sent.</h4>").fadeIn(300);
      });
    }
  });
});
