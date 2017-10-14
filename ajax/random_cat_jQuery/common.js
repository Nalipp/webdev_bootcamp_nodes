$("button").click(function() {
  $.getJSON({
    method: "GET",
    url: "http://random.cat/meow"
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
