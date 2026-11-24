import './style.css'

//transforme em loop
//text += cars[0] + "<br>";
//text += cars[1] + "<br>";
//text += cars[2] + "<br>";
//text += cars[3] + "<br>";
//text += cars[4] + "<br>";
//text += cars[5] + "<br>";

let text = "";
let cars = ["1","2","3","4","5","6"];

for(let i=0; i < cars.length; i++){
  text += cars[i] + "<br />";
}


document.querySelector('#app').innerHTML = `
<section id="center">
  <div>
    <h1>${text}</h1>
  </div>
</section>

<section id="spacer"></section>
`