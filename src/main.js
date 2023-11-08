import '../style.css'
import '../Alpinecdn.min.js'

document.querySelector('#app').innerHTML = `
<div x-data="{ showFirstImage: true }">
    <img class="mx-auto" src="/assets/stop.svg" width="700" height="128" x-show="showFirstImage" x-effect="console.log('Showing Image 1')">
    <img class="mx-auto" src="/assets/Passarela.svg" width="700" height="128" x-show="!showFirstImage" x-effect="console.log('Showing Image 2')">
    <button @click="showFirstImage = !showFirstImage">Toggle Image</button>
</div>

`
// <img class="mx-auto" src="/assets/98617.svg" width="700" height="128">
// <img class="mx-auto" src="/assets/Passarela.svg" width="700" height="128">
