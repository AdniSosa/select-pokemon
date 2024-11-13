const selectPokemon = document.getElementById('pokemon-select').value;
const getButton = document.getElementById('get-pokemon');
const api = 'https://pokeapi.co/api/v2/pokemon/';
const container=document.querySelector(".container");

const getInfo = (pokemon) => {
    fetch(`${api}${pokemon}`)
    .then((response) => {
        if(!response.ok) {
            throw new Error ('Error de solicitud')
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        /* div.innerHTML=""; */
        const div = document.createElement("div");
        div.classList.add("info-pokemon");
        const pokemonName = data.name;
        const h3 = document.createElement("h3");
            h3.textContent = pokemonName;
        
        const pokemonImg = data.sprites.other.dream_world.front_default;
        const img = document.createElement("img");
        img.src = pokemonImg
        img.alt = pokemonName;

        const pokemonType = data.types[0].type.name;
        const pType = document.createElement("p");
        pType.textContent = 'Type: ' + pokemonType;
    
        const pokemonWeight = data.weight;
        const pWeight = document.createElement("p");
        pWeight.textContent = 'Weight: ' + pokemonWeight;
        /* pWeight.classList.add("peso-pokemon"); */

        const pokemonHeight = data.height;
        const pHeight = document.createElement("p");
        pHeight.textContent ='Height: ' + pokemonHeight;
        /* pHeight.classList.add("altura-pokemon"); */

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(pType);
        div.appendChild(pWeight);
        div.appendChild(pHeight);

        container.appendChild(div);
        
    })
    .catch((error) => {
        container.innerText = 'Error al cargar pokemon';
})}

getButton.addEventListener('click', () => {
    const pokemonSelected = selectPokemon;
    getInfo(pokemonSelected);
})