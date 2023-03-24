//O(2N)
function sum(number){
  return number.toString().split('').reduce((acc, item) => acc += +item, 0);
} 
console.time('TIME')
console.log(sum(BigInt(2**1000)));
console.timeEnd('TIME');
