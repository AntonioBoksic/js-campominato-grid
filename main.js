// creazione variabile container in cui andranno le immagini
const squaresContainer = document.getElementById("squaresContainer");




for (let i = 1; i <= 100; i++) {
           
    const square = `<div class="square">
    ${i}
    </div>`;
            
    squaresContainer.innerHTML += square;
            
};