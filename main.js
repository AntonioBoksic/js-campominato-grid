// creazione variabile container generale
const centerContainer = document.getElementById("centerContainer");

// creazione bottone
const buttonPlay = document.getElementById("buttonPlay");

// quando clicco bottone:
buttonPlay.addEventListener("click",
function() {

    // crea contenitore griglia
    centerContainer.innerHTML += `<div id="squaresContainer"> </div>`
    
    for (let i = 1; i <= 100; i++) {
           

        // creazione contenuti griglia 
        const square = `<div class="square">
        ${i}
        </div>`;

            
 
        squaresContainer.innerHTML += square;     
        
        // 
        square.addEventListener("click",
        function() {
          square.classList.add("blue")
        }
        );
        //
    };


    }
);

// quando utente clicca su cella questa si illumina
