var AnimationStep = 5; //pixels
var AnimationInterval = 3; //milliseconds

DomReady.ready(function() {
    initializeMenu();
});

function initializeMenu(){
    var oDiv = document.getElementById("menu");
    var targetHeight = oDiv.clientHeight;
    oDiv.className = "menuClosed";
    var button = document.getElementById("toggle");
    button.onclick = function(){
        toggleMenu(targetHeight, button);
    };
}

function toggleMenu(targetHeight, button){
    var oDiv = document.getElementById("menu");
    if(oDiv.clientHeight !== targetHeight){
        oDiv.className = "menuOpen";
        menuOpen(oDiv, targetHeight, button);
    }else{
        menuClose(oDiv, button);
    }
}

function menuOpen(element, targetHeight, button){
    button.disabled = true; // disable clicking again until animation is complete
    var currentHeight = element.clientHeight;
    if (currentHeight >= targetHeight){
        button.disabled = false;
        oDiv.style.overflow = "visible";
        return true;
    };
    element.style.height = (currentHeight + AnimationStep) + "px";
    window.setTimeout(function() {
        menuOpen(element, targetHeight, button);
    }, AnimationInterval);
    return false;
}

function menuClose(element, button){
    button.disabled = true;
    var currentHeight = element.clientHeight;
    if (currentHeight <= 0){
        element.className = "menuClosed";
        button.disabled = false;
        return true;
    };
    element.style.height = (currentHeight - AnimationStep) + "px";
    window.setTimeout(function() {
        menuClose(element, button);
    }, AnimationInterval);
    return false;
}
