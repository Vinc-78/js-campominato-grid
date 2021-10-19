

const selezionaLivello = document.getElementById("selezione-difficolta");
const btnStart = document.getElementById("start-game");
const board = document.getElementById("board");


btnStart.addEventListener("click", function(){

    let livello = selezionaLivello.value; 

    livello=parseInt(livello);

    console.log("il livello scelto è ",livello);

    let celle = disegnaCelle(livello);

    

    generaGriglia(celle);

   
    
});


