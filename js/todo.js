$(document).ready(function(){
  sumbitForm();
});

function submitForm() {
  $('form').on('submit', function(event) {
    var newItem = $('#item').val();
    $("#list ol").append('<li>newItem</li>');
    event.preventDefault();
  })
}
