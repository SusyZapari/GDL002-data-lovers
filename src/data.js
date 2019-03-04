window.roadEye = {

  filtersYears: (dataInjuries) => {
    const result = dataInjuries.filter(
      injurie => {
        return parseInt(injurie.Year.substring(0, 4)) >= 2010 && parseInt(injurie.Year.substring(0, 4)) < 2016;
      }
    );
    return result;
  },

  newArrBiciYear: (dataFiltered) => {
    let order = 0;
    const arrMapped2 = dataFiltered.map(
      element => {
        return [++order, parseInt(element.Year.substring(0, 4)), element.Total_Injured_Persons_Pedalcyclists];
      }
    );
    return arrMapped2;
  },

  sortYearsOld: (dataOldtoNew) => {
    let result = dataOldtoNew.sort(
      function (a, b) { return a[1] - b[1]; }
    );
    return result;
  },

  sortYearsNew: (dataNewtoOld) => {
    const result2 = dataNewtoOld.sort(
      function (a, b) { return b[1] - a[1]; }
    );
    return result2;
  },

  getPercent: (oldNumber, newNumber) => {
    let decreaseValue = oldNumber - newNumber;

    return Math.floor((decreaseValue / oldNumber) * 100);
  },

  fillTableBici: (table, data) => {
    for (var i = 0; i < data.length; i++) {
      // create a new row
      var newRow = table.insertRow(table.length);
      for (var j = 0; j < data[i].length; j++) {
        // create a new cell
        var cell = newRow.insertCell(j);
        // add value to the cell
        cell.innerHTML = data[i][j];
      }
    }
  }

};