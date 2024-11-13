const pokemonSelect = document.getElementById('pokemon-select');
const getButton = document.getElementById('get-pokemon');
const api = 'https://pokeapi.co/api/v2/pokemon/';
const container=document.querySelector(".container");

getButton.addEventListener('click', () => {
    
    const pokemonSelected = pokemonSelect.value;
    fetch(`${api}${pokemonSelected}`)
    .then((response) => {
        if(!response.ok) {
            throw new Error ('Error de solicitud')
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        
        const div = document.createElement("div");
        div.classList.add("info-pokemon");
        
        //Nombre del pokemon
        const pokemonName = data.name;
        const h3 = document.createElement("h3");
        h3.textContent = pokemonName;

        //Imagen del pokemon
        const pokemonImg = data.sprites.other.dream_world.front_default;
        const img = document.createElement("img");
        img.src = pokemonImg
        img.alt = pokemonName;

        //Tipo de pokemon
        const pokemonType = data.types[0].type.name;
        const pType = document.createElement("p");
        pType.textContent = pokemonType;
        pType.classList.add("type-pokemon");
    
        //Peso del pokemon
        const pokemonWeight = data.weight;
        const pWeight = document.createElement("p");
        pWeight.textContent = `${pokemonWeight/10}kg`;
        pWeight.classList.add("peso-pokemon");

        //Altura del pokemon
        const pokemonHeight = data.height;
        const pHeight = document.createElement("p");
        pHeight.textContent = `${pokemonHeight}cm`;
        pHeight.classList.add("altura-pokemon");

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(pType);
        div.appendChild(pWeight);
        div.appendChild(pHeight);

        container.appendChild(div);
        
    })
    .catch((error) => {
        container.innerText = 'Error al cargar pokemon';
    })
})

//No logramos hacer que se borrara la info del pokemon antes de lanzar la info del siguiente pokemon. 