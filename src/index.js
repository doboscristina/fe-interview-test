document.getElementById("title").innerHTML = "Hello, Oana!";
document.getElementById("response").innerHTML = getResponse();

function getResponse() {
  const Http = new XMLHttpRequest();
  const url = "https://5d93a214e020b300147dafad.mockapi.io/candies";
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = e => {
    generateList(Http.responseText);
    // document.getElementById("response").innerHTML = Http.responseText;
  };
}

function getListFromJson(text) {
  return JSON.parse(text);
}

function generateList(text) {
  const listContainer = document.getElementById("response-ul");
  const items = document.createElement("ul");
  const list = getListFromJson(text);

  for (var i = 0; i < list.length; i++) {
    const id = document.createElement("li");
    id.innerHTML = list[i].id;
    items.appendChild(id);

    const brand = document.createElement("li");
    brand.innerHTML = list[i].brand;
    items.appendChild(brand);

    // document.getElementById("response").innerHTML = list[i].id;
  }

  listContainer.appendChild(items);
}
