import './style.css'
//This example uses the weekday number to calculate the weekday name:

const today = new Date();
let weekDayCode = today.getDay();
let weekday;

switch(weekDayCode){
  case 0: 
    weekday = 'Sunday';
    break;
  case 1: 
    weekday = 'Monday';
    break;
  case 2: 
    weekday = 'Tuesday';
    break;
  case 3: 
    weekday = 'Wednesday';
    break;
  case 4: 
    weekday = 'Thursday';
    break;
  case 5: 
    weekday = 'Friday';
    break;
  case 6: 
    weekday = 'Saturday';
    break;
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
