import "../style.css";
import "../Alpinecdn.min.js";

document.querySelector("#app").innerHTML = `
<div x-data="{ showFirstImage: true }" x-on:wheel="${onMouseScroll}($event)">
    <img class="mx-auto" src="/assets/stop.svg" width="700" height="128" x-show="showFirstImage">
    <img class="mx-auto" src="/assets/Passarela.svg" width="700" height="128" x-show="!showFirstImage">
</div>
`;

function onMouseScroll(event) {
    if (event.deltaY > 0) {
        showFirstImage = !showFirstImage;
        console.log('Toggled image using mouse scroll');
    }
}


// <img class="mx-auto" src="/assets/98617.svg" width="700" height="128">
// <img class="mx-auto" src="/assets/Passarela.svg" width="700" height="128">
