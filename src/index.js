import "./styles.css";

fetch('https://5d93a214e020b300147dafad.mockapi.io/candies')
.then(response => response.json())
.then(data => {
  console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))
