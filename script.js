var newRequest = new XMLHttpRequest();
newRequest.open('GET', ' https://galvanize-eats-api.herokuapp.com/menu');
newRequest.onload = function() {
    console.log(newRequest.responseText);
};
newRequest.send();
