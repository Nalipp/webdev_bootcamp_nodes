let errorMessage = document.querySelector(".errorMessage");
let btn = document.querySelector(".footer");
let fullname = document.querySelector("#fullname")
let username = document.querySelector("#username")
let email = document.querySelector("#email")
let city = document.querySelector("#city")
let avatar = document.querySelector("#avatar")

btn.addEventListener('click', function() {
  fetch("https://randomuser.me/api/")
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
  return res.json().then((data) => {
    return data.results[0];
  })
}

function updatePage(data) {
  console.log(data);
  let name = data.name;
  let login = data.login;
  let contact = data;
  let location = data.location;
  let pictureUrl = data.picture.medium;

  fullname.innerHTML = `${name.first} ${name.last}`;
  username.innerHTML = login.username;
  email.innerHTML = contact.email;
  city.innerHTML = location.city;
  avatar.src = pictureUrl;
}

function printError(error) {
  console.log(error); 
  errorMessage.style.marginLeft = "0px";
  errorMessage.innerHTML = error;
  document.addEventListener('click', function() {
    errorMessage.style.marginLeft = '10000px';
  });
}
