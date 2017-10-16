let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

$('#axios').click(function() {
  axios.get(url)
    .then(updatePageAxios)
    .catch(errorHandling)
});

$('#jquery').click(function() {
  $.getJSON(url)
    .then(updatePage)
    .catch(errorHandling)
});

$('#fetch').click(function() {
  fetch(url)
    .then(returnJson)
    .then(updatePage)
    .catch(errorHandling)
});

$('#xhr').click(function() {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        updatePageXhr(xhr.responseText);
      }
      else errorHandling('there was an error with the api request');
    }
  }
  xhr.open('GET', url);
  xhr.send();
});

function returnJson(res) {
  return res.json();
}

function updatePageAxios(res) {
  $('#quote').text(res.data[0]);
}
function updatePage(res) {
  $('#quote').text(res);
}
function updatePageXhr(res) {
  $('#quote').text(JSON.parse(res)[0]);
}

function errorHandling(e) {
  $('#quote').text('Something went wrong');
}
