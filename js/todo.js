$(document).ready(function(){
  sumbitForm();
});

function submitForm() {
  $('form').on('submit', function(event){
    var name = $('#item').val();
    $("#list").text("Hello, " + item);
    event.preventDefault();
  });
}
