// creazione variabile container generale
const centerContainer = document.getElementById("centerContainer");



// comparsa griglia sul click
const buttonPlay = document.getElementById("buttonPlay");

buttonPlay.addEventListener("click",
function() {

    centerContainer.innerHTML += `<div id="squaresContainer"> </div>`
    
    for (let i = 1; i <= 100; i++) {
           

        // creazione contenuti griglia 
        const square = `<div class="square">
        ${i}
        </div>`;
        
        
        squaresContainer.innerHTML += square;     
    };

    }
);