/**
*
* Riceve il livello di difficoltà e restituisce il numero di celle da disegnare
*
* @param {number}  livello
* @return {number}
*
*/

function disegnaCelle(livello) {

    let elementi;
    
if( livello===1) {elementi=100;}
else if (livello===2) {elementi=81;}
else if (livello===3) {elementi=49;}


    return elementi;


}


/**
*
* Riceve il numero di celle e in funzione di questo divide il 
*quadrato della board per il numero di celle
*
* @param {number}  
* 
*
*/

function generaGriglia(NumeroCelle) {
    //rimuove tutto dal div board( azzera la pagina)
    board.innerHTML = "";

    const CelleXRiga = Math.sqrt(NumeroCelle);
    const DimensioneCelle = 100 / CelleXRiga;


    for (let i = 0; i < NumeroCelle; i++) {
        // genero una singola cella
        //const cell = `<div class='box' style='width: ${cellSize}%; height: ${cellSize}%'></div>`;
        const cella = document.createElement("div");
        cella.classList.add("boxCell");
        cella.style.width = DimensioneCelle + "%";
        cella.style.height = DimensioneCelle + "%";
        cella.addEventListener("click", cliccaSuCella);

        // Aggiungo la cella al boardContainer
        //boardContainer.innerHTML += cell;
        board.append(cella);
    }

}

// la funzione che permette di cambiare il colore aggiungendo o togliendo la classe click
// vedi css

function cliccaSuCella() {

    this.classList.toggle("click");
}