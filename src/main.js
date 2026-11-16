import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<section id="center">
  <div>
    <h1>Playground</h1>
  </div>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
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
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
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
