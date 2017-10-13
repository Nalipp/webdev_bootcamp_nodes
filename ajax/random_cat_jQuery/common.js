$("button").click(function() {
  $.ajax({
    method: "GET",
    url: "http://random.cat/meow",
    dataType: 'json'
  })
  .done(updatePage)
  .fail(printError)
});

function updatePage(res) {
  console.log(res.file)
  $("img").attr('src', res.file);
}

function printError(error) {
  console.log(error);
  $("p").html('there was an error');
}
