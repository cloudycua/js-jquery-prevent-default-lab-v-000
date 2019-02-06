$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(event){
    var name = $('#item').val();
    $("#list").append('<li>item</li>');
    event.preventDefault();
  });
}
