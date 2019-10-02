import "./styles.css";
import axios from "axios";
document.getElementById("myName").innerHTML = "Hello, Gratian Muntean!";

const list = document.getElementById("unordered");
const resp = axios
  .get("https://5d93a214e020b300147dafad.mockapi.io/candies")
  .then(res => {
    console.log(res);
    console.log(res.data);
    if (res.data) {
      res.data.map((el, i) => {
        const element = document.createElement("LI");
        const text = document.createTextNode(el.brand);
        element.appendChild(text);
        list.appendChild(element);
      });
    }

    return res.json();
  });
