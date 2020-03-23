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

function findMax2(arr) {
   let max = arr[0][0]
   console.log(max)
   arr.forEach(function(val) {
      val.forEach(function(el){
         if(el > max ){
            max = el
         }
      })
   })
      return max
}


// el('info').innerHTML = findMax(arr);
el('info').innerHTML = findMax2(arr);


//second try




