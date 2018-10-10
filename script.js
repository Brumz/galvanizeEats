window.onload = function gat() {
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
    // var totals = document.querySelector(".Totals")
    var sub = document.querySelector("#Sub");
    var subTax = document.querySelector("#Tax")
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
    addItem.addEventListener("click", function addItem(event) {
        for (let i = 0; i < eats.length; i++) {
            var quantity = eats[i].children[0].value
            if (quantity > 0) {
                var foodInfo = eats[i].innerText
                var foodName = foodInfo.split('$')[0].trim()
                var foodPrice = Number(foodInfo.split('$')[1])
                console.log(foodName, quantity, foodPrice)
                // create element to append to order box (p tag)
               var final = document.createElement("p");
               var tax = document.createElement("p");
                // give the value (innerText) to the element (p tag) with
                    // Sausage Pizza x2 $25.98
                    // food name
                    // quantity
                    // price timed by quantity
                    final.innerText = foodName + " " + "x" + quantity + " " + "$" + foodPrice * quantity;
                    // tax.innerText = foodPrice * quantity * 0.029;
                // select order box
                // append the element (p tag) to the order box
                sub.appendChild(final);
                // subTax.appendChild(tax);


            }
        }

    })
}


