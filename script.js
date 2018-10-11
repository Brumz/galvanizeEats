window.onload = function gat() {
    var item;
    var cB = document.querySelector(".cheeseB");
    var cP = document.querySelector(".cheeseP");
    var hB = document.querySelector(".hamB");
    var pP = document.querySelector(".pepP");
    var sP = document.querySelector(".suaP");
    var items = [];
    var addItem = document.querySelector("#addItem");
    var eats = document.querySelectorAll("#food");
    var cart = document.querySelector(".cartItems")
    var cat = document.querySelector("#cats2");
    var dog = document.querySelector("#dogs2");
    var pet = document.querySelector("#pets");
    var newArr = [];
    var submitB = document.querySelector("#delivery");
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
            var quantity = eats[i].children[0].value;
            if (quantity > 0) {
                var foodInfo = eats[i].innerText;
                var foodName = foodInfo.split('$')[0].trim();
                var foodPrice = Number(foodInfo.split('$')[1]);
                var final = document.createElement("p");
                final.setAttribute('value', foodPrice * quantity);
                final.setAttribute('class', 'addedFoodItem');
                final.innerText = foodName + " " + "x" + quantity + " " + "$" + foodPrice * quantity;
                cart.appendChild(final);
            }
        }
        var addedFoodItem = document.getElementsByClassName("addedFoodItem");
        for (let i = 0; i < addedFoodItem.length; i++) {
            newArr.push(addedFoodItem[i].getAttribute("value"));
        }
        var itemTotal = 0;
        for (i = 0; i < newArr.length; i++) {
            itemTotal += parseFloat(newArr[i]);
        }
        cat.innerHTML = ((itemTotal).toFixed(2));
        dog.innerHTML = ((itemTotal * .03).toFixed(2));
        pet.innerHTML = "$" + Number((parseFloat(cat.innerHTML) + parseFloat(dog.innerHTML)).toFixed(2));
    })
    submitB.addEventListener("click", function () {
        event.preventDefault()
        var name = document.querySelector("#name")
        var number = document.querySelector("#number")
        var address = document.querySelector("#address")
        var delivery = pet.innerHTML
        var data = {
            name: name,
            number: number,
            address: address,
            delivery: delivery
        }
        var postURL = "https://galvanize-eats-api.herokuapp.com/orders"
        var settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(postURL, settings)
            .then(function (response) {
                return response.text()
            })
            .then(function (response) {
                alert(response + " " + "Your order has been placed")
            })
            .then(function () {
                location.reload()
            })
    })


}

