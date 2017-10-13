let btn = document.querySelector("button");
let price = document.querySelector("#price");

btn.addEventListener('click', function() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then(handleErrors)
  .then(parseJSON)
  .then(updatePage) 
  .catch(printError);
});

function handleErrors(res) {
  if (!res.ok) throw Error(res.status);
  else return res;
}

function parseJSON(res) {
  return res.json();
}

function updatePage(data) {
  let usdData = data.bpi.USD.rate;
  price.innerHTML = usdData;
}

function printError(error) {
  console.log(error); 
  price.innerHTML = error;
}
