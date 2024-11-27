import fetchDrinks from "./fetchDrinks_90.js";
import displayDrinks from "./displayDrinks_90.js";
import setDrink from './setDrink_90.js'; 

const presentDrinks = async (url) => {
  const data = await fetchDrinks(url);
  console.log('drinks data', data);
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
  // console.log('presentDrinks');
};

export default presentDrinks;