// Global variables
var crust = document.getElementById('crust');
var sauce = document.getElementById('sauce');
// toppings array
var toppings = [];
var formButton = document.getElementById('btn');
// event listener
formButton.addEventListener('click', function(event){
    event.preventDefault();
    var topping1 = document.getElementById('topping1').value;
    var topping2 = document.getElementById('topping2').value;
    var topping3 = document.getElementById('topping3').value;
    toppings.push(topping1, topping2, topping3)
calculateTotal(toppings);

})

function calculateTotal(toppingArray) {  
    let total = 0;
    let toppingCost = 2.50; 
    let baseCost = 5.50; // cost of crust and sauce

    // order string concatenation
    let orderString = crust.value + " pizza with " + sauce.value;
  
    let toppingString = 'Toppings: ';
  
    // For Loop
    for (var i=0; i < toppingArray.length; i++){
        if (toppingArray[i] !==""){
            total += toppingCost;
            toppingString += toppingArray[i] + " ";
        }
    }

    // total = baseCost + cost of all toppings
    total = total + baseCost;
    // set DOM total += total 
    document.getElementById('total').innerHTML = '$' + total;
    // use DOM: = orderString   
    document.getElementById('pizzaOrder').innerHTML = orderString;
    // use DOM: = toppingString 
    document.getElementById('toppings').innerHTML = toppingString;
}