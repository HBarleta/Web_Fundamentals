
function flatten(arr2d) {
  for(let i = 0; i < arr2d.length; i++){
    for(let x =0; x < arr2d[i].length; x++){
      flat.push(arr2d[i][x]);
    }
  }
}
  
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); 
// we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]