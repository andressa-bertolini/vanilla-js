import './style.css'
import { setupCounter } from './counter.js'

const status = "ok";
let message;

switch(status){
  case "ok":
    message = "Order received.";
    break;
  default: 
   message = "Order canceled.";
}

document.querySelector('#app').innerHTML = `
<section id="center">
  <div>
    <h1>Order status: ${message}</h1>
  </div>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <h2>Falsy</h2>
    <ul>
      <li>
        Null
      </li>
      <li>
        Undefined
      </li>
      <li>
        NaN
      </li>
      <li>
        0
      </li>
      <li>
        " "
      </li>
    </ul>
  </div>
  <div id="social">
    <h2>Truthy</h2>
    <ul>
      <li>"0"</li>
      <li>"false"</li>
      <li>{}</li>
      <li>[]</li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector('#counter'))
