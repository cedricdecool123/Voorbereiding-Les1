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

//opdracht

const studenten = [
  {
    naam: 'Alin',
    cijfers: [3, 7, 8],
  },
  {
    naam: 'Zana',
    cijfers: [8, 9, 8],
  },
  {
    naam: 'Kyle',
    cijfers: [3, 7, 2],
  },
];

function berekenGemiddelde(studentenLijst) {
  studentenLijst.forEach(element => {
    let gemiddelde = 0;
    let som = 0;

    element.cijfers.forEach(function (cijfer) {
      som += cijfer
    });

    gemiddelde = som / studenten.length;

    if (gemiddelde >= 5.5) {
      console.log(element.naam + "'s gemiddelde: " + gemiddelde);
    };
  });
}

berekenGemiddelde(studenten);