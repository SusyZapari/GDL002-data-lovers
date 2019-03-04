
//Print Bicycle Data in Table
const newArrFiltered = window.roadEye.filtersYears(INJURIES);
console.log(newArrFiltered);
let newArr = window.roadEye.newArrBiciYear(newArrFiltered);
console.log(newArr);
let tableHtmlBici = document.querySelector('#tableBici tbody');
window.roadEye.fillTableBici(tableHtmlBici, newArr);

document.getElementById('tabCrypt').addEventListener('click',selectTab);

/*[[52000, 2010, 1],[48000, 2011, 2],[49000, 2012, 3],[48000, 2013, 4],[50000, 2014, 5],[45000, 2015, 6]]*/

/*document.getElementById("showData").addEventListener("click", displayInjuryData = () => {
    document.getElementById("fixed-tab-2").innerHTML =  mappedData;
    event.preventDefault();
}, false);
*/



/*let mappedInjures = roadEye.mappedInjured(newArrFiltered);
console.table(mappedInjures);
let mappedYears = roadEye.mappedYear(newArrFiltered);
console.table(mappedYears);*/

/*let displayInjurieData = () => {
    let injurieListElement = document.querySelector("#showData2");
    const injurieElement = document.createElement ("li");
    injurieElement.text = "2015";
    injurieListElement.appendChild(injurieElement);
console.log (injurieElement.text);
}
console.log (displayInjurieData());
document.getElementById("showData2").addEventListener ("click", displayInjuryData);

//Display data
/*let displayInjuryData2 = (INJURIES) => {
var para = document.createElement("div");
var node = document.createTextNode("Hello");
para.appendChild(node);
var element = document.getElementById("fixed-tab-1");
element.appendChild(para);
};*/
/*let displayInjuryData = () => {
    let injurieListElement = document.querySelector("#showData");
    injurieListElement.onclick = () => {
        document.getElementById("fixed-tab-1").innerHTML = filterObj.filtersYears(INJURIES);
      };
};*/
/*document.getElementById("showData").addEventListener("click", displayInjuryData);*/
//Event Listeners
/*document.getElementById("showData").addEventListener("click", displayInjuryData = () => {
    document.getElementById("fixed-tab-1").innerHTML = filterObj.filtersYears(INJURIES)
    event.preventDefault();
    console.log(displayInjuryData);
}, false);*/

