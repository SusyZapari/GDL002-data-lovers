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
      function (a, b) { return a[1] - b[1] }
    );
    return result;
  },

  sortYearsNew: (dataNewtoOld) => {
    const result2 = dataNewtoOld.sort(
      function (a, b) { return b[1] - a[1] }
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

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*const example = () => {
  return 'example';
};*/
//Esta función es útil para delimitar los años del 2010 a 2015 únicamente//
/*
mappedBici: (dataFiltered) => {
  let newArr =[];
  const arrMapped = dataFiltered.map(
      element => {
        return [[element.Total_Injured_Persons_Pedalcyclists],[parseInt(element.Year.substring(0, 4))]];
      }
    );
  newArr = arrMapped;
  return newArr;
},

mappedBiciSort: (mappedBici) => {

}
*/



/*mappedBici: (dataFiltered) => {
  const arrMapped = dataFiltered.map(
      element => {
        return element.Total_Injured_Persons_Pedalcyclists;
      }
    );
  const yearMapped = dataFiltered.map(
      element => {
        return parseInt(element.Year.substring(0, 4));
      }
    );
    return [yearMapped, arrMapped];

},*/
/*
mappedBiciSort: (mappedBici) => {

}
*/






/*
newArrFiltered.map(element => {
      let xyz = element.Total_Injured_Persons_Pedalcyclists
      ; return xyz; });



let iterador = () => {
  let newt = [];
    for(var i = 0; i < newArrFiltered.length; i++) {
      let newt = newArrFiltered[i].Total_Injured_Persons_Pedalcyclists;
    }
    return newt;
 };
const filterObj = {
  filtersYears:  (dataInjuries) => {
    const result = dataInjuries.filter(
      injurie => {
        return parseInt(injurie.Year.substring(0, 4)) >= 2010 && parseInt(injurie.Year.substring(0, 4)) < 2016;
      }
    );
    const demo = result.map(element => {
      let xyz = element.Total_Injured_Persons_Pedalcyclists
      ; return xyz;
     });
  return demo;
  }
};

const sortObj = {
  sortYears: (data) => {
    console.log(data);
  }
};
console.log(filterObj.filtersYears);
window.sortObj = sortObj;
window.filterObj = filterObj;
/*const filterYears = () => {
  const result = INJURIES.filter(
    injurie => {
      return parseInt(injurie.Year.substring(0, 4)) >= 2010 && parseInt(injurie.Year.substring(0, 4)) < 2016;
    }
  );
return result;
};*/

//Global Object Window
/*window.filterYears = filterYears;*/

