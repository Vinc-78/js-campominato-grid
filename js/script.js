

const selezionaLivello = document.getElementById("selezione-difficolta");
const btnStart = document.getElementById("start-game");                                                                  
const board = document.getElementById("board");


btnStart.addEventListener("click", function(){
                
    const livello = selezionaLivello.value; 

    //                                

    console.log("il livello scelto è ",livello);

    const celle = numeroDiCelle(livello);

    console.log(celle);

    generaGriglia(celle);

   
    
});


                                                                                                                                             