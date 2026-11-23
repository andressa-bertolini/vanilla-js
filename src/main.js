import './style.css'

const today = new Date();
let weekDayCode = today.getDay();
let weekday;

switch(weekDayCode){
  case 0: 
  case 6: 
    weekday = 'weekend';
    break;
  default:
    weekday = 'weekday';
}

document.querySelector('#app').innerHTML = `
<section id="center">
  <div>
    <h1>Today is: ${weekday}</h1>
  </div>
</section>

<section id="spacer"></section>
`

setupCounter(document.querySelector('#counter'))
