const selectPokemon = document.getElementById('pokemon-select');
const pokemonSelected = selectPokemon.value;
const getButton = document.getElementById('get-pokemon');
const api = 'https://pokeapi.co/api/v2/pokemon/';

const getInfo = () => {
    fetch(`${api}${pokemonSelected}`)
    .then((response) => {
        if(!response.ok) {
            throw new Error ('Error de solicitud')
        }
       // console.log(response);
        return response.json();
    })
    .then(data => {
        console.log(data);
        const pokemonName = data.name;
        //const pokemonImg = data.sprite
        
    })
}

getButton.addEventListener('click', () => {
    console.log(pokemonSelected);
    getInfo();
})