// creazione variabile container generale dove inserire contenitore griglia
const centerContainer = document.getElementById("centerContainer");

// creazione bottone
const buttonPlay = document.getElementById("buttonPlay");

// quando clicco bottone:
buttonPlay.addEventListener("click",
function() {

    // crea contenitore griglia
    const squaresContainer = document.createElement("div");
    squaresContainer.classList.add("squaresContainer");
    centerContainer.append(squaresContainer);
    //centerContainer.innerHTML += `<div id="squaresContainer"> </div>`
    
    for (let i = 1; i <= 100; i++) {
           

        // creazione contenuti griglia 

        // const square = `<div class="square">
        // ${i}
        // </div>`;

        const square = createSquare("div" , "square")

            
        square.append(i)
        squaresContainer.append(square)    
        
       
        square.addEventListener("click",
       function() {
       square.classList.add("blue")
       console.log(square.innerHTML)
        }
        );
        
    };


    }
);

// quando utente clicca su cella questa si illumina

// FUNZIONI 
function createSquare(tagType , classToAdd){
    const newElement = document.createElement(tagType);
    newElement.classList.add(classToAdd);
    return newElement;
}