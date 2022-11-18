// function pizzaOven(){
//   let pizza = {}
//   pizza.Style = "Hand Tossed"
//   pizza.Crust = "Stuffed Crust";
//   pizza.Sauce = "Alfredo";
//   pizza.Cheese = "Mozzeralla";
//   pizza.Toppings = ["Pepperoni", "Sausage", "Pineapple"];
  
//   return pizza; 
// }

// console.log(pizzaOven());



function pizzaOptions(){
  var pizza = {

  
  'toppings' : ['sausage', 'pepperoni', 'pineapple', 'jalapenos'],
  'cheeses' : ['mozeralla', 'goat', 'vegan', 'jack'],
  'crust' : ['thin', 'thick', 'stuffed'],
  'style' : ['handtossed', 'deepdish', ],
  'sauces' : ['white', 'red', 'alfredo', 'none'],

  };

  return pizza;
}
var options = pizzaOptions();


function randomPizzaMaker(pizza){
  let randomPizza = {}
    randomPizza.cheeses = pizza.cheeses[Math.floor(Math.random()*pizza.cheeses.length)];
    randomPizza.toppings = pizza.toppings[Math.floor(Math.random()*pizza.toppings.length)];
    randomPizza.crust = pizza.crust[Math.floor(Math.random()*pizza.crust.length)];
    randomPizza.style = pizza.style[Math.floor(Math.random()*pizza.style.length)];
    randomPizza.sauces = pizza.sauces[Math.floor(Math.random()*pizza.sauces.length)];
  return randomPizza;
}

console.log(randomPizzaMaker(options));
console.log(randomPizzaMaker(options));