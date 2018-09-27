var newRequest = new XMLHttpRequest();
newRequest.open('GET', ' https://galvanize-eats-api.herokuapp.com/menu');
newRequest.onload = function() {
    var menuData = JSON.parse(newRequest.responseText);
    renderHTML(menuData);
};
newRequest.send();

function renderHTML(data) {

}
