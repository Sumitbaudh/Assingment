

/** ANSWER 1 */
var arrWithZerotoHund=Array.from(Array(100).keys());

//console.debug(arrWithZerotoHund);

var arrOfEvenNumbers=[],i=0;


/** ANSWER  2*/

arrOfEvenNumbers=arrWithZerotoHund.filter(d=>{if(d%2==0)return d;})

//console.debug(arrOfEvenNumbers);

/** ANSWER 3 */

const testSquare=function(number) {
  return new Promise(function(resolve, reject) {
    if (number%2==0  ) {
      resolve(number*number);
    } else {
      reject(Error("Odd Number"));
    }
  });
}
var arrOfSquares=[];
arrOfEvenNumbers.forEach(element => {
   testSquare(element).then(d=>{arrOfSquares.push(d)})
});

setTimeout(function(){
  //console.debug(arrOfSquares);

/** ANSWER 4 */

  var sumOfSquares=  arrOfSquares.reduce((a, b) => a + b)
  //console.debug(sumOfSquares);


},10)

var resultantArray=[],errcount=0;
arrWithZerotoHund.forEach(element=>{
  testSquare(element).then(d=>{resultantArray.push(d)},error=>{errcount++})
})
/** ANSWER 5 */

setTimeout(function(){
  console.debug("Neumber of Errors:",errcount);
  console.debug("Resultant Array:\n",resultantArray)
  console.debug("Resultant Array Length:",resultantArray.length)
})
