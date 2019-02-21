// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};
function fillElements (pokemonList, divElement){
  for(let i=0; i<pokemonList.length; i++) {
    let divPokemon = document.createElement("div");
    divPokemon.className = "pokemon";
    divPokemon.innerHTML = "<img src=\"" +pokemonList[i].img + "\">";
    divElement.insertAdjacentElement("beforeend", divPokemon);
  }
  }
  
  function showPokemons(){
  let pokemonList = POKEMON.pokemon;
  let divPokemonList = document.getElementById("listOfPokemons");
  fillElements(pokemonList, divPokemonList);
  }
window.example = example;
