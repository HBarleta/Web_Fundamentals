  var options = {
  'toppings' : ['sausage', 'pepperoni', 'pineapple', 'jalapenos'],
  'cheeses' : ['mozeralla', 'goat', 'vegan', 'jack'],
  'crust' : ['thin', 'thick', 'stuffed'],
  'style' : ['handtossed', 'deepdish', ],
  'sauces' : ['white', 'red', 'alfredo', 'none'],
  };

function randomPizzaMaker(pizza){
  let randomPizza = {};
    for (let key in pizza){
      randomPizza[key] = pizza[key][Math.floor(Math.random()*pizza[key].length)];
    }
    // randomPizza.cheeses = pizza.cheeses[Math.floor(Math.random()*pizza.cheeses.length)];
    // randomPizza.toppings = pizza.toppings[Math.floor(Math.random()*pizza.toppings.length)];
    // randomPizza.crust = pizza.crust[Math.floor(Math.random()*pizza.crust.length)];
    // randomPizza.style = pizza.style[Math.floor(Math.random()*pizza.style.length)];
    // randomPizza.sauces = pizza.sauces[Math.floor(Math.random()*pizza.sauces.length)];
    return randomPizza;
}

console.log(randomPizzaMaker(options));