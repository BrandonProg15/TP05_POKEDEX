const inputPokemon = document.getElementById('inputPokemon');
const btnBuscar = document.getElementById('submit');
const resultado = document.getElementById('resultado');

btnBuscar.addEventListener("click", () => {
    obtenerPokemon(inputPokemon.value);
});

async function obtenerPokemon(nombre) {

    if (!nombre) {
        resultado.innerHTML = `<p>Escribí un Pokémon</p>`;
        return;
    }

    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`
        );

        const pokemon = response.data;

        resultado.innerHTML = `
        <div>
            <h2>${pokemon.name}</h2>
            <p>ID: ${pokemon.id}</p>
            <p> peso: ${pokemon.weight}</p>  
            <p>altura: ${pokemon.height}</p>   
            <p>Tipo: ${pokemon.types.map(t => t.type.name).join(', ')}</p>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        </div>
            `;

    } catch (error) {

        resultado.innerHTML = `<p>Pokémon no encontrado</p>`;
    }
}