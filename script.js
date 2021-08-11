function toggleNavStyle() {
    var x = document.getElementById("header--nav");
    var y = document.getElementById("topHeader");
    // Crude way to check that the screen is equal or less than 768
    if (window.screen.width <= 768) {
        // Resolution is 768 or less
        if (x.className === "header-right") {
        x.className += " responsive";
        y.style.position = "absolute";
        } else {
            x.className = "header-right";
            y.style.position  = "relative";
        }
    }
    
}