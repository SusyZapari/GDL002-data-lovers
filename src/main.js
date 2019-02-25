function displayInjurieData (){
    let injurieListElement = document.querySelector ("#injuries");
    const injurieElement = document.createElement ("li");
    injurieElement.text = "2015";
    injurieListElement.appendChild (injurieElement);
console.log ("display injurie data");
}
document.getElementById("datosCronologicosTab").addEventListener ("click", displayInjuryData);

//Test
