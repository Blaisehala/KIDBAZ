///login////
$('form#contactform').submit(function (event) {
    event.preventDefault();
    var email= $('#typeEmailX-2').val();
    var password= $('#typePasswordX-2').val();
     alert("Must be required to enter the following Input;Email and Password");
});