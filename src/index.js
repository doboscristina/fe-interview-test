import './styles.css';

document.getElementById('myName').innerHTML = 'Alexandra Lincar';

var chocolateObject;

function getObject() {
  chocolateObject = JSON.parse(this.responseText);
  for (var i = 0; i < chocolateObject.length; i++) {
    var li = document.createElement('li');
    document.getElementById('unordered').appendChild(li);
    li.innerHTML = li.innerHTML + chocolateObject[i].price;
  }
}

var getResponse = new XMLHttpRequest();
getResponse.addEventListener('load', getObject);
getResponse.open('GET', 'https://5d93a214e020b300147dafad.mockapi.io/candies');
getResponse.send();
