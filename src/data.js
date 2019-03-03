// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*const example = () => {
  return 'example';
};*/
//Esta función es útil para delimitar los años del 2010 a 2015 únicamente//
window.roadEye = {
  
  filtersYears:  (dataInjuries) => { 
    const result = dataInjuries.filter(
      injurie => {
        return parseInt(injurie.Year.substring(0, 4)) >= 2010 && parseInt(injurie.Year.substring(0, 4)) < 2016;
      }
    );
    return result;
  },
  
  newArrBiciYear: (dataFiltered) => {
    const arrMapped2 = dataFiltered.map(
        element => {
          return [element.Total_Injured_Persons_Pedalcyclists, parseInt(element.Year.substring(0, 4))];
        }
      );
    return arrMapped2;  
  }

};
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

