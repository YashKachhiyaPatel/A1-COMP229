"use strict";
(function () {
    function Start() {
        console.log("App Started");
    }
    window.addEventListener("load", Start);
})();

const currentLocation = location.href;
const menuItem = document.querySelectorAll('li');
const menuLength = menuItem.length;

for(let i=0;i<menuLength;i++){
    if(menuItem.href === currentLocation){
        menuItem[i].className = "active";
    }
}
//# sourceMappingURL=app.js.map