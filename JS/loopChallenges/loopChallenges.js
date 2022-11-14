function printOdd(){
  for(i = 0; i < 21; i++){
    if(i % 2 !== 0){
      console.log(i);
    }
  }
}

function multiplesOf3(){
  var initial = 100;
  while (initial > 0){
    if(initial % 3 === 0){
      console.log(initial);
    }
    initial--;
  }
}

function printSequence(){
  var initial = 4;
  while(initial > -4){
    console.log(initial);
    initial = initial - 1.5;
  }
}

function sigma(){
  let sum = 0;
  for(let i = 0; i < 101; i++){
    sum += i;
  }
  console.log(sum);
}

function factorial(){
  let product = 1;
  for (let i = 1; i < 13; i++){
    product *= i;
  }
  console.log(product);
}

console.log(factorial());
console.log(sigma());
console.log(printOdd());
console.log(multiplesOf3());
console.log(printSequence());