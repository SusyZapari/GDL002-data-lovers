// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*const example = () => {
  return 'example';
};*/
//Esta función es útil para delimitar los años del 2010 a 2015 únicamente//

const filterObj = {
  filtersYears:  (dataInjuries) => { 
    const result = dataInjuries.filter(
      injurie => {
        return parseInt(injurie.Year.substring(0, 4)) >= 2010 && parseInt(injurie.Year.substring(0, 4)) < 2016;
      }
    );
  return result;
  }
};
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

