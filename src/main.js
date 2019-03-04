//How Program Starts by Default in Bicycle Stats
const newArrFiltered = window.roadEye.filtersYears(INJURIES);
let newArr = window.roadEye.newArrBiciYear(newArrFiltered);
newArr = window.roadEye.sortYearsOld(newArr);
let tableHtmlBici = document.querySelector('#tableBici tbody');
window.roadEye.fillTableBici(tableHtmlBici, newArr);

let sortOldNew = () => {
    const buttonOld = document.getElementById('option-one-old');
    buttonOld.onclick = function () {
        event.preventDefault();
        const newArrFiltered = window.roadEye.filtersYears(INJURIES);
        let newArr = window.roadEye.newArrBiciYear(newArrFiltered);
        newArr = window.roadEye.sortYearsOld(newArr);
        let tableHtmlBici = document.querySelector('#tableBici tbody');
        tableHtmlBici.innerHTML = "";
        window.roadEye.fillTableBici(tableHtmlBici, newArr);
    };
};

let sortNewOld = () => {
    const buttonNew = document.getElementById('option-two-new');
    buttonNew.onclick = function () {
        event.preventDefault();
        const newArrFiltered = window.roadEye.filtersYears(INJURIES);
        let newArr = window.roadEye.newArrBiciYear(newArrFiltered);
        newArr = window.roadEye.sortYearsNew(newArr);
        let tableHtmlBici = document.querySelector('#tableBici tbody');
        tableHtmlBici.innerHTML = "";
        window.roadEye.fillTableBici(tableHtmlBici, newArr);
    };
};

document.getElementById('option-one-old').addEventListener('click', sortOldNew);
document.getElementById('option-two-new').addEventListener('click', sortNewOld);


