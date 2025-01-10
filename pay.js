var price = localStorage.getItem("price")
var food = localStorage.getItem("food")
if (food == 'falafel'){
    var food_cap = 'Falafel'
}
else if(food == 'pasta_salad'){
    var food_cap = 'Pasta Salad'
}
else{
    alert("Error in make the webpage")
}
document.getElementById("food_title").innerHTML=food_cap;
document.getElementById("title").innerHTML='Little Lemon - Paying for ' + food
document.getElementById("price").innerHTML=price;