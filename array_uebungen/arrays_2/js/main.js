function el(id){
	return document.getElementById(id);
	}

var arr =[5,1000,1,55,78,2,6,998];

function findMin(arrProp){
// const min = Math.min(...arrProp)
// Here its an array
const minArray = arrProp.sort(sortMin)

function sortMin(a,b) {
  return b - a;
}

const min = minArray[minArray.length - 1];

return min
   // Code hier
};


el('info').innerHTML = findMin(arr);




	





