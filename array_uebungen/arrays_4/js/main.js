function el(id){
	return document.getElementById(id);
	}

var arr =	[
				[5,-1000,1,55,78,2,6,998],
				[3,43,66,1768],
				[22,5341,-5]
			];




function findMin(arr){

// the dirty way
// let arrayFlatten= (total,currentValue) => [...total,...currentValue];
// let flatArr = arr.reduce(arrayFlatten,[]);

// 1. seperate the arrays to D1 arrays
let flatArr = [];
for (let arrInner of arr ){
   for(let arrElements of arrInner){
      // tried [...arrElements], but arrElements is not an array
      flatArr.push(arrElements) 
   }
}
// 2. now sort so that the min is last in arrat

let min = flatArr.sort(sortMin)[flatArr.length-1]

function sortMin(a,b) {
  return b - a;
}

// let minOfFlatArray = flatArr.sort(sortMin)[flatArr.length-1];

return min


};



el('info').innerHTML = findMin(arr);





	





