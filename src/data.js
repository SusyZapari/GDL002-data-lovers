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


//esta función es útil para delimitar los años del 2010 a 2015 únicamente//

function filtersYears () {
  const result = INJURIES.filter(
    injurie => parseInt(injurie.Year.substring(0,4)) >= 2010 && parseInt(injurie.Year.substring(0,4)) < 2016
  );

console.log(result);
}


