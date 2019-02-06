$(document).ready(function(){
  sumbitForm()
});

function submitForm() {
  $('form').on('submit', function(event) {
    var item = $('#item').val()
    $("#list ul").append('<li><a href="/user/messages"><span class="tab">Message Center</span></a></li>')
  })
}
