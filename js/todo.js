$(document).ready(function(){
  sumbitForm();
});

function submitForm() {
  $('form').on('submit', function(event) {
    var newItem = $('#item').val();
    debugger;
    $("#list ol").text("hello");
    event.preventDefault();
  })
}
