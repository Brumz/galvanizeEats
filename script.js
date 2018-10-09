var menu = document.querySelector(".menuList");
var item;
var option;
var q = document.querySelector("#quantity");
var cB = document.querySelector(".cheeseB");
var cP = document.querySelector(".cheeseP");
var hB = document.querySelector(".hamB");
var pP = document.querySelector(".pepP");
var sP = document.querySelector(".suaP");
var items = [];
var num = document.createElement("num");
var addItem = document.querySelector("#addItem");
var eats = document.querySelectorAll("#food");
var foodList = document.querySelector(".grandTotal");
fetch('https:galvanize-eats-api.herokuapp.com/menu')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.menu.length; i++) {
            item = document.createElement("p");
            item.innerHTML = data.menu[i].name + " " + "$" + data.menu[i].price;
            items.push(item);
        }
        cB.appendChild(items[0]);
        cP.appendChild(items[1]);
        hB.appendChild(items[2]);
        pP.appendChild(items[3]);
        sP.appendChild(items[4]);

    })
    addItem.addEventListener("click", function addItem(event){
        for(let i = 0; i < eats.length; i++){
            if (eats[i].children[0].value > 0){

                console.log(eats[i].innerText)
                console.log(eats[i].children)
                console.log(eats[i].children[0].value)
             }  
        }
        
    })
    eats.innerText.appendChild(foodList);


