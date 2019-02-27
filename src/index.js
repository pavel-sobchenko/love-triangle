/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let array = preferences;
  let countArr = [];
  for(let i = 0; i < array.length; i++){
      let loverOfFirst = array[i];
      let loverOfSecond = array[loverOfFirst-1];
      let loverOfThird = array[loverOfSecond-1];
      if(array[i] == array[loverOfThird-1] && (loverOfFirst != loverOfSecond 
          && loverOfFirst != loverOfThird && loverOfSecond != loverOfThird)){
          let tArr = [loverOfFirst, loverOfSecond, loverOfThird]
          .sort((x,y) => x > y).toString();
          if(!countArr.includes(tArr)){
              countArr.push(tArr);
          }
      }
  }
  return countArr.length;
};
