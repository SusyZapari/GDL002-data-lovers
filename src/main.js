
//Print Bicycle Data in Table
/*const newArrFiltered = window.roadEye.filtersYears(INJURIES);
console.log(newArrFiltered);
let newArr = window.roadEye.newArrBiciYear(newArrFiltered);
console.log(newArr);

const sortOld = window.roadEye.sortYears(newArr);
console.log(sortOld);

const sortNew = window.roadEye.other(newArr);
console.log(sortNew);


let tableHtmlBici = document.querySelector('#tableBici tbody');
window.roadEye.fillTableBici(tableHtmlBici, newArr);*/

/*
let selectedBike = () => {
    const newArrFiltered = window.roadEye.filtersYears(INJURIES);
    let newArr = window.roadEye.newArrBiciYear(newArrFiltered);
    newArr = window.roadEye.sortYearsOld(newArr);
    console.log(newArr);

//Loop for tabs, the user can choose between them.	
	/*button1.onclick = function() {
	document.getElementById("tab1").className = "visible";
    document.getElementById("tab2").className = "invisible";
    button1.className = "activated";
    button2.className = "deactivated";
  };
	button2.onclick = function() {
    document.getElementById("tab1").className = "invisible";
    document.getElementById("tab2").className = "visible";
    button1.className = "deactivated";
    button2.className = "activated";
  };*/
//};
const newArrFiltered = window.roadEye.filtersYears(INJURIES);
let newArr = window.roadEye.newArrBiciYear(newArrFiltered);
newArr = window.roadEye.sortYearsOld(newArr);
let tableHtmlBici = document.querySelector('#tableBici tbody');
var mine = window.roadEye.fillTableBici(tableHtmlBici, newArr);

let oldnew = () => {
    const buttonOld = document.querySelector('#option-one-old');

    buttonOld.onclick = function () {

        const newArrFiltered = window.roadEye.filtersYears(INJURIES);
        let newArr = window.roadEye.newArrBiciYear(newArrFiltered);
        newArr = window.roadEye.sortYearsOld(newArr);
        let tableHtmlBici = document.querySelector('#tableBici tbody');
        tableHtmlBici.innerHTML = "";
        window.roadEye.fillTableBici(tableHtmlBici, newArr);
    };
};

let newOld = () => {
    const buttonNew = document.querySelector('#option-two-new');
    buttonNew.onclick = function () {
        const newArrFiltered = window.roadEye.filtersYears(INJURIES);
        let newArr = window.roadEye.newArrBiciYear(newArrFiltered);
        newArr = window.roadEye.sortYearsNew(newArr);
        let tableHtmlBici = document.querySelector('#tableBici tbody');
        tableHtmlBici.innerHTML = "";
        window.roadEye.fillTableBici(tableHtmlBici, newArr);
    };
};

document.getElementById('option-one-old').addEventListener('click', oldnew)
document.getElementById('option-two-new').addEventListener('click', newOld)

/*
//Event Listeners
document.getElementById('option-one-old').addEventListener('click', selectedBike = () => {
    newArr = window.roadEye.sortYearsOld(newArr);
    let tableHtmlBici = document.querySelector('#tableBici tbody');
    window.roadEye.fillTableBici(tableHtmlBici, newArr);
    return selectedBike;

});
document.getElementById('option-two-new').addEventListener('click', selectedBike2 = () => {
    newArr = window.roadEye.sortYearsNew(newArr);
    let tableHtmlBici = document.querySelector('#tableBici tbody');
    window.roadEye.fillTableBici(tableHtmlBici, newArr);
    return selectedBike2;
})









//Event Listeners      event.preventDefault();
/*document.getElementById('button-choose-bike').addEventListener('click',selectedBike = () => {
    const button1 = document.querySelector('#button-choose-bike');

    console.log(newArr);

})*/






/*
document.getElementById('button-choose-bike').addEventListener('click',selectedBike = () => {
    const button1 = document.querySelector('#button-choose-bike');
    const newArrFiltered = window.roadEye.filtersYears(INJURIES);
    let newArr = window.roadEye.newArrBiciYear(newArrFiltered);
    newArr = window.roadEye.sortYearsOld(newArr);
    console.log(newArr);

    let tableHtmlBici = document.querySelector('#tableBici tbody');
window.roadEye.fillTableBici(tableHtmlBici, newArr);
});*/


//Event Listeners
/*document.getElementById('tabCrypt').addEventListener('click',selectTab);
document.getElementById('tabUncrypt').addEventListener('click',selectTab);*/



/*const sort = window.roadEye.sortYearsOldtoNew(newArr);
console.log(sort);
const sort2 = window.roadEye.sortYearsNewtoOld(newArr);
console.log(sort2);*/


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
//    console.log(displayInjuryData);
//}, false);
*/

