var food = localStorage.getItem("food")
if (food == 'falafel'){
    document.getElementById("image").src='falafel.jpeg'
    document.getElementById("food_title").innerHTML='Falafel'
    document.getElementById("title").innerHTML='Little Lemon - Falafel'
    document.getElementById("inger").innerHTML="Chickpea, Herbs, Spices.";
    document.getElementById("price").innerHTML="$10.00";
}
else if(food == 'pasta_salad'){
    document.getElementById("food_title").innerHTML='Pasta Salad'
    document.getElementById("image").src='pasta_salad.jpeg'
    document.getElementById("inger").innerHTML="Mozzarella, Vegetables, Lettuce.";
    document.getElementById("title").innerHTML='Little Lemon - Pasta Salad'
    document.getElementById("price").innerHTML="$15.00";
}
// else if(food == 'cake'){
//     document.getElementById("title").innerHTML='Little Lemon - Cake'
//     document.getElementsById("inger").innerHTML+="<li><i>EggsFlourButterVanillaWaterOilSugar</i></li>";                     
//     document.getElementById("food_title").innerHTML='Cake'
//     document.getElementById("image").src='cake.jpeg'
// }
else{
    alert("Error in make the webpage")
}
function pay(price){
    localStorage.setItem("price",price)
    localStorage.setItem("food",food)
    window.location.href="pay.html"
}