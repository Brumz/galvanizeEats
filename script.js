var menu = document.querySelector(".menuList")
var option;
var q = document.querySelector("#quantity")
fetch('https:galvanize-eats-api.herokuapp.com/menu')
   .then(function (response) {
       return response.json();
   })
   .then(function(data) {
       for ( let i = 0; i < data.menu.length; i++) {
         option = document.createElement("p");
         option.innerHTML = data.menu[i].name + "  " + "$" + +data.menu[i].price;
         menu.appendChild(option);
       }

   })
