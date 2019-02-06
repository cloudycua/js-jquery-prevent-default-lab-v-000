$(document).ready(function(){
  sumbitForm()
});

function submitForm() {
  $('form').on('submit', function(event) {
    var item = $('#item').val()
    $("#list ol").append('<li>item</li>')
  })
}
