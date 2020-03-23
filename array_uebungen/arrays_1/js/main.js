function el(id){
	return document.getElementById(id);
	}

var arr =[5,1000,1,55,78,2,6,998];


function findMax(arrProp){
// const max = Math.max(...arrProp)
// Here its an array
const maxArray = arrProp.sort(sortMax)

function sortMax(a,b) {
  return a - b;
}

const max = maxArray[maxArray.length-1];

return max
	// Code hier
};

/*
When the sort() function compares two values, it sends the values 
to the compare function, and sorts the values
according to the returned (negative, zero, positive) 
valueIf the result is negative a is sorted before b.
If the result is positive b is sorted before a..
*/
console.log(arr)

el('info').innerHTML = findMax(arr);




	





