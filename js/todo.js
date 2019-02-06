$(document).ready(function(){
  submitForm();
});

function submitForm() {
  $('form').on('submit', function(event){
    var name = $('#item').val();
    $("#list ol").append('<li>item</li>');
    event.preventDefault();
  });
}
