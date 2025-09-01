import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

//Simpele function
const HONDEN = 17;
let katten = 15;

function berekenAantalDieren(honden, katten, hamsters) {
    return honden + katten + hamsters;
}

console.log(berekenAantalDieren(HONDEN, katten, 32)); //console.log is een soort print()

//Arrays
const lijstje = [5, 2, 4, 8];
lijstje.push(10); //dit wordt aan lijstje toegevoegd

for (let i = 0; i < lijstje.length; i++) {
    console.log(lijstje[i]);
}

for (let cijferke of lijstje) {
    //dit is een soort foreach loop
}

//Classes
//aanmaken klasse manier 1
class BerkenenSum {
    sum(a, b) {
        return a + b;
    }
}

const berkenSum = new BerkenenSum; //klasse aanmaken
let uitkomst1 = berkenSum.sum(20, 10);
console.log(uitkomst);

//aanmaken klasse manier 2
const berekenSum2 = {
    appels: 4,
    peren: 5,
    sum: function (a, b) {
        return a + b;
    }
};

let uitkomst2 = berekenSum2.sum(20, 10);
console.log(uitkomst2);

//for .. of --> voor arrays als een soort foreach
//for .. in --> voor objecten met een key en value

for (let key in berekenSum2) {
    console.log("key: " + key + ", Waarde: " + berekenSum2[key]);
}