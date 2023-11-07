import '../style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `

// <img class="mx-auto" src="/assets/stop.svg" width="700" height="128">
`
// <img class="mx-auto" src="/assets/Passarela.svg" width="700" height="128">

setupCounter(document.querySelector('#counter'))
