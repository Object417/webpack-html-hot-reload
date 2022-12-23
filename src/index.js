import img1 from "../assets/imgs/1.jpg"
import "./index.css"

const $card = document.createElement("div")
$card.classList.add("card")

$card.innerHTML = `
  <img src=${img1} alt="import ../assets/imgs/1.jpg">
  <p>Image imported and rendered by Javascript.</p>
`
document.querySelector("body > .container").append($card)

console.log(true)
