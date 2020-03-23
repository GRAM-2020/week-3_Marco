function el(id){
	return document.getElementById(id);
	}

var arr =	[
				[5,1000,1,55,78,2,6,998],
				[3,43,66,1768],
				[22,5341,-5]
			];



function findMax(arrProp){
let ArrayInnerMax = [];
function sortMax(a,b) {
  return a - b; 
}
// 1,2,6,55,78.....
arrProp.forEach(arr =>{
   let result = arr.sort(sortMax)[arr.length-1]
   ArrayInnerMax = ArrayInnerMax.concat(result);
   // console.log(ArrayInnerMax)
})
const ArrayAllMax = ArrayInnerMax.sort(sortMax)[arr.length-1]

return ArrayAllMax
}; 

console.log(arr)

el('info').innerHTML = findMax(arr);
// el('info').innerHTML += findMaxv2(arr);


//second try

// function findMaxv2(arrProp){
// let ArrayInnerMax = [];
// function sortMax(a,b){
//   return a - b; 
// }
// // 1,2,6,55,78.....

// for( arr of arrProp ){
//    console.log(arr);
// }


// return ArrayInnerMax
// };	





