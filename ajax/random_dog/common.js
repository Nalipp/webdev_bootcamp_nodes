let btn = document.querySelector("#btn");
let image = document.querySelector("#photo");

btn.addEventListener('click', function() {
  let XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function() {
    if (XHR.readyState === 4) {
      if (XHR.status === 200) {
        let imgUrl = JSON.parse(XHR.responseText).message;
        image.src = imgUrl;
      }
      else alert('There was a problem with the request');
    }
  }

  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();
});
