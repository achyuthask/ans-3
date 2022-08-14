var k = 0;
 var sum =0;
const squares2 = function (array){
   for(let i = 0; i<=array.length-1; i++){
       k = Math.pow(array[i], 2);
       sum = sum + k;
    }return sum;
 }
console.log(squares2([1, 2, 3]));
