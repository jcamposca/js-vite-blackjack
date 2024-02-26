
// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck Es un arreglo de string
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = (deck) => {

    if( !deck || deck.length === 0 ) 
        throw new Error('Deck es obligatorio como un arreglo de String');
    
    const carta = deck.pop();
    return carta;
}