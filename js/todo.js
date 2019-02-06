$(document).ready(function(){
  sumbitForm()
});

function submitForm() {
  $('form').on('submit', function(event) {
    var item = $('#item').val()
    $("#list ul").append('<li>item</li>')
  })
}
